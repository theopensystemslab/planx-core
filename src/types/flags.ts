export const FLAG_SETS = [
  "Planning permission",
  "Works to listed buildings",
  "Works to trees & hedges",
  "Demolition in a conservation area",
  "Planning policy",
  "Community infrastructure levy",
  "Material change of use",
] as const;

export type FlagSet = (typeof FLAG_SETS)[number];

export const DEFAULT_FLAG_CATEGORY: FlagSet = "Planning permission";

export interface Flag {
  text: string;
  bgColor: string;
  color: string;
  category: FlagSet;
  description?: string;
  value?: string | undefined;
}

// complete list of flags ordered by precedence
export const flatFlags: readonly Flag[] = [
  {
    text: "Immune",
    bgColor: "#BEE6E7",
    color: "#000000",
    category: "Planning permission",
    description:
      "It looks like the changes may now be beyond the time limit for enforcement action. This does not apply if the changes have been deliberately concealed.",
    value: "flag.pp.immune",
  },
  {
    text: "Missing information",
    bgColor: "#EAEAEA",
    color: "#000000",
    category: "Planning permission",
    description:
      "There is some key information missing that will be needed to assess this application",
    value: "flag.pp.missingInfo",
  },
  {
    text: "Permission needed",
    bgColor: "#A8A8A8",
    color: "#000000",
    category: "Planning permission",
    description:
      "It looks like the proposed changes may require planning permission.",
    value: "flag.pp.permissionNeeded",
  },
  {
    text: "Prior approval",
    bgColor: "#FCFF58",
    color: "#000000",
    category: "Planning permission",
    description:
      "It looks like the proposed changes do not require planning permission, however the applicant must apply for Prior Approval before proceeding.",
    value: "flag.pp.priorApproval",
  },
  {
    text: "Notice",
    bgColor: "#CAFB8B",
    color: "#000000",
    category: "Planning permission",
    description:
      "It looks like the proposed changes may not require planning permission, however the applicant must provide notice to the planning authority before proceeding.",
    value: "flag.pp.notice",
  },
  {
    text: "Permitted development",
    bgColor: "#82E7A1",
    color: "#000000",
    category: "Planning permission",
    description:
      "It looks like the proposed changes may fall within the rules for Permitted Development and therefore would not need planning permission.",
    value: "flag.pp.permittedDevelopment",
  },
  {
    text: "Not development",
    bgColor: "#FFF",
    color: "#000000",
    category: "Planning permission",
    description:
      "It looks like the proposed changes may not fall within the legal definition of ‘development’, and therefore would not require planning permission.",
    value: "flag.pp.notDevelopment",
  },
  {
    text: "Missing information",
    bgColor: "#EAEAEA",
    color: "#000000",
    category: "Works to listed buildings",
    value: "flag.lbc.missingInfo",
  },
  {
    text: "Consent needed",
    bgColor: "#76B4E5",
    color: "#000000",
    category: "Works to listed buildings",
    value: "flag.lbc.consentNeeded",
  },
  {
    text: "De minimis",
    bgColor: "#CEE4F6",
    color: "#000000",
    category: "Works to listed buildings",
    value: "flag.lbc.deMinimis",
  },
  {
    text: "Not required",
    bgColor: "#FFF",
    color: "#000000",
    category: "Works to listed buildings",
    value: "flag.lbc.notRequired",
  },
  {
    text: "Missing information",
    bgColor: "#EAEAEA",
    color: "#000000",
    category: "Works to trees & hedges",
    value: "flag.wtt.missingInfo",
  },
  {
    text: "Consent needed",
    bgColor: "#9ED9B0",
    color: "#000000",
    category: "Works to trees & hedges",
    value: "flag.wtt.consentNeeded",
  },
  {
    text: "Notice",
    bgColor: "#E5F5EA",
    color: "#000000",
    category: "Works to trees & hedges",
    value: "flag.wtt.notice",
  },
  {
    text: "Not required",
    bgColor: "#FFF",
    color: "#000000",
    category: "Works to trees & hedges",
    value: "flag.wtt.notRequired",
  },
  {
    text: "Missing information",
    bgColor: "#EAEAEA",
    color: "#000000",
    category: "Demolition in a conservation area",
    value: "flag.dca.missingInfo",
  },
  {
    text: "Consent needed",
    bgColor: "#9ED9B0",
    color: "#000000",
    category: "Demolition in a conservation area",
    value: "flag.dca.consentNeeded",
  },
  {
    text: "De minimis",
    bgColor: "#E5F5EA",
    color: "#000000",
    category: "Demolition in a conservation area",
    value: "flag.dca.deMinimis",
  },
  {
    text: "Not required",
    bgColor: "#FFF",
    color: "#000000",
    category: "Demolition in a conservation area",
    value: "flag.dca.notRequired",
  },
  {
    text: "Missing information",
    bgColor: "#EAEAEA",
    color: "#000000",
    category: "Planning policy",
    value: "flag.planningPolicy.missingInfo",
  },
  {
    text: "Fails to meet policy",
    bgColor: "#FF7F78",
    color: "#000000",
    category: "Planning policy",
    value: "flag.planningPolicy.fail",
  },
  {
    text: "Edge case",
    bgColor: "#FFA05B",
    color: "#000000",
    category: "Planning policy",
    value: "flag.planningPolicy.edgeCase",
  },
  {
    text: "Meets policy",
    bgColor: "#AAEB61",
    color: "#000000",
    category: "Planning policy",
    value: "flag.planningPolicy.pass",
  },
  {
    text: "Missing information",
    bgColor: "#EAEAEA",
    color: "#000000",
    category: "Community infrastructure levy",
    value: "flag.cil.missingInfo",
  },
  {
    text: "Exempt",
    bgColor: "#FFDEF2",
    color: "#000000",
    category: "Community infrastructure levy",
    value: "flag.cil.exempt",
  },
  {
    text: "Relief",
    bgColor: "#FFA4DA",
    color: "#000000",
    category: "Community infrastructure levy",
    value: "flag.cil.relief",
  },
  {
    text: "Liable",
    bgColor: "#FF0099",
    color: "#000000",
    category: "Community infrastructure levy",
    value: "flag.cil.liable",
  },
  {
    text: "Not liable",
    bgColor: "#FFF",
    color: "#000000",
    category: "Community infrastructure levy",
    value: "flag.cil.notLiable",
  },
  {
    text: "Missing information",
    bgColor: "#EAEAEA",
    color: "#000000",
    category: "Material change of use",
    value: "flag.mcou.missingInfo",
  },
  {
    text: "Material change of use",
    bgColor: "#FF7F78",
    color: "#000000",
    category: "Material change of use",
    value: "flag.mcou.true",
  },
  {
    text: "Not material change of use",
    bgColor: "#AAEB61",
    color: "#000000",
    category: "Material change of use",
    value: "flag.mcou.false",
  },
] as const;

const flagValues = flatFlags.map((f) => f.value);

export type FlagValue = (typeof flagValues)[number];

const noResultFlagValues: Record<FlagSet, string> = {
  "Planning permission": "flag.pp.noResult",
  "Works to listed buildings": "flag.lbc.noResult",
  "Works to trees & hedges": "flag.wtt.noResult",
  "Demolition in a conservation area": "flag.dca.noResult",
  "Planning policy": "flag.planningPolicy.noResult",
  "Community infrastructure levy": "flag.cil.noResult",
  "Material change of use": "flag.mcou.noResult",
};

export function getNoResultFlag(category: FlagSet): Flag {
  return {
    text: "No result",
    bgColor: "#EEEEEE",
    color: "#000000",
    category,
    value: noResultFlagValues[category],
  };
}
