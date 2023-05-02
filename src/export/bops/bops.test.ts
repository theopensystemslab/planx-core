import { mockExpectedBOPSPayload } from "./mocks/payload";
import { mockPublishedLDCFlow } from "./mocks/flow";
import { mockSessionData } from "./mocks/sessionData";
import { getBOPSParams } from ".";
import { DEFAULT_APPLICATION_TYPE, USER_ROLES } from "./model";

describe("Full BOPS payload", () => {
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
  const testParams = {
    breadcrumbs: {},
    flow: { _root: { edges: [] } },
    passport: {},
    sessionId: "123"
  };

  it("defaults to `lawfulness_certificate` if we can't fetch current route", () => {
    const generatedPayload = getBOPSParams({
      ...testParams,
      // @ts-ignore: Type 'undefined' is not assignable to type 'string'
      flowName: undefined,
    });
    expect(generatedPayload.application_type).toEqual(DEFAULT_APPLICATION_TYPE);
  });

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
    expect(generatedPayload.application_type).toEqual("Apply for prior approval");
  });
});

describe("user_role is set correctly and mapped to supported BOPS roles", () => {
  const testParams = {
    flow: {
      _root: {
        edges: ["user_role_question"],
      },
      user_role_question: {
        type: 100,
        data: {
          fn: "user.role",
          text: "user role",
        },
        edges: [
          "applicant_id",
          "agent_id",
          "proxy_id",
          "unsupported_id",
          "other_id",
        ],
      },
      applicant_id: {
        type: 200,
        data: {
          text: "Applicant",
          val: "applicant",
        },
      },
      agent_id: {
        type: 200,
        data: {
          text: "Agent",
          val: "agent",
        },
      },
      proxy_id: {
        type: 200,
        data: {
          text: "Proxy",
          val: "proxy",
        },
      },
      unsupported_id: {
        type: 200,
        data: {
          text: "Unsupported",
          val: "unsupported",
        },
      },
    },
    sessionId: "123",
    flowName: "Apply for a lawful development certificate"
  };

  [
    ...USER_ROLES.map((role) => ({ passportValue: role, bopsValue: role })),
    { passportValue: "unsupported", bopsValue: undefined },
  ].forEach(({ passportValue, bopsValue }) => {
    const expectedStr = JSON.stringify(bopsValue);

    it(`sets { user_role: ${expectedStr} } when the passport user.role = '${passportValue}'`, () => {
      const generatedPayload = getBOPSParams({
        ...testParams,
        breadcrumbs: {
          user_role_question: {
            auto: false,
            answers: [`${passportValue}_id`],
          },
        },
        passport: {
          data: {
            "user.role": [passportValue],
          },
        }
      });
      expect(generatedPayload.user_role).toEqual(bopsValue);
    });
  });
});

describe("works is set correctly based on the passport", () => {
  const testParams = {
    breadcrumbs: {},
    flow: { _root: { edges: [] } },
    sessionId: "123",
    flowName: "Apply for a lawful development certificate"
  };

  it("sets start date in the payload when present in the passport", () => {
    const generatedPayload = getBOPSParams({
      ...testParams,
      passport: {
        data: {
          "proposal.start.date": "2025-02-03",
        },
      },
    });
    expect(generatedPayload.works?.start_date).toEqual("2025-02-03");
  });

  it("sets completion date in the payload when present in the passport", () => {
    const generatedPayload = getBOPSParams({
      ...testParams,
      passport: {
        data: {
          "proposal.completion.date": "2025-02-28",
        },
      },
    });
    expect(generatedPayload.works?.finish_date).toEqual("2025-02-28");
  });

  it("omits works from the payload when neither date is present in the passport", () => {
    const generatedPayload = getBOPSParams({
      ...testParams,
      passport: {},
    });
    expect(generatedPayload).not.toHaveProperty("works");
  });
});
