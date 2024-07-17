import type {
  Breadcrumbs,
  FlowGraph,
  NormalizedFlow,
  OrderedBreadcrumbs,
  OrderedFlow,
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
    parentId: "_root",
    sectionId: "firstSection",
    data: {
      title: "First Section",
    },
    type: ComponentType.Section,
  },
  {
    id: "firstQuestion",
    parentId: "firstSection",
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
    sectionId: "firstSection",
    data: {
      text: "Answer 1",
    },
    type: ComponentType.Answer,
  },
  {
    id: "secondSection",
    parentId: "firstQuestion",
    sectionId: "secondSection",
    data: {
      title: "Second Section",
    },
    type: ComponentType.Section,
  },
  {
    id: "secondQuestion",
    parentId: "secondSection",
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
    sectionId: "secondSection",
    data: {
      text: "Answer 2",
    },
    type: ComponentType.Answer,
  },
  {
    id: "thirdSection",
    parentId: "secondQuestion",
    sectionId: "thirdSection",
    data: {
      title: "Third Section",
    },
    type: ComponentType.Section,
  },
  {
    id: "thirdQuestion",
    parentId: "thirdSection",
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
    sectionId: "thirdSection",
    data: {
      text: "Answer 3",
    },
    type: ComponentType.Answer,
  },
];

export const normalizedFlow: NormalizedFlow = [
  {
    id: "firstSection",
    sectionId: "firstSection",
    rootNodeId: "firstSection",
    parentId: "_root",
    data: {
      title: "First Section",
    },
    type: ComponentType.Section,
  },
  {
    id: "firstQuestion",
    sectionId: "firstSection",
    rootNodeId: "firstQuestion",
    parentId: "firstSection",
    data: {
      text: "First Question",
    },
    type: ComponentType.Question,
    edges: ["firstAnswer"],
  },
  {
    id: "firstAnswer",
    sectionId: "firstSection",
    rootNodeId: "firstQuestion",
    parentId: "firstQuestion",
    data: {
      text: "Answer 1",
    },
    type: ComponentType.Answer,
  },
  {
    id: "secondSection",
    sectionId: "secondSection",
    rootNodeId: "secondSection",
    parentId: "firstQuestion",
    data: {
      title: "Second Section",
    },
    type: ComponentType.Section,
  },
  {
    id: "secondQuestion",
    sectionId: "secondSection",
    rootNodeId: "secondQuestion",
    parentId: "secondSection",
    data: {
      text: "Second Question",
    },
    type: ComponentType.Question,
    edges: ["secondAnswer"],
  },
  {
    id: "secondAnswer",
    sectionId: "secondSection",
    rootNodeId: "secondQuestion",
    parentId: "secondQuestion",
    data: {
      text: "Answer 2",
    },
    type: ComponentType.Answer,
  },
  {
    id: "thirdSection",
    sectionId: "thirdSection",
    rootNodeId: "thirdSection",
    parentId: "secondQuestion",
    data: {
      title: "Third Section",
    },
    type: ComponentType.Section,
  },
  {
    id: "thirdQuestion",
    sectionId: "thirdSection",
    rootNodeId: "thirdQuestion",
    parentId: "thirdSection",
    data: {
      text: "Third Question",
    },
    type: ComponentType.Question,
    edges: ["thirdAnswer"],
  },
  {
    id: "thirdAnswer",
    sectionId: "thirdSection",
    rootNodeId: "thirdQuestion",
    parentId: "thirdQuestion",
    data: {
      text: "Answer 3",
    },
    type: ComponentType.Answer,
  },
];

export const sectionNodes: NormalizedFlow = [
  {
    id: "firstSection",
    sectionId: "firstSection",
    rootNodeId: "firstSection",
    parentId: "_root",
    data: {
      title: "First Section",
    },
    type: ComponentType.Section,
  },
  {
    id: "secondSection",
    sectionId: "secondSection",
    rootNodeId: "secondSection",
    parentId: "firstQuestion",
    data: {
      title: "Second Section",
    },
    type: ComponentType.Section,
  },
  {
    id: "thirdSection",
    sectionId: "thirdSection",
    rootNodeId: "thirdSection",
    parentId: "secondQuestion",
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
    questionData: {
      title: "First Section",
    },
  },
  {
    id: "firstQuestion",
    type: ComponentType.Question,
    sectionId: "firstSection",
    autoAnswered: false,
    answers: ["firstAnswer"],
    questionData: {
      text: "First Question",
    },
    answerData: {
      firstAnswer: {
        text: "Answer 1",
      },
    },
  },
  {
    id: "secondSection",
    type: ComponentType.Section,
    sectionId: "secondSection",
    autoAnswered: false,
    questionData: {
      title: "Second Section",
    },
  },
  {
    id: "secondQuestion",
    type: ComponentType.Question,
    sectionId: "secondSection",
    autoAnswered: false,
    answers: ["secondAnswer"],
    questionData: {
      text: "Second Question",
    },
    answerData: {
      secondAnswer: {
        text: "Answer 2",
      },
    },
  },
  {
    id: "thirdSection",
    type: ComponentType.Section,
    sectionId: "thirdSection",
    autoAnswered: false,
    questionData: {
      title: "Third Section",
    },
  },
  {
    id: "thirdQuestion",
    type: ComponentType.Question,
    sectionId: "thirdSection",
    autoAnswered: false,
    answers: ["thirdAnswer"],
    questionData: {
      text: "Third Question",
    },
    answerData: {
      thirdAnswer: {
        text: "Answer 3",
      },
    },
  },
];
