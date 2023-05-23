import { SectionStatuses, ComponentType } from "../../../types";
import type {
  NodeId,
  FlowGraph,
  StructuredFlow,
  StructuredNode,
  Breadcrumbs,
  SectionOverview,
  OrderedFlow,
} from "../../../types";

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
    type: ComponentType.Section,
  },
  Q2Answer1: {
    data: {
      text: "Yes",
    },
    type: ComponentType.Answer,
  },
  Q2Answer2: {
    data: {
      text: "No",
    },
    type: ComponentType.Answer,
    edges: ["Notice2"],
  },
  Notice1: {
    data: {
      color: "#EFEFEF",
      title: "You can reset your progress at any time",
      resetButton: false,
    },
    type: ComponentType.Notice,
  },
  Q3Answer2: {
    data: {
      val: "maybe",
      text: "Maybe",
    },
    type: ComponentType.Answer,
  },
  Content1: {
    data: {
      content: "<p>You are about to complete this flow  (penultimate node)</p>",
    },
    type: ComponentType.Content,
  },
  Question1: {
    data: {
      fn: "continue",
      text: "Would you like to continue?",
    },
    type: ComponentType.Question,
    edges: ["Q1Answer1", "Q1Answer2"],
  },
  Confirmation: {
    data: {
      heading: "The End",
      description: "You did it!",
    },
    type: ComponentType.Confirmation,
  },
  SecondSection: {
    data: {
      title: "Second Section (one node)",
    },
    type: ComponentType.Section,
  },
  Q1Answer2: {
    data: {
      val: "no",
      text: "No",
    },
    type: ComponentType.Answer,
    edges: ["Notice1", "Question2"],
  },
  Notice2: {
    data: {
      color: "#EFEFEF",
      title: "You have already continued",
      resetButton: false,
    },
    type: ComponentType.Notice,
  },
  ForthSection: {
    data: {
      title: "Final Section",
    },
    type: ComponentType.Section,
  },
  Q3Answer1: {
    data: {
      val: "yes",
      text: "Yes",
    },
    type: ComponentType.Answer,
  },
  Question2: {
    data: {
      text: "Would you like to continue now?",
    },
    type: ComponentType.Question,
    edges: ["Q2Answer1", "Q2Answer2"],
  },
  Q1Answer1: {
    data: {
      val: "yes",
      text: "Yes",
    },
    type: ComponentType.Answer,
  },
  ThirdSection: {
    data: {
      title: "Third Section (empty)",
    },
    type: ComponentType.Section,
  },
  Question3: {
    data: {
      fn: "continue",
      text: "Continue (auto completed if previously yes)?",
    },
    type: ComponentType.Question,
    edges: ["Q3Answer1", "Q3Answer2"],
  },
};

export const orderedFlow: OrderedFlow = [
  {
    id: "FirstSection",
    rootNodeId: "FirstSection",
    parentId: null,
    sectionId: "FirstSection",
    type: ComponentType.Section,
    data: {
      title: "First Section",
    },
  },
  {
    id: "Question1",
    rootNodeId: "Question1",
    parentId: "FirstSection",
    sectionId: "FirstSection",
    type: ComponentType.Question,
    edges: ["Q1Answer1", "Q1Answer2"],
    data: {
      fn: "continue",
      text: "Would you like to continue?",
    },
  },
  {
    id: "Q1Answer1",
    rootNodeId: "Question1",
    parentId: "Question1",
    sectionId: "FirstSection",
    type: ComponentType.Answer,
    data: {
      val: "yes",
      text: "Yes",
    },
  },
  {
    id: "Q1Answer2",
    rootNodeId: "Question1",
    parentId: "Question1",
    sectionId: "FirstSection",
    type: ComponentType.Answer,
    edges: ["Notice1", "Question2"],
    data: {
      val: "no",
      text: "No",
    },
  },
  {
    id: "Notice1",
    rootNodeId: "Question1",
    parentId: "Q1Answer2",
    sectionId: "FirstSection",
    type: ComponentType.Notice,
    data: {
      color: "#EFEFEF",
      title: "You can reset your progress at any time",
      resetButton: false,
    },
  },
  {
    id: "Question2",
    rootNodeId: "Question1",
    parentId: "Q1Answer2",
    sectionId: "FirstSection",
    type: ComponentType.Question,
    edges: ["Q2Answer1", "Q2Answer2"],
    data: {
      text: "Would you like to continue now?",
    },
  },
  {
    id: "Q2Answer1",
    rootNodeId: "Question1",
    parentId: "Question2",
    sectionId: "FirstSection",
    type: ComponentType.Answer,
    data: {
      text: "Yes",
    },
  },
  {
    id: "Q2Answer2",
    rootNodeId: "Question1",
    parentId: "Question2",
    sectionId: "FirstSection",
    type: ComponentType.Answer,
    edges: ["Notice2"],
    data: {
      text: "No",
    },
  },
  {
    id: "Notice2",
    rootNodeId: "Question1",
    parentId: "Q2Answer2",
    sectionId: "FirstSection",
    type: ComponentType.Notice,
    data: {
      color: "#EFEFEF",
      title: "You have already continued",
      resetButton: false,
    },
  },
  {
    id: "SecondSection",
    rootNodeId: "SecondSection",
    parentId: "Question1",
    sectionId: "SecondSection",
    type: ComponentType.Section,
    data: {
      title: "Second Section (one node)",
    },
  },
  {
    id: "Question3",
    rootNodeId: "Question3",
    parentId: "SecondSection",
    sectionId: "SecondSection",
    type: ComponentType.Question,
    edges: ["Q3Answer1", "Q3Answer2"],
    data: {
      fn: "continue",
      text: "Continue (auto completed if previously yes)?",
    },
  },
  {
    id: "Q3Answer1",
    rootNodeId: "Question3",
    parentId: "Question3",
    sectionId: "SecondSection",
    type: ComponentType.Answer,
    data: {
      val: "yes",
      text: "Yes",
    },
  },
  {
    id: "Q3Answer2",
    rootNodeId: "Question3",
    parentId: "Question3",
    sectionId: "SecondSection",
    type: ComponentType.Answer,
    data: {
      val: "maybe",
      text: "Maybe",
    },
  },
  {
    id: "ThirdSection",
    rootNodeId: "ThirdSection",
    parentId: "Question3",
    sectionId: "ThirdSection",
    type: ComponentType.Section,
    data: {
      title: "Third Section (empty)",
    },
  },
  {
    id: "ForthSection",
    rootNodeId: "ForthSection",
    parentId: "ThirdSection",
    sectionId: "ForthSection",
    type: ComponentType.Section,
    data: {
      title: "Final Section",
    },
  },
  {
    id: "Content1",
    rootNodeId: "Content1",
    parentId: "ForthSection",
    sectionId: "ForthSection",
    type: ComponentType.Content,
    data: {
      content: "<p>You are about to complete this flow  (penultimate node)</p>",
    },
  },
  {
    id: "Confirmation",
    rootNodeId: "Confirmation",
    parentId: "Content1",
    sectionId: "ForthSection",
    type: ComponentType.Confirmation,
    data: {
      heading: "The End",
      description: "You did it!",
    },
  },
];

