import { getBOPSParams } from "../index";
import { DEFAULT_APPLICATION_TYPE } from "../model";

describe("application_type is set correctly based on flowName", () => {
  const testParams = {
    breadcrumbs: {},
    flow: { _root: { edges: [] } },
    passport: {},
    sessionId: "123",
  };

  it("sets to `lawfulness_certificate` for LDC services", () => {
    const generatedPayload = getBOPSParams({
      ...testParams,
      flowName: "Apply for a lawful development certificate",
    });
    expect(generatedPayload.application_type).toEqual(DEFAULT_APPLICATION_TYPE);
  });

  it("sets to flowName for non-LDC services", () => {
    const generatedPayload = getBOPSParams({
      ...testParams,
      flowName: "Apply for prior approval",
    });
    expect(generatedPayload.application_type).toEqual(
      "Apply for prior approval"
    );
  });
});