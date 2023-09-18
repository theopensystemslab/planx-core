import Ajv from "ajv";
import addFormats from "ajv-formats";

import { Passport } from "../../types";
import jsonSchema from "./schema/schema.json";
import { DigitalPlanningDataSchema as Payload } from "./schema/types";

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
   * WIP - lacking conditionals/optional properties; just a quick first go for e2e testing!
   */
  mapPassportToPayload(): Payload {
    return {
      data: {
        user: {
          role: this.passport.data?.["user.role"]
        },
        applicant: {
          type: this.passport.data?.["applicant.type"],
          contact: {
            name: {
              first: this.passport.data?.["applicant.name.first"],
              last: this.passport.data?.["applicant.name.last"],
            },
            email: this.passport.data?.["applicant.email"],
            phone: this.passport.data?.["applicant.phone.primary"],
          },
          address: {
            sameAsSiteAddress: true,
          },
          siteContact: {
            role: this.passport.data?.["user.role"],
          },
        },
        property: {
          address: {
            source: "Proposed by applicant",
            latitude: this.passport.data?.["_address.latitude"],
            longitude: this.passport.data?.["_address.longitude"],
            x: this.passport.data?.["_address.x"],
            y: this.passport.data?.["_address.y"],
            title: this.passport.data?.["_address.title"],
            localAuthorityDistrict: this.passport.data?.["property.localAuthorityDistrict"],
            region: this.passport.data?.["property.region"],
          },
          type: {
            value: this.passport.data?.["property.type"],
            description: this.passport.data?.["_address.planx_description"],
          },
          boundary: {
            site: this.passport.data?.["property.boundary.site"],
            area: {
              hectares: this.passport.data?.["property.boundary.area.hectares"],
              squareMeters: this.passport.data?.["property.boundary.area"],
            }
          },
          constraints: {
            planning: [],
          },
        },
        application: {
          type: {
            value: this.passport.data?.["application.type"],
            description: "Planning Permission",
          },
          fee: {
            calculated: this.passport.data?.["application.fee.calculated"],
            payable: this.passport.data?.["application.fee.payable"],
            exemption: {
              disability: this.passport.data?.["application.fee.exemption.disability"],
              resubmission: this.passport.data?.["application.fee.exemption.resubmission"],
            },
            reduction: {
              sports: this.passport.data?.["application.fee.reduction.sports"],
              parishCouncil: this.passport.data?.["application.fee.reduction.parishCouncil"],
              alternative: this.passport.data?.["application.fee.reduction.alternative"],
            },
          },
          declaration: {
            accurate: this.passport.data?.["application.declaration.accurate"],
            connection: this.passport.data?.["application.declaration.connection"],
          },
        },
        proposal: {
          projectType: [],
          description: this.passport.data?.["proposal.description"],
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
          id: "b3320abe-f5bc-4185-b61f-40e9e65f07ad",
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
}
