import type { Flag } from "./flags.js";

export type resultOverrides = {
  [flagId: string]: { heading?: string; description?: string };
};

export type ResultData = {
  [category: string]: {
    flag: Flag;
    responses: unknown[];
    displayText: { heading: string; description: string };
  };
};
