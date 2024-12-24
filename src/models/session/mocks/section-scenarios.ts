import type {
  Breadcrumbs,
  FlowGraph,
  NodeId,
  SectionOverview,
} from "../../../types/index.js";
import { SectionStatuses } from "../../../types/index.js";

export const flow: FlowGraph = {
  _root: {
    edges: [
      "FirstSection",
      "Question1",
      "SecondSection",
      "Question3",
      "ThirdSection",
      "ForthSection",
      "Content1",
      "Confirmation",
    ],
  },
  FirstSection: {
    data: {
      title: "First Section",
    },
    type: 360,
  },
  Q2Answer1: {
    data: {
      text: "Yes",
    },
    type: 200,
  },
  Q2Answer2: {
    data: {
      text: "No",
    },
    type: 200,
    edges: ["Notice2"],
  },
  Notice1: {
    data: {
      color: "#EFEFEF",
      title: "You can reset your progress at any time",
      resetButton: false,
    },
    type: 8,
  },
  Q3Answer2: {
    data: {
      val: "maybe",
      text: "Maybe",
    },
    type: 200,
  },
  Content1: {
    data: {
      content: "<p>You are about to complete this flow  (penultimate node)</p>",
    },
    type: 250,
  },
  Question1: {
    data: {
      fn: "continue",
      text: "Would you like to continue?",
    },
    type: 100,
    edges: ["Q1Answer1", "Q1Answer2"],
  },
  Confirmation: {
    data: {
      heading: "The End",
      description: "You did it!",
    },
    type: 725,
  },
  SecondSection: {
    data: {
      title: "Second Section (one node)",
    },
    type: 360,
  },
  Q1Answer2: {
    data: {
      val: "no",
      text: "No",
    },
    type: 200,
    edges: ["Notice1", "Question2"],
  },
  Notice2: {
    data: {
      color: "#EFEFEF",
      title: "You have already continued",
      resetButton: false,
    },
    type: 8,
  },
  ForthSection: {
    data: {
      title: "Final Section",
    },
    type: 360,
  },
  Q3Answer1: {
    data: {
      val: "yes",
      text: "Yes",
    },
    type: 200,
  },
  Question2: {
    data: {
      text: "Would you like to continue now?",
    },
    type: 100,
    edges: ["Q2Answer1", "Q2Answer2"],
  },
  Q1Answer1: {
    data: {
      val: "yes",
      text: "Yes",
    },
    type: 200,
  },
  ThirdSection: {
    data: {
      title: "Third Section (empty)",
    },
    type: 360,
  },
  Question3: {
    data: {
      fn: "continue",
      text: "Continue (auto completed if previously yes)?",
    },
    type: 100,
    edges: ["Q3Answer1", "Q3Answer2"],
  },
};

export const initialOverview: SectionOverview = [
  {
    id: "FirstSection",
    title: "First Section",
    status: SectionStatuses.ReadyToStart,
  },
  {
    id: "SecondSection",
    title: "Second Section (one node)",
    status: SectionStatuses.CannotStartYet,
  },
  {
    id: "ThirdSection",
    title: "Third Section (empty)",
    status: SectionStatuses.CannotStartYet,
  },
  {
    id: "ForthSection",
    title: "Final Section",
    status: SectionStatuses.CannotStartYet,
  },
];

export const sectionOneShortestPath: Breadcrumbs = {
  FirstSection: {
    auto: false,
  },
  Question1: {
    auto: false,
    answers: ["Q1Answer1"],
  },
};
export const sectionOneShortestPathOverview: SectionOverview = [
  {
    id: "FirstSection",
    title: "First Section",
    status: SectionStatuses.Complete,
  },
  {
    id: "SecondSection",
    title: "Second Section (one node)",
    status: SectionStatuses.ReadyToStart,
  },
  {
    id: "ThirdSection",
    title: "Third Section (empty)",
    status: SectionStatuses.CannotStartYet,
  },
  {
    id: "ForthSection",
    title: "Final Section",
    status: SectionStatuses.CannotStartYet,
  },
];

export const sectionOneLongestPath: Breadcrumbs = {
  FirstSection: {
    auto: false,
  },
  Question1: {
    auto: false,
    answers: ["Q1Answer2"],
  },
  Notice1: {
    auto: false,
  },
  Question2: {
    auto: false,
    answers: ["Q2Answer2"],
  },
  Notice2: {
    auto: false,
  },
};
export const sectionOneLongestPathOverview: SectionOverview = [
  {
    id: "FirstSection",
    title: "First Section",
    status: SectionStatuses.Complete,
  },
  {
    id: "SecondSection",
    title: "Second Section (one node)",
    status: SectionStatuses.ReadyToStart,
  },
  {
    id: "ThirdSection",
    title: "Third Section (empty)",
    status: SectionStatuses.CannotStartYet,
  },
  {
    id: "ForthSection",
    title: "Final Section",
    status: SectionStatuses.CannotStartYet,
  },
];

export const oneNode: Breadcrumbs = {
  FirstSection: {
    auto: false,
  },
  Question1: {
    auto: false,
    answers: ["Q1Answer2"],
  },
  Notice1: {
    auto: false,
  },
  Question2: {
    auto: false,
    answers: ["Q2Answer2"],
  },
  Notice2: {
    auto: false,
  },
  SecondSection: {
    auto: false,
  },
  Question3: {
    auto: false,
    answers: ["Q3Answer2"],
  },
};
export const oneNodeOverview: SectionOverview = [
  {
    id: "FirstSection",
    title: "First Section",
    status: SectionStatuses.Complete,
  },
  {
    id: "SecondSection",
    title: "Second Section (one node)",
    status: SectionStatuses.Complete,
  },
  {
    id: "ThirdSection",
    title: "Third Section (empty)",
    status: SectionStatuses.ReadyToStart,
  },
  {
    id: "ForthSection",
    title: "Final Section",
    status: SectionStatuses.CannotStartYet,
  },
];

