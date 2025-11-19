import { getMockPublishedLDCFlow } from "../../export/digitalPlanning/mocks/flows/index.js";
import { mockLDCPSession } from "../../export/digitalPlanning/mocks/lawfulDevelopmentCertificate.js";
import { DigitalPlanning } from "../../export/digitalPlanning/model.js";
import { Application } from "../../export/digitalPlanning/schemas/application/types.js";
import { Passport } from "../../models/passport/index.js";
import { Breadcrumbs, SessionMetadata } from "../../types/session.js";

// `getPlanningConstraints` relies on an accurate teamSlug to be available, other vars can be be mocked
const mockMetadataForSession = (
  teamSlug: string,
  referenceCode: string,
): SessionMetadata => ({
  id: "c06eebb7-6201-4bc0-9fe7-ec5d7a1c0797",
  createdAt: "2023-01-01 00:00:00",
  submittedAt: "2023-01-02T12:17:33.199914+00:00",
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

const mockSession = {
  name: "LDC - Proposed",
  passport: new Passport({ data: { ...mockLDCPSession.passport } }),
  breadcrumbs: mockLDCPSession.breadcrumbs as Breadcrumbs,
  govUkPayment: undefined, // exempt
  flow: await getMockPublishedLDCFlow(),
  metadata: mockMetadataForSession(
    mockLDCPSession.flow.team.slug,
    mockLDCPSession.flow.team.referenceCode,
  ),
};

const instance = new DigitalPlanning({
  sessionId: "c06eebb7-6201-4bc0-9fe7-ec5d7a1c0797",
  passport: mockSession.passport,
  breadcrumbs: mockSession.breadcrumbs,
  flow: mockSession.flow,
  metadata: mockSession.metadata,
});

export const exampleData = instance.getPayload() as Application;
