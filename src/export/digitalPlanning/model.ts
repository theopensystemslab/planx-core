import { default as Ajv } from "ajv/dist/ajv.js";
import { default as addFormats } from "ajv-formats/dist/index.js";
import { Feature } from "geojson";
import { set } from "lodash-es";

import { Passport } from "../../models/index.js";
import { getResultData } from "../../models/result.js";
import {
  Address,
  Breadcrumbs,
  ComponentType,
  DEFAULT_FLAG_CATEGORY,
  EnhancedGISResponse,
  FlowGraph,
  GovUKPayment,
  Node,
  Passport as IPassport,
  SessionMetadata,
  Value,
} from "../../types/index.js";
import { getFeeBreakdown } from "../../utils/index.js";
import {
  extractFileDescriptionForPassportKey,
  formatProposalDetails,
  parsePolicyRefs,
} from "../bops/index.js";
import applicationJsonSchema from "./schemas/application/schema.json" with { type: "json" };
import {
  Application as ApplicationPayload,
  ApplicationType,
  BaseProposal,
  ExistingLondonParking,
  FeeExplanation,
  FeeExplanationNotApplicable,
  File,
  FileType,
  GeoJSON,
  Materials,
  Owners,
  OwnersNoNoticeGiven,
  OwnersNoticeDate,
  OwnersNoticeGiven,
  PlanningDesignation,
  PlanXMetadata,
  ProjectType,
  Property,
  Proposal,
  ProposedLondonParking,
  RequestedFiles,
  SiteContact,
} from "./schemas/application/types.js";
import preApplicationJsonSchema from "./schemas/preApplication/schema.json" with { type: "json" };
import { PreApplication as PreApplicationPayload } from "./schemas/preApplication/types.js";

const PARKING_TYPES = [
  "cars",
  "vans",
  "motorcycles",
  "cycles",
  "buses",
  "disabled",
  "carClub",
  "offStreet.residential",
  "other",
];

// These application types will never use london-data-hub
//   See https://docs.google.com/spreadsheets/d/1FgULPemnwuwysrYGEkReYFXz3n3T7W0nWziU00taZE4/edit?gid=0#gid=0
const applicationTypesWithoutGLASpec = [
  "preApp",
  "advertConsent",
  "amendment.minorMaterial",
  "amendment.nonMaterial",
  "approval.conditions",
  "complianceConfirmation",
  "environmentalImpact.scoping",
  "environmentalImpact.screening",
  "hazardousSubstanceConsent",
  "hedgerowRemovalNotice",
  "landDrainageConsent",
  "ldc.listedBuildingWorks",
  "listed",
  "notifyCompletion",
  "obligation.discharge",
  "obligation.modify",
  "pa.part14.classA",
  "pa.part14.classB",
  "pa.part14.classK",
  "pa.part14.classOA",
  "pa.part3.classV",
  "pa.part7.classM",
  "pp.pip",
  "rightsOfWayOrder",
  "wtt.consent",
  "wtt.notice",
];

interface DigitalPlanningArgs {
  sessionId: string;
  passport: IPassport;
  breadcrumbs: Breadcrumbs;
  govUkPayment?: GovUKPayment;
  flow: FlowGraph;
  metadata: SessionMetadata;
}

export class DigitalPlanning {
  sessionId: string;
  passport: Passport;
  breadcrumbs: Breadcrumbs;
  govUkPayment?: GovUKPayment;
  flow: FlowGraph;
  metadata: SessionMetadata;
  payload: ApplicationPayload | PreApplicationPayload;
  applicationType?: string;

  constructor({
    sessionId,
    passport,
    breadcrumbs,
    govUkPayment,
    flow,
    metadata,
  }: DigitalPlanningArgs) {
    this.sessionId = sessionId;
    this.passport = new Passport(passport);
    this.breadcrumbs = breadcrumbs;
    this.govUkPayment = govUkPayment;
    this.flow = flow;
    this.metadata = metadata;

    // Map passport to payload based on "application.type"
    this.applicationType = this.passport.data?.["application.type"]?.[0];
    this.payload =
      this.applicationType === "preApp"
        ? this.mapPassportToPreApplicationPayload()
        : this.mapPassportToApplicationPayload();
  }

  getPayload(
    skipValidation: boolean = false,
  ): ApplicationPayload | PreApplicationPayload {
    if (skipValidation) {
      return this.payload;
    } else {
      this.validatePayload();
      return this.payload;
    }
  }

  mapPassportToApplicationPayload(): ApplicationPayload {
    return {
      data: {
        user: {
          role: this.passport.data?.["user.role"]?.[0],
        },
        applicant:
          this.passport.data?.["user.role"]?.[0] === "applicant"
            ? this.getApplicant()
            : this.getApplicantWithAgent(),
        property: this.getProperty(),
        application: {
          type: this.getApplicationType(),
          fee: this.getApplicationFee(),
          declaration: this.getApplicationDeclaration(),
          ...(this.passport.data?.["application.preAppAdvice.form"] &&
            this.passport.data?.["application.preAppAdvice.form"][0] ===
              "Yes" && {
              preApp: this.getPreApp(),
            }),
          ...(this.passport.data?.["application.CIL.result"]?.[0] &&
            this.passport.data?.[
              "communityInfrastructureLevy.formOne.rule"
            ]?.[0] !== "required" && {
              CIL: this.getCIL(), // only set `data.application.CIL` if the user is _not_ uploading a form
            }),
        },
        proposal: this.getProposal(),
      },
      preAssessment: this.getResult(),
      responses: this.getResponses(),
      files: this.getFiles(),
      metadata: this.getMetadata(),
    };
  }

