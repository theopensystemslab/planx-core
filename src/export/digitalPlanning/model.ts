import Ajv from "ajv";
import addFormats from "ajv-formats";

import { Passport } from "../../types";
import jsonSchema from "./schema/schema.json";
import {
  ApplicationType,
  DigitalPlanningDataSchema as Payload,
} from "./schema/types";

interface DigitalPlanningArgs {
  sessionId: string;
  passport: Passport;
}

export class DigitalPlanning {
  sessionId: string;
  passport: Passport;
  payload: Payload;

  constructor({ sessionId, passport }: DigitalPlanningArgs) {
    this.sessionId = sessionId;
    this.passport = passport;

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
          declaration: {
            accurate: Boolean(
              this.passport.data?.["application.declaration.accurate"][0],
            ),
            connection:
              this.passport.data?.["application.declaration.connection"][0],
          },
        },
        proposal: {
          projectType: [],
          description:
            this.passport.data?.["proposal.description"] ||
            "Not provided in Prior Approval?",
          boundary: this.getBoundary(),
        },
      },
      result: [],
      metadata: {
        service: {
          publishedFlowId: "b3320abe-f5bc-4185-b61f-40e9e65f07ad",
          name: "Test",
          owner: "Test",
          url: "https://www.planx.uk/",
        },
        session: {
          source: "PlanX",
          id: "b3320abe-f5bc-4185-b61f-40e9e65f07ad", // this.sessionId throws 'must match format UUID' error
          createdAt: "2018-11-13T20:20:39+00:00",
          submittedAt: "2018-11-13T20:20:39+00:00",
        },
      },
      responses: [],
      files: [],
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
   * For a Planx passport field, find its' corresponding description in the JSON schema Definition
   * @param definition The JSON schema Definition name
   * @param value The Planx passport field
   * @returns string
   */
  private findDescriptionFromValue(definition: string, value: string): string {
    return jsonSchema["definitions"][definition]["anyOf"].filter(
      (types) => types.properties.value.const === value,
    )[0].properties.description.const;
  }

  private getApplicantOwnership(): Payload["data"]["applicant"]["ownership"] {
    if (this.passport.data?.["applicant.interest"][0] === "owner.sole") {
      return {
        certificate: this.passport.data?.["applicant.ownership.certificate"][0],
      };
    } else {
      return {
        certificate: this.passport.data?.["applicant.ownership.certificate"][0],
        // @todo move noticeGiven out to this level
        owners: [
          {
            name: this.passport.data?.["applicant.ownership.owner1.name"],
            address: this.passport.data?.["applicant.ownership.owner1.address"],
            noticeGiven: Boolean(
              this.passport.data?.["applicant.ownership.noticeGiven"],
            ),
            noticeDate:
              this.passport.data?.["applicant.ownership.owner1.noticeDate"],
          },
          {
            name: this.passport.data?.["applicant.ownership.owner2.name"],
            address: this.passport.data?.["applicant.ownership.owner2.address"],
            noticeGiven: Boolean(
              this.passport.data?.["applicant.ownership.noticeGiven"],
            ),
            noticeDate:
              this.passport.data?.["applicant.ownership.owner2.noticeDate"],
          },
          {
            name: this.passport.data?.["applicant.ownership.owner3.name"],
            address: this.passport.data?.["applicant.ownership.owner3.address"],
            noticeGiven: Boolean(
              this.passport.data?.["applicant.ownership.noticeGiven"],
            ),
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
            noticeGiven: Boolean(
              this.passport.data?.["applicant.ownership.noticeGiven"],
            ),
            noticeDate:
              this.passport.data?.[
                "applicant.ownership.multipleOwners.noticeDate"
              ],
          },
        ].filter(
          (owner) =>
            Boolean(owner.name) &&
            Boolean(owner.address) &&
            Boolean(owner.noticeGiven),
        ),
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

  private getApplicationType(): Payload["data"]["application"]["type"] {
    return {
      value: this.passport.data?.["application.type"][0],
      description: this.findDescriptionFromValue(
        "ApplicationType",
        this.passport.data?.["application.type"]?.[0],
      ),
    } as ApplicationType;
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
      constraints: {
        planning: [],
      },
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
}