export const autoNode: Breadcrumbs = {
  FirstSection: {
    auto: false,
  },
  Question1: {
    auto: false,
    answers: ["Q1Answer1"],
  },
  SecondSection: {
    auto: false,
  },
  Question3: {
    answers: ["Q3Answer1"],
    auto: true,
  },
};
export const autoNodeOverview: SectionOverview = [
  {
    id: "FirstSection",
    title: "First Section",
    status: SectionStatuses.Complete,
  },
  {
    id: "SecondSection",
    title: "Second Section (one node)",
    status: SectionStatuses.Complete,
  },
  {
    id: "ThirdSection",
    title: "Third Section (empty)",
    status: SectionStatuses.ReadyToStart,
  },
  {
    id: "ForthSection",
    title: "Final Section",
    status: SectionStatuses.CannotStartYet,
  },
];

export const zeroNodes: Breadcrumbs = {
  FirstSection: {
    auto: false,
  },
  Question1: {
    auto: false,
    answers: ["Q1Answer1"],
  },
  SecondSection: {
    auto: false,
  },
  Question3: {
    answers: ["Q3Answer1"],
    auto: true,
  },
  ThirdSection: {
    auto: false,
  },
};
export const zeroNodesOverview: SectionOverview = [
  {
    id: "FirstSection",
    title: "First Section",
    status: SectionStatuses.Complete,
  },
  {
    id: "SecondSection",
    title: "Second Section (one node)",
    status: SectionStatuses.Complete,
  },
  {
    id: "ThirdSection",
    title: "Third Section (empty)",
    status: SectionStatuses.Complete,
  },
  {
    id: "ForthSection",
    title: "Final Section",
    status: SectionStatuses.ReadyToStart,
  },
];

export const partWayThrough: Breadcrumbs = {
  FirstSection: {
    auto: false,
  },
  Question1: {
    auto: false,
    answers: ["Q1Answer2"],
  },
  Notice1: {
    auto: false,
  },
  Question2: {
    auto: false,
    answers: ["Q2Answer1"],
  },
};

export const visitedUpcomingNodes: Breadcrumbs = {
  SecondSection: {
    auto: false,
  },
  Question3: {
    auto: false,
    answers: ["Q3Answer2"],
  },
};
export const visitedUpcomingNodesOverview: SectionOverview = [
  {
    id: "FirstSection",
    title: "First Section",
    status: SectionStatuses.Complete,
  },
  {
    id: "SecondSection",
    title: "Second Section (one node)",
    status: SectionStatuses.ReadyToContinue,
  },
  {
    id: "ThirdSection",
    title: "Third Section (empty)",
    status: SectionStatuses.CannotStartYet,
  },
  {
    id: "ForthSection",
    title: "Final Section",
    status: SectionStatuses.CannotStartYet,
  },
];

export const visitedQueuedNodes: Breadcrumbs = {
  SecondSection: {
    auto: false,
  },
  Question3: {
    auto: false,
    answers: ["Q3Answer2"],
  },
  ThirdSection: {
    auto: false,
  },
};
export const visitedQueuedNodesOverview: SectionOverview = [
  {
    id: "FirstSection",
    title: "First Section",
    status: SectionStatuses.Complete,
  },
  {
    id: "SecondSection",
    title: "Second Section (one node)",
    status: SectionStatuses.ReadyToContinue,
  },
  {
    id: "ThirdSection",
    title: "Third Section (empty)",
    status: SectionStatuses.CannotContinueYet,
  },
  {
    id: "ForthSection",
    title: "Final Section",
    status: SectionStatuses.CannotStartYet,
  },
];

export const mostOfTheWayThrough: Breadcrumbs = {
  FirstSection: {
    auto: false,
  },
  Question1: {
    auto: false,
    answers: ["Q1Answer2"],
  },
  Notice1: {
    auto: false,
  },
  Question2: {
    auto: false,
    answers: ["Q2Answer1"],
  },
  SecondSection: {
    auto: false,
  },
  Question3: {
    auto: false,
    answers: ["Q3Answer2"],
  },
};
export const updatedNodeIds: Array<NodeId> = ["Q2Answer1"];
export const mostOfTheWayThroughWithUpdates: SectionOverview = [
  {
    id: "FirstSection",
    title: "First Section",
    status: SectionStatuses.Updated,
  },
  {
    id: "SecondSection",
    title: "Second Section (one node)",
    status: SectionStatuses.Complete,
  },
  {
    id: "ThirdSection",
    title: "Third Section (empty)",
    status: SectionStatuses.ReadyToStart,
  },
  {
    id: "ForthSection",
    title: "Final Section",
    status: SectionStatuses.CannotStartYet,
  },
];

export const allOfTheWayThrough: Breadcrumbs = {
  FirstSection: {
    auto: false,
  },
  Question1: {
    auto: false,
    answers: ["Q1Answer1"],
  },
  SecondSection: {
    auto: false,
  },
  Question3: {
    answers: ["Q3Answer1"],
    auto: true,
  },
  ThirdSection: {
    auto: false,
  },
  FinalSection: {
    auto: false,
  },
  Content1: {
    auto: false,
  },
  Confirmation: {
    auto: false,
  },
};

export const upcomingQuestion: Breadcrumbs = {
  FirstSection: {
    auto: false,
  },
};