  mapPassportToPreApplicationPayload(): PreApplicationPayload {
    return {
      data: {
        user: {
          role: this.passport.data?.["user.role"]?.[0],
        },
        applicant:
          this.passport.data?.["user.role"]?.[0] === "applicant"
            ? this.getApplicant()
            : this.getApplicantWithAgent(),
        property: this.getProperty(),
        application: {
          type: {
            value: "preApp",
            description: "Pre-application",
          },
          fee: {
            payable: this.passport.data?.["application.fee.payable"] as number,
            // Account for self-pay (has passport data) or invite to pay (has govUkPayment only)
            ...((this.passport.data?.["application.fee.reference.govPay"] ||
              this.govUkPayment) && {
              reference: {
                govPay:
                  this.passport.data?.["application.fee.reference.govPay"]?.[
                    "payment_id"
                  ] || this.govUkPayment?.payment_id,
              },
            }),
          },
          declaration: this.getApplicationDeclaration(),
          information: this.getPreAppInformation(),
        },
        proposal: {
          description: this.passport.data?.["proposal.description"] as string,
          ...(this.passport.data?.["proposal.site"] && {
            boundary: this.getProposedBoundary(),
          }),
        },
      },
      responses: this.getResponses(),
      files: this.getFiles(),
      metadata: this.getMetadata() as PlanXMetadata,
    };
  }

  validatePayload() {
    const ajv = addFormats.default(new Ajv.default({ allowUnionTypes: true }));
    const validate =
      this.applicationType === "preApp"
        ? ajv.compile(preApplicationJsonSchema)
        : ajv.compile(applicationJsonSchema);
    const isValid = validate(this.payload);

    if (!isValid) {
      throw Error(
        `Invalid DigitalPlanning ${this.applicationType} payload for session ${
          this.sessionId
        }.Errors: ${JSON.stringify(validate.errors, null, 2)} `,
      );
    }
    return true;
  }

  /**
   * For a Planx passport value, find its' corresponding description in the Application JSON schema Definition
   */
  private findDescriptionFromValue(definition: string, value: string): string {
    return applicationJsonSchema["definitions"][definition]["anyOf"].filter(
      (types: Record<string, string>) =>
        types.properties["value"].const === value,
    )[0]?.properties["description"].const;
  }

  /**
   * For a Planx passport value, find it's corresponding description in the Application JSON schema Definition for UnionTypes
   */
  private findDescriptionFromValueUnionType(
    definition: string,
    value: string,
  ): string {
    return applicationJsonSchema["definitions"][definition]["anyOf"][0][
      "anyOf"
    ].filter(
      (types: Record<string, string>) =>
        types.properties["value"].const === value,
    )[0]?.properties["description"].const;
  }

  /**
   * Cast a string to a boolean
   */
  private stringToBool(value: Value | undefined): boolean {
    if (value && typeof value === "string" && value.toLowerCase() === "true") {
      return true;
    } else {
      return false;
    }
  }

  private getApplicantOwnership(): ApplicationPayload["data"]["applicant"]["ownership"] {
    return {
      interest: this.passport.data?.["applicant.ownership.interest"]?.[0],
      ...(this.passport.data?.["applicant.ownership.interestDescription"] && {
        interestDescription: this.passport.data?.[
          "applicant.ownership.interestDescription"
        ] as string,
      }),
      certificate: this.passport.data?.["applicant.ownership.certificate"]?.[0],
      ...(this.passport.data?.["applicant.ownership.noticeGiven"]?.[0] && {
        noticeGiven: this.stringToBool(
          this.passport.data?.["applicant.ownership.noticeGiven"]?.[0],
        ),
      }),
      ...(this.passport.data?.["applicant.ownership.noticePublished"]?.[0] && {
        noticePublished: {
          status: this.stringToBool(
            this.passport.data?.["applicant.ownership.noticePublished"]?.[0],
          ),
          date: this.passport.data?.[
            "applicant.ownership.noticePublished.date"
          ],
          newspaperName:
            this.passport.data?.[
              "applicant.ownership.noticePublished.newspaperName"
            ],
        },
      }),
      ...(this.passport.data?.[
        "property.ownership.agriculturalTenants"
      ]?.[0] && {
        agriculturalTenants: this.stringToBool(
          this.passport.data?.["property.ownership.agriculturalTenants"]?.[0],
        ),
      }),
      ownersKnown: this.passport.data?.["applicant.ownership.ownerKnown"]?.[0],
      owners: this.getOwners(),
      ...(this.stringToBool(
        this.passport.data?.[
          "applicant.ownership.certificate.declaration.accurate"
        ]?.[0],
      ) && {
        declaration: {
          accurate: this.stringToBool(
            this.passport.data?.[
              "applicant.ownership.certificate.declaration.accurate"
            ]?.[0],
          ),
        },
      }),
    } as ApplicationPayload["data"]["applicant"]["ownership"];
  }

