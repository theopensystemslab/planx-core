import type { Breadcrumbs, FlowGraph } from "../../../types";

export const flowWithThreeSections: FlowGraph = {
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
    type: 200,
  },
  firstSection: {
    data: {
      title: "First section",
    },
    type: 360,
  },
  firstQuestion: {
    data: {
      text: "First Question",
    },
    type: 100,
    edges: ["firstAnswer"],
  },
  thirdQuestion: {
    data: {
      text: "Third Question",
    },
    type: 100,
    edges: ["thirdAnswer"],
  },
  thirdAnswer: {
    data: {
      text: "Answer 3",
    },
    type: 200,
  },
  firstAnswer: {
    data: {
      text: "Answer 1",
    },
    type: 200,
  },
  secondSection: {
    data: {
      title: "Second section",
    },
    type: 360,
  },
  thirdSection: {
    data: {
      title: "Third section",
    },
    type: 360,
  },
  secondQuestion: {
    data: {
      text: "Second Question",
    },
    type: 100,
    edges: ["secondAnswer"],
  },
};

export const sectionBreadcrumbs: Breadcrumbs = {
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
