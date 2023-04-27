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
    // check the response shape excluding result, proposal_details & planx_debug_data
    const generatedMinimumPayload = (({ result, proposal_details, planx_debug_data, ...p }) => p)(generatedPayload);
    const mockExpectedMinimumPayload = (({ result, proposal_details, planx_debug_data, ...p}) => p)(mockExpectedBOPSPayload);

    expect(generatedMinimumPayload).toEqual(mockExpectedMinimumPayload);
  });

  it("builds the correct result as expected", () => {
    expect(generatedPayload.result).toEqual(mockExpectedBOPSPayload.result);
  });

  it("builds proposal_details as expected", () => {
    expect(generatedPayload.proposal_details?.length).toEqual(mockExpectedBOPSPayload.proposal_details?.length);

    const sortedGeneratedProposalDetails = generatedPayload.proposal_details?.sort((a, b) => a.question.localeCompare(b.question));
    const sortedMockProposalDetails = mockExpectedBOPSPayload.proposal_details?.sort((a, b) => a.question.localeCompare(b.question));
    expect(sortedGeneratedProposalDetails).toEqual(sortedMockProposalDetails);
  });

  it("attaches planx_debug_data to the payload that reflects the raw session data", () => {
    expect(generatedPayload.planx_debug_data?.passport).toEqual(mockExpectedBOPSPayload.planx_debug_data?.passport);
    expect(generatedPayload.planx_debug_data?.passport).toEqual(mockSessionData?.passport);
  });
});
