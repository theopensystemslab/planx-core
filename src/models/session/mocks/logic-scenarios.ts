import { ComponentType } from "../../../types";
import type { StructuredFlow } from "../../../types";

export const flow = {
  _root: {
    edges: [
      "FirstSection",
      "Checklist1",
      "SecondSection",
      "Question1",
      "ThirdSection",
      "ForthSection",
      "Content1",
      "Confirmation",
    ],
  },
  Content1: {
    data: {
      content: "<p>You are about to complete this flow  (penultimate node)</p>",
    },
    type: ComponentType.Content,
  },
  Question1Answer1: {
    data: {
      val: "chocolate",
      text: "Yes",
    },
    type: ComponentType.Answer,
  },
  Answer2Portal: {
    data: {
      text: "coffee",
    },
    type: ComponentType.InternalPortal,
    edges: ["NestedChecklist", "Calculate1"],
  },
  Checklist1NestedQuestion: {
    data: {
      text: "Are tomatoes a vegetable?",
    },
    type: ComponentType.Question,
    edges: [
      "Checklist1NestedQuestionAnswer1",
      "Checklist1NestedQuestionAnswer2",
    ],
  },
  NestedChecklistAnswer4: {
    data: {
      val: "lateAfternoon",
      text: "Late afternoon",
    },
    type: ComponentType.Answer,
  },
  Calculate1: {
    data: {
      output: "drinkCount",
      formula:
        "drink.earlyMorning + drink.lateMorning + drink.earlyAfternoon + drink.lateAfternoon + drink.evening",
      samples: {
        "drink.earlyMorning": "1",
        "drink.lateMorning": "1",
      },
      defaults: {
        "drink.evening": "0",
        "drink.lateMorning": "0",
        "drink.earlyMorning": "0",
        "drink.lateAfternoon": "0",
        "drink.earlyAfternoon": "0",
      },
    },
    type: ComponentType.Calculate,
  },
  Checklist1Answer4: {
    data: {
      text: "I like all kinds of foods",
    },
    type: ComponentType.Answer,
  },
  Checklist1Answer3: {
    data: {
      val: "vegetables",
      text: "I like vegetables",
    },
    type: ComponentType.Answer,
    edges: ["Answer3Content", "Checklist1NestedQuestion"],
  },
  Checklist1Answer1: {
    data: {
      val: "chocolate",
      text: "I like chocolate",
    },
    type: ComponentType.Answer,
    edges: ["Answer1Content", "Answer1Portal"],
  },
  Checklist1Answer2: {
    data: {
      val: "coffee",
      text: "I like coffee",
    },
    type: ComponentType.Answer,
    edges: ["Answer2Content", "Answer2Portal"],
  },
  NestedChecklistAnswer1: {
    data: {
      val: "earlyMorning",
      text: "Early morning",
    },
    type: ComponentType.Answer,
  },
  Checklist1NestedQuestionAnswer1: {
    data: {
      text: "Yes",
    },
    type: ComponentType.Answer,
  },
  Checklist1: {
    data: {
      fn: "likes.food",
      text: "Which of these apply",
      allRequired: false,
    },
    type: ComponentType.Checklist,
    edges: [
      "Checklist1Answer1",
      "Checklist1Answer2",
      "Checklist1Answer3",
      "Checklist1Answer4",
    ],
  },
  Question1: {
    data: {
      fn: "likes.food",
      text: "Do you like some kinds of chocolate?",
      description:
        "<p>auto-completed if you already said you like chocolate</p>",
    },
    type: ComponentType.Question,
    edges: ["Question1Answer1", "Question1Answer2"],
  },
  Answer1Content: {
    data: {
      content: "<p>Everyone loves chocolate</p>",
    },
    type: ComponentType.Content,
  },
  Checklist1NestedQuestionAnswer2: {
    data: {
      text: "No",
    },
    type: ComponentType.Answer,
    edges: ["Checklist1NestedQuestionAnswer2Notice"],
  },
  NestedChecklistAnswer3: {
    data: {
      val: "earlyAfternoon",
      text: "Early afternoon",
    },
    type: ComponentType.Answer,
  },
  Answer2Content: {
    data: {
      content: "<p>Coffee is lovely</p>",
    },
    type: ComponentType.Content,
  },
  NestedChecklistAnswer5: {
    data: {
      val: "evening",
      text: "Evening",
    },
    type: ComponentType.Answer,
  },
  Checklist1NestedQuestionAnswer2Notice: {
    data: {
      color: "#EFEFEF",
      title: "Fruits can also be considered vegetables",
      resetButton: false,
    },
    type: ComponentType.Notice,
  },
  NestedChecklist: {
    data: {
      fn: "drink",
      text: "When do you usually drink coffee?",
      allRequired: false,
    },
    type: ComponentType.Checklist,
    edges: [
      "NestedChecklistAnswer1",
      "NestedChecklistAnswer2",
      "NestedChecklistAnswer3",
      "NestedChecklistAnswer4",
      "NestedChecklistAnswer5",
    ],
  },
  Answer3Content: {
    data: {
      content: "<p>Vegetables are great</p>",
    },
    type: ComponentType.Content,
  },
  NestedChecklistAnswer2: {
    data: {
      val: "lateMorning",
      text: "Late morning",
    },
    type: ComponentType.Answer,
  },
  Question1Answer2: {
    data: {
      val: "not-chocolate",
      text: "No",
    },
    type: ComponentType.Answer,
  },
  Answer1Portal: {
    data: {
      flowId: "simpleFlow",
    },
    type: ComponentType.ExternalPortal,
  },
  Confirmation: {
    data: {
      heading: "The End",
      description: "You did it!",
    },
    type: ComponentType.Confirmation,
  },
  FirstSection: {
    data: {
      title: "First Section",
    },
    type: ComponentType.Section,
  },
  ForthSection: {
    data: {
      title: "Final Section",
    },
    type: ComponentType.Section,
  },
  ThirdSection: {
    data: {
      title: "Third Section (empty)",
    },
    type: ComponentType.Section,
  },
  SecondSection: {
    data: {
      title: "Second Section",
    },
    type: ComponentType.Section,
  },
};

