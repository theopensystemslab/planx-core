import { Passport } from "../../models/passport/index.js";
import { mockApprovalConditionsSession } from "./mocks/approvalConditions.js";
import {
  getMockPlanningPermissionFlow,
  getMockPreApplicationFlow,
  getMockPublishedApprovalConditionsFlow,
  getMockPublishedLDCFlow,
  getMockPublishedNOCFlow,
  getMockReportAPlanningBreachFlow,
} from "./mocks/flows/index.js";
import {
  mockLDCESession,
  mockLDCPSession,
  mockLDCPSession2,
} from "./mocks/lawfulDevelopmentCertificate.js";
import { mockNOCSession } from "./mocks/notificationOfCommencement.js";
import { mockPlanningPermissionSession } from "./mocks/planningPermission.js";
import {
  mockPreApplicationSessionCamden,
  mockPreApplicationSessionDoncaster,
} from "./mocks/preApplication.js";
import { mockReportAPlanningBreachSessionMedway } from "./mocks/reportAPlanningBreach.js";
import { DigitalPlanning } from "./model.js";

// When testing valid payloads, we want at least one mock session per supported application type
const mockSessions = [
  {
    name: "LDC - Proposed",
    session: mockLDCPSession,
    flow: await getMockPublishedLDCFlow(),
  },
  {
    name: "LDC - Proposed (new ownership)",
    session: mockLDCPSession2,
    flow: await getMockPublishedLDCFlow(),
  },
  {
    name: "LDC - Existing",
    session: mockLDCESession,
    flow: await getMockPublishedLDCFlow(),
  },
  {
    name: "Approval of condition",
    session: mockApprovalConditionsSession,
    flow: await getMockPublishedApprovalConditionsFlow(),
  },
  {
    name: "Planning Permission",
    session: mockPlanningPermissionSession,
    flow: await getMockPlanningPermissionFlow(),
  },
  {
    name: "Pre-application - Doncaster",
    session: mockPreApplicationSessionDoncaster,
    flow: await getMockPreApplicationFlow(),
  },
  {
    name: "Pre-application - Camden",
    session: mockPreApplicationSessionCamden,
    flow: await getMockPreApplicationFlow(),
  },
  {
    name: "RAB Templated - Medway",
    session: mockReportAPlanningBreachSessionMedway,
    flow: await getMockReportAPlanningBreachFlow(),
  },
];

const mockDiscretionarySessions = [
  {
    name: "Notification of commencement - Discretionary",
    session: mockNOCSession,
    flow: await getMockPublishedNOCFlow(),
  },
];

// We don't need to iterate over application types when testing invalid payloads
const mockParams = {
  session: mockSessions[0].session,
  flow: mockSessions[0].flow,
};

