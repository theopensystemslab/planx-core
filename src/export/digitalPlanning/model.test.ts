import { Passport } from "../../models/passport/index.js";
import {
  Breadcrumbs,
  GovUKPayment,
  SessionMetadata,
} from "../../types/index.js";
import { mockPublishedLDCFlow } from "../bops/mocks/flow.js";
import { mockApprovalConditionsSession } from "./mocks/approvalConditions.js";
import { mockPublishedApprovalConditionsFlow } from "./mocks/flows/approvalConditions.js";
import { mockPublishedNOCFlow } from "./mocks/flows/notificationOfCommencement.js";
import { mockPublishedPlanningPermissionFlow } from "./mocks/flows/planningPermission.js";
import { mockPreApplicationFlow } from "./mocks/flows/preApplication.js";
import { mockPublishedPriorApprovalFlow } from "./mocks/flows/priorApproval.js";
import { mockReportAPlanningBreachFlow } from "./mocks/flows/reportAPlanningBreach.js";
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
  mockPreApplicationSessionDoncaster2,
} from "./mocks/preApplication.js";
import { mockPriorApprovalSession } from "./mocks/priorApproval.js";
import { mockReportAPlanningBreachSessionMedway } from "./mocks/reportAPlanningBreach.js";
import { DigitalPlanning } from "./model.js";

// `getPlanningConstraints` relies on an accurate teamSlug to be available, other vars can be be mocked
const mockMetadataForSession = (
  teamSlug: string,
  referenceCode: string,
): SessionMetadata => ({
  id: "c06eebb7-6201-4bc0-9fe7-ec5d7a1c0797",
  createdAt: "2023-01-01 00:00:00",
  submittedAt: "2023-01-02 00:00:00",
  flow: {
    id: "c06eebb7-6201-4bc0-9fe7-ec5d7a1c0797",
    slug: "apply-for-a-test-service",
    team: {
      name: teamSlug,
      slug: teamSlug,
      settings: {
        referenceCode: referenceCode,
      },
    },
  },
});

// When testing valid payloads, we want one session per application type
const mockSessions = [
  {
    name: "LDC - Proposed",
    passport: new Passport({ data: { ...mockLDCPSession.passport } }),
    breadcrumbs: mockLDCPSession.breadcrumbs as Breadcrumbs,
    govUkPayment: undefined, // exempt
    flow: mockPublishedLDCFlow,
    metadata: mockMetadataForSession(
      mockLDCPSession.flow.team.slug,
      mockLDCPSession.flow.team.referenceCode,
    ),
  },
  {
    name: "LDC - Proposed (new ownership)",
    passport: new Passport({ data: { ...mockLDCPSession2.passport } }),
    breadcrumbs: mockLDCPSession2.breadcrumbs as Breadcrumbs,
    flow: mockPublishedLDCFlow,
    metadata: mockMetadataForSession(
      mockLDCPSession2.flow.team.slug,
      mockLDCPSession.flow.team.referenceCode,
    ),
  },
  {
    name: "LDC - Existing",
    passport: new Passport({ data: { ...mockLDCESession.passport } }),
    breadcrumbs: mockLDCESession.breadcrumbs as Breadcrumbs,
    govUkPayment: mockLDCESession.govUkPayment as GovUKPayment,
    flow: mockPublishedLDCFlow,
    metadata: mockMetadataForSession(
      mockLDCESession.flow.team.slug,
      mockLDCESession.flow.team.referenceCode,
    ),
  },
  {
    name: "Approval of condition",
    passport: new Passport({
      data: { ...mockApprovalConditionsSession.passport },
    }),
    breadcrumbs: mockApprovalConditionsSession.breadcrumbs as Breadcrumbs,
    govUkPayment: mockApprovalConditionsSession.govUkPayment as GovUKPayment,
    flow: mockPublishedApprovalConditionsFlow,
    metadata: mockMetadataForSession(
      mockApprovalConditionsSession.flow.team.slug,
      mockApprovalConditionsSession.flow.team.referenceCode,
    ),
  },
  {
    name: "Prior Approval",
    passport: new Passport({ data: { ...mockPriorApprovalSession.passport } }),
    breadcrumbs: mockPriorApprovalSession.breadcrumbs as Breadcrumbs,
    flow: mockPublishedPriorApprovalFlow,
    metadata: mockMetadataForSession(
      mockPriorApprovalSession.flow.team.slug,
      mockPriorApprovalSession.flow.team.referenceCode,
    ),
  },
  {
    name: "Planning Permission",
    passport: new Passport({
      data: { ...mockPlanningPermissionSession.passport },
    }),
    breadcrumbs: mockPlanningPermissionSession.breadcrumbs as Breadcrumbs,
    flow: mockPublishedPlanningPermissionFlow,
    metadata: mockMetadataForSession(
      mockPlanningPermissionSession.flow.team.slug,
      mockPlanningPermissionSession.flow.team.referenceCode,
    ),
  },
  {
    name: "Pre-application - Doncaster",
    passport: new Passport({
      data: { ...mockPreApplicationSessionDoncaster.passport },
    }),
    breadcrumbs: mockPreApplicationSessionDoncaster.breadcrumbs as Breadcrumbs,
    flow: mockPreApplicationFlow,
    metadata: mockMetadataForSession(
      mockPreApplicationSessionDoncaster.flow.team.slug,
      mockPreApplicationSessionDoncaster.flow.team.referenceCode,
    ),
  },
  {
    name: "Pre-application - Doncaster 2",
    passport: new Passport({
      data: { ...mockPreApplicationSessionDoncaster2.passport },
    }),
    breadcrumbs: mockPreApplicationSessionDoncaster2.breadcrumbs as Breadcrumbs,
    flow: mockPreApplicationFlow,
    metadata: mockMetadataForSession(
      mockPreApplicationSessionDoncaster2.flow.team.slug,
      mockPreApplicationSessionDoncaster2.flow.team.referenceCode,
    ),
  },
  {
    name: "Pre-application - Camden",
    passport: new Passport({
      data: { ...mockPreApplicationSessionCamden.passport },
    }),
    breadcrumbs: mockPreApplicationSessionCamden.breadcrumbs as Breadcrumbs,
    flow: mockPreApplicationFlow,
    metadata: mockMetadataForSession(
      mockPreApplicationSessionCamden.flow.team.slug,
      mockPreApplicationSessionCamden.flow.team.referenceCode,
    ),
  },
  {
    name: "RAB - Medway",
    passport: new Passport({
      data: { ...mockReportAPlanningBreachSessionMedway.passport },
    }),
    breadcrumbs:
      mockReportAPlanningBreachSessionMedway.breadcrumbs as Breadcrumbs,
    flow: mockReportAPlanningBreachFlow,
    metadata: mockMetadataForSession(
      mockReportAPlanningBreachSessionMedway.flow.team.slug,
      mockReportAPlanningBreachSessionMedway.flow.team.referenceCode,
    ),
  },
];

