import { computeBOPSParams } from "../index";

describe("AddressInput details are set correctly based on the breadcrumbs", () => {
  const testParams = {
    breadcrumbs: {
      u4SPni4RNZ: {
        auto: false,
        data: {
          "applicant.address": {
            line1: "10 Main Street",
            line2: "Apt 1",
            town: "Southwark",
            county: "London",
            postcode: "SE5 0HU",
            country: "UK",
          },
        },
      },
    },
    passport: {
      data: {
        "applicant.address": {
          line1: "10 Main Street",
          line2: "Apt 1",
          town: "Southwark",
          county: "London",
          postcode: "SE5 0HU",
          country: "UK",
        },
      },
    },
    flow: {
      _root: {
        edges: ["u4SPni4RNZ"],
      },
      u4SPni4RNZ: {
        type: 130,
        data: {
          title: "What's your address",
          description: "<p>If different than the site address</p>",
          fn: "applicant.address",
        },
      },
    },
    sessionId: "123",
    flowName: "Apply for a lawful development certificate",
  };

  it("orders address parts correctly when all fields are present", () => {
    const generatedPayload = computeBOPSParams(testParams);

    const proposalDetails = generatedPayload.proposal_details;
    const addressInputItem = proposalDetails?.filter(
      (detail) => detail.question === "What's your address",
    )?.[0];

    expect(addressInputItem?.responses[0]).toEqual(
      expect.objectContaining({
        value: "10 Main Street, Apt 1, Southwark, London, SE5 0HU, UK",
      }),
    );
  });

  it("orders address parts correctly when only required fields are present", () => {
    const generatedPayload = computeBOPSParams({
      ...testParams,
      breadcrumbs: {
        u4SPni4RNZ: {
          auto: false,
          data: {
            "applicant.address": {
              line1: "10 Main Street",
              line2: "",
              town: "Southwark",
              county: "",
              postcode: "SE5 0HU",
              country: "",
            },
          },
        },
      },
    });

    const proposalDetails = generatedPayload.proposal_details;
    const addressInputItem = proposalDetails?.filter(
      (detail) => detail.question === "What's your address",
    )?.[0];

    expect(addressInputItem?.responses[0]).toEqual(
      expect.objectContaining({
        value: "10 Main Street, Southwark, SE5 0HU",
      }),
    );
  });
});
