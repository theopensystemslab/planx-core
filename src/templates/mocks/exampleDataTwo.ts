import { getMockPublishedLDCFlow } from "../../export/digitalPlanning/mocks/flows/index.js";
import { mockPPTSession } from "../../export/digitalPlanning/mocks/planningPermissionTemplated.js";
import { DigitalPlanning } from "../../export/digitalPlanning/model.js";
import { Application } from "../../export/digitalPlanning/schemas/application/types.js";

const mockSession = {
  name: "Planning Permission - Templated",
  session: mockPPTSession,
  flow: await getMockPublishedLDCFlow(),
};

const instance = new DigitalPlanning({
  session: mockSession.session,
  flow: mockSession.flow,
});

export const exampleDataTwo = instance.getPayload() as Application;
