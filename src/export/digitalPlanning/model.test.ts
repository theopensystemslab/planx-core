import { Passport } from "../../models/passport";
import { Breadcrumbs, SessionMetadata } from "../../types";
import { mockPublishedLDCFlow } from "../bops/mocks/flow";
import { mockPublishedPlanningPermissionFlow } from "./mocks/flows/planningPermission";
import { mockPublishedPriorApprovalFlow } from "./mocks/flows/priorApproval";
import {
  mockLDCESession,
  mockLDCPSession,
} from "./mocks/lawfulDevelopmentCertificate";
import { mockPlanningPermissionSession } from "./mocks/planningPermission";
import { mockPriorApprovalSession } from "./mocks/priorApproval";
import { DigitalPlanning } from "./model";

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
      referenceCode: referenceCode,
    },
  },
});

// When testing valid payloads, we want one session per application type
const mockSessions = [
  {
    name: "LDC - Proposed",
    passport: new Passport({ data: { ...mockLDCPSession.passport } }),
    breadcrumbs: mockLDCPSession.breadcrumbs as Breadcrumbs,
    flow: mockPublishedLDCFlow,
    metadata: mockMetadataForSession(
      mockLDCPSession.flow.team.slug,
      mockLDCPSession.flow.team.referenceCode,
    ),
  },
  {
    name: "LDC - Existing",
    passport: new Passport({ data: { ...mockLDCESession.passport } }),
    breadcrumbs: mockLDCESession.breadcrumbs as Breadcrumbs,
    flow: mockPublishedLDCFlow,
    metadata: mockMetadataForSession(
      mockLDCESession.flow.team.slug,
      mockLDCESession.flow.team.referenceCode,
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
      it.skip(`should return valid payload (${mock.name})`, () => {
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

    describe("invalid payloads", () => {
      test("missing values", () => {
        const instance = new DigitalPlanning(mockParams);

        // @ts-expect-error - The operand of a 'delete' operator must be optional
        delete instance.payload.data.applicant;

        expect(() => instance.getPayload()).toThrowError(
          /Invalid DigitalPlanning payload/,
        );
      });

      test("undefined values", () => {
        const instance = new DigitalPlanning(mockParams);

        // @ts-expect-error - Type 'undefined' is not assignable to type 'Applicant'
        instance.payload.data.applicant = undefined;

        expect(() => instance.getPayload()).toThrowError(
          /Invalid DigitalPlanning payload/,
        );
      });

      test("incorrect types", () => {
        const instance = new DigitalPlanning(mockParams);

        // @ts-expect-error - Type 'number' is not assignable to type 'string'
        instance.payload.data.applicant.name = 12345;

        expect(() => instance.getPayload()).toThrowError(
          /Invalid DigitalPlanning payload/,
        );
      });

      test("incorrect string format", () => {
        const instance = new DigitalPlanning(mockParams);

        instance.payload.metadata.schema =
          "not a valid URL, but still a string";

        expect(() => instance.getPayload()).toThrowError(
          /Invalid DigitalPlanning payload/,
        );
      });

      test("incorrect datetime format", () => {
        const instance = new DigitalPlanning(mockParams);

        instance.payload.metadata.submittedAt =
          "not a valid datetime, but still a string";

        expect(() => instance.getPayload()).toThrowError(
          /Invalid DigitalPlanning payload/,
        );
      });

      test("incorrect ISO datetime format", () => {
        const instance = new DigitalPlanning(mockParams);

        instance.payload.metadata.submittedAt = "2023-01-01 00:00:00";

        expect(() => instance.getPayload()).toThrowError(
          /Invalid DigitalPlanning payload/,
        );
      });

      test("incorrect enum value", () => {
        const instance = new DigitalPlanning(mockParams);

        // @ts-expect-error Type '"invalid enum"' is not assignable to type '"applicant" | "agent" | "proxy"'
        instance.payload.data.user.role = "tester";

        expect(() => instance.getPayload()).toThrowError(
          /Invalid DigitalPlanning payload/,
        );
      });
    });
  });

  describe("getRequestedFiles", () => {
    it("returns _requestedFiles from the passport if present", () => {
      const mock = mockSessions[0];
      const mockRequestedFiles = {
        required: [
          {
            value: "photographs.proposed",
            description: "Photographs - proposed",
          },
          {
            value: "sitePlan.proposed",
            description: "Site plan - proposed",
          },
        ],
        recommended: [
          {
            value: "otherEvidence",
            description: "Other - evidence or correspondence",
          },
          {
            value: "constructionInvoice",
            description: "Construction invoice",
          },
        ],
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
      // @ts-ignore
      expect(payload.metadata.service!.files!).toEqual(mockRequestedFiles);
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
});
