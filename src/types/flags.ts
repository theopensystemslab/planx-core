// Flag sets are defined in the "result_flag_sets" PG table
// data here should stay in sync with that table
export const flagSets = {
  PlanningPermission: "Planning permission",
  ListedBuildingConsent: "Listed building consent",
  WorksToTreesAndHedges: "Works to trees & hedges",
  DemolitionInAConservationArea: "Demolition in a conservation area",
  PlanningPolicy: "Planning policy",
  CommunityInfrastructureLevy: "Community infrastructure levy",
} as const;

export type FlagSetKey = keyof typeof flagSets;
export type FlagSetName = (typeof flagSets)[keyof typeof flagSets];

export interface Flag {
  setName: FlagSetName;
  value?: string;
  text: string;
  description?: string;
  display?: {
    text: string;
    bg: string;
  };
}

export type FlagSet = Flag[];
