import type {
  Flow,
  OrderedFlow,
  Breadcrumbs,
  OrderedBreadcrumbs,
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
    auto: false,
    answers: ["firstAnswer"],
  },
  {
    id: "secondQuestion",
    auto: false,
    answers: ["secondAnswer"],
  },
  {
    id: "thirdQuestion",
    auto: false,
    answers: ["thirdAnswer"],
  },
];
