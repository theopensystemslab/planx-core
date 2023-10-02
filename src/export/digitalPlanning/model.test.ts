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

const mockSessions = [
  {
    name: "LDC - Proposed",
    passport: new Passport({ data: { ...mockLDCPSession.passport } }),
    breadcrumbs: mockLDCPSession.breadcrumbs as Breadcrumbs,
    flow: mockPublishedLDCFlow,
  },
  {
    name: "LDC - Existing",
    passport: new Passport({ data: { ...mockLDCESession.passport } }),
    breadcrumbs: mockLDCESession.breadcrumbs as Breadcrumbs,
    flow: mockPublishedLDCFlow,
  },
  {
    name: "Prior Approval",
    passport: new Passport({ data: { ...mockPriorApprovalSession.passport } }),
    breadcrumbs: mockPriorApprovalSession.breadcrumbs as Breadcrumbs,
    flow: mockPublishedPriorApprovalFlow,
  },
  {
    name: "Planning Permission",
    passport: new Passport({
      data: { ...mockPlanningPermissionSession.passport },
    }),
    breadcrumbs: mockPlanningPermissionSession.breadcrumbs as Breadcrumbs,
    flow: mockPublishedPlanningPermissionFlow,
  },
];

const mockParams = {
  sessionId: "session123",
  passport: new Passport({ data: { ...mockLDCPSession.passport } }),
  breadcrumbs: mockLDCPSession.breadcrumbs,
  flow: mockPublishedLDCFlow,
  metadata: {
    id: "session123",
    createdAt: "2023-01-01 00:00:00",
    submittedAt: "2023-01-02 00:00:00",
    flow: {
      id: "c06eebb7-6201-4bc0-9fe7-ec5d7a1c0797",
      slug: "apply-for-a-test-service",
      publishedFlows: [{ id: 1 }],
      team: {
        name: "Open Systems Lab",
        slug: "opensystemslab",
      },
    },
  } as SessionMetadata,
};

describe("DigitalPlanning", () => {
  describe("getPayload", () => {
    mockSessions.forEach((mock) => {
      it(`should return valid payload (${mock.name})`, () => {
        const instance = new DigitalPlanning({
          sessionId: "session123",
          passport: mock.passport,
          breadcrumbs: mock.breadcrumbs,
          flow: mock.flow,
          metadata: mockParams.metadata,
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

        instance.payload.metadata.service.url =
          "not a valid URL, but still a string";

        expect(() => instance.getPayload()).toThrowError(
          /Invalid DigitalPlanning payload/,
        );
      });

      test("incorrect datetime format", () => {
        const instance = new DigitalPlanning(mockParams);

        instance.payload.metadata.session.submittedAt =
          "not a valid datetime, but still a string";

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
});
