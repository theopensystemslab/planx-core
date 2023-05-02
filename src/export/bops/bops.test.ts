import { mockExpectedBOPSPayload } from "./mocks/payload";
import { mockPublishedLDCFlow } from "./mocks/flow";
import { mockSessionData } from "./mocks/sessionData";
import { getBOPSParams } from ".";

describe("BOPS payload", () => {
  const sessionId = "969b912c-f196-4ec6-ac73-133f2a516f60";
  const flowName = "Apply for a lawful development certificate";
  
  const generatedPayload = getBOPSParams({
    breadcrumbs: mockSessionData.breadcrumbs,
    flow: mockPublishedLDCFlow,
    passport: mockSessionData.passport,
    sessionId: sessionId,
    flowName: flowName,
  });

  it("builds the minimum payload as expected", () => {
    // check the response shape excluding result, proposal_details & planx_debug_data (these get tested separately)
    const generatedMinimumPayload = (({ result, proposal_details, planx_debug_data, ...p }) => p)(generatedPayload);
    const mockExpectedMinimumPayload = (({ result, proposal_details, planx_debug_data, ...p}) => p)(mockExpectedBOPSPayload);

    expect(generatedMinimumPayload).toEqual(mockExpectedMinimumPayload);
  });

  it("builds the correct result as expected", () => {
    expect(generatedPayload.result).toEqual(mockExpectedBOPSPayload.result);
  });

  it("builds proposal_details as expected", () => {
    expect(generatedPayload.proposal_details?.length).toEqual(mockExpectedBOPSPayload.proposal_details?.length);
    expect(generatedPayload.proposal_details).toEqual(expect.arrayContaining(mockExpectedBOPSPayload.proposal_details));
  });

  it("attaches planx_debug_data to the payload that matches the raw session data", () => {
    expect(generatedPayload.planx_debug_data?.passport).toEqual(mockExpectedBOPSPayload.planx_debug_data?.passport);
    expect(generatedPayload.planx_debug_data?.passport).toEqual(mockSessionData?.passport);

    expect(generatedPayload.planx_debug_data?.breadcrumbs).toEqual(mockExpectedBOPSPayload.planx_debug_data?.breadcrumbs);
    expect(generatedPayload.planx_debug_data?.breadcrumbs).toEqual(mockSessionData?.breadcrumbs);
  });
});

describe("application_type is set correctly based on flowName", () => {
  const default_application_type = "lawfulness_certificate";

  test("it defaults to `lawfulness_certificate` if we can't fetch current route", () => {
    const generatedPayload = getBOPSParams({
      breadcrumbs: {},
      flow: {_root: {edges: []}},
      passport: {},
      sessionId: "123",
      // @ts-ignore: Type 'undefined' is not assignable to type 'string'
      flowName: undefined,
    });
    expect(generatedPayload.application_type).toEqual(default_application_type);
  });

  test("it sets to `lawfulness_certificate` for LDC services", () => {
    const generatedPayload = getBOPSParams({
      breadcrumbs: {},
      flow: {_root: {edges: []}},
      passport: {},
      sessionId: "123",
      flowName: "Apply for a lawful development certificate",
    });
    expect(generatedPayload.application_type).toEqual(default_application_type);
  });

  test("it sets to flowName for non-LDC services", () => {
    const generatedPayload = getBOPSParams({
      breadcrumbs: {},
      flow: {_root: {edges: []}},
      passport: {},
      sessionId: "123",
      flowName: "Apply for prior approval",
    });
    expect(generatedPayload.application_type).toEqual("Apply for prior approval");
  });
});