  private getOwners(): Owners[] {
    const applicantInterest = this.passport.data?.[
      "applicant.ownership.interest"
    ]?.[0] as string;
    const ownersListItems = this.passport.data?.[
      "property.ownership.owner"
    ] as unknown as Array<Owners>; // same passport field used for both/either List schemas

    // LDC "sole owners" don't report other owners
    if (
      this.applicationType?.startsWith("ldc") &&
      applicantInterest === "owner"
    ) {
      return [];
    }

    // LDC "lessees" and "occupiers" bypass List component with single owner inputs (notably no "interest")
    if (
      this.applicationType?.startsWith("ldc") &&
      ["lessee", "occupier"].includes(applicantInterest)
    ) {
      return [
        {
          name:
            this.passport.data?.["property.ownership.owner.name"] ||
            this.passport.data?.["property.ownership.ownerOne.name"],
          address:
            (this.passport.data?.[
              "property.ownership.owner.address"
            ] as Address) ||
            (this.passport.data?.[
              "property.ownership.ownerOne.address"
            ] as Address),
          interest: "",
          noticeGiven: this.stringToBool(
            this.passport.data?.["property.ownership.owner.noticeGiven"],
          ),
          ...(this.stringToBool(
            this.passport.data?.["property.ownership.owner.noticeGiven"],
          ) === false && {
            noNoticeReason:
              this.passport.data?.["property.ownership.owner.noNoticeReason"] ||
              this.passport.data?.[
                "property.ownership.ownerOne.noNoticeReason"
              ] ||
              "",
          }),
        } as OwnersNoticeGiven,
      ];
    }

    // LDC "others" use "InterestInLand" List schema
    if (
      this.applicationType?.startsWith("ldc") &&
      applicantInterest === "other"
    ) {
      return ownersListItems?.map(
        (o) =>
          ({
            name: o?.["name"],
            address: o?.["address"] as Address,
            interest: o?.["interest"],
            noticeGiven: this.stringToBool(o?.["noticeGiven"]),
            ...(this.stringToBool(o?.["noticeGiven"]) === false && {
              noNoticeReason: o?.["noNoticeReason"],
            }),
          }) as OwnersNoticeGiven | OwnersNoNoticeGiven,
      );
    }

    // PP & Listed use "OwnershipCertificateOwners" List schema
    if (
      (this.applicationType?.startsWith("pp") ||
        this.applicationType?.startsWith("listed")) &&
      ownersListItems?.length > 0
    ) {
      return ownersListItems as Array<OwnersNoticeDate>;
    }

    return [];
  }

  private getApplicantAddress =
    (): ApplicationPayload["data"]["applicant"]["address"] => {
      const isSameSiteAddress =
        this.stringToBool(this.passport.data?.["applicant.resident"]?.[0]) ||
        // Legacy variable
        (this.passport.data?.["applicant.sameAddress.form"]?.[0] as string) ===
          "Yes";

      if (isSameSiteAddress) return { sameAsSiteAddress: true };

      return {
        sameAsSiteAddress: false,
        line1: this.passport.data?.["applicant.address"]?.["line1"],
        line2: this.passport.data?.["applicant.address"]?.["line2"],
        town: this.passport.data?.["applicant.address"]?.["town"],
        county: this.passport.data?.["applicant.address"]?.["county"],
        postcode: this.passport.data?.["applicant.address"]?.["postcode"],
        country: this.passport.data?.["applicant.address"]?.["country"],
      };
    };

  private getApplicant(): ApplicationPayload["data"]["applicant"] {
    const baseApplicant: ApplicationPayload["data"]["applicant"] = {
      type: this.passport.data?.["applicant.type"]?.[0],
      name: {
        title: this.passport.data?.["applicant.name.title"] as string,
        first: this.passport.data?.["applicant.name.first"] as string,
        last: this.passport.data?.["applicant.name.last"] as string,
      },
      email:
        (this.passport.data?.["applicant.email"] as string) ||
        (this.passport.data?.["applicant.agent.email"] as string),
      phone: {
        primary:
          (this.passport.data?.["applicant.phone.primary"] as string) ||
          "Not provided by agent",
      },
      ...(this.passport.data?.["applicant.company.name"] && {
        company: {
          name: this.passport.data?.["applicant.company.name"] as string,
        },
      }),
      address: this.getApplicantAddress(),
      siteContact: this.getSiteContact(),
    };

    // PreApps and Prior Approval application types don't collect additional ownership info
    //   @todo translate this to schema type rather than mapping condition
    if (
      this.applicationType === "preApp" ||
      this.applicationType?.startsWith("pa")
    ) {
      return baseApplicant;
    } else {
      return {
        ...baseApplicant,
        ownership: this.getApplicantOwnership(),
      };
    }
  }

