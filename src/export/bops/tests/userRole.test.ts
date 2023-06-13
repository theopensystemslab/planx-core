import { getBOPSParams } from "../index";
import { USER_ROLES } from "../model";

const mockFlow = {
  _root: {
    edges: ["user_role_question"],
  },
  user_role_question: {
    type: 100,
    data: {
      fn: "user.role",
      text: "user role",
    },
    edges: ["applicant_id", "agent_id", "proxy_id", "unsupported_id"],
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
};

describe("user_role is set correctly and mapped to supported BOPS roles", () => {
  const testParams = {
    flow: mockFlow,
    sessionId: "123",
    flowName: "Apply for a lawful development certificate",
    flags: [],
    resultFlagSet: [],
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
        },
      });
      expect(generatedPayload.user_role).toEqual(bopsValue);
    });
  });
});
