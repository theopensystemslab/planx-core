import type { EnrichedCrumb, Node } from "../../../types/index.js";
import { ComponentType } from "../../../types/index.js";
import { getMapAndLabelProposalDetails } from "../utils/mapAndLabel.js";
import { getSchemaProposalDetails } from "../utils/schema.js";

const schemaNode = {
  type: ComponentType.List,
  data: {
    fn: "proposal.units",
    title: "Units",
    schema: {
      type: "Unit",
      fields: [{ data: { fn: "count", title: "Count" } }],
    },
  },
} as Node;

const crumbWithInvalidData = (data: Record<string, unknown>) =>
  ({ type: ComponentType.List, data }) as unknown as EnrichedCrumb;

describe("getSchemaProposalDetails()", () => {
  it("forwards the cause of invalid response data", () => {
    const crumb = crumbWithInvalidData({ "proposal.units": "not an array" });

    expect(() => getSchemaProposalDetails(crumb, schemaNode, {})).toThrow(
      expect.objectContaining({
        message: expect.stringMatching(/Failed to get schema proposal details/),
        cause: expect.objectContaining({
          properties: expect.objectContaining({
            "proposal.units": expect.any(Object),
          }),
        }),
      }),
    );
  });
});

describe("getMapAndLabelProposalDetails()", () => {
  it("forwards the cause of invalid response data", () => {
    const crumb = crumbWithInvalidData({
      "proposal.units": { type: "NotAFeatureCollection" },
    });

    expect(() => getMapAndLabelProposalDetails(crumb, schemaNode, {})).toThrow(
      expect.objectContaining({
        message: expect.stringMatching(
          /Failed to get MapAndLabel proposal details/,
        ),
        cause: expect.objectContaining({
          properties: expect.objectContaining({
            "proposal.units": expect.any(Object),
          }),
        }),
      }),
    );
  });
});
