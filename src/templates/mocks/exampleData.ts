import { getMockPublishedLDCFlow } from "../../export/digitalPlanning/mocks/flows/index.js";
import { mockLDCPSession } from "../../export/digitalPlanning/mocks/lawfulDevelopmentCertificate.js";
import { DigitalPlanning } from "../../export/digitalPlanning/model.js";
import { Application } from "../../export/digitalPlanning/schemas/application/types.js";

const mockSession = {
  name: "LDC - Proposed",
  session: mockLDCPSession,
  flow: await getMockPublishedLDCFlow(),
};

const instance = new DigitalPlanning({
  session: mockSession.session,
  flow: mockSession.flow,
});

export const exampleData = instance.getPayload() as Application;
