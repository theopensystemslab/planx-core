export type resultOverrides = {
  [flagId: string]: { heading?: string; description?: string };
};

export type ResultData = (
  flagSet?: string,
  overrides?: resultOverrides
) => {
  [category: string]: {
    flag: Flag;
    responses: any[];
    displayText: { heading: string; description: string };
  };
};

export interface Flag {
  category: string;
  value?: string;
  text: string;
  officerDescription?: string;
}
