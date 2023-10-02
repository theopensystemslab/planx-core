import Ajv from "ajv";
import addFormats from "ajv-formats";
import capitalize from "lodash.capitalize";

import { getResultData } from "../../models/result";
import {
  Breadcrumbs,
  EnhancedGISResponse,
  FlowGraph,
  LooseFlowGraph,
  Passport,
  SessionMetadata,
} from "../../types";
import {
  extractFileDescriptionForPassportKey,
  formatProposalDetails,
} from "../bops";
import jsonSchema from "./schema/schema.json";
import {
  ApplicationType,
  DigitalPlanningDataSchema as Payload,
} from "./schema/types";

interface DigitalPlanningArgs {
  sessionId: string;
  passport: Passport;
  breadcrumbs: Breadcrumbs;
  flow: FlowGraph;
  metadata: SessionMetadata;
}

export class DigitalPlanning {
  sessionId: string;
  passport: Passport;
  breadcrumbs: Breadcrumbs;
  flow: FlowGraph;
  metadata: SessionMetadata;
  payload: Payload;

  constructor({
    sessionId,
    passport,
    breadcrumbs,
    flow,
    metadata,
  }: DigitalPlanningArgs) {
    this.sessionId = sessionId;
    this.passport = passport;
    this.breadcrumbs = breadcrumbs;
    this.flow = flow;
    this.metadata = metadata;

    this.payload = this.mapPassportToPayload();
  }

  getPayload(): Payload {
    this.validatePayload();
    return this.payload;
  }

  /**
   * WIP
   */
  mapPassportToPayload(): Payload {
    return {
      data: {
        user: {
          role: this.passport.data?.["user.role"][0],
        },
        applicant:
          this.passport.data?.["user.role"][0] === "applicant"
            ? this.getApplicant()
            : this.getApplicantWithAgent(),
        property: this.getProperty(),
        application: {
          type: this.getApplicationType(),
          fee: this.getApplicationFee(),
          declaration: this.getApplicationDeclaration(),
        },
        proposal: this.getProposal(),
      },
      result: this.getResult(),
      responses: this.getResponses(),
      files: this.getFiles(),
      metadata: {
        service: {
          flowId: this.metadata.flow.id,
          publishedFlowId: this.metadata.flow.publishedFlows[0].id,
          name: capitalize(this.metadata.flow.slug.replaceAll?.("-", " ")),
          owner: this.metadata.flow.team.slug,
          url: `https://www.editor.planx.uk/${this.metadata.flow.team.slug}/${this.metadata.flow.slug}/preview`,
        },
        session: {
          source: "PlanX",
          id: this.sessionId,
          createdAt: this.metadata.createdAt,
          submittedAt: this.metadata.submittedAt,
        },
        schema: {
          url: "https://theopensystemslab.github.io/digital-planning-data-schemas/v0.0.1/schema.json", // @todo populate version based on submittedAt
        },
      },
    };
  }

  validatePayload() {
    const ajv = addFormats(new Ajv());
    const validate = ajv.compile(jsonSchema);
    const isValid = validate(this.payload);

    if (!isValid) {
      throw Error(
        `Invalid DigitalPlanning payload. Errors: ${validate.errors}`,
      );
    }
    return true;
  }

  /**
   * For a Planx passport value, find its' corresponding description in the JSON schema Definition
   */
  private findDescriptionFromValue(definition: string, value: string): string {
    return jsonSchema["definitions"][definition]["anyOf"].filter(
      (types: Record<string, string>) =>
        types.properties["value"].const === value,
    )[0].properties["description"].const;
  }

  private getApplicantOwnership(): Payload["data"]["applicant"]["ownership"] {
    if (this.passport.data?.["applicant.interest"][0] === "owner.sole") {
      return {
        certificate: this.passport.data?.["applicant.ownership.certificate"][0],
      };
    } else {
      return {
        certificate: this.passport.data?.["applicant.ownership.certificate"][0],
        noticeGiven: Boolean(
          this.passport.data?.["applicant.ownership.noticeGiven"],
        ),
        owners: [
          {
            name: this.passport.data?.["applicant.ownership.owner1.name"],
            address: this.passport.data?.["applicant.ownership.owner1.address"],
            noticeDate:
              this.passport.data?.["applicant.ownership.owner1.noticeDate"],
          },
          {
            name: this.passport.data?.["applicant.ownership.owner2.name"],
            address: this.passport.data?.["applicant.ownership.owner2.address"],
            noticeDate:
              this.passport.data?.["applicant.ownership.owner2.noticeDate"],
          },
          {
            name: this.passport.data?.["applicant.ownership.owner3.name"],
            address: this.passport.data?.["applicant.ownership.owner3.address"],
            noticeDate:
              this.passport.data?.["applicant.ownership.owner3.noticeDate"],
          },
          {
            name: this.passport.data?.[
              "applicant.ownership.multipleOwners.name"
            ],
            address:
              this.passport.data?.[
                "applicant.ownership.multipleOwners.address"
              ],
            noticeDate:
              this.passport.data?.[
                "applicant.ownership.multipleOwners.noticeDate"
              ],
          },
        ].filter((owner) => Boolean(owner.name) && Boolean(owner.address)),
      };
    }
  }