  private getApplicantWithAgent(): ApplicationPayload["data"]["applicant"] {
    return {
      ...this.getApplicant(),
      agent: {
        name: {
          title: this.passport.data?.["applicant.agent.name.title"] as string,
          first: this.passport.data?.["applicant.agent.name.first"] as string,
          last: this.passport.data?.["applicant.agent.name.last"] as string,
        },
        email: this.passport.data?.["applicant.agent.email"] as string,
        phone: {
          primary: this.passport.data?.[
            "applicant.agent.phone.primary"
          ] as string,
        },
        ...(this.passport.data?.["applicant.agent.company.name"] && {
          company: {
            name: this.passport.data?.[
              "applicant.agent.company.name"
            ] as string,
          },
        }),
        address: {
          line1: this.passport.data?.["applicant.agent.address"]?.["line1"],
          line2: this.passport.data?.["applicant.agent.address"]?.["line2"],
          town: this.passport.data?.["applicant.agent.address"]?.["town"],
          county: this.passport.data?.["applicant.agent.address"]?.["county"],
          postcode:
            this.passport.data?.["applicant.agent.address"]?.["postcode"],
          country: this.passport.data?.["applicant.agent.address"]?.["country"],
        },
      },
    };
  }

  private getSiteContact(): ApplicationPayload["data"]["applicant"]["siteContact"] {
    // `.role` is used in latest content, but fallback to old value to account for unpublished changes
    const siteContactRole =
      this.passport.data?.["applicant.siteContact.role"]?.[0] ||
      this.passport.data?.["applicant.siteContact"]?.[0];
    if (siteContactRole === "other") {
      return {
        role: "other",
        name:
          this.passport.data?.["applicant.siteContact.name.first"] +
          " " +
          this.passport.data?.["applicant.siteContact.name.last"],
        email: this.passport.data?.["applicant.siteContact.email"] as string,
        phone: this.passport.data?.[
          "applicant.siteContact.phone.primary"
        ] as string,
      };
    } else {
      return {
        role: siteContactRole satisfies SiteContact["role"],
      };
    }
  }

  private getPropertyAddress(): ApplicationPayload["data"]["property"]["address"] {
    const address = this.passport.data?._address;
    const baseAddress = {
      latitude: address?.["latitude"],
      longitude: address?.["longitude"],
      x: address?.["x"],
      y: address?.["y"],
      title: address?.["title"],
    };

    if (address?.["source"] === "os") {
      return {
        ...baseAddress,
        source: "Ordnance Survey",
        uprn: address?.["uprn"],
        usrn: address?.["usrn"],
        pao: address?.["pao"],
        paoEnd: address?.["paoEnd"],
        sao: address?.["sao"],
        saoEnd: address?.["saoEnd"],
        street: address?.["street"],
        town: address?.["town"],
        postcode: address?.["postcode"],
        singleLine: address?.["single_line_address"],
      };
    } else {
      return {
        ...baseAddress,
        source: "Proposed by applicant",
      } as ApplicationPayload["data"]["property"]["address"];
    }
  }

  private getPropertyBoundary(): ApplicationPayload["data"]["property"]["boundary"] {
    return {
      site: this.passport.data?.["property.boundary"] as unknown as GeoJSON,
      area: {
        hectares: this.passport.data?.["property.boundary.area.hectares"],
        squareMetres: this.passport.data?.["property.boundary.area"],
      },
    } as ApplicationPayload["data"]["property"]["boundary"];
  }

  private getProposedBoundary(): ApplicationPayload["data"]["proposal"]["boundary"] {
    const annotatedBoundary = this.passport.data?.[
      "proposal.site"
    ] as unknown as Feature;
    if (annotatedBoundary && annotatedBoundary.properties)
      annotatedBoundary["properties"]["planx_user_action"] =
        this.passport.data?.["drawBoundary.action"];

    return {
      site: annotatedBoundary as GeoJSON,
      area: {
        hectares: this.passport.data?.["proposal.site.area.hectares"],
        squareMetres: this.passport.data?.["proposal.site.area"],
      },
    } as ApplicationPayload["data"]["proposal"]["boundary"];
  }

  private getProperty(): ApplicationPayload["data"]["property"] {
    const baseProperty = {
      address: this.getPropertyAddress(),
      localAuthorityDistrict:
        this.passport.data?.["property.localAuthorityDistrict"],
      region: this.passport.data?.["property.region"]?.[0],
      type: {
        value: this.passport.data?.["property.type"]?.[0],
        description: this.findDescriptionFromValue(
          "PropertyType",
          this.passport.data?.["property.type"]?.[0],
        ),
      },
      planning: this.getPlanningConstraints(),
      ...(this.passport.data?.["property.boundary"] && {
        boundary: this.getPropertyBoundary(),
      }),
      ...(this.passport.data?.["proposal.materials"] && {
        materials: this.getMaterials(true),
      }),
      ...(this.passport.data?.["proposal.parking"] && {
        parking: this.getExistingParking(),
      }),
    };

    // Pre-Apps and other app types will never use London Data Hub
    if (
      !applicationTypesWithoutGLASpec.includes(
        this.applicationType as string,
      ) &&
      this.passport.data?.["property.region"]?.[0] === "London"
    ) {
      const titleNumberKnown =
        this.passport.data?.["property.titleNumberKnown.form"]?.[0];
      set(baseProperty, "titleNumber.known", titleNumberKnown);
      if (titleNumberKnown === "Yes") {
        set(
          baseProperty,
          "titleNumber.number",
          this.passport.data?.["property.titleNumber"],
        );
      }

      const EPCKnown = this.passport.data?.["property.EPCKnown.form"]?.[0];
      set(baseProperty, "EPC.known", EPCKnown);
      if (EPCKnown?.startsWith("Yes")) {
        set(
          baseProperty,
          "EPC.number",
          this.passport.data?.["property.EPC.number"],
        );
      }
    }

    return baseProperty as Property;
  }

