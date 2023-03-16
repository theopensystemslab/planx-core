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
      "Imks7j68BD",
      "HV0gV8DOil",
      "2PT6bTPTqj",
      "3H2bGdzpIN",
      "AFX3QwbOCd",
    ],
  },
  "0LzMSk4JTO": {
    data: {
      val: "food.bread",
      text: "bread",
    },
    type: ComponentType.Answer,
  },
  "0vojjvJ6rP": {
    data: {
      val: "food",
      text: "food",
    },
    type: ComponentType.Answer,
    edges: ["mOPogpQa7V"],
  },
  "2PT6bTPTqj": {
    data: {
      fn: "item",
      text: "contains",
    },
    type: ComponentType.Question,
    edges: ["oB2vfxQs4D", "ykhO0drpaY", "U9S73zxy9n", "LwozLZdXCA"],
  },
  "3H2bGdzpIN": {
    data: {
      fn: "item",
      text: "Does the basket contain apples?",
    },
    type: ComponentType.Question,
    edges: ["BJpKurp49I", "hKebzlFQDa"],
  },
  "4JPWSgnGtI": {
    data: {
      val: "tool",
      text: "tools",
    },
    type: ComponentType.Answer,
    edges: ["KcLGMm3UWw"],
  },
  "52ZNXBMLDP": {
    data: {
      color: "#EFEFEF",
      title: "?, so must be a 🍌 or 🔧",
      resetButton: false,
    },
    type: ComponentType.Notice,
  },
  "6RR1J1lmrM": {
    data: {
      color: "#EFEFEF",
      title: "🍏",
      resetButton: false,
    },
    type: ComponentType.Notice,
  },
  "7tV1uvR9ng": {
    data: {
      val: "tool.spanner",
      text: "spanner",
    },
    type: ComponentType.Answer,
  },
  AFX3QwbOCd: {
    data: {
      fn: "item",
      text: "Which does the basket contain?",
    },
    type: ComponentType.Question,
    edges: ["4JPWSgnGtI", "0vojjvJ6rP"],
  },
  BJpKurp49I: {
    data: {
      val: "food.fruit.apple",
      text: "Yes",
    },
    type: ComponentType.Answer,
  },
  BloOMLvLJK: {
    data: {
      val: "food.fruit.banana",
      text: "banana",
    },
    type: ComponentType.Answer,
  },
  EqfqaqZ6CH: {
    data: {
      val: "food.fruit.apple",
      text: "apple",
    },
    type: ComponentType.Answer,
  },
  HV0gV8DOil: {
    data: {
      fn: "item",
      text: "shopping trolley (should be skipped)",
      allRequired: false,
    },
    type: ComponentType.Checklist,
    edges: ["lTosE7Xo1j", "BloOMLvLJK", "0LzMSk4JTO", "OvNhSiRfdL"],
  },
  I8DznYCKVg: {
    data: {
      val: "food.fruit.banana",
      text: "banana",
    },
    type: ComponentType.Answer,
  },
  Imks7j68BD: {
    data: {
      fn: "item",
      text: "shopping trolley",
      allRequired: false,
    },
    type: ComponentType.Checklist,
    edges: ["EqfqaqZ6CH", "I8DznYCKVg", "pXFKKRG6lE", "7tV1uvR9ng"],
  },
  KcLGMm3UWw: {
    data: {
      color: "#EFEFEF",
      title: "🔧",
      resetButton: false,
    },
    type: ComponentType.Notice,
  },
  LwozLZdXCA: {
    data: {
      text: "neither apples nor bread",
    },
    type: ComponentType.Answer,
    edges: ["52ZNXBMLDP"],
  },
  OvNhSiRfdL: {
    data: {
      val: "tool.spanner",
      text: "spanner",
    },
    type: ComponentType.Answer,
  },
  U9S73zxy9n: {
    data: {
      val: "food.fruit.apple,food.bread",
      text: "apples and bread",
    },
    type: ComponentType.Answer,
    edges: ["t3SCqQKeUK"],
  },
  g0IAKsBVPQ: {
    data: {
      color: "#EFEFEF",
      title: "🥖",
      resetButton: false,
    },
    type: ComponentType.Notice,
  },
  hKebzlFQDa: {
    data: {
      text: "No",
    },
    type: ComponentType.Answer,
  },
  lTosE7Xo1j: {
    data: {
      val: "food.fruit.apple",
      text: "apple",
    },
    type: ComponentType.Answer,
  },
  mOPogpQa7V: {
    data: {
      color: "#EFEFEF",
      title: "🍌🍏🥖",
      resetButton: false,
    },
    type: ComponentType.Notice,
  },
  oB2vfxQs4D: {
    data: {
      val: "food.fruit.apple",
      text: "apples",
    },
    type: ComponentType.Answer,
    edges: ["6RR1J1lmrM"],
  },
  pXFKKRG6lE: {
    data: {
      val: "food.bread",
      text: "bread",
    },
    type: ComponentType.Answer,
  },
  t3SCqQKeUK: {
    data: {
      color: "#EFEFEF",
      title: "🍏🥖",
      resetButton: false,
    },
    type: ComponentType.Notice,
  },
  ykhO0drpaY: {
    data: {
      val: "food.bread",
      text: "bread",
    },
    type: ComponentType.Answer,
    edges: ["g0IAKsBVPQ"],
  },
};

