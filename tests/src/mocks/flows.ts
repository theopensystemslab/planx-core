import type { FlowGraph } from "@opensystemslab/planx-core/types";
import { ComponentType } from "@opensystemslab/planx-core/types";

export const simpleFlow: FlowGraph = {
  _root: { edges: ["abcdef"] },
  abcdef: {
    type: ComponentType.Question,
    data: {
      fn: "AFn",
    },
  },
  ghijkl: {
    type: ComponentType.Answer,
    data: {
      val: "AVal",
    },
  },
};
