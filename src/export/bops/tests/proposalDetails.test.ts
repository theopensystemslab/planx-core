import type {
  Breadcrumbs,
  FlowGraph,
  QuestionAndResponses,
} from "../../../types";
import { formatProposalDetails } from "../index";
import { flowWithThreeSections, sectionBreadcrumbs } from "../mocks/sections";

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
      "8AOC7IRavY",
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
  "8AOC7IRavY": {
    data: {
      text: "This is a sticky note question",
      neverAutoAnswer: false,
    },
    type: 100,
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
        metadata: {},
        question: "address question",
        responses: [{ value: "line1, line, town, county, postcode" }],
      },
      {
        metadata: {},
        question: "checklist",
        responses: [{ value: "1" }, { value: "2" }],
      },
      {
        metadata: {},
        question: "expandable checklist question",
        responses: [{ value: "c1" }, { value: "c2" }, { value: "c3" }],
      },
      {
        metadata: {},
        question: "date question",
        responses: [{ value: "1999-01-01" }],
      },
      {
        metadata: {},
        question: "number question",
        responses: [{ value: "500" }],
      },
      {
        metadata: {},
        question: "regular question",
        responses: [{ value: "a1" }],
      },
      {
        metadata: {},
        question: "text question",
        responses: [{ value: "testanswer" }],
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
        metadata: {},
        question: "address question",
        responses: [{ value: "line1, line, town, county, postcode" }],
      },
      {
        metadata: {},
        question: "checklist",
        responses: [{ value: "1" }, { value: "2" }],
      },
      {
        metadata: {},
        question: "expandable checklist question",
        responses: [{ value: "c1" }, { value: "c2" }, { value: "c3" }],
      },
      {
        metadata: {},
        question: "date question",
        responses: [{ value: "1999-01-01" }],
      },
      {
        metadata: {},
        question: "number question",
        responses: [{ value: "500" }],
      },
      {
        metadata: {},
        question: "regular question",
        responses: [{ value: "a1" }],
      },
      {
        metadata: {},
        question: "text question",
        responses: [{ value: "testanswer" }],
      },
    ],
  };

  const actual = formatProposalDetails({
    flow: mockFlow,
    breadcrumbs: mockBreadcrumbsWithAdditionalNode,
  });
  expect(actual).toStrictEqual(expected);
});