export const orderedFlow: OrderedFlow = [
  {
    id: "Imks7j68BD",
    data: {
      fn: "item",
      text: "shopping trolley",
      allRequired: false,
    },
    type: ComponentType.Checklist,
    edges: ["EqfqaqZ6CH", "I8DznYCKVg", "pXFKKRG6lE", "7tV1uvR9ng"],
  },
  {
    id: "EqfqaqZ6CH",
    data: {
      val: "food.fruit.apple",
      text: "apple",
    },
    type: ComponentType.Answer,
  },
  {
    id: "I8DznYCKVg",
    data: {
      val: "food.fruit.banana",
      text: "banana",
    },
    type: ComponentType.Answer,
  },
  {
    id: "pXFKKRG6lE",
    data: {
      val: "food.bread",
      text: "bread",
    },
    type: ComponentType.Answer,
  },
  {
    id: "7tV1uvR9ng",
    data: {
      val: "tool.spanner",
      text: "spanner",
    },
    type: ComponentType.Answer,
  },
  {
    id: "HV0gV8DOil",
    data: {
      fn: "item",
      text: "shopping trolley (should be skipped)",
      allRequired: false,
    },
    type: ComponentType.Checklist,
    edges: ["lTosE7Xo1j", "BloOMLvLJK", "0LzMSk4JTO", "OvNhSiRfdL"],
  },
  {
    id: "lTosE7Xo1j",
    data: {
      val: "food.fruit.apple",
      text: "apple",
    },
    type: ComponentType.Answer,
  },

  {
    id: "BloOMLvLJK",
    data: {
      val: "food.fruit.banana",
      text: "banana",
    },
    type: ComponentType.Answer,
  },
  {
    id: "0LzMSk4JTO",
    data: {
      val: "food.bread",
      text: "bread",
    },
    type: ComponentType.Answer,
  },
  {
    id: "OvNhSiRfdL",
    data: {
      val: "tool.spanner",
      text: "spanner",
    },
    type: ComponentType.Answer,
  },
  {
    id: "2PT6bTPTqj",
    data: {
      fn: "item",
      text: "contains",
    },
    type: ComponentType.Question,
    edges: ["oB2vfxQs4D", "ykhO0drpaY", "U9S73zxy9n", "LwozLZdXCA"],
  },
  {
    id: "oB2vfxQs4D",
    data: {
      val: "food.fruit.apple",
      text: "apples",
    },
    type: ComponentType.Answer,
    edges: ["6RR1J1lmrM"],
  },
  {
    id: "6RR1J1lmrM",
    data: {
      color: "#EFEFEF",
      title: "🍏",
      resetButton: false,
    },
    type: ComponentType.Notice,
  },
  {
    id: "ykhO0drpaY",
    data: {
      val: "food.bread",
      text: "bread",
    },
    type: ComponentType.Answer,
    edges: ["g0IAKsBVPQ"],
  },
  {
    id: "g0IAKsBVPQ",
    data: {
      color: "#EFEFEF",
      title: "🥖",
      resetButton: false,
    },
    type: ComponentType.Notice,
  },
  {
    id: "U9S73zxy9n",
    data: {
      val: "food.fruit.apple,food.bread",
      text: "apples and bread",
    },
    type: ComponentType.Answer,
    edges: ["t3SCqQKeUK"],
  },
  {
    id: "t3SCqQKeUK",
    data: {
      color: "#EFEFEF",
      title: "🍏🥖",
      resetButton: false,
    },
    type: ComponentType.Notice,
  },
  {
    id: "LwozLZdXCA",
    data: {
      text: "neither apples nor bread",
    },
    type: ComponentType.Answer,
    edges: ["52ZNXBMLDP"],
  },
  {
    id: "52ZNXBMLDP",
    data: {
      color: "#EFEFEF",
      title: "?, so must be a 🍌 or 🔧",
      resetButton: false,
    },
    type: ComponentType.Notice,
  },
  {
    id: "3H2bGdzpIN",
    data: {
      fn: "item",
      text: "Does the basket contain apples?",
    },
    type: ComponentType.Question,
    edges: ["BJpKurp49I", "hKebzlFQDa"],
  },
  {
    id: "BJpKurp49I",
    data: {
      val: "food.fruit.apple",
      text: "Yes",
    },
    type: ComponentType.Answer,
  },
  {
    id: "hKebzlFQDa",
    data: {
      text: "No",
    },
    type: ComponentType.Answer,
  },
  {
    id: "AFX3QwbOCd",
    data: {
      fn: "item",
      text: "Which does the basket contain?",
    },
    type: ComponentType.Question,
    edges: ["4JPWSgnGtI", "0vojjvJ6rP"],
  },
  {
    id: "4JPWSgnGtI",
    data: {
      val: "tool",
      text: "tools",
    },
    type: ComponentType.Answer,
    edges: ["KcLGMm3UWw"],
  },
  {
    id: "KcLGMm3UWw",
    data: {
      color: "#EFEFEF",
      title: "🔧",
      resetButton: false,
    },
    type: ComponentType.Notice,
  },
  {
    id: "0vojjvJ6rP",
    data: {
      val: "food",
      text: "food",
    },
    type: ComponentType.Answer,
    edges: ["mOPogpQa7V"],
  },
  {
    id: "mOPogpQa7V",
    data: {
      color: "#EFEFEF",
      title: "🍌🍏🥖",
      resetButton: false,
    },
    type: ComponentType.Notice,
  },
];

// TODO
export const breadcrumbs: Breadcrumbs = {};

// TODO
export const orderedBreadcrumbs: OrderedBreadcrumbs = [];