  private getMaterials(existing: boolean): Materials {
    // Output by Planx List `MaterialDetails` schema
    const materialsList = this.passport.data?.["proposal.materials"] as Array<{
      type: string;
      existing: string;
      proposed: string;
    }>;

    const materials = {};
    materialsList.map(
      (i) => (materials[i["type"]] = existing ? i["existing"] : i["proposed"]),
    );

    return materials;
  }

  private getExistingParking(): ExistingLondonParking {
    // Output by Planx List `Parking` & `Parking (GLA)` schemas
    const parkingList = this.passport.data?.["proposal.parking"] as Array<{
      type: string;
      existing: number;
      proposed: number;
    }>;

    const parking = {};
    parkingList.map((i) => (parking[i["type"]] = { count: i["existing"] }));

    return parking;
  }

  private getProposedParking(): ProposedLondonParking {
    // Output by Planx List `Parking` & `Parking (GLA)` schemas
    const parkingList = this.passport.data?.["proposal.parking"] as Array<{
      type: string;
      existing: number;
      proposed: number;
    }>;

    const parking = {};
    parkingList.map(
      (i) =>
        (parking[i["type"]] = {
          count: i["proposed"],
          difference: i["proposed"] - i["existing"],
        }),
    );

    return parking;
  }

  private getPlanningConstraints(): ApplicationPayload["data"]["property"]["planning"] {
    const teamSlug: string = this.metadata.flow.team.slug;
    const constraints = this.passport.data
      ?._constraints as unknown as EnhancedGISResponse[];
    const designations: PlanningDesignation[] = [];

    constraints?.forEach((response: EnhancedGISResponse) => {
      response.constraints &&
        Object.entries(response.constraints)
          .filter(([key, _constraint]) => !key.split(".").includes(teamSlug))
          .map(([key, constraint]) => {
            if (constraint.value) {
              // Intersecting constraints
              designations.push({
                value: key,
                description: this.findDescriptionFromValueUnionType(
                  "PlanningDesignation",
                  key,
                ),
                intersects: constraint.value,
                entities:
                  constraint.data?.map(
                    (entity) =>
                      Boolean(entity) && {
                        name: entity.name,
                        description: entity.description,
                        source:
                          key === "road.classified"
                            ? { text: "Ordnance Survey MasterMap Highways" }
                            : {
                                text: "Planning Data",
                                url: `https://www.planning.data.gov.uk/entity/${entity.entity}`,
                              },
                      },
                  ) || [],
              } as PlanningDesignation);
            } else {
              // Non-intersecting constraints
              designations.push({
                value: key,
                description: this.findDescriptionFromValueUnionType(
                  "PlanningDesignation",
                  key,
                ),
                intersects: constraint.value,
              } as PlanningDesignation);
            }
          });
    });

    return {
      sources: constraints?.map((constraint) => constraint.planxRequest) || [],
      designations: designations,
    };
  }

  private getApplicationType(): ApplicationPayload["data"]["application"]["type"] {
    return {
      value: this.applicationType,
      description: this.findDescriptionFromValue(
        "ApplicationType",
        this.applicationType as string,
      ),
    } as ApplicationType;
  }

  private getApplicationFee(): ApplicationPayload["data"]["application"]["fee"] {
    const hasPayComponent = Object.values(this.flow).find(
      (node: Node) => node?.type === ComponentType.Pay,
    );
    if (!hasPayComponent) {
      return {
        notApplicable: true,
      };
    }

    const feeBreakdown = getFeeBreakdown(this.passport.data);

    const baseFee = {
      calculated: feeBreakdown.amount.calculated,
      payable: feeBreakdown.amount.payable,
      category: {
        one:
          (this.passport.data?.["application.fee.category.one"] as number) || 0,
        two:
          (this.passport.data?.["application.fee.category.two"] as number) || 0,
        three:
          (this.passport.data?.["application.fee.category.three"] as number) ||
          0,
        four:
          (this.passport.data?.["application.fee.category.four"] as number) ||
          0,
        five:
          (this.passport.data?.["application.fee.category.five"] as number) ||
          0,
        sixAndSeven:
          (this.passport.data?.[
            "application.fee.category.sixAndSeven"
          ] as number) || 0,
        eight:
          (this.passport.data?.["application.fee.category.eight"] as number) ||
          0,
        nine:
          (this.passport.data?.["application.fee.category.nine"] as number) ||
          0,
        ten:
          (this.passport.data?.["application.fee.category.ten"] as number) || 0,
        eleven: {
          one:
            (this.passport.data?.[
              "application.fee.category.eleven.one"
            ] as number) || 0,
          two:
            (this.passport.data?.[
              "application.fee.category.eleven.two"
            ] as number) || 0,
        },
        twelve: {
          one:
            (this.passport.data?.[
              "application.fee.category.twelve.one"
            ] as number) || 0,
          two:
            (this.passport.data?.[
              "application.fee.category.twelve.two"
            ] as number) || 0,
        },
        thirteen:
          (this.passport.data?.[
            "application.fee.category.thirteen"
          ] as number) || 0,
        fourteen:
          (this.passport.data?.[
            "application.fee.category.fourteen"
          ] as number) || 0,
      },
      exemption: {
        disability: feeBreakdown.exemptions.includes("disability"),
        resubmission: feeBreakdown.exemptions.includes("resubmission"),
      },
      reduction: {
        sports: feeBreakdown.reductions.includes("sports"),
        parishCouncil: feeBreakdown.reductions.includes("parishCouncil"),
        alternative: feeBreakdown.reductions.includes("alternative"),
      },
    };

    // self-pay applications will set this passport variable
    if (this.passport.data?.["application.fee.reference.govPay"]) {
      set(
        baseFee,
        "reference.govPay",
        this.passport.data?.["application.fee.reference.govPay"]?.[
          "payment_id"
        ],
      );
      // invite-to-pay applications will only have govUkPayment summary
    } else if (this.govUkPayment) {
      set(baseFee, "reference.govPay", this.govUkPayment.payment_id);
    }

    return baseFee;
  }

