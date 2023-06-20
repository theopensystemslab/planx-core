import type { Flag } from "./flags";

export type resultOverrides = {
  [flagId: string]: { heading?: string; description?: string };
};

export type ResultData = {
  [category: string]: {
    flag: Flag;
    responses: any[];
    displayText: { heading: string; description: string };
  };
};
