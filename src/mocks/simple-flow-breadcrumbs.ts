import type {
  Flow,
  OrderedFlow,
  Breadcrumbs,
  EnrichedBreadcrumbs,
  NormalizedFlow,
} from "../types";
import { ComponentType } from "../types";

export const flow: Flow = {
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
    parentId: null,
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
    parentId: "firstQuestion",
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
    parentId: "secondQuestion",
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
    component: "Question",
    parentId: null,
    rootNodeId: "firstQuestion",
    data: {
      text: "First Question",
    },
    type: ComponentType.Question,
    edges: ["firstAnswer"],
  },
  {
    id: "firstAnswer",
    component: "Answer",
    parentId: "firstQuestion",
    rootNodeId: "firstQuestion",
    data: {
      text: "Answer 1",
    },
    type: ComponentType.Answer,
  },
  {
    id: "secondQuestion",
    component: "Question",
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
    component: "Answer",
    parentId: "secondQuestion",
    rootNodeId: "secondQuestion",
    data: {
      text: "Answer 2",
    },
    type: ComponentType.Answer,
  },
  {
    id: "thirdQuestion",
    component: "Question",
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
    component: "Answer",
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

export const enrichedBreadcrumbs: EnrichedBreadcrumbs = [
  {
    id: "firstQuestion",
    autoAnswered: false,
    answers: ["firstAnswer"],
    details: {
      component: "Question",
      nodeData: {
        text: "First Question",
      },
      answerData: {
        firstAnswer: {
          text: "Answer 1",
        },
      },
    },
  },
  {
    id: "secondQuestion",
    autoAnswered: false,
    answers: ["secondAnswer"],
    details: {
      component: "Question",
      nodeData: {
        text: "Second Question",
      },
      answerData: {
        secondAnswer: {
          text: "Answer 2",
        },
      },
    },
  },
  {
    id: "thirdQuestion",
    autoAnswered: false,
    answers: ["thirdAnswer"],
    details: {
      component: "Question",
      nodeData: {
        text: "Third Question",
      },
      answerData: {
        thirdAnswer: {
          text: "Answer 3",
        },
      },
    },
  },
];