  private getApplicationDeclaration(): ApplicationPayload["data"]["application"]["declaration"] {
    return {
      accurate: this.stringToBool(
        this.passport.data?.["application.declaration.accurate"]?.[0],
      ),
      connection: {
        value: this.passport.data?.["application.declaration.connection"]?.[0],
        description: this.passport.data?.[
          "application.declaration.connection.description"
        ] as string,
      },
    };
  }

  private getPreApp(): ApplicationPayload["data"]["application"]["preApp"] {
    return {
      reference: this.passport.data?.["application.preAppAdvice.reference"],
      date: this.passport.data?.["application.preApp.date"],
      officer: this.passport.data?.["application.preAppAdvice.officerName"],
      summary: this.passport.data?.["application.preApp.summary"]?.[0],
    } as ApplicationPayload["data"]["application"]["preApp"];
  }

  // @todo getResult() should support flagsets beyond Planning Permission
  private getResult(): ApplicationPayload["preAssessment"] {
    // Planning Permission application types won't have a Planning Permission result right now
    if (
      this.applicationType?.startsWith("pp") ||
      this.applicationType === "listed"
    ) {
      return undefined;
    } else {
      const result = getResultData({
        breadcrumbs: this.breadcrumbs as Breadcrumbs,
        flow: this.flow,
      });
      const flag = result?.[DEFAULT_FLAG_CATEGORY]?.["flag"];
      const title = [flag.category, flag.text].join(" / ");

      return [
        {
          value: title,
          description: this.findDescriptionFromValue("ResultFlag", title), // flag.description may be custom text
        },
      ] as ApplicationPayload["preAssessment"];
    }
  }

  private getProposal(): Proposal {
    // LDC app types specifically ask for `proposal.description` across various separate input fields depending
    const ldcDescriptionFns = [
      this.passport.data?.["proposal.buildingOperations.details"] as string,
      this.passport.data?.["proposal.changeOfUse.details"] as string,
      this.passport.data?.["proposal.existingBreach.details"] as string,
      this.passport.data?.["proposal.existingWorks.details"] as string,
      this.passport.data?.["proposal.existingUse.details"] as string,
    ];
    const proposalDescription = this.applicationType?.startsWith("ldc")
      ? ldcDescriptionFns.filter(Boolean).join("; ")
      : (this.passport.data?.["proposal.description"] as string);

    const baseProposal: BaseProposal = {
      projectType: (
        (this.passport.data?.["proposal.projectType"] as string[]) || []
      ).map((project: string) => {
        return {
          value: project,
          description: this.findDescriptionFromValue("ProjectType", project),
        } as ProjectType;
      }),
      description: proposalDescription || "Not provided",
      date: {
        start: (this.passport.data?.["proposal.started.date"] ||
          this.passport.data?.["proposal.start.date"]) as string,
        completion: (this.passport.data?.["proposal.completed.date"] ||
          this.passport.data?.["proposal.completion.date"]) as string,
      },
      ...(this.passport.data?.["proposal.site"] && {
        boundary: this.getProposedBoundary(),
      }),
      ...(this.passport.data?.["proposal.materials"] && {
        materials: this.getMaterials(false),
      }),
      ...(this.passport.data?.["proposal.parking"] && {
        parking: this.getProposedParking(),
      }),
    };

    if (this.passport.data?.["proposal.extend.area"]) {
      set(
        baseProposal,
        "extend.area.squareMetres",
        this.passport.data?.["proposal.extend.area"],
      );
    }

    if (this.passport.data?.["proposal.new.area"]) {
      set(
        baseProposal,
        "new.area.squareMetres",
        this.passport.data?.["proposal.new.area"],
      );
      set(
        baseProposal,
        "new.count.bathrooms",
        this.passport.data?.["proposal.newBathrooms"],
      );
      set(
        baseProposal,
        "new.count.bedrooms",
        this.passport.data?.["proposal.newBedrooms"],
      );
      set(
        baseProposal,
        "new.count.dwellings",
        this.passport.data?.["proposal.newDwellings"],
      );
    }

    return baseProposal as Proposal;
  }

