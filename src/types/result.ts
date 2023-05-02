
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

export interface Flag {
  category: string;
  value?: string;
  text: string;
  bgColor: string;
  color: string;
  officerDescription?: string;
}
