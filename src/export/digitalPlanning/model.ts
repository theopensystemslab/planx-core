import Ajv from "ajv";
import addFormats from "ajv-formats";

import { Passport } from "../../types";
import jsonSchema from "./schema/schema.json";
import { DigitalPlanningDataSchema as Payload } from "./schema/types";

interface DigitalPlanningArgs {
  sessionId: string;
  passport: Passport;
  templateNames?: string[] | undefined;
}

export class DigitalPlanning {
  sessionId: string;
  passport: Passport;
  templateNames: string[];
  payload: Payload;

  constructor({ sessionId, passport, templateNames }: DigitalPlanningArgs) {
    this.sessionId = sessionId;
    this.passport = passport;
    this.templateNames = templateNames || [];

    this.payload = this.mapPassportToPayload();
  }

  getPayload(): Payload {
    this.validatePayload();
    return this.payload;
  }

  /**
   * Dummy data to test setup whilst we work on the actual schema
   */
  mapPassportToPayload(): Payload {
    return {
      data: {
        applicant: {
          name: "Test",
        },
        property: {
          name: "Test",
        },
        application: {
          name: "Test",
        },
        proposal: {
          name: "Test",
        },
        user: {
          name: "Test",
        },
      },
      result: {
        name: "Test",
      },
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
      responses: {
        name: "Test",
      },
      files: [
        {
          size: "1mb",
          foo: "bar",
        },
        {
          size: "2mb",
          foo: "baz",
        },
        {
          size: "3mb",
          foo: "boo",
        },
      ],
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