  private getCIL(): ApplicationPayload["data"]["application"]["CIL"] {
    if (this.passport.data?.["application.CIL.result"]?.[0] === "notLiable") {
      return {
        result: "notLiable",
        ...(this.passport.data?.["application.CIL.declaration.accurate"] && {
          declaration: true,
        }),
        s73Application: this.stringToBool(
          this.passport.data?.["application.CIL.s73Application"]?.[0],
        ),
        existingPermissionPrecedingCIL: this.stringToBool(
          this.passport.data?.[
            "application.CIL.existingPermissionPrecedingCIL"
          ]?.[0],
        ),
        ...(this.passport.data?.[
          "application.CIL.existingPermissionReference"
        ] && {
          existingPermissionReference: this.passport.data?.[
            "application.CIL.existingPermissionReference"
          ] as string,
        }),
        newDwellings: this.stringToBool(
          this.passport.data?.["application.CIL.newDwellings"]?.[0],
        ),
        floorAreaHundredPlus: this.stringToBool(
          this.passport.data?.["application.CIL.floorAreaHundredPlus"]?.[0],
        ),
      };
    } else {
      return {
        result: this.passport.data?.["application.CIL.result"]?.[0],
        claim: {
          annexeOrExtensionExemption: this.stringToBool(
            this.passport.data?.["application.CIL."],
          ),
          selfBuildExemption: this.stringToBool(
            this.passport.data?.[
              "application.CIL.selfBuildExemptionClaim"
            ]?.[0],
          ),
          socialHousingRelief: this.stringToBool(
            this.passport.data?.["application.CIL.socialReliefClaim"]?.[0],
          ),
          charityRelief: this.stringToBool(
            this.passport.data?.["application.CIL.charitableReliefClaim"]?.[0],
          ),
        },
        s73Application: this.stringToBool(
          this.passport.data?.["application.CIL.s73Application"]?.[0],
        ),
        existingPermissionPrecedingCIL: this.stringToBool(
          this.passport.data?.[
            "application.CIL.existingPermissionPrecedingCIL"
          ]?.[0],
        ),
        ...(this.passport.data?.[
          "application.CIL.existingPermissionReference"
        ] && {
          existingPermissionReference: this.passport.data?.[
            "application.CIL.existingPermissionReference"
          ] as string,
        }),
        newDwellings: this.stringToBool(
          this.passport.data?.["application.CIL.newDwellings"]?.[0],
        ),
        floorAreaHundredPlus: this.stringToBool(
          this.passport.data?.["application.CIL.floorAreaHundredPlus"]?.[0],
        ),
        newResidentialDevelopment: this.stringToBool(
          this.passport.data?.[
            "application.CIL.newResidentialDevelopment"
          ]?.[0],
        ),
        newNonResidentialDevelopment: this.stringToBool(
          this.passport.data?.[
            "application.CIL.newNonResidentialDevelopment"
          ]?.[0],
        ),
        proposedTotalArea: {
          existing: {
            squareMetres: this.passport.data?.[
              "application.CIL.proposed.total.area.existing"
            ] as number,
          },
          loss: {
            squareMetres: this.passport.data?.[
              "application.CIL.proposed.total.area.loss"
            ] as number,
          },
          proposed: {
            squareMetres: this.passport.data?.[
              "application.CIL.proposed.total.area.proposed"
            ] as number,
          },
          net: {
            squareMetres: this.passport.data?.[
              "application.CIL.proposed.total.area.net"
            ] as number,
          },
        },
        existingBuildings: {
          count: this.passport.data?.[
            "application.CIL.existingBuildings"
          ] as number,
          ...((this.passport.data?.[
            "application.CIL.existingBuildings"
          ] as number) > 0 && {
            buildings: (
              this.passport.data?.["application.CIL.existing"] as Array<any>
            ).map((e) => ({
              area: {
                loss: { squareMetres: e?.["area.loss"] as number },
                retained: { squareMetres: e?.["area.retained"] as number },
              },
              description: {
                existing: e?.["descriptionExisting"] as string,
                proposed: e?.["descriptionProposed"] as string,
              },
              continuousOccupation: this.stringToBool(e?.continuousOccupation),
              stillInUse: this.stringToBool(e?.stillInUse),
              ...(Boolean(e?.lastOccupation) && {
                lastOccupation: e.lastOccupation as string,
              }),
            })),
          }),
        },
        unoccupiedBuildings: {
          applicable: this.stringToBool(
            this.passport.data?.["application.CIL.unoccupiedBuildings"]?.[0],
          ),
          ...((this.passport.data?.[
            "application.CIL.existingBuildings"
          ] as number) > 0 && { buildings: [] }),
        },
        newMezzanine: {
          applicable: this.stringToBool(
            this.passport.data?.["application.CIL.newMezzanine"]?.[0],
          ),
          ...(this.stringToBool(
            this.passport.data?.["application.CIL.newMezzanine"]?.[0],
          ) && { mezzanines: [] }),
        },
      };
    }
  }

  private getFiles(): ApplicationPayload["files"] {
    const files: File[] = [];

    this.passport.files.forEach(({ url, key }) => {
      try {
        // push a new label to an existing file
        if (files.filter((file) => file.name === url).length > 0) {
          files
            .filter((file) => file.name === url)
            .map((file) => {
              file["type"].push({
                value: key,
                description: this.findDescriptionFromValue("FileType", key),
              } as FileType);
            });
        } else {
          // add a new file
          files.push({
            name: url,
            type: [
              {
                value: key,
                description: this.findDescriptionFromValue("FileType", key),
              } as FileType,
            ],
            description: extractFileDescriptionForPassportKey(
              this.passport.data,
              key,
            ),
          });
        }
      } catch (err) {
        throw new Error(`Error formatting files: ${err}`);
      }
    });

    return files;
  }

