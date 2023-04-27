import { Flag } from "../types";

export type ResultData = (
  flagSet?: string,
  overrides?: { [flagId: string]: { heading?: string; description?: string } }
) => {
  [category: string]: {
    flag: Flag;
    responses: any[];
    displayText: { heading: string; description: string };
  };
}