export const structuredFlow: StructuredFlow = [
  {
    id: "FirstSection",
    type: ComponentType.Section,
    data: {
      title: "First Section",
    },
  },
  {
    id: "Question1",
    type: ComponentType.Question,
    data: {
      fn: "continue",
      text: "Would you like to continue?",
    },
    children: {
      oneOf: [
        {
          id: "Q1Answer1",
          type: ComponentType.Answer,
          data: {
            val: "yes",
            text: "Yes",
          },
        },
        {
          id: "Q1Answer2",
          type: ComponentType.Answer,
          data: {
            val: "no",
            text: "No",
          },
          children: {
            eachOf: [
              {
                id: "Notice1",
                type: ComponentType.Notice,
                data: {
                  color: "#EFEFEF",
                  title: "You can reset your progress at any time",
                  resetButton: false,
                },
              },
              {
                id: "Question2",
                type: ComponentType.Question,
                data: {
                  text: "Would you like to continue now?",
                },
                children: {
                  oneOf: [
                    {
                      id: "Q2Answer1",
                      type: ComponentType.Answer,
                      data: {
                        text: "Yes",
                      },
                    },
                    {
                      id: "Q2Answer2",
                      type: ComponentType.Answer,
                      data: {
                        text: "No",
                      },
                      children: {
                        eachOf: [
                          {
                            id: "Notice2",
                            type: ComponentType.Notice,
                            data: {
                              color: "#EFEFEF",
                              title: "You have already continued",
                              resetButton: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: "SecondSection",
    type: ComponentType.Section,
    data: {
      title: "Second Section (one node)",
    },
  },
  {
    id: "Question3",
    type: ComponentType.Question,
    data: {
      fn: "continue",
      text: "Continue (auto completed if previously yes)?",
    },
    children: {
      oneOf: [
        {
          id: "Q3Answer1",
          type: ComponentType.Answer,
          data: {
            val: "yes",
            text: "Yes",
          },
        },
        {
          id: "Q3Answer2",
          type: ComponentType.Answer,
          data: {
            val: "maybe",
            text: "Maybe",
          },
        },
      ],
    },
  },
  {
    id: "ThirdSection",
    type: ComponentType.Section,
    data: {
      title: "Third Section (empty)",
    },
  },
  {
    id: "ForthSection",
    type: ComponentType.Section,
    data: {
      title: "Final Section",
    },
  },
  {
    id: "Content1",
    type: ComponentType.Content,
    data: {
      content: "<p>You are about to complete this flow  (penultimate node)</p>",
    },
  },
  {
    id: "Confirmation",
    type: ComponentType.Confirmation,
    data: {
      heading: "The End",
      description: "You did it!",
    },
  },
];

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

export const partWayThroughRemaining: StructuredNode[] = [
  {
    id: "SecondSection",
    type: ComponentType.Section,
    data: {
      title: "Second Section (one node)",
    },
  },
  {
    id: "Question3",
    type: ComponentType.Question,
    data: {
      fn: "continue",
      text: "Continue (auto completed if previously yes)?",
    },
    children: {
      oneOf: [
        {
          id: "Q3Answer1",
          type: ComponentType.Answer,
          data: {
            val: "yes",
            text: "Yes",
          },
        },
        {
          id: "Q3Answer2",
          type: ComponentType.Answer,
          data: {
            val: "maybe",
            text: "Maybe",
          },
        },
      ],
    },
  },
  {
    id: "ThirdSection",
    type: ComponentType.Section,
    data: {
      title: "Third Section (empty)",
    },
  },
  {
    id: "ForthSection",
    type: ComponentType.Section,
    data: {
      title: "Final Section",
    },
  },
  {
    id: "Content1",
    type: ComponentType.Content,
    data: {
      content: "<p>You are about to complete this flow  (penultimate node)</p>",
    },
  },
  {
    id: "Confirmation",
    type: ComponentType.Confirmation,
    data: {
      heading: "The End",
      description: "You did it!",
    },
  },
];

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