describe("DigitalPlanning", () => {
  describe("getPayload", () => {
    mockSessions.forEach((mock) => {
      it(`should return valid payload (${mock.name})`, () => {
        const instance = new DigitalPlanning({
          session: mock.session,
          flow: mock.flow,
        });

        const payload = instance.getPayload();

        expect(payload).toEqual(instance.payload);
      });
    });

    describe("skipping validation", () => {
      test("shouldn't throw an error", () => {
        const instance = new DigitalPlanning(mockParams);

        // @ts-expect-error - The operand of a 'delete' operator must be optional
        delete instance.payload.data.applicant;

        expect(() => instance.getPayload(true)).not.toThrow();
      });

      test("should return invalid JSON data", () => {
        const instance = new DigitalPlanning(mockParams);

        // @ts-expect-error - Type 'number' is not assignable to type 'string'
        instance.payload.data.applicant.name = 12345;

        const payload = instance.getPayload(true);

        expect(payload).toHaveProperty("data.applicant.name", 12345);
      });
    });

    describe("invalid payloads", () => {
      test("missing values", () => {
        const instance = new DigitalPlanning(mockParams);

        // @ts-expect-error - The operand of a 'delete' operator must be optional
        delete instance.payload.data.applicant;

        expect(() => instance.getPayload()).toThrow(
          /Invalid DigitalPlanning ldc.proposed payload/,
        );
      });

      test("undefined values", () => {
        const instance = new DigitalPlanning(mockParams);

        // @ts-expect-error - Type 'undefined' is not assignable to type 'Applicant'
        instance.payload.data.applicant = undefined;

        expect(() => instance.getPayload()).toThrow(
          /Invalid DigitalPlanning ldc.proposed payload/,
        );
      });

      test("incorrect types", () => {
        const instance = new DigitalPlanning(mockParams);

        // @ts-expect-error - Type 'number' is not assignable to type 'string'
        instance.payload.data.applicant.name = 12345;

        expect(() => instance.getPayload()).toThrow(
          /Invalid DigitalPlanning ldc.proposed payload/,
        );
      });

      test("incorrect string format", () => {
        const instance = new DigitalPlanning(mockParams);

        instance.payload.metadata.schema =
          "not a valid URL, but still a string";

        expect(() => instance.getPayload()).toThrow(
          /Invalid DigitalPlanning ldc.proposed payload/,
        );
      });

      test("incorrect datetime format", () => {
        const instance = new DigitalPlanning(mockParams);

        instance.payload.metadata.submittedAt =
          "not a valid datetime, but still a string";

        expect(() => instance.getPayload()).toThrow(
          /Invalid DigitalPlanning ldc.proposed payload/,
        );
      });

      test("incorrect ISO datetime format", () => {
        const instance = new DigitalPlanning(mockParams);

        instance.payload.metadata.submittedAt = "2023-01-01 00:00:00";

        expect(() => instance.getPayload()).toThrow(
          /Invalid DigitalPlanning ldc.proposed payload/,
        );
      });

      test("incorrect enum value", () => {
        const instance = new DigitalPlanning(mockParams);

        // @ts-expect-error Type '"invalid enum"' is not assignable to type '"applicant" | "agent" | "proxy"'
        instance.payload.data.user.role = "tester";

        expect(() => instance.getPayload()).toThrow(
          /Invalid DigitalPlanning ldc.proposed payload/,
        );
      });
    });
  });

  describe("getRequestedFiles", () => {
    it("returns _requestedFiles from the passport if present", async () => {
      const mockRequestedFiles = {
        required: ["photographs.proposed", "sitePlan.proposed"],
        recommended: ["otherEvidence", "constructionInvoice"],
        optional: [],
      };

      const session = mockSessions[0].session;
      const sessionWithPassportFiles = {
        ...session,
        data: {
          ...session.data,
          passport: new Passport({
            data: {
              ...session.data.passport.data,
              _requestedFiles: mockRequestedFiles,
            },
          }),
        },
      };

      const instance = new DigitalPlanning({
        session: sessionWithPassportFiles,
        flow: mockSessions[0].flow,
      });

      const payload = instance.getPayload();

      expect(payload.metadata).toHaveProperty("service");
      // @ts-ignore
      expect(payload.metadata.service!).toHaveProperty("files");

      const enrichedFiles = {
        required: [
          {
            description: "Photographs - proposed",
            value: "photographs.proposed",
          },
          {
            description: "Site plan - proposed",
            value: "sitePlan.proposed",
          },
        ],
        recommended: [
          {
            description: "Other - evidence or correspondence",
            value: "otherEvidence",
          },
          {
            description: "Construction invoice",
            value: "constructionInvoice",
          },
        ],
        optional: [],
      };
      // @ts-ignore
      expect(payload.metadata.service!.files!).toEqual(enrichedFiles);
    });

    it("returns an empty default if _requestedFiles is not present", async () => {
      const defaultRequestedFiles = {
        required: [],
        recommended: [],
        optional: [],
      };

      const session = mockSessions[0].session;
      const sessionWithPassportFiles = {
        ...session,
        data: {
          ...session.data,
          passport: new Passport({
            data: {
              ...session.data.passport.data,
              _requestedFiles: defaultRequestedFiles,
            },
          }),
        },
      };

      const instance = new DigitalPlanning({
        session: sessionWithPassportFiles,
        flow: mockSessions[0].flow,
      });

      const payload = instance.getPayload();

      expect(payload.metadata).toHaveProperty("service");
      // @ts-ignore
      expect(payload.metadata.service!).toHaveProperty("files");
      // @ts-ignore
      expect(payload.metadata.service!.files!).toEqual(defaultRequestedFiles);
    });
  });

  describe("discretionary services - skipped validation", () => {
    mockDiscretionarySessions.forEach((mock) => {
      it(`should return payload (${mock.name})`, () => {
        const instance = new DigitalPlanning({
          session: mock.session,
          flow: mock.flow,
        });

        const skipValidation = true;
        const payload = instance.getPayload(skipValidation);

        expect(payload).toEqual(instance.payload);
      });
    });
  });
});