export const structuredFlow: StructuredFlow = [
  {
    id: "FirstSection",
    type: ComponentType.Section,
    data: {
      title: "First Section",
    },
  },
  {
    id: "Checklist1",
    type: ComponentType.Checklist,
    data: {
      fn: "likes.food",
      text: "Which of these apply",
      allRequired: false,
    },
    children: {
      anyOf: [
        {
          id: "Checklist1Answer1",
          type: ComponentType.Answer,
          data: {
            val: "chocolate",
            text: "I like chocolate",
          },
          children: {
            eachOf: [
              {
                id: "Answer1Content",
                type: ComponentType.Content,
                data: {
                  content: "<p>Everyone loves chocolate</p>",
                },
              },
              {
                id: "Answer1Portal",
                type: ComponentType.ExternalPortal,
                data: {
                  flowId: "simpleFlow",
                },
              },
            ],
          },
        },
        {
          id: "Checklist1Answer2",
          type: ComponentType.Answer,
          data: {
            val: "coffee",
            text: "I like coffee",
          },
          children: {
            eachOf: [
              {
                id: "Answer2Content",
                type: ComponentType.Content,
                data: {
                  content: "<p>Coffee is lovely</p>",
                },
              },
              {
                id: "Answer2Portal",
                type: ComponentType.InternalPortal,
                data: {
                  text: "coffee",
                },
                children: {
                  eachOf: [
                    {
                      id: "NestedChecklist",
                      type: ComponentType.Checklist,
                      data: {
                        fn: "drink",
                        text: "When do you usually drink coffee?",
                        allRequired: false,
                      },
                      children: {
                        anyOf: [
                          {
                            id: "NestedChecklistAnswer1",
                            type: ComponentType.Answer,
                            data: {
                              val: "earlyMorning",
                              text: "Early morning",
                            },
                          },
                          {
                            id: "NestedChecklistAnswer2",
                            type: ComponentType.Answer,
                            data: {
                              val: "lateMorning",
                              text: "Late morning",
                            },
                          },
                          {
                            id: "NestedChecklistAnswer3",
                            type: ComponentType.Answer,
                            data: {
                              val: "earlyAfternoon",
                              text: "Early afternoon",
                            },
                          },
                          {
                            id: "NestedChecklistAnswer4",
                            type: ComponentType.Answer,
                            data: {
                              val: "lateAfternoon",
                              text: "Late afternoon",
                            },
                          },
                          {
                            id: "NestedChecklistAnswer5",
                            type: ComponentType.Answer,
                            data: {
                              val: "evening",
                              text: "Evening",
                            },
                          },
                        ],
                      },
                    },
                    {
                      id: "Calculate1",
                      type: ComponentType.Calculate,
                      data: {
                        output: "drinkCount",
                        formula:
                          "drink.earlyMorning + drink.lateMorning + drink.earlyAfternoon + drink.lateAfternoon + drink.evening",
                        samples: {
                          "drink.earlyMorning": "1",
                          "drink.lateMorning": "1",
                        },
                        defaults: {
                          "drink.evening": "0",
                          "drink.lateMorning": "0",
                          "drink.earlyMorning": "0",
                          "drink.lateAfternoon": "0",
                          "drink.earlyAfternoon": "0",
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          id: "Checklist1Answer3",
          type: ComponentType.Answer,
          data: {
            val: "vegetables",
            text: "I like vegetables",
          },
          children: {
            eachOf: [
              {
                id: "Answer3Content",
                type: ComponentType.Content,
                data: {
                  content: "<p>Vegetables are great</p>",
                },
              },
              {
                id: "Checklist1NestedQuestion",
                type: ComponentType.Question,
                data: {
                  text: "Are tomatoes a vegetable?",
                },
                children: {
                  oneOf: [
                    {
                      id: "Checklist1NestedQuestionAnswer1",
                      type: ComponentType.Answer,
                      data: {
                        text: "Yes",
                      },
                    },
                    {
                      id: "Checklist1NestedQuestionAnswer2",
                      type: ComponentType.Answer,
                      data: {
                        text: "No",
                      },
                      children: {
                        eachOf: [
                          {
                            id: "Checklist1NestedQuestionAnswer2Notice",
                            type: ComponentType.Notice,
                            data: {
                              color: "#EFEFEF",
                              title: "Fruits can also be considered vegetables",
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
        {
          id: "Checklist1Answer4",
          type: ComponentType.Answer,
          data: {
            text: "I like all kinds of foods",
          },
        },
      ],
    },
  },
  {
    id: "SecondSection",
    type: ComponentType.Section,
    data: {
      title: "Second Section",
    },
  },
  {
    id: "Question1",
    type: ComponentType.Question,
    data: {
      fn: "likes.food",
      text: "Do you like some kinds of chocolate?",
      description:
        "<p>auto-completed if you already said you like chocolate</p>",
    },
    children: {
      oneOf: [
        {
          id: "Question1Answer1",
          type: ComponentType.Answer,
          data: {
            val: "chocolate",
            text: "Yes",
          },
        },
        {
          id: "Question1Answer2",
          type: ComponentType.Answer,
          data: {
            val: "not-chocolate",
            text: "No",
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

// referenced as an external portal
export const simpleFlow = {
  _root: {
    edges: ["firstQuestion", "secondQuestion", "thirdQuestion"],
  },
  Q2Answer3: {
    data: {
      text: "Q2Answer3",
    },
    type: ComponentType.Answer,
  },
  Q1Answer2: {
    data: {
      text: "Q1Answer2",
    },
    type: ComponentType.Answer,
  },
  Q2Answer2: {
    data: {
      text: "Q2Answer2",
    },
    type: ComponentType.Answer,
  },
  Q1Answer1: {
    data: {
      text: "Q1Answer1",
    },
    type: ComponentType.Answer,
  },
  thirdAnswer: {
    data: {
      text: "Q3Answer1",
    },
    type: ComponentType.Answer,
  },
  Q2Answer1: {
    data: {
      text: "Q2Answer1",
    },
    type: ComponentType.Answer,
  },
  firstQuestion: {
    data: {
      text: "First Question",
    },
    type: ComponentType.Question,
    edges: ["Q1Answer1", "Q1Answer2"],
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
    edges: ["Q2Answer1", "Q2Answer2", "Q2Answer3"],
  },
};
