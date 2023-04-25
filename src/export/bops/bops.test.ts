import { mockExpectedBOPSPayload } from "./mocks/payload";
import { mockPublishedLDCFlow } from "./mocks/flow";
import { mockSessionData } from "./mocks/sessionData";
import { getBOPSParams } from ".";

describe("BOPS payload", () => {
  const sessionId = "123";
  const flowName = "apply-for-a-lawful-development-certificate";

  it("builds the expected payload", () => {
    const generatedPayload = getBOPSParams({
      breadcrumbs: mockSessionData.breadcrumbs,
      flow: mockPublishedLDCFlow,
      passport: mockSessionData.passport,
      sessionId: sessionId,
      flowName: flowName,
    });

    expect(generatedPayload).toEqual(mockExpectedBOPSPayload);
  });
});