  private getApplicant(): Payload["data"]["applicant"] {
    const baseApplicant: Payload["data"]["applicant"] = {
      type: this.passport.data?.["applicant.type"][0],
      contact: {
        name: {
          title: this.passport.data?.["applicant.name.title"],
          first: this.passport.data?.["applicant.name.first"],
          last: this.passport.data?.["applicant.name.last"],
        },
        email:
          this.passport.data?.["applicant.email"] ||
          this.passport.data?.["applicant.agent.email"],
        phone: {
          primary:
            this.passport.data?.["applicant.phone.primary"] ||
            "Not provided by agent",
        },
        company: {
          name: this.passport.data?.["applicant.company.name"],
        },
      },
      address: {
        sameAsSiteAddress: true,
      },
      siteContact: this.getSiteContact(),
    };

    if (this.passport.data?.["application.type"][0].startsWith("pa")) {
      return baseApplicant;
    } else {
      return {
        ...baseApplicant,
        interest: this.passport.data?.["applicant.interest"][0],
        ownership: this.getApplicantOwnership(),
      };
    }
  }

  private getApplicantWithAgent(): Payload["data"]["applicant"] {
    return {
      ...this.getApplicant(),
      agent: {
        contact: {
          name: {
            title: this.passport.data?.["applicant.agent.name.title"],
            first: this.passport.data?.["applicant.agent.name.first"],
            last: this.passport.data?.["applicant.agent.name.last"],
          },
          email: this.passport.data?.["applicant.agent.email"],
          phone: {
            primary: this.passport.data?.["applicant.agent.phone.primary"],
          },
          company: {
            name: this.passport.data?.["applicant.agent.company.name"],
          },
        },
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

  private getSiteContact(): Payload["data"]["applicant"]["siteContact"] {
    if (this.passport.data?.["applicant.siteContact"][0] === "other") {
      return {
        role: "other",
        name: this.passport.data?.["applicant.siteContact.name"][0],
        email: this.passport.data?.["applicant.siteContact.email"],
        phone: this.passport.data?.["applicant.siteContact.telephone"],
      };
    } else {
      return {
        role: this.passport.data?.["applicant.siteContact"][0],
      };
    }
  }

  private getPropertyAddress(): Payload["data"]["property"]["address"] {
    const baseAddress = {
      latitude: this.passport.data?._address?.["latitude"],
      longitude: this.passport.data?._address?.["longitude"],
      x: this.passport.data?._address?.["x"],
      y: this.passport.data?._address?.["y"],
      title: this.passport.data?._address?.["title"],
    };

    if (this.passport.data?._address?.source === "os") {
      return {
        ...baseAddress,
        source: "Ordnance Survey",
        uprn: this.passport.data?._address?.["uprn"],
        usrn: this.passport.data?._address?.["usrn"],
        pao: this.passport.data?._address?.["pao"],
        street: this.passport.data?._address?.["street"],
        town: this.passport.data?._address?.["town"],
        postcode: this.passport.data?._address?.["postcode"],
      };
    } else {
      return {
        ...baseAddress,
        source: "Proposed by applicant",
      };
    }
  }

  private getBoundary(): Payload["data"]["property"]["boundary"] {
    return {
      site: this.passport.data?.["property.boundary.site"],
      area: {
        hectares:
          this.passport.data?.["proposal.siteArea.hectares"] ||
          this.passport.data?.["property.boundary.area.hectares"],
        squareMetres:
          this.passport.data?.["proposal.siteArea"] ||
          this.passport.data?.["property.boundary.area"],
      },
    };
  }

  private getProperty(): Payload["data"]["property"] {
    const baseProperty = {
      address: this.getPropertyAddress(),
      boundary: this.getBoundary(),
      constraints: this.getPlanngingConstraints(),
      localAuthorityDistrict:
        this.passport.data?.["property.localAuthorityDistrict"],
      region: this.passport.data?.["property.region"][0],
      type: {
        value: this.passport.data?._address?.["planx_value"],
        description: this.passport.data?._address?.["planx_description"],
      },
    };

    if (this.passport.data?._address?.["property.region"]?.[0] === "London") {
      return {
        ...baseProperty,
        titleNumber: {
          known: this.passport.data?.["property.titleNumber.known.form"],
          number: this.passport.data?.["property.titleNumber"],
        },
        EPC: {
          known: this.passport.data?.["property.EPC.known.form"],
          number: this.passport.data?.["property.EPC.number"],
        },
      };
    } else {
      return baseProperty;
    }
  }

  private getPlanngingConstraints(): Payload["data"]["property"]["constraints"] {
    const data: any = [];
    this.passport.data?._constraints?.forEach(
      (response: EnhancedGISResponse) => {
        response.constraints &&
          Object.entries(response.constraints).map(([key, constraint]) => {
            if (constraint.value) {
              data.push({
                value: key,
                description:
                  PlanningConstraintsDescriptions[key] ||
                  PlanningConstraintsDescriptions[key.split(".")[0]],
                overlaps: constraint.value,
                entities:
                  constraint.data?.map((entry) =>
                    [entry.name, entry.description].filter(Boolean).join(" - "),
                  ) || [],
              });
            } else {
              data.push({
                value: key,
                description:
                  PlanningConstraintsDescriptions[key] ||
                  PlanningConstraintsDescriptions[key.split(".")[0]],
                overlaps: constraint.value,
              });
            }
          });
      },
    );

    return {
      planning: data,
    };
  }

  private getApplicationType(): Payload["data"]["application"]["type"] {
    return {
      value: this.passport.data?.["application.type"][0],
      description: this.findDescriptionFromValue(
        "ApplicationType",
        this.passport.data?.["application.type"]?.[0],
      ),
    } as ApplicationType;
  }

  private getApplicationFee(): Payload["data"]["application"]["fee"] {
    return {
      calculated: this.passport.data?.["application.fee.calculated"],
      payable: this.passport.data?.["application.fee.payable"],
      exemption: {
        disability: Boolean(
          this.passport.data?.["application.fee.exemption.disability"][0],
        ),
        resubmission: Boolean(
          this.passport.data?.["application.fee.exemption.resubmission"][0],
        ),
      },
      reduction: {
        sports: Boolean(
          this.passport.data?.["application.fee.reduction.sports"]?.[0],
        ),
        parishCouncil: Boolean(
          this.passport.data?.["application.fee.reduction.parishCouncil"]?.[0],
        ),
        alternative: Boolean(
          this.passport.data?.["application.fee.reduction.alternative"]?.[0],
        ),
      },
    };
  }

  private getApplicationDeclaration(): Payload["data"]["application"]["declaration"] {
    return {
      accurate: Boolean(
        this.passport.data?.["application.declaration.accurate"][0],
      ),
      connection: {
        value: this.passport.data?.["application.declaration.connection"][0],
        description:
          this.passport.data?.[
            "application.declaration.connection.description"
          ],
      },
    };
  }

  // @todo support flagsets beyond Planning Permission
  private getResult(): Payload["result"] {
    if (this.passport.data?.["application.type"][0].startsWith("pp")) {
      return [];
    } else {
      const result = getResultData({
        breadcrumbs: this.breadcrumbs as Breadcrumbs,
        flow: this.flow as LooseFlowGraph,
      });
      const { flag } = Object.values(result)[0];

      return [
        {
          value: [flag.category, flag.text].join(" / "),
          description: flag.description,
        },
      ] as Payload["result"];
    }
  }

  private getProposal(): Payload["data"]["proposal"] {
    const baseProposal = {
      projectType: this.passport.data?.["proposal.projectType"].map(
        (project: string) => {
          return {
            value: project,
            description: this.findDescriptionFromValue("ProjectType", project),
          };
        },
      ),
      description:
        this.passport.data?.["proposal.description"] ||
        "@todo not provided in Prior Approval",
      boundary: this.getBoundary(),
      // date: {
      //   start: this.passport.data?.["proposal.start.date"], // @todo don't require for LDC-P & switch to date format
      //   completion: this.passport.data?.["proposal.completion.date"] || this.passport.data?.["proposal.finish.date"],
      // },
    };

    const details = {};

    // if (this.passport.data?.["proposal.extend.area"]) {
    //   details["extend"]["area"]["squareMetres"] = this.passport.data?.["proposal.extend.area"];
    // }

    // if (this.passport.data?.["proposal.new.area"]) {
    //   details["new"]["area"]["metresSquared"] = this.passport.data?.["proposal.new.area"];
    //   details["new"]["count"]["bathrooms"] = this.passport.data?.["proposal.newBathrooms"];
    //   details["new"]["count"]["bedrooms"] = this.passport.data?.["proposal.newBedrooms"];
    //   details["new"]["count"]["dwellings"] = this.passport.data?.["proposal.newDwellings"];
    // }

    if (
      this.passport.data?.["property.region"][0] === "London" &&
      this.passport.data?.["proposal.vehicleParking"]?.length > 0
    ) {
      return {
        ...baseProposal,
        details: {
          vehicleParking: {
            type: this.passport.data?.["proposal.vehicleParking"].map(
              (vehicle: string) => {
                return {
                  value: vehicle,
                  description: this.findDescriptionFromValue(
                    "VehicleParking",
                    vehicle,
                  ),
                };
              },
            ),
          },
        },
      };
    }

    // if (this.passport.data?.["property.region"] === "London" && this.passport.data?.["proposal.vehicleParking"][0] !== "none") {
    //   details["vehicleParking"]["cars"]["count"]["existing"] = this.passport.data?.["proposal.cars.number.existing"];
    //   details["vehicleParking"]["cars"]["count"]["proposed"] = this.passport.data?.["proposal.cars.number.proposed"];

    //   const carTypes = ["club", "disabled", "other", "residents"];
    //   carTypes.forEach((type) => {
    //     details["vehicleParking"]["cars"]["offStreet"][type]["count"]["existing"] = this.passport.data?.[`proposal.cars.offStreet.${type}.number.existing`];
    //     details["vehicleParking"]["cars"]["offStreet"][type]["count"]["proposed"] = this.passport.data?.[`proposal.cars.offStreet.${type}.number.proposed`];
    //     details["vehicleParking"]["cars"]["onStreet"][type]["count"]["existing"] = this.passport.data?.[`proposal.cars.onStreet.${type}.number.existing`];
    //     details["vehicleParking"]["cars"]["onStreet"][type]["count"]["proposed"] = this.passport.data?.[`proposal.cars.onStreet.${type}.number.proposed`];
    //   });

    //   const vehicleKeys = ["vans", "motorcycles", "bicycles", "buses"];
    //   vehicleKeys.forEach((vehicle) => {
    //     details["vehicleParking"][vehicle]["count"]["existing"] = this.passport.data?.[`proposal.${vehicle}.number.existing`];
    //     details["vehicleParking"][vehicle]["count"]["proposed"] = this.passport.data?.[`proposal.${vehicle}.number.proposed`];
    //     details["vehicleParking"][vehicle]["offStreet"]["count"]["existing"] = this.passport.data?.[`proposal.${vehicle}.offStreet.number.existing`];
    //     details["vehicleParking"][vehicle]["offStreet"]["count"]["proposed"] = this.passport.data?.[`proposal.${vehicle}.offStreet.number.proposed`];
    //     details["vehicleParking"][vehicle]["onStreet"]["count"]["existing"] = this.passport.data?.[`proposal.${vehicle}.onStreet.number.existing`];
    //     details["vehicleParking"][vehicle]["onStreet"]["count"]["proposed"] = this.passport.data?.[`proposal.${vehicle}.onStreet.number.proposed`];
    //   });
    // }

    return { ...baseProposal, ...details };
  }

  private getFiles(): Payload["files"] {
    const files: any = [];

    Object.entries(this.passport.data)
      .filter(([, v]: any) => v?.[0]?.url)
      .forEach(([key, arr]) => {
        (arr as any[]).forEach(({ url }) => {
          try {
            // push a new label to an existing file
            if (files.filter((file) => file.name === url).length > 0) {
              files
                .filter((file) => file.name === url)
                .map((file) => {
                  file["type"].push({
                    value: key,
                    description: this.findDescriptionFromValue("FileType", key),
                  });
                });
            } else {
              // add a new file
              files.push({
                name: url,
                type: [
                  {
                    value: key,
                    description: this.findDescriptionFromValue("FileType", key),
                  },
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
      });

    return files;
  }

  private getResponses(): Payload["responses"] {
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

    return responses as Payload["responses"];
  }
}

// @todo encode this in schema, or use `_constraints` metadata (less descriptive names)
const PlanningConstraintsDescriptions = {
  article4: "Article 4 Direction area",
  "article4.caz": "Central Activities Zone (CAZ)",
  designated: "Designated land",
  "designated.AONB": "Area of Outstanding Natural Beauty (AONB)",
  "designated.conservationArea": "Conservation Area",
  "designated.nationalPark": "National Park",
  "designated.nationalPark.broads": "National Park - Broads",
  "designated.SPA": "Special Protection Area (SPA)",
  "designated.WHS": "UNESCO World Heritage Site or buffer zone",
  listed: "Listed Building",
  locallyListed: "Locally Listed Building",
  monument: "Site of a Scheduled Monument",
  "nature.ASNW": "Ancient Semi-Natural Woodland (ASNW)",
  "nature.SAC": "Special Area of Conservation (SAC)",
  "nature.SSSI": "Site of Special Scientific Interest (SSSI)",
  registeredPark: "Historic Park or Garden",
  "road.classified": "Classified Road",
  tpo: "Tree Preservation Order (TPO) or zone",
};
