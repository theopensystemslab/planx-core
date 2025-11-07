import { omit } from "lodash-es";

import { computeBOPSParams } from "../index.js";
import { getMockPublishedLDCFlow } from "../mocks/flow.js";
import { mockExpectedBOPSPayload } from "../mocks/payload.js";
import { mockSessionData } from "../mocks/sessionData.js";

describe("Full BOPS payload with invalid constraints", async () => {
  const passportWithInvalidConstraints = mockSessionData.passport;
  (passportWithInvalidConstraints.data._constraints as object[])?.push({
    error: "Constraints request failed",
    planxRequest: "https://api.editor.planx.dev/gis/roads/failed",
  });

  const generatedPayload = computeBOPSParams({
    breadcrumbs: mockSessionData.breadcrumbs,
    flow: await getMockPublishedLDCFlow(),
    passport: passportWithInvalidConstraints,
    sessionId: "969b912c-f196-4ec6-ac73-133f2a516f60",
    flowName: "Apply for a lawful development certificate",
  });

  it("builds the payload as expected", () => {
    const generatedMinimumPayload = omit(generatedPayload, [
      "proposal_details",
    ]);
    const mockExpectedMinimumPayload = omit(mockExpectedBOPSPayload, [
      "proposal_details",
    ]);

    expect(generatedMinimumPayload).toStrictEqual(mockExpectedMinimumPayload);
  });
});
