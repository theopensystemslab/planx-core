import { formatProposalDetails } from "../index";
import { flowWithThreeSections, sectionBreadcrumbs } from "../mocks/sections";
import { QuestionAndResponses } from "../model";

const mockFlow = {
  _root: {
    edges: [
      "zQlvAHP8lw",
      "LDGBpPGxWC",
      "9K5DHOJIFG",
      "DzIEfGlsGa",
      "JV5ochuXrU",
      "BLGxRowcwn",
      "aKhcyyHYAG",
      "AFoFsXSPus",
      "fnT4PnVhhJ",
    ],
  },
  zQlvAHP8lw: {
    type: 9,
  },
  "9K5DHOJIFG": {
    data: {
      text: "checklist",
      allRequired: false,
    },
    type: 105,
    edges: ["MvzjCmtxMH", "z6NYoKldtb"],
  },
  AFoFsXSPus: {
    data: {
      fn: "text",
      title: "text question",
    },
    type: 110,
  },
  BLGxRowcwn: {
    data: {
      fn: "distance",
      title: "number question",
      units: "miles",
    },
    type: 150,
  },
  DzIEfGlsGa: {
    data: {
      text: "expandable checklist question",
      categories: [
        {
          count: 2,
          title: "Section 1",
        },
        {
          count: 1,
          title: "Section 2",
        },
      ],
      allRequired: false,
    },
    type: 105,
    edges: ["N5m527zxB9", "p57v53iXh4", "JJEclI99HP"],
  },
  JJEclI99HP: {
    data: {
      text: "c3",
    },
    type: 200,
  },
  JV5ochuXrU: {
    data: {
      title: "date question",
    },
    type: 120,
  },
  LDGBpPGxWC: {
    data: {
      fn: "address1",
      title: "address question",
    },
    type: 130,
  },
  MvzjCmtxMH: {
    data: {
      text: "1",
    },
    type: 200,
  },
  N5m527zxB9: {
    data: {
      text: "c1",
    },
    type: 200,
  },
  UvtXroXmvm: {
    data: {
      text: "a2",
    },
    type: 200,
  },
  aKhcyyHYAG: {
    data: {
      text: "regular question",
    },
    type: 100,
    edges: ["mlQrX0WtFc", "UvtXroXmvm"],
  },
  mlQrX0WtFc: {
    data: {
      text: "a1",
    },
    type: 200,
  },
  p57v53iXh4: {
    data: {
      text: "c2",
    },
    type: 200,
  },
  z6NYoKldtb: {
    data: {
      text: "2",
    },
    type: 200,
  },
  fnT4PnVhhJ: {
    data: {
      title: "proposal completion date",
      fn: "proposal.completion.date",
    },
    type: 120,
  },
};

const mockBreadcrumbs = {
  zQlvAHP8lw: {
    auto: false,
    feedback: "test",
  },
  LDGBpPGxWC: {
    auto: false,
    data: {
      address1: {
        line1: "line1",
        line2: "line",
        town: "town",
        county: "county",
        postcode: "postcode",
      },
    },
  },
  "9K5DHOJIFG": {
    auto: false,
    answers: ["MvzjCmtxMH", "z6NYoKldtb"],
  },
  DzIEfGlsGa: {
    auto: false,
    answers: ["N5m527zxB9", "p57v53iXh4", "JJEclI99HP"],
  },
  JV5ochuXrU: {
    auto: false,
    data: {
      JV5ochuXrU: "1999-01-01",
    },
  },
  BLGxRowcwn: {
    auto: false,
    data: {
      distance: 500,
    },
  },
  aKhcyyHYAG: {
    auto: false,
    answers: ["mlQrX0WtFc"],
  },
  AFoFsXSPus: {
    auto: false,
    data: {
      text: "testanswer",
    },
  },
};

