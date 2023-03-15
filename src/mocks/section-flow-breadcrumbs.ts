import type {
  Flow,
  OrderedFlow,
  Breadcrumbs,
  OrderedBreadcrumbs,
} from "../types";
import { ComponentType } from "../types";

export const flow: Flow = {
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
    edges: ["firstAnswer"],
  },
  {
    id: "firstAnswer",
    data: {
      text: "Answer 1",
    },
    type: ComponentType.Answer,
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
    edges: ["secondAnswer"],
  },
  {
    id: "secondAnswer",
    data: {
      text: "Answer 2",
    },
    type: ComponentType.Answer,
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
    edges: ["thirdAnswer"],
  },
  {
    id: "thirdAnswer",
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

export const orderedBreadcrumbs: OrderedBreadcrumbs = [
  {
    id: "firstSection",
    sectionId: "firstSection",
    auto: false,
  },
  {
    id: "firstQuestion",
    sectionId: "firstSection",
    auto: false,
    answers: ["firstAnswer"],
  },
  {
    id: "secondSection",
    sectionId: "secondSection",
    auto: false,
  },
  {
    id: "secondQuestion",
    sectionId: "secondSection",
    auto: false,
    answers: ["secondAnswer"],
  },
  {
    id: "thirdSection",
    sectionId: "thirdSection",
    auto: false,
  },
  {
    id: "thirdQuestion",
    sectionId: "thirdSection",
    auto: false,
    answers: ["thirdAnswer"],
  },
];
