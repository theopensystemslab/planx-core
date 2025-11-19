import { getMockReportAPlanningBreachFlow } from "../../export/digitalPlanning/mocks/flows/index.js";
import { mockReportAPlanningBreachSessionMedway } from "../../export/digitalPlanning/mocks/reportAPlanningBreach.js";
import { DigitalPlanning } from "../../export/digitalPlanning/model.js";
import { Enforcement } from "../../export/digitalPlanning/schemas/enforcement/types.js";
import { Passport } from "../../models/passport/index.js";
import { Breadcrumbs, SessionMetadata } from "../../types/session.js";

// `getPlanningConstraints` relies on an accurate teamSlug to be available, other vars can be be mocked
const mockMetadataForSession = (
  teamSlug: string,
  referenceCode: string,
): SessionMetadata => ({
  id: "5c637972-9d8d-455d-a9c6-c43a20bd2b2d",
  createdAt: "2025-08-25T12:56:53.112426+00:00",
  submittedAt: "2025-08-25T13:00:13.889391+00:00",
  flow: {
    id: "26ade0b6-f223-4b92-b5e5-5462a2067b1f",
    slug: "report-a-planning-breach",
    team: {
      name: teamSlug,
      slug: teamSlug,
      settings: {
        referenceCode: referenceCode,
      },
    },
  },
});

const mockSession = {
  name: "Report a planning breach",
  passport: new Passport({
    data: { ...mockReportAPlanningBreachSessionMedway.passport },
  }),
  breadcrumbs:
    mockReportAPlanningBreachSessionMedway.breadcrumbs as Breadcrumbs,
  govUkPayment: undefined, // not fee carrying
  flow: await getMockReportAPlanningBreachFlow(),
  metadata: mockMetadataForSession(
    mockReportAPlanningBreachSessionMedway.flow.team.slug,
    mockReportAPlanningBreachSessionMedway.flow.team.referenceCode,
  ),
};

const instance = new DigitalPlanning({
  sessionId: "5c637972-9d8d-455d-a9c6-c43a20bd2b2d",
  passport: mockSession.passport,
  breadcrumbs: mockSession.breadcrumbs,
  flow: mockSession.flow,
  metadata: mockSession.metadata,
});

export const exampleDataEnforcement = instance.getPayload() as Enforcement;
