import type {
  FlowGraph,
  OrderedFlow,
  Breadcrumbs,
  OrderedBreadcrumbs,
  StructuredFlow,
} from "../../../types";
import { ComponentType } from "../../../types";

export const flow: FlowGraph = {
  _root: {
    edges: ["firstQuestion", "secondQuestion", "thirdQuestion"],
  },
  Q2Answer3: {
    data: {
      text: "Q2Answer3",
    },
    type: ComponentType.Answer,
  },
  Q1Answer2: {
    data: {
      text: "Q1Answer2",
    },
    type: ComponentType.Answer,
  },
  Q2Answer2: {
    data: {
      text: "Q2Answer2",
    },
    type: ComponentType.Answer,
  },
  Q1Answer1: {
    data: {
      text: "Q1Answer1",
    },
    type: ComponentType.Answer,
  },
  thirdAnswer: {
    data: {
      text: "Q3Answer1",
    },
    type: ComponentType.Answer,
  },
  Q2Answer1: {
    data: {
      text: "Q2Answer1",
    },
    type: ComponentType.Answer,
  },
  firstQuestion: {
    data: {
      text: "First Question",
    },
    type: ComponentType.Question,
    edges: ["Q1Answer1", "Q1Answer2"],
  },
  thirdQuestion: {
    data: {
      text: "Third Question",
    },
    type: ComponentType.Question,
    edges: ["thirdAnswer"],
  },
  secondQuestion: {
    data: {
      text: "Second Question",
    },
    type: ComponentType.Question,
    edges: ["Q2Answer1", "Q2Answer2", "Q2Answer3"],
  },
};

export const orderedFlow: OrderedFlow = [
  {
    id: "firstQuestion",
    parentId: null,
    rootNodeId: "firstQuestion",
    data: {
      text: "First Question",
    },
    type: ComponentType.Question,
    edges: ["Q1Answer1", "Q1Answer2"],
  },
  {
    id: "Q1Answer1",
    parentId: "firstQuestion",
    rootNodeId: "firstQuestion",
    data: {
      text: "Q1Answer1",
    },
    type: ComponentType.Answer,
  },
  {
    id: "Q1Answer2",
    parentId: "firstQuestion",
    rootNodeId: "firstQuestion",
    data: {
      text: "Q1Answer2",
    },
    type: ComponentType.Answer,
  },
  {
    id: "secondQuestion",
    parentId: "firstQuestion",
    rootNodeId: "secondQuestion",
    data: {
      text: "Second Question",
    },
    type: ComponentType.Question,
    edges: ["Q2Answer1", "Q2Answer2", "Q2Answer3"],
  },
  {
    id: "Q2Answer1",
    parentId: "secondQuestion",
    rootNodeId: "secondQuestion",
    data: {
      text: "Q2Answer1",
    },
    type: ComponentType.Answer,
  },
  {
    id: "Q2Answer2",
    parentId: "secondQuestion",
    rootNodeId: "secondQuestion",
    data: {
      text: "Q2Answer2",
    },
    type: ComponentType.Answer,
  },
  {
    id: "Q2Answer3",
    parentId: "secondQuestion",
    rootNodeId: "secondQuestion",
    data: {
      text: "Q2Answer3",
    },
    type: ComponentType.Answer,
  },
  {
    id: "thirdQuestion",
    parentId: "secondQuestion",
    rootNodeId: "thirdQuestion",
    data: {
      text: "Third Question",
    },
    type: ComponentType.Question,
    edges: ["thirdAnswer"],
  },
  {
    id: "thirdAnswer",
    parentId: "thirdQuestion",
    rootNodeId: "thirdQuestion",
    data: {
      text: "Q3Answer1",
    },
    type: ComponentType.Answer,
  },
];

export const structuredFlow: StructuredFlow = [
  {
    id: "firstQuestion",
    data: {
      text: "First Question",
    },
    type: ComponentType.Question,
    children: {
      oneOf: [
        {
          id: "Q1Answer1",
          data: {
            text: "Q1Answer1",
          },
          type: ComponentType.Answer,
        },
        {
          id: "Q1Answer2",
          data: {
            text: "Q1Answer2",
          },
          type: ComponentType.Answer,
        },
      ],
    },
  },
  {
    id: "secondQuestion",
    data: {
      text: "Second Question",
    },
    type: ComponentType.Question,
    children: {
      oneOf: [
        {
          id: "Q2Answer1",
          data: {
            text: "Q2Answer1",
          },
          type: ComponentType.Answer,
        },
        {
          id: "Q2Answer2",
          data: {
            text: "Q2Answer2",
          },
          type: ComponentType.Answer,
        },
        {
          id: "Q2Answer3",
          data: {
            text: "Q2Answer3",
          },
          type: ComponentType.Answer,
        },
      ],
    },
  },
  {
    id: "thirdQuestion",
    data: {
      text: "Third Question",
    },
    type: ComponentType.Question,
    children: {
      oneOf: [
        {
          id: "thirdAnswer",
          data: {
            text: "Q3Answer1",
          },
          type: ComponentType.Answer,
        },
      ],
    },
  },
];

export const breadcrumbs: Breadcrumbs = {
  firstQuestion: {
    auto: false,
    answers: ["firstAnswer"],
  },
  secondQuestion: {
    auto: false,
    answers: ["secondAnswer"],
  },
  thirdQuestion: {
    auto: false,
    answers: ["thirdAnswer"],
  },
};

export const orderedBreadcrumbs: OrderedBreadcrumbs = [
  {
    id: "firstQuestion",
    type: ComponentType.Question,
    autoAnswered: false,
    answers: ["firstAnswer"],
  },
  {
    id: "secondQuestion",
    type: ComponentType.Question,
    autoAnswered: false,
    answers: ["secondAnswer"],
  },
  {
    id: "thirdQuestion",
    type: ComponentType.Question,
    autoAnswered: false,
    answers: ["thirdAnswer"],
  },
];
