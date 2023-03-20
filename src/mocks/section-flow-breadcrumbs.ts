import type {
  FlowGraph,
  OrderedFlow,
  Breadcrumbs,
  EnrichedBreadcrumbs,
  NormalizedFlow,
} from "../types";
import { ComponentType } from "../types";

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
    data: {
      title: "First Section",
    },
    type: ComponentType.Section,
  },
  {
    id: "firstQuestion",
    parentId: "firstSection",
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
    id: "secondSection",
    parentId: "firstQuestion",
    data: {
      title: "Second Section",
    },
    type: ComponentType.Section,
  },
  {
    id: "secondQuestion",
    parentId: "secondSection",
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
    id: "thirdSection",
    parentId: "secondQuestion",
    data: {
      title: "Third Section",
    },
    type: ComponentType.Section,
  },
  {
    id: "thirdQuestion",
    parentId: "thirdSection",
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
    id: "firstSection",
    component: "Section",
    sectionId: "firstSection",
    rootNodeId: "firstSection",
    parentId: null,
    data: {
      title: "First Section",
    },
    type: ComponentType.Section,
  },
  {
    id: "firstQuestion",
    component: "Question",
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
    component: "Answer",
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
    component: "Section",
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
    component: "Question",
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
    component: "Answer",
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
    component: "Section",
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
    component: "Question",
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
    component: "Answer",
    sectionId: "thirdSection",
    rootNodeId: "thirdQuestion",
    parentId: "thirdQuestion",
    data: {
      text: "Answer 3",
    },
    type: ComponentType.Answer,
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

export const enrichedBreadcrumbs: EnrichedBreadcrumbs = [
  {
    id: "firstSection",
    sectionId: "firstSection",
    autoAnswered: false,
    details: {
      component: "Section",
      nodeData: {
        title: "First Section",
      },
    },
  },
  {
    id: "firstQuestion",
    sectionId: "firstSection",
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
    id: "secondSection",
    sectionId: "secondSection",
    autoAnswered: false,
    details: {
      component: "Section",
      nodeData: {
        title: "Second Section",
      },
    },
  },
  {
    id: "secondQuestion",
    sectionId: "secondSection",
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
    id: "thirdSection",
    sectionId: "thirdSection",
    autoAnswered: false,
    details: {
      component: "Section",
      nodeData: {
        title: "Third Section",
      },
    },
  },
  {
    id: "thirdQuestion",
    sectionId: "thirdSection",
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
