import type {
  Breadcrumbs,
  FlowGraph,
  NormalizedFlow,
  OrderedBreadcrumbs,
  OrderedFlow,
} from "../../../types/index.js";
import { ComponentType } from "../../../types/index.js";

export const flow: FlowGraph = {
  _root: {
    edges: ["firstQuestion", "secondQuestion", "thirdQuestion"],
  },
  firstAnswer: {
    data: {
      text: "Answer 1",
    },
    type: ComponentType.Answer,
  },
  thirdAnswer: {
    data: {
      text: "Answer 3",
    },
    type: ComponentType.Answer,
  },
  secondAnswer: {
    data: {
      text: "Answer 2",
    },
    type: ComponentType.Answer,
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
    id: "firstQuestion",
    parentId: "_root",
    data: {
      text: "First Question",
    },
    type: ComponentType.Question,
    edges: ["firstAnswer"],
  },
  {
    id: "firstAnswer",
    parentId: "firstQuestion",
    data: {
      text: "Answer 1",
    },
    type: ComponentType.Answer,
  },
  {
    id: "secondQuestion",
    parentId: "_root",
    data: {
      text: "Second Question",
    },
    type: ComponentType.Question,
    edges: ["secondAnswer"],
  },
  {
    id: "secondAnswer",
    parentId: "secondQuestion",
    data: {
      text: "Answer 2",
    },
    type: ComponentType.Answer,
  },
  {
    id: "thirdQuestion",
    parentId: "_root",
    data: {
      text: "Third Question",
    },
    type: ComponentType.Question,
    edges: ["thirdAnswer"],
  },
  {
    id: "thirdAnswer",
    parentId: "thirdQuestion",
    data: {
      text: "Answer 3",
    },
    type: ComponentType.Answer,
  },
];

export const normalizedFlow: NormalizedFlow = [
  {
    id: "firstQuestion",
    parentId: "_root",
    rootNodeId: "firstQuestion",
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
    data: {
      text: "Answer 1",
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
    edges: ["secondAnswer"],
  },
  {
    id: "secondAnswer",
    parentId: "secondQuestion",
    rootNodeId: "secondQuestion",
    data: {
      text: "Answer 2",
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
      text: "Answer 3",
    },
    type: ComponentType.Answer,
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
    id: "secondQuestion",
    type: ComponentType.Question,
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
    id: "thirdQuestion",
    type: ComponentType.Question,
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