const mockDiscretionarySessions = [
  {
    name: "notification-of-commencement",
    passport: new Passport({
      data: { ...mockNOCSession.passport },
    }),
    breadcrumbs: mockNOCSession.breadcrumbs as Breadcrumbs,
    flow: mockPublishedNOCFlow,
    metadata: mockMetadataForSession(
      mockNOCSession.flow.team.slug,
      mockNOCSession.flow.team.referenceCode,
    ),
  },
];

// We don't need to iterate over application types when testing invalid payloads
const mockParams = {
  sessionId: "c06eebb7-6201-4bc0-9fe7-ec5d7a1c0797",
  passport: new Passport({ data: { ...mockLDCPSession.passport } }),
  breadcrumbs: mockLDCPSession.breadcrumbs,
  flow: mockPublishedLDCFlow,
  metadata: mockMetadataForSession(
    mockLDCPSession.flow.team.slug,
    mockLDCPSession.flow.team.referenceCode,
  ),
};

describe("DigitalPlanning", () => {
  describe("getPayload", () => {
    mockSessions.forEach((mock) => {
      it(`should return valid payload (${mock.name})`, () => {
        const instance = new DigitalPlanning({
          sessionId: "c06eebb7-6201-4bc0-9fe7-ec5d7a1c0797",
          passport: mock.passport,
          breadcrumbs: mock.breadcrumbs,
          flow: mock.flow,
          metadata: mock.metadata,
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
    it("returns _requestedFiles from the passport if present", () => {
      const mock = mockSessions[0];
      const mockRequestedFiles = {
        required: ["photographs.proposed", "sitePlan.proposed"],
        recommended: ["otherEvidence", "constructionInvoice"],
        optional: [],
      };

      const instance = new DigitalPlanning({
        sessionId: "c06eebb7-6201-4bc0-9fe7-ec5d7a1c0797",
        passport: new Passport({
          data: {
            ...mockLDCPSession.passport,
            _requestedFiles: mockRequestedFiles,
          },
        }),
        breadcrumbs: mock.breadcrumbs,
        flow: mock.flow,
        metadata: mock.metadata,
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

    it("returns an empty default if _requestedFiles is not present", () => {
      const mock = mockSessions[0];
      const defaultRequestedFiles = {
        required: [],
        recommended: [],
        optional: [],
      };

      const instance = new DigitalPlanning({
        sessionId: "c06eebb7-6201-4bc0-9fe7-ec5d7a1c0797",
        passport: mock.passport,
        breadcrumbs: mock.breadcrumbs,
        flow: mock.flow,
        metadata: mock.metadata,
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
          sessionId: "c06eebb7-6201-4bc0-9fe7-ec5d7a1c0797",
          passport: mock.passport,
          breadcrumbs: mock.breadcrumbs,
          flow: mock.flow,
          metadata: mock.metadata,
        });

        const skipValidation = true;
        const payload = instance.getPayload(skipValidation);

        expect(payload).toEqual(instance.payload);
      });
    });
  });
});
