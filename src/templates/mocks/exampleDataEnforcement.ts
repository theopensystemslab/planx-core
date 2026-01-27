import { getMockReportAPlanningBreachFlow } from "../../export/digitalPlanning/mocks/flows/index.js";
import { mockReportAPlanningBreachSessionMedway } from "../../export/digitalPlanning/mocks/reportAPlanningBreach.js";
import { DigitalPlanning } from "../../export/digitalPlanning/model.js";
import { Enforcement } from "../../export/digitalPlanning/schemas/enforcement/types.js";

const mockSession = {
  name: "Report a planning breach",
  session: mockReportAPlanningBreachSessionMedway,
  flow: await getMockReportAPlanningBreachFlow(),
};

const instance = new DigitalPlanning({
  session: mockSession.session,
  flow: mockSession.flow,
});

export const exampleDataEnforcement = instance.getPayload() as Enforcement;
