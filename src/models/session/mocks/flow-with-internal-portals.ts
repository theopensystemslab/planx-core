import { ComponentType, FlowGraph } from "../../../types";

export const flow: FlowGraph = {
  _root: {
    edges: ["rootQuestionOne", "levelOne", "rootQuestionTwo"],
  },
  rootQuestionTwo: {
    data: {
      fn: "animal",
      tags: [],
      text: "Elephant",
      neverAutoAnswer: false,
    },
    type: ComponentType.Question,
    edges: ["rootAnswerTwo"],
  },
  levelTwoAnswer: {
    data: {
      val: "capybara",
      text: "Capybara",
    },
    type: ComponentType.Answer,
  },
  rootAnswerOne: {
    data: {
      val: "aardvark",
      text: "aardvark",
    },
    type: ComponentType.Answer,
  },
  rootAnswerTwo: {
    data: {
      val: "elephant",
      text: "Elephant",
    },
    type: ComponentType.Answer,
  },
  levelOneQuestionOne: {
    data: {
      fn: "animal",
      tags: [],
      text: "Baboon",
      neverAutoAnswer: false,
    },
    type: ComponentType.Question,
    edges: ["levelOneAnswerOne"],
  },
  levelTwo: {
    data: {
      text: "level two",
    },
    type: ComponentType.InternalPortal,
    edges: ["levelTwoQuestion"],
  },
  levelTwoQuestion: {
    data: {
      fn: "animal",
      text: "Capybara",
      neverAutoAnswer: false,
    },
    type: ComponentType.Question,
    edges: ["levelTwoAnswer"],
  },
  rootQuestionOne: {
    data: {
      fn: "animal",
      tags: [],
      text: "Aardvark",
      neverAutoAnswer: false,
    },
    type: ComponentType.Question,
    edges: ["rootAnswerOne"],
  },
  levelOne: {
    data: {
      text: "level one",
    },
    type: ComponentType.InternalPortal,
    edges: ["levelOneQuestionOne", "levelTwo", "levelOneQuestionTwo"],
  },
  levelOneAnswerTwo: {
    data: {
      val: "donkey",
      text: "Donkey",
    },
    type: ComponentType.Answer,
  },
  levelOneAnswerOne: {
    data: {
      val: "baboon",
      text: "Baboon",
    },
    type: ComponentType.Answer,
  },
  levelOneQuestionTwo: {
    data: {
      fn: "animal",
      text: "Donkey",
      neverAutoAnswer: false,
    },
    type: ComponentType.Question,
    edges: ["levelOneAnswerTwo"],
  },
};
