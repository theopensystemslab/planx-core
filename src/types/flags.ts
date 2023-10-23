export type FlagSet =
  | "Planning permission"
  | "Listed building consent"
  | "Works to trees & hedges"
  | "Demolition in a conservation area"
  | "Planning policy"
  | "Community infrastructure levy";

export const DEFAULT_FLAG_CATEGORY: FlagSet = "Planning permission";

export interface Flag {
  text: string;
  bgColor?: string;
  color?: string;
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
    value: "IMMUNE",
  },
  {
    text: "Missing information",
    bgColor: "#EAEAEA",
    color: "#000000",
    category: "Planning permission",
    description:
      "There is some key information missing that will be needed to assess this application",
    value: "MISSING_INFO",
  },
  {
    text: "Permission needed",
    bgColor: "#A8A8A8",
    color: "#000000",
    category: "Planning permission",
    description:
      "It looks like the proposed changes may require planning permission.",
    value: "PLANNING_PERMISSION_REQUIRED",
  },
  {
    text: "Prior approval",
    bgColor: "#FCFF58",
    color: "#000000",
    category: "Planning permission",
    description:
      "It looks like the proposed changes do not require planning permission, however the applicant must apply for Prior Approval before proceeding.",
    value: "PRIOR_APPROVAL",
  },
  {
    text: "Notice",
    bgColor: "#CAFB8B",
    color: "#000000",
    category: "Planning permission",
    description:
      "It looks like the proposed changes may not require planning permission, however the applicant must provide notice to the planning authority before proceeding.",
    value: "PP-NOTICE",
  },
  {
    text: "Permitted development",
    bgColor: "#82E7A1",
    color: "#000000",
    category: "Planning permission",
    description:
      "It looks like the proposed changes may fall within the rules for Permitted Development and therefore would not need planning permission.",
    value: "NO_APP_REQUIRED",
  },
  {
    text: "Not development",
    bgColor: "#FFF",
    color: "#000000",
    category: "Planning permission",
    description:
      "It looks like the proposed changes may not fall within the legal definition of ‘development’, and therefore would not require planning permission.",
    value: "PP-NOT_DEVELOPMENT",
  },
  {
    text: "Missing information",
    bgColor: "#EAEAEA",
    color: "#000000",
    category: "Listed building consent",
    value: "LB-MISSING_INFO",
  },
  {
    text: "Required",
    bgColor: "#76B4E5",
    color: "#000000",
    category: "Listed building consent",
    value: "LB-REQUIRED",
  },
  {
    text: "De minimis",
    bgColor: "#CEE4F6",
    color: "#000000",
    category: "Listed building consent",
    value: "LB-DE_MINIMIS",
  },
  {
    text: "Not required",
    bgColor: "#FFF",
    color: "#000000",
    category: "Listed building consent",
    value: "LB-NOT_REQUIRED",
  },
  {
    text: "Missing information",
    bgColor: "#EAEAEA",
    color: "#000000",
    category: "Works to trees & hedges",
    value: "TR-MISSING_INFO",
  },
  {
    text: "Required",
    bgColor: "#9ED9B0",
    color: "#000000",
    category: "Works to trees & hedges",
    value: "TR-REQUIRED",
  },
  {
    text: "De minimis",
    bgColor: "#E5F5EA",
    color: "#000000",
    category: "Works to trees & hedges",
    value: "TR-DE_MINIMIS",
  },
  {
    text: "Not required",
    bgColor: "#FFF",
    color: "#000000",
    category: "Works to trees & hedges",
    value: "TR-NOT_REQUIRED",
  },
  {
    text: "Missing information",
    bgColor: "#EAEAEA",
    color: "#000000",
    category: "Demolition in a conservation area",
    value: "DC-MISSING_INFO",
  },
  {
    text: "Required",
    bgColor: "#9ED9B0",
    color: "#000000",
    category: "Demolition in a conservation area",
    value: "DC-REQUIRED",
  },
  {
    text: "De minimis",
    bgColor: "#E5F5EA",
    color: "#000000",
    category: "Demolition in a conservation area",
    value: "DC-DE_MINIMIS",
  },
  {
    text: "Not required",
    bgColor: "#FFF",
    color: "#000000",
    category: "Demolition in a conservation area",
    value: "DC-NOT_REQUIRED",
  },
  {
    text: "Missing information",
    bgColor: "#EAEAEA",
    color: "#000000",
    category: "Planning policy",
    value: "PO_MISSING_INFO",
  },
  {
    text: "Fails to meet policy",
    bgColor: "#FF7F78",
    color: "#000000",
    category: "Planning policy",
    value: "LIKELY_FAIL",
  },
  {
    text: "Edge case",
    bgColor: "#FFA05B",
    color: "#000000",
    category: "Planning policy",
    value: "EDGE_CASE",
  },
  {
    text: "Meets policy",
    bgColor: "#AAEB61",
    color: "#000000",
    category: "Planning policy",
    value: "LIKELY_PASS",
  },
  {
    text: "Missing information",
    bgColor: "#EAEAEA",
    color: "#000000",
    category: "Community infrastructure levy",
    value: "CO_MISSING_INFO",
  },
  {
    text: "Exemption void",
    bgColor: "#CDB1C2",
    color: "#000000",
    category: "Community infrastructure levy",
    value: "CO_EXEMPTION_VOID",
  },
  {
    text: "Exempt",
    bgColor: "#FFDEF2",
    color: "#000000",
    category: "Community infrastructure levy",
    value: "CO_EXEMPT",
  },
  {
    text: "Relief void",
    bgColor: "#A4698C",
    color: "#000000",
    category: "Community infrastructure levy",
    value: "CO_RELIEF_VOID",
  },
  {
    text: "Relief",
    bgColor: "#FFA4DA",
    color: "#000000",
    category: "Community infrastructure levy",
    value: "CO_RELIEF",
  },
  {
    text: "Liable",
    bgColor: "#FF0099",
    color: "#000000",
    category: "Community infrastructure levy",
    value: "CO_LIABLE",
  },
  {
    text: "Not liable",
    bgColor: "#FFF",
    color: "#000000",
    category: "Community infrastructure levy",
    value: "CO_NOT_LIABLE",
  },
] as const;

const flagValues = flatFlags.map((f) => f.value);

export type FlagValue = (typeof flagValues)[number];
