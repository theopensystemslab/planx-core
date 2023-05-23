import type {
  FlowGraph,
  OrderedFlow,
  Breadcrumbs,
  StructuredNode,
  OrderedBreadcrumbs,
  StructuredFlow,
} from "../../../types";
import { ComponentType } from "../../../types";

export const flow: FlowGraph = {
  _root: {
    edges: [
      "firstSection",
      "firstQuestion",
      "secondSection",
      "secondQuestion",
      "thirdSection",
      "thirdQuestion",
    ],
  },
  secondAnswer: {
    data: {
      text: "Answer 2",
    },
    type: ComponentType.Answer,
  },
  firstSection: {
    data: {
      title: "First Section",
    },
    type: ComponentType.Section,
  },
  firstQuestion: {
    data: {
      text: "First Question",
    },
    type: ComponentType.Question,
    edges: ["firstAnswer"],
  },
  thirdQuestion: {
    data: {
      text: "Third Question",
    },
    type: ComponentType.Question,
    edges: ["thirdAnswer"],
  },
  thirdAnswer: {
    data: {
      text: "Answer 3",
    },
    type: ComponentType.Answer,
  },
  firstAnswer: {
    data: {
      text: "Answer 1",
    },
    type: ComponentType.Answer,
  },
  secondSection: {
    data: {
      title: "Second Section",
    },
    type: ComponentType.Section,
  },
  thirdSection: {
    data: {
      title: "Third Section",
    },
    type: ComponentType.Section,
  },
  secondQuestion: {
    data: {
      text: "Second Question",
    },
    type: ComponentType.Question,
    edges: ["secondAnswer"],
  },
};

export const orderedFlow: OrderedFlow = [
  {
    id: "firstSection",
    parentId: null,
    rootNodeId: "firstSection",
    sectionId: "firstSection",
    data: {
      title: "First Section",
    },
    type: ComponentType.Section,
  },
  {
    id: "firstQuestion",
    parentId: "firstSection",
    rootNodeId: "firstQuestion",
    sectionId: "firstSection",
    data: {
      text: "First Question",
    },
    type: ComponentType.Question,
    edges: ["firstAnswer"],
  },
  {
    id: "firstAnswer",
    parentId: "firstQuestion",
    rootNodeId: "firstQuestion",
    sectionId: "firstSection",
    data: {
      text: "Answer 1",
    },
    type: ComponentType.Answer,
  },
  {
    id: "secondSection",
    parentId: "firstQuestion",
    rootNodeId: "secondSection",
    sectionId: "secondSection",
    data: {
      title: "Second Section",
    },
    type: ComponentType.Section,
  },
  {
    id: "secondQuestion",
    parentId: "secondSection",
    rootNodeId: "secondQuestion",
    sectionId: "secondSection",
    data: {
      text: "Second Question",
    },
    type: ComponentType.Question,
    edges: ["secondAnswer"],
  },
  {
    id: "secondAnswer",
    parentId: "secondQuestion",
    rootNodeId: "secondQuestion",
    sectionId: "secondSection",
    data: {
      text: "Answer 2",
    },
    type: ComponentType.Answer,
  },
  {
    id: "thirdSection",
    parentId: "secondQuestion",
    rootNodeId: "thirdSection",
    sectionId: "thirdSection",
    data: {
      title: "Third Section",
    },
    type: ComponentType.Section,
  },
  {
    id: "thirdQuestion",
    parentId: "thirdSection",
    rootNodeId: "thirdQuestion",
    sectionId: "thirdSection",
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
    sectionId: "thirdSection",
    data: {
      text: "Answer 3",
    },
    type: ComponentType.Answer,
  },
];

export const structuredFlow: StructuredFlow = [
  {
    id: "firstSection",
    data: {
      title: "First Section",
    },
    type: ComponentType.Section,
  },
  {
    id: "firstQuestion",
    data: {
      text: "First Question",
    },
    type: ComponentType.Question,
    children: {
      oneOf: [
        {
          id: "firstAnswer",
          data: {
            text: "Answer 1",
          },
          type: ComponentType.Answer,
        },
      ],
    },
  },
  {
    id: "secondSection",
    data: {
      title: "Second Section",
    },
    type: ComponentType.Section,
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
          id: "secondAnswer",
          data: {
            text: "Answer 2",
          },
          type: ComponentType.Answer,
        },
      ],
    },
  },
  {
    id: "thirdSection",
    data: {
      title: "Third Section",
    },
    type: ComponentType.Section,
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
            text: "Answer 3",
          },
          type: ComponentType.Answer,
        },
      ],
    },
  },
];

export const sectionNodes: StructuredNode[] = [
  {
    id: "firstSection",
    data: {
      title: "First Section",
    },
    type: ComponentType.Section,
  },
  {
    id: "secondSection",
    data: {
      title: "Second Section",
    },
    type: ComponentType.Section,
  },
  {
    id: "thirdSection",
    data: {
      title: "Third Section",
    },
    type: ComponentType.Section,
  },
];

export const breadcrumbs: Breadcrumbs = {
  firstSection: {
    auto: false,
  },
  firstQuestion: {
    auto: false,
    answers: ["firstAnswer"],
  },
  secondSection: {
    auto: false,
  },
  secondQuestion: {
    auto: false,
    answers: ["secondAnswer"],
  },
  thirdSection: {
    auto: false,
  },
  thirdQuestion: {
    auto: false,
    answers: ["thirdAnswer"],
  },
};

export const orderedBreadcrumbs: OrderedBreadcrumbs = [
  {
    id: "firstSection",
    type: ComponentType.Section,
    sectionId: "firstSection",
    autoAnswered: false,
  },
  {
    id: "firstQuestion",
    type: ComponentType.Question,
    sectionId: "firstSection",
    autoAnswered: false,
    answers: ["firstAnswer"],
  },
  {
    id: "secondSection",
    type: ComponentType.Section,
    sectionId: "secondSection",
    autoAnswered: false,
  },
  {
    id: "secondQuestion",
    type: ComponentType.Question,
    sectionId: "secondSection",
    autoAnswered: false,
    answers: ["secondAnswer"],
  },
  {
    id: "thirdSection",
    type: ComponentType.Section,
    sectionId: "thirdSection",
    autoAnswered: false,
  },
  {
    id: "thirdQuestion",
    type: ComponentType.Question,
    sectionId: "thirdSection",
    autoAnswered: false,
    answers: ["thirdAnswer"],
  },
];
