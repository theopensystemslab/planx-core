import { computeBOPSParams } from "../index.js";

describe("ContactInput details are set correctly based on the breadcrumbs", () => {
  const testParams = {
    breadcrumbs: {
      DQl19JOA9y: {
        auto: false,
        data: {
          "_contact.applicant": {
            applicant: {
              title: "Ms",
              firstName: "Jane",
              lastName: "Doe",
              organisation: "Open Systems Lab",
              phone: "0123456789",
              email: "test@test.com",
            },
          },
          "applicant.title": "Ms",
          "applicant.name.first": "Jane",
          "applicant.name.last": "Doe",
          "applicant.company.name": "Open Systems Lab",
          "applicant.phone.primary": "0123456789",
          "applicant.email": "test@test.com",
        },
      },
    },
    passport: {
      data: {
        "_contact.applicant": {
          applicant: {
            title: "Ms",
            firstName: "Jane",
            lastName: "Doe",
            organisation: "Open Systems Lab",
            phone: "01 23 45 67 89",
            email: "test@test.com",
          },
        },
        "applicant.title": "Ms",
        "applicant.name.first": "Jane",
        "applicant.name.last": "Doe",
        "applicant.company.name": "Open Systems Lab",
        "applicant.phone.primary": "01 23 45 67 89",
        "applicant.email": "test@test.com",
      },
    },
    flow: {
      _root: {
        edges: ["DQl19JOA9y"],
      },
      DQl19JOA9y: {
        type: 135,
        data: {
          title: "Your contact details",
          description: "<p>So we can contact you about your application</p>",
          fn: "applicant",
        },
      },
    },
    sessionId: "123",
    flowName: "Apply for a lawful development certificate",
  };

  it("orders contact parts correctly when all fields are present", () => {
    const generatedPayload = computeBOPSParams(testParams);

    const proposalDetails = generatedPayload.proposal_details;
    const contactInputItem = proposalDetails?.filter(
      (detail) => detail.question === "Your contact details",
    )?.[0];

    expect(contactInputItem?.responses[0]).toEqual(
      expect.objectContaining({
        value: "Ms Jane Doe Open Systems Lab 0123456789 test@test.com",
      }),
    );
  });

  it("orders contact parts correctly when only required fields are present", () => {
    const generatedPayload = computeBOPSParams({
      ...testParams,
      breadcrumbs: {
        DQl19JOA9y: {
          auto: false,
          data: {
            "_contact.applicant": {
              applicant: {
                firstName: "Jane",
                lastName: "Doe",
                phone: "0123456789",
                email: "test@test.com",
              },
            },
            "applicant.name.first": "Jane",
            "applicant.name.last": "Doe",
            "applicant.phone.primary": "0123456789",
            "applicant.email": "test@test.com",
          },
        },
      },
    });

    const proposalDetails = generatedPayload.proposal_details;
    const contactInputItem = proposalDetails?.filter(
      (detail) => detail.question === "Your contact details",
    )?.[0];

    expect(contactInputItem?.responses[0]).toEqual(
      expect.objectContaining({
        value: "Jane Doe 0123456789 test@test.com",
      }),
    );
  });

  it("redacts form components correctly for `applicant`", () => {
    const generatedPayload = computeBOPSParams({
      ...testParams,
      keysToRedact: ["applicant.phone.primary", "applicant.email"],
    });

    const proposalDetails = generatedPayload.proposal_details;
    const contactInputItem = proposalDetails?.filter(
      (detail) => detail.question === "Your contact details",
    )?.[0];

    expect(contactInputItem?.responses[0]).toEqual(
      expect.objectContaining({
        value: "Ms Jane Doe Open Systems Lab REDACTED REDACTED",
      }),
    );
  });

  it("redacts form components correctly for `applicant.agent`", () => {
    const generatedPayload = computeBOPSParams({
      ...testParams,
      breadcrumbs: {
        DQl19JOA9y: {
          auto: false,
          data: {
            "_contact.applicant.agent": {
              applicant: {
                firstName: "Mister",
                lastName: "Agent",
                organisation: "Planning Agency LLC",
                phone: "0123456789",
                email: "test@test.com",
              },
            },
            "applicant.agent.name.first": "Mister",
            "applicant.agent.name.last": "Agent",
            "applicant.agent.company.name": "Planning Agency LLC",
            "applicant.agent.phone.primary": "0123456789",
            "applicant.agent.email": "test@test.com",
          },
        },
      },
      keysToRedact: [
        "applicant.agent.name.first",
        "applicant.agent.name.last",
        "applicant.agent.phone.primary",
        "applicant.agent.email",
      ],
    });

    const proposalDetails = generatedPayload.proposal_details;
    const contactInputItem = proposalDetails?.filter(
      (detail) => detail.question === "Your contact details",
    )?.[0];

    expect(contactInputItem?.responses[0]).toEqual(
      expect.objectContaining({
        value: "REDACTED REDACTED Planning Agency LLC REDACTED REDACTED",
      }),
    );
  });
});