test("valid node types are serialized correctly for BOPS", () => {
  const expected = {
    feedback: {
      find_property: "test",
    },
    proposalDetails: [
      {
        question: "address question",
        responses: [{ value: "line1, line, town, county, postcode" }],
        metadata: { portal_name: "_root" },
      },
      {
        question: "checklist",
        responses: [{ value: "1" }, { value: "2" }],
        metadata: { portal_name: "_root" },
      },
      {
        question: "expandable checklist question",
        responses: [{ value: "c1" }, { value: "c2" }, { value: "c3" }],
        metadata: { portal_name: "_root" },
      },
      {
        question: "date question",
        responses: [{ value: "1999-01-01" }],
        metadata: { portal_name: "_root" },
      },
      {
        question: "number question",
        responses: [{ value: "500" }],
        metadata: { portal_name: "_root" },
      },
      {
        question: "regular question",
        responses: [{ value: "a1" }],
        metadata: { portal_name: "_root" },
      },
      {
        question: "text question",
        responses: [{ value: "testanswer" }],
        metadata: { portal_name: "_root" },
      },
    ],
  };

  const actual = formatProposalDetails({
    flow: mockFlow,
    breadcrumbs: mockBreadcrumbs,
  });
  expect(actual).toStrictEqual(expected);
});

test("removed nodes are skipped", () => {
  const mockBreadcrumbsWithAdditionalNode = {
    ...mockBreadcrumbs,
    AFoFsXSDog: {
      auto: false,
      data: {
        text: "Breadcrumb which no longer exists in the flow",
      },
    },
  };

  const expected = {
    feedback: {
      find_property: "test",
    },
    proposalDetails: [
      {
        question: "address question",
        responses: [{ value: "line1, line, town, county, postcode" }],
        metadata: { portal_name: "_root" },
      },
      {
        question: "checklist",
        responses: [{ value: "1" }, { value: "2" }],
        metadata: { portal_name: "_root" },
      },
      {
        question: "expandable checklist question",
        responses: [{ value: "c1" }, { value: "c2" }, { value: "c3" }],
        metadata: { portal_name: "_root" },
      },
      {
        question: "date question",
        responses: [{ value: "1999-01-01" }],
        metadata: { portal_name: "_root" },
      },
      {
        question: "number question",
        responses: [{ value: "500" }],
        metadata: { portal_name: "_root" },
      },
      {
        question: "regular question",
        responses: [{ value: "a1" }],
        metadata: { portal_name: "_root" },
      },
      {
        question: "text question",
        responses: [{ value: "testanswer" }],
        metadata: { portal_name: "_root" },
      },
    ],
  };

  const actual = formatProposalDetails({
    flow: mockFlow,
    breadcrumbs: mockBreadcrumbsWithAdditionalNode,
  });
  expect(actual).toStrictEqual(expected);
});

describe("Flow with sections", () => {
  test("a section_name is added to each metadata object", () => {
    const result = formatProposalDetails({
      flow: flowWithThreeSections,
      breadcrumbs: sectionBreadcrumbs,
    });
    result.proposalDetails.forEach((detail) => {
      expect(detail.metadata).toHaveProperty("section_name");
    });
  });

  test("the correct section name is added to metadata objects", () => {
    const result = formatProposalDetails({
      flow: flowWithThreeSections,
      breadcrumbs: sectionBreadcrumbs,
    });
    const [first, second, third] =
      result.proposalDetails as QuestionAndResponses[];

    expect(first?.metadata?.section_name).toBe("First section");
    expect(second?.metadata?.section_name).toBe("Second section");
    expect(third?.metadata?.section_name).toBe("Third section");
  });
});

describe("Flow without sections", () => {
  test("section_names are not appended to any metadata objects", () => {
    const result = formatProposalDetails({
      flow: mockFlow,
      breadcrumbs: mockBreadcrumbs,
    });

    result.proposalDetails.forEach((detail) => {
      expect(detail.metadata).not.toHaveProperty("section_name");
    });
  });
});
