import { omit } from "lodash";

import { computeBOPSParams } from "../index.js";
import { mockPublishedLDCFlow } from "../mocks/flow.js";
import { mockExpectedBOPSPayload } from "../mocks/payload.js";
import { mockSessionData } from "../mocks/sessionData.js";

describe("computeBOPSParams", () => {
  describe("Full BOPS payload", () => {
    const generatedPayload = computeBOPSParams({
      breadcrumbs: mockSessionData.breadcrumbs,
      flow: mockPublishedLDCFlow,
      passport: mockSessionData.passport,
      sessionId: "969b912c-f196-4ec6-ac73-133f2a516f60",
      flowName: "Apply for a lawful development certificate",
    });

    it("builds the payload as expected", () => {
      // check the response shape excluding proposal_details as order can vary
      const generatedMinimumPayload = omit(generatedPayload, [
        "proposal_details",
      ]);
      const mockExpectedMinimumPayload = omit(mockExpectedBOPSPayload, [
        "proposal_details",
      ]);

      expect(generatedMinimumPayload).toStrictEqual(mockExpectedMinimumPayload);
    });

    it("builds proposal_details as expected", () => {
      expect(generatedPayload.proposal_details?.length).toEqual(
        mockExpectedBOPSPayload.proposal_details?.length,
      );
      expect(generatedPayload.proposal_details).toEqual(
        expect.arrayContaining(mockExpectedBOPSPayload.proposal_details),
      );
    });

    it("attaches planx_debug_data to the payload that matches the raw session data", () => {
      expect(generatedPayload.planx_debug_data?.passport).toStrictEqual(
        mockSessionData?.passport,
      );
      expect(generatedPayload.planx_debug_data?.breadcrumbs).toStrictEqual(
        mockSessionData?.breadcrumbs,
      );
    });
  });

  describe("Redacted BOPS payload", () => {
    const redactedPayload = computeBOPSParams({
      breadcrumbs: mockSessionData.breadcrumbs,
      flow: mockPublishedLDCFlow,
      passport: mockSessionData.passport,
      sessionId: "969b912c-f196-4ec6-ac73-133f2a516f60",
      flowName: "Apply for a lawful development certificate",
      keysToRedact: [
        "applicant.email",
        "applicant.phone.primary",
        "applicant.phone.secondary",
      ],
    });

    it("excludes redacted keys and payment details", () => {
      // check the response shape excluding proposal_details as order can vary
      const generatedMinimumPayload = omit(redactedPayload, [
        "proposal_details",
      ]);
      const mockExpectedMinimumPayload = omit(mockExpectedBOPSPayload, [
        "proposal_details",
        "payment_amount",
        "payment_reference",
      ]);
      mockExpectedMinimumPayload.applicant_email = "REDACTED";
      mockExpectedMinimumPayload.applicant_phone = "REDACTED";
      expect(generatedMinimumPayload).toStrictEqual(mockExpectedMinimumPayload);
    });
  });
});