  private getResponses(): ApplicationPayload["responses"] {
    const responses = formatProposalDetails({
      flow: this.flow,
      breadcrumbs: this.breadcrumbs,
    }).proposalDetails;

    // reformat underscored field names to camelCase
    responses.forEach((response) => {
      if (response.metadata?.auto_answered) {
        response.metadata["autoAnswered"] = response.metadata.auto_answered;
        delete response.metadata.auto_answered;
      }
      if (response.metadata?.policy_refs) {
        response.metadata["policyRefs"] = response.metadata.policy_refs;
        delete response.metadata.policy_refs;
      }
      if (response.metadata?.section_name) {
        response.metadata["sectionName"] = response.metadata.section_name;
        delete response.metadata.section_name;
      }
    });

    return responses as ApplicationPayload["responses"];
  }

  private getRequestedFiles(): RequestedFiles {
    interface PassportRequestedFiles {
      required: string[];
      recommended: string[];
      optional: string[];
    }

    const passportRequestedFiles = this.passport.any<PassportRequestedFiles>([
      "_requestedFiles",
    ]);

    if (!passportRequestedFiles)
      return { required: [], recommended: [], optional: [] };

    const buildFileTypeFromKey = (key: string) =>
      ({
        value: key,
        description: this.findDescriptionFromValue("FileType", key),
      }) as FileType;

    const { required, recommended, optional } = passportRequestedFiles;
    const requestedFiles = {
      required: required.map(buildFileTypeFromKey),
      recommended: recommended.map(buildFileTypeFromKey),
      optional: optional.map(buildFileTypeFromKey),
    };

    return requestedFiles;
  }

  private getFeeExplanations(): FeeExplanation | FeeExplanationNotApplicable {
    const hasPayComponent = Object.values(this.flow).find(
      (node: Node) => node?.type === ComponentType.Pay,
    );
    if (!hasPayComponent) {
      return {
        notApplicable: true,
      };
    }
    const explanations: FeeExplanation = {
      calculated: [],
      payable: [],
      category: {
        one: [],
        two: [],
        three: [],
        four: [],
        five: [],
        sixAndSeven: [],
        eight: [],
        nine: [],
        ten: [],
        eleven: {
          one: [],
        },
        twelve: {
          one: [],
          two: [],
        },
        thirteen: [],
        fourteen: [],
      },
    };

    const fns = ["application.fee.calculated", "application.fee.payable"];
    const calculateNodes = Object.entries(this.flow)
      .filter(
        ([nodeId, node]: [string, Node]) =>
          node?.type === ComponentType.Calculate &&
          fns.includes(node.data?.fn as string) &&
          Object.keys(this.breadcrumbs).includes(nodeId),
      )
      .map(([_nodeId, node]: [string, Node]) => node);

    if (!calculateNodes) {
      return explanations;
    }

    calculateNodes.forEach((node: Node) => {
      const suffix = (node.data?.fn as string).split(".").pop() as string;
      explanations[suffix].push({
        ...(node.data?.info && { description: node.data.info }),
        ...(node.data?.policyRef && {
          policyRefs: parsePolicyRefs(node.data.policyRef as string),
        }),
      });
    });

    if (
      explanations.calculated.length > 0 &&
      explanations.payable.length === 0
    ) {
      explanations["payable"] = explanations["calculated"];
    }

    return explanations;
  }

  private getMetadata(): ApplicationPayload["metadata"] {
    return {
      id: this.sessionId,
      organisation: this.metadata.flow.team.settings.referenceCode,
      submittedAt: new Date().toISOString(),
      source: "PlanX",
      service: {
        flowId: this.metadata.flow.id,
        url: `https://editor.planx.uk/${this.metadata.flow.team.slug}/${this.metadata.flow.slug}/published`,
        files: this.getRequestedFiles(),
        fee: this.getFeeExplanations(),
      },
      // Any schema will be on same version ("$id") independent of type based on our current publishing process, but we do need to account for correct file name
      schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${applicationJsonSchema["$id"]}/schemas/${this.applicationType === "preApp" ? "preApplication" : "application"}.json`,
    } as PlanXMetadata;
  }

  private getPreAppInformation(): PreApplicationPayload["data"]["application"]["information"] {
    return {
      harmful: {
        applicable: this.stringToBool(
          this.passport.data?.["application.information.harmful"]?.[0],
        ),
        ...(this.passport.data?.[
          "application.information.harmful.description"
        ] && {
          description: this.passport.data?.[
            "application.information.harmful.description"
          ] as string,
        }),
      },
      sensitive: {
        applicable: this.stringToBool(
          this.passport.data?.["application.information.sensitive"]?.[0],
        ),
        ...(this.passport.data?.[
          "application.information.sensitive.reason"
        ] && {
          description: this.passport.data?.[
            "application.information.sensitive.reason"
          ] as string,
        }),
      },
    };
  }
}
