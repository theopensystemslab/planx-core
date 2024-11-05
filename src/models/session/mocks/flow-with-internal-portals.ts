import { ComponentType, FlowGraph } from "../../../types";

export const flow: FlowGraph = {
  _root: {
    edges: ["kReDM5AWwf", "levelOne", "DJDsTYVeZG"],
  },
  DJDsTYVeZG: {
    data: {
      fn: "animal",
      tags: [],
      text: "Elephant",
      neverAutoAnswer: false,
    },
    type: ComponentType.Question,
    edges: ["LNjFPmokA4"],
  },
  DzSOjpW0pc: {
    data: {
      val: "capybara",
      text: "Capybara",
    },
    type: ComponentType.Answer,
  },
  IAtSgHREeb: {
    data: {
      val: "aardvark",
      text: "aardvark",
    },
    type: ComponentType.Answer,
  },
  LNjFPmokA4: {
    data: {
      val: "elephant",
      text: "Elephant",
    },
    type: ComponentType.Answer,
  },
  VR420vch1P: {
    data: {
      fn: "animal",
      tags: [],
      text: "Baboon",
      neverAutoAnswer: false,
    },
    type: ComponentType.Question,
    edges: ["sGJEsJDLp6"],
  },
  levelTwo: {
    data: {
      text: "level two",
    },
    type: ComponentType.InternalPortal,
    edges: ["fcTNTjbLdl"],
  },
  fcTNTjbLdl: {
    data: {
      fn: "animal",
      text: "Capybara",
      neverAutoAnswer: false,
    },
    type: ComponentType.Question,
    edges: ["DzSOjpW0pc"],
  },
  kReDM5AWwf: {
    data: {
      fn: "animal",
      tags: [],
      text: "Aardvark",
      neverAutoAnswer: false,
    },
    type: ComponentType.Question,
    edges: ["IAtSgHREeb"],
  },
  levelOne: {
    data: {
      text: "level one",
    },
    type: ComponentType.InternalPortal,
    edges: ["VR420vch1P", "levelTwo", "ui15uRJqfs"],
  },
  rwkfyRB9io: {
    data: {
      val: "donkey",
      text: "Donkey",
    },
    type: ComponentType.Answer,
  },
  sGJEsJDLp6: {
    data: {
      val: "baboon",
      text: "Baboon",
    },
    type: ComponentType.Answer,
  },
  ui15uRJqfs: {
    data: {
      fn: "animal",
      text: "Donkey",
      neverAutoAnswer: false,
    },
    type: ComponentType.Question,
    edges: ["rwkfyRB9io"],
  },
};
