import { getBOPSParams } from "../index";

describe("works is set correctly based on the passport", () => {
  const testParams = {
    breadcrumbs: {},
    flow: { _root: { edges: [] } },
    sessionId: "123",
    flowName: "Apply for a lawful development certificate",
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