test("sticky note question nodes are omitted", () => {
  const mockBreadcrumbsWithAdditionalNode = {
    ...mockBreadcrumbs,
    "8AOC7IRavY": {
      auto: true,
    },
  };

  const expected = {
    feedback: {
      find_property: "test",
    },
    proposalDetails: [
      {
        metadata: {},
        question: "address question",
        responses: [{ value: "line1, line, town, county, postcode" }],
      },
      {
        metadata: {},
        question: "checklist",
        responses: [{ value: "1" }, { value: "2" }],
      },
      {
        metadata: {},
        question: "expandable checklist question",
        responses: [{ value: "c1" }, { value: "c2" }, { value: "c3" }],
      },
      {
        metadata: {},
        question: "date question",
        responses: [{ value: "1999-01-01" }],
      },
      {
        metadata: {},
        question: "number question",
        responses: [{ value: "500" }],
      },
      {
        metadata: {},
        question: "regular question",
        responses: [{ value: "a1" }],
      },
      {
        metadata: {},
        question: "text question",
        responses: [{ value: "testanswer" }],
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

describe("Components which use an internal schema", () => {
  test("Page component", () => {
    const mockFlow: FlowGraph = {
      _root: {
        edges: ["PQKZF4HWmv"],
      },
      PQKZF4HWmv: {
        type: 810,
        data: {
          fn: "mockData",
          title: "This is a page component",
          schemaName: "Advert consent",
          schema: {
            type: "Proposed advertisements",
            fields: [
              {
                type: "number",
                data: {
                  title: "How many fascia signs are you applying for?",
                  fn: "fascia",
                  allowNegatives: false,
                },
              },
              {
                type: "number",
                data: {
                  title:
                    "How many projecting or hanging signs are you applying for?",
                  fn: "projecting",
                  allowNegatives: false,
                },
              },
              {
                type: "number",
                data: {
                  title: "How many hoardings are you applying for?",
                  fn: "hoarding",
                  allowNegatives: false,
                },
              },
              {
                type: "number",
                data: {
                  title: "How many other advertisements are you applying for?",
                  fn: "other",
                  allowNegatives: false,
                },
              },
            ],
            min: 1,
            max: 1,
          },
          tags: [],
        },
      },
    };

    const mockBreadcrumbs: Breadcrumbs = {
      PQKZF4HWmv: {
        auto: false,
        data: {
          mockData: [
            {
              fascia: 1,
              projecting: 2,
              hoarding: 3,
              other: 4,
            },
          ],
          "mockData.fascia": 1,
          "mockData.projecting": 2,
          "mockData.hoarding": 3,
          "mockData.other": 4,
        },
      },
    };

    const expected = {
      feedback: undefined,
      proposalDetails: [
        {
          metadata: {},
          question: "How many fascia signs are you applying for?",
          responses: [{ value: "1" }],
        },
        {
          metadata: {},
          question:
            "How many projecting or hanging signs are you applying for?",
          responses: [{ value: "2" }],
        },
        {
          metadata: {},
          question: "How many hoardings are you applying for?",
          responses: [{ value: "3" }],
        },
        {
          metadata: {},
          question: "How many other advertisements are you applying for?",
          responses: [{ value: "4" }],
        },
      ],
    };

    const actual = formatProposalDetails({
      flow: mockFlow,
      breadcrumbs: mockBreadcrumbs,
    });

    // Formatted as expected
    expect(actual).toStrictEqual(expected);

    // Responses are cast to strings
    expect(actual.proposalDetails[0].responses[0]).toHaveProperty("value", "1");
  });

  test("List component", () => {
    const mockFlow: FlowGraph = {
      _root: {
        edges: ["oOD6xqekEk"],
      },
      oOD6xqekEk: {
        type: 800,
        data: {
          fn: "mockData",
          title: "Residential units (GLA) - Gained",
          schemaName: "Residential units (GLA) - Gained",
          schema: {
            type: "Gained residential unit type",
            fields: [
              {
                type: "number",
                data: {
                  title: "Number of units of this type",
                  description:
                    "This is the number of units of this type that are gained.",
                  fn: "identicalUnits",
                  allowNegatives: false,
                },
              },
              {
                type: "question",
                data: {
                  title: "What best describes this unit?",
                  fn: "type",
                  options: [
                    {
                      id: "terraced",
                      data: {
                        text: "Terraced home",
                        val: "terraced",
                      },
                    },
                    {
                      id: "semiDetached",
                      data: {
                        text: "Semi detached home",
                        val: "semiDetached",
                      },
                    },
                    {
                      id: "detached",
                      data: {
                        text: "Detached home",
                        val: "detached",
                      },
                    },
                    {
                      id: "flat",
                      data: {
                        text: "Flat/apartment or maisonette",
                        val: "flat",
                      },
                    },
                    {
                      id: "LW",
                      data: {
                        text: "Live/work unit",
                        val: "LW",
                      },
                    },
                    {
                      id: "cluster",
                      data: {
                        text: "Cluster flat",
                        val: "cluster",
                      },
                    },
                    {
                      id: "studio",
                      data: {
                        text: "Studio or bedsit",
                        val: "studio",
                      },
                    },
                    {
                      id: "coLiving",
                      data: {
                        text: "Co living unit",
                        val: "coLiving",
                      },
                    },
                    {
                      id: "hostel",
                      data: {
                        text: "Hostel room",
                        val: "hostel",
                      },
                    },
                    {
                      id: "HMO",
                      data: {
                        text: "HMO",
                        val: "HMO",
                      },
                    },
                    {
                      id: "student",
                      data: {
                        text: "Student accommodation",
                        val: "student",
                      },
                    },
                    {
                      id: "other",
                      data: {
                        text: "Other",
                        val: "other",
                      },
                    },
                  ],
                },
              },
              {
                type: "number",
                data: {
                  title:
                    "What will be the Gross Internal Floor Area (GIA) of this unit?",
                  units: "m²",
                  fn: "area",
                  allowNegatives: false,
                },
              },
              {
                type: "number",
                data: {
                  title: "How many habitable rooms will this unit have?",
                  fn: "habitable",
                  allowNegatives: false,
                },
              },
              {
                type: "number",
                data: {
                  title: "How many bedrooms will this unit have?",
                  fn: "bedrooms",
                  allowNegatives: false,
                },
              },
              {
                type: "question",
                data: {
                  title: "What best describes the tenure of this unit?",
                  fn: "tenure",
                  options: [
                    {
                      id: "LAR",
                      data: {
                        text: "London Affordable Rent",
                        val: "LAR",
                      },
                    },
                    {
                      id: "AR",
                      data: {
                        text: "Affordable rent (not at LAR benchmark rents)",
                        val: "AR",
                      },
                    },
                    {
                      id: "SR",
                      data: {
                        text: "Social rent",
                        val: "SR",
                      },
                    },
                    {
                      id: "LRR",
                      data: {
                        text: "London Living Rent",
                        val: "LRR",
                      },
                    },
                    {
                      id: "sharedEquity",
                      data: {
                        text: "Shared equity",
                        val: "sharedEquity",
                      },
                    },
                    {
                      id: "LSO",
                      data: {
                        text: "London Shared Ownership",
                        val: "LSO",
                      },
                    },
                    {
                      id: "DMS",
                      data: {
                        text: "Discount market sale",
                        val: "DMS",
                      },
                    },
                    {
                      id: "DMR",
                      data: {
                        text: "Discount market rent",
                        val: "DMR",
                      },
                    },
                    {
                      id: "DMRLLR",
                      data: {
                        text: "Discount market rent (charged at London Living Rents)",
                        val: "DMRLLR",
                      },
                    },
                    {
                      id: "marketForRent",
                      data: {
                        text: "Market for rent",
                        val: "marketForRent",
                      },
                    },
                    {
                      id: "SH",
                      data: {
                        text: "Starter homes",
                        val: "SH",
                      },
                    },
                    {
                      id: "selfCustomBuild",
                      data: {
                        text: "Self-build and custom build",
                        val: "selfCustomBuild",
                      },
                    },
                    {
                      id: "marketForSale",
                      data: {
                        text: "Market for sale",
                        val: "marketForSale",
                      },
                    },
                    {
                      id: "other",
                      data: {
                        text: "Other",
                        val: "other",
                      },
                    },
                  ],
                },
              },
              {
                type: "question",
                data: {
                  title: "What best describes the provider of this unit?",
                  fn: "provider",
                  options: [
                    {
                      id: "private",
                      data: {
                        text: "Private",
                        val: "private",
                      },
                    },
                    {
                      id: "privateRented",
                      data: {
                        text: "Private rented sector",
                        val: "privateRented",
                      },
                    },
                    {
                      id: "HA",
                      data: {
                        text: "Housing association",
                        val: "HA",
                      },
                    },
                    {
                      id: "LA",
                      data: {
                        text: "Local authority",
                        val: "LA",
                      },
                    },
                    {
                      id: "publicAuthority",
                      data: {
                        text: "Other public authority",
                        val: "publicAuthority",
                      },
                    },
                    {
                      id: "councilDelivery",
                      data: {
                        text: "Council delivery company",
                        val: "councilDelivery",
                      },
                    },
                    {
                      id: "councilBuildToRent",
                      data: {
                        text: "Council delivered build to rent",
                        val: "councilBuildToRent",
                      },
                    },
                    {
                      id: "affordableHousing",
                      data: {
                        text: "Other affordable housing provider",
                        val: "affordableHousing",
                      },
                    },
                    {
                      id: "selfBuild",
                      data: {
                        text: "Self-build",
                        val: "selfBuild",
                      },
                    },
                  ],
                },
              },
              {
                type: "checklist",
                data: {
                  title:
                    "Will this unit be compliant with any of the following?",
                  fn: "compliance",
                  options: [
                    {
                      id: "m42",
                      data: {
                        text: "Part M4(2) of the Building Regulations 2010",
                      },
                    },
                    {
                      id: "m432a",
                      data: {
                        text: "Part M4(3)(2a) of the Building Regulations 2010",
                      },
                    },
                    {
                      id: "m432b",
                      data: {
                        text: "Part M4(3)(2b) of the Building Regulations 2010",
                      },
                    },
                    {
                      id: "none",
                      data: {
                        text: "None of these",
                      },
                    },
                  ],
                },
              },
              {
                type: "question",
                data: {
                  title: "Will this unit be built on garden land?",
                  fn: "garden",
                  options: [
                    {
                      id: "true",
                      data: {
                        text: "Yes",
                        val: "true",
                      },
                    },
                    {
                      id: "false",
                      data: {
                        text: "No",
                        val: "false",
                      },
                    },
                  ],
                },
              },
              {
                type: "question",
                data: {
                  title: "Will this unit provide sheltered accommodation?",
                  fn: "sheltered",
                  options: [
                    {
                      id: "true",
                      data: {
                        text: "Yes",
                        val: "true",
                      },
                    },
                    {
                      id: "false",
                      data: {
                        text: "No",
                        val: "false",
                      },
                    },
                  ],
                },
              },
              {
                type: "question",
                data: {
                  title: "Is this unit specifically designed for older people?",
                  fn: "olderPersons",
                  options: [
                    {
                      id: "true",
                      data: {
                        text: "Yes",
                        val: "true",
                      },
                    },
                    {
                      id: "false",
                      data: {
                        text: "No",
                        val: "false",
                      },
                    },
                  ],
                },
              },
            ],
            min: 1,
          },
        },
      },
    };

    const mockBreadcrumbs: Breadcrumbs = {
      oOD6xqekEk: {
        auto: false,
        data: {
          mockData: [
            {
              identicalUnits: 3,
              type: "flat",
              area: 3,
              habitable: 6,
              bedrooms: 3,
              tenure: "DMS",
              provider: "private",
              compliance: ["m42", "m432a", "m432b"],
              garden: "false",
              sheltered: "true",
              olderPersons: "true",
            },
            {
              identicalUnits: 6,
              type: "HMO",
              area: 66,
              habitable: 4,
              bedrooms: 3,
              tenure: "DMR",
              provider: "affordableHousing",
              compliance: ["m432b", "m432a"],
              garden: "false",
              sheltered: "true",
              olderPersons: "false",
            },
          ],
          "mockData.one.identicalUnits": 3,
          "mockData.one.type": "flat",
          "mockData.one.area": 3,
          "mockData.one.habitable": 6,
          "mockData.one.bedrooms": 3,
          "mockData.one.tenure": "DMS",
          "mockData.one.provider": "private",
          "mockData.one.compliance": ["m42", "m432a", "m432b"],
          "mockData.one.garden": "false",
          "mockData.one.sheltered": "true",
          "mockData.one.olderPersons": "true",
          "mockData.two.identicalUnits": 6,
          "mockData.two.type": "HMO",
          "mockData.two.area": 66,
          "mockData.two.habitable": 4,
          "mockData.two.bedrooms": 3,
          "mockData.two.tenure": "DMR",
          "mockData.two.provider": "affordableHousing",
          "mockData.two.compliance": ["m432b", "m432a"],
          "mockData.two.garden": "false",
          "mockData.two.sheltered": "true",
          "mockData.two.olderPersons": "false",
          "mockData.total.listItems": 2,
          "mockData.total.units": 9,
        },
      },
    };

    const expected = {
      proposalDetails: [
        {
          question:
            "[Gained residential unit type 1] Number of units of this type",
          responses: [
            {
              value: "3",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 1] What best describes this unit?",
          responses: [
            {
              value: "flat",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 1] What will be the Gross Internal Floor Area (GIA) of this unit?",
          responses: [
            {
              value: "3",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 1] How many habitable rooms will this unit have?",
          responses: [
            {
              value: "6",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 1] How many bedrooms will this unit have?",
          responses: [
            {
              value: "3",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 1] What best describes the tenure of this unit?",
          responses: [
            {
              value: "DMS",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 1] What best describes the provider of this unit?",
          responses: [
            {
              value: "private",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 1] Will this unit be compliant with any of the following?",
          responses: [
            {
              value: "m42",
            },
            {
              value: "m432a",
            },
            {
              value: "m432b",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 1] Will this unit be built on garden land?",
          responses: [
            {
              value: "false",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 1] Will this unit provide sheltered accommodation?",
          responses: [
            {
              value: "true",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 1] Is this unit specifically designed for older people?",
          responses: [
            {
              value: "true",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 2] Number of units of this type",
          responses: [
            {
              value: "6",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 2] What best describes this unit?",
          responses: [
            {
              value: "HMO",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 2] What will be the Gross Internal Floor Area (GIA) of this unit?",
          responses: [
            {
              value: "66",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 2] How many habitable rooms will this unit have?",
          responses: [
            {
              value: "4",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 2] How many bedrooms will this unit have?",
          responses: [
            {
              value: "3",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 2] What best describes the tenure of this unit?",
          responses: [
            {
              value: "DMR",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 2] What best describes the provider of this unit?",
          responses: [
            {
              value: "affordableHousing",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 2] Will this unit be compliant with any of the following?",
          responses: [
            {
              value: "m432b",
            },
            {
              value: "m432a",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 2] Will this unit be built on garden land?",
          responses: [
            {
              value: "false",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 2] Will this unit provide sheltered accommodation?",
          responses: [
            {
              value: "true",
            },
          ],
          metadata: {},
        },
        {
          question:
            "[Gained residential unit type 2] Is this unit specifically designed for older people?",
          responses: [
            {
              value: "false",
            },
          ],
          metadata: {},
        },
      ],
      feedback: undefined,
    };

    const actual = formatProposalDetails({
      flow: mockFlow,
      breadcrumbs: mockBreadcrumbs,
    });

    // Formatted as expected
    expect(actual).toStrictEqual(expected);

    // Multiple responses are handled
    // This response is for a ChecklistField
    expect(actual.proposalDetails[7].responses).toHaveLength(3);

    // Item number and schema type are prepended to questions
    expect(actual.proposalDetails[0].question).toMatch(
      /[Gained residential unit type 1]/,
    );
  });

  test("List component, with map fields", () => {
    const mockFlow: FlowGraph = {
      _root: {
        edges: ["7RJ1NQttcX", "oOD6xqekEk"],
      },
      "7RJ1NQttcX": {
        data: {
          title: "Find the property",
          newAddressTitle:
            "Click or tap at where the property is on the map and name it below",
          allowNewAddresses: false,
          newAddressDescription:
            "You will need to select a location and provide a name to continue",
          newAddressDescriptionLabel: "Name the site",
        },
        type: 9,
      },
      oOD6xqekEk: {
        data: {
          fn: "mockData",
          tags: [],
          title: "Trees",
          schema: {
            min: 1,
            type: "Tree type",
            fields: [
              {
                data: {
                  fn: "species",
                  type: "short",
                  title: "Species",
                },
                type: "text",
              },
              {
                data: {
                  fn: "work",
                  type: "short",
                  title: "Proposed work",
                },
                type: "text",
              },
              {
                data: {
                  fn: "justification",
                  type: "short",
                  title: "Justification",
                },
                type: "text",
              },
              {
                data: {
                  fn: "urgency",
                  title: "Urgency",
                  options: [
                    {
                      id: "low",
                      data: {
                        val: "low",
                        text: "Low",
                      },
                    },
                    {
                      id: "moderate",
                      data: {
                        val: "moderate",
                        text: "Moderate",
                      },
                    },
                    {
                      id: "high",
                      data: {
                        val: "high",
                        text: "High",
                      },
                    },
                    {
                      id: "urgent",
                      data: {
                        val: "urgent",
                        text: "Urgent",
                      },
                    },
                  ],
                },
                type: "question",
              },
              {
                data: {
                  fn: "completionDate",
                  title: "Expected completion date",
                  description: "For example, 16 04 2027",
                },
                type: "date",
              },
              {
                data: {
                  fn: "features",
                  title: "Where is it? Plot as many as apply",
                  mapOptions: {
                    basemap: "MapboxSatellite",
                    drawMany: true,
                    drawType: "Point",
                    drawColor: "#66ff00",
                  },
                },
                type: "map",
              },
            ],
          },
          schemaName: "Trees",
        },
        type: 800,
      },
    };

    const mockBreadcrumbs: Breadcrumbs = {
      "7RJ1NQttcX": {
        auto: false,
        data: {
          _address: {
            uprn: "100021853107",
            usrn: "21900730",
            blpu_code: "2",
            latitude: 51.4500211,
            longitude: -0.140395,
            organisation: null,
            sao: "",
            saoEnd: "",
            pao: "1",
            paoEnd: "",
            street: "HONEYBROOK ROAD",
            town: "LONDON",
            postcode: "SW12 0DP",
            ward: "E05014101",
            x: 529315,
            y: 173977,
            planx_description: "Residential - Terraced",
            planx_value: "residential.dwelling.house.terrace",
            single_line_address:
              "1, HONEYBROOK ROAD, LONDON, LAMBETH, SW12 0DP",
            title: "1, HONEYBROOK ROAD, LONDON",
            source: "os",
          },
          "property.type": ["residential.dwelling.house.terrace"],
          "property.localAuthorityDistrict": ["Lambeth"],
          "property.region": ["London"],
          "property.boundary.title": {
            geometry: {
              type: "MultiPolygon",
              coordinates: [
                [
                  [
                    [-0.140286, 51.449978],
                    [-0.14025, 51.450032],
                    [-0.140342, 51.450057],
                    [-0.14041, 51.450075],
                    [-0.140496, 51.450099],
                    [-0.140572, 51.450119],
                    [-0.140609, 51.450063],
                    [-0.140286, 51.449978],
                  ],
                ],
              ],
            },
            type: "Feature",
            properties: {
              "entry-date": "2024-05-06",
              "start-date": "2002-11-30",
              "end-date": "",
              entity: 12000560093,
              name: "",
              dataset: "title-boundary",
              typology: "geography",
              reference: "36780349",
              prefix: "title-boundary",
              "organisation-entity": "13",
            },
          },
          "property.boundary.title.area": 161.15,
          "property.boundary.title.area.hectares": 0.016115,
          "findProperty.action": "Selected an existing address",
        },
      },
      oOD6xqekEk: {
        auto: false,
        data: {
          mockData: [
            {
              species: "Oak",
              work: "Cut",
              justification: "Required",
              urgency: "low",
              completionDate: "2025-11-11",
              features: [
                {
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [-0.14031096108073457, 51.449894101629866],
                  },
                  properties: {
                    label: "1",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [-0.14025483261082808, 51.44997710172876],
                  },
                  properties: {
                    label: "2",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [-0.14020244080366107, 51.45006701119439],
                  },
                  properties: {
                    label: "3",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [-0.14045793430046527, 51.45012560745087],
                  },
                  properties: {
                    label: "4",
                  },
                },
              ],
            },
            {
              species: "Birch",
              work: "Cut",
              justification: "Required",
              urgency: "low",
              completionDate: "2025-12-12",
              features: [
                {
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [-0.14049761752787732, 51.45015232366427],
                  },
                  properties: {
                    label: "1",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [-0.14044236596306203, 51.45015083081978],
                  },
                  properties: {
                    label: "2",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [-0.14044323632408542, 51.45009793677917],
                  },
                  properties: {
                    label: "3",
                  },
                },
                {
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [-0.14036174304721172, 51.45013673852853],
                  },
                  properties: {
                    label: "4",
                  },
                },
              ],
            },
          ],
          "mockData.one.species": "Oak",
          "mockData.one.work": "Cut",
          "mockData.one.justification": "Required",
          "mockData.one.urgency": "low",
          "mockData.one.completionDate": "2025-11-11",
          "mockData.one.features": [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [-0.14031096108073457, 51.449894101629866],
              },
              properties: {
                label: "1",
              },
            },
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [-0.14025483261082808, 51.44997710172876],
              },
              properties: {
                label: "2",
              },
            },
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [-0.14020244080366107, 51.45006701119439],
              },
              properties: {
                label: "3",
              },
            },
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [-0.14045793430046527, 51.45012560745087],
              },
              properties: {
                label: "4",
              },
            },
          ],
          "mockData.two.species": "Birch",
          "mockData.two.work": "Cut",
          "mockData.two.justification": "Required",
          "mockData.two.urgency": "low",
          "mockData.two.completionDate": "2025-12-12",
          "mockData.two.features": [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [-0.14049761752787732, 51.45015232366427],
              },
              properties: {
                label: "1",
              },
            },
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [-0.14044236596306203, 51.45015083081978],
              },
              properties: {
                label: "2",
              },
            },
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [-0.14044323632408542, 51.45009793677917],
              },
              properties: {
                label: "3",
              },
            },
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [-0.14036174304721172, 51.45013673852853],
              },
              properties: {
                label: "4",
              },
            },
          ],
          "mockData.total.listItems": 2,
        },
      },
    };

    const expected = {
      proposalDetails: [
        {
          question: "[Tree type 1] Species",
          responses: [
            {
              value: "Oak",
            },
          ],
          metadata: {},
        },
        {
          question: "[Tree type 1] Proposed work",
          responses: [
            {
              value: "Cut",
            },
          ],
          metadata: {},
        },
        {
          question: "[Tree type 1] Justification",
          responses: [
            {
              value: "Required",
            },
          ],
          metadata: {},
        },
        {
          question: "[Tree type 1] Urgency",
          responses: [
            {
              value: "low",
            },
          ],
          metadata: {},
        },
        {
          question: "[Tree type 1] Expected completion date",
          responses: [
            {
              value: "2025-11-11",
            },
          ],
          metadata: {},
        },
        {
          question: "[Tree type 1] Where is it? Plot as many as apply",
          responses: [
            {
              value:
                '{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.14031096108073457,51.449894101629866]},"properties":{"label":"1"}}',
            },
            {
              value:
                '{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.14025483261082808,51.44997710172876]},"properties":{"label":"2"}}',
            },
            {
              value:
                '{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.14020244080366107,51.45006701119439]},"properties":{"label":"3"}}',
            },
            {
              value:
                '{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.14045793430046527,51.45012560745087]},"properties":{"label":"4"}}',
            },
          ],
          metadata: {},
        },
        {
          question: "[Tree type 2] Species",
          responses: [
            {
              value: "Birch",
            },
          ],
          metadata: {},
        },
        {
          question: "[Tree type 2] Proposed work",
          responses: [
            {
              value: "Cut",
            },
          ],
          metadata: {},
        },
        {
          question: "[Tree type 2] Justification",
          responses: [
            {
              value: "Required",
            },
          ],
          metadata: {},
        },
        {
          question: "[Tree type 2] Urgency",
          responses: [
            {
              value: "low",
            },
          ],
          metadata: {},
        },
        {
          question: "[Tree type 2] Expected completion date",
          responses: [
            {
              value: "2025-12-12",
            },
          ],
          metadata: {},
        },
        {
          question: "[Tree type 2] Where is it? Plot as many as apply",
          responses: [
            {
              value:
                '{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.14049761752787732,51.45015232366427]},"properties":{"label":"1"}}',
            },
            {
              value:
                '{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.14044236596306203,51.45015083081978]},"properties":{"label":"2"}}',
            },
            {
              value:
                '{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.14044323632408542,51.45009793677917]},"properties":{"label":"3"}}',
            },
            {
              value:
                '{"type":"Feature","geometry":{"type":"Point","coordinates":[-0.14036174304721172,51.45013673852853]},"properties":{"label":"4"}}',
            },
          ],
          metadata: {},
        },
      ],
      feedback: undefined,
    };

    const actual = formatProposalDetails({
      flow: mockFlow,
      breadcrumbs: mockBreadcrumbs,
    });

    // Formatted as expected
    expect(actual).toStrictEqual(expected);

    // MapField responses are serialised to strings
    expect(actual.proposalDetails[5].responses[0]).toHaveProperty(
      "value",
      expect.stringContaining('"type":"Feature"'),
    );
  });
});
