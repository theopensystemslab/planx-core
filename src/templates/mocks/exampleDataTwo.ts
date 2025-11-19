import { getMockPublishedLDCFlow } from "../../export/digitalPlanning/mocks/flows/index.js";
import { mockPPTSession } from "../../export/digitalPlanning/mocks/planningPermissionTemplated.js";
import { DigitalPlanning } from "../../export/digitalPlanning/model.js";
import { Application } from "../../export/digitalPlanning/schemas/application/types.js";
import { Passport } from "../../models/passport/index.js";
import { Breadcrumbs, SessionMetadata } from "../../types/session.js";

// `getPlanningConstraints` relies on an accurate teamSlug to be available, other vars can be be mocked
const mockMetadataForSession = (
  teamSlug: string,
  referenceCode: string,
): SessionMetadata => ({
  id: "7ae499ac-4f0e-482c-bb1e-f8a64eacca2e",
  createdAt: "2023-01-01 00:00:00",
  submittedAt: "2023-01-02T12:17:33.199914+00:00",
  flow: {
    id: "6c2a19f0-0291-4acb-b29a-277eceaf76a4",
    slug: "apply-for-planning-permission-templated",
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
  passport: new Passport({ data: { ...mockPPTSession.passport } }),
  breadcrumbs: mockPPTSession.breadcrumbs as Breadcrumbs,
  govUkPayment: undefined, // exempt
  flow: await getMockPublishedLDCFlow(),
  metadata: mockMetadataForSession(
    mockPPTSession.flow.team.slug,
    mockPPTSession.flow.team.referenceCode,
  ),
};

const instance = new DigitalPlanning({
  sessionId: "7ae499ac-4f0e-482c-bb1e-f8a64eacca2e",
  passport: mockSession.passport,
  breadcrumbs: mockSession.breadcrumbs,
  flow: mockSession.flow,
  metadata: mockSession.metadata,
});

export const exampleDataTwo = instance.getPayload() as Application;
