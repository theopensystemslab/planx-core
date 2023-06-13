import type { Flag, FlagSet } from "../../../types";

export const mockPlanningPermissionFlags: FlagSet = [
  {
    setName: "Planning permission",
    value: "IMMUNE",
    text: "Immune",
    description:
      "It looks like the changes may now be beyond the time limit for enforcement action. This does not apply if the changes have been deliberately concealed.",
  },
  {
    setName: "Planning permission",
    value: "MISSING_INFO",
    text: "Missing information",
    description:
      "There is some key information missing that will be needed to assess this application",
  },
  {
    setName: "Planning permission",
    value: "PLANNING_PERMISSION_REQUIRED",
    text: "Permission needed",
    description:
      "It looks like the proposed changes may require planning permission.",
  },
  {
    setName: "Planning permission",
    value: "PRIOR_APPROVAL",
    text: "Prior approval",
    description:
      "It looks like the proposed changes do not require planning permission, however the applicant must apply for Prior Approval before proceeding.",
  },
  {
    setName: "Planning permission",
    value: "PP-NOTICE",
    text: "Notice",
    description:
      "It looks like the proposed changes may not require planning permission, however the applicant must provide notice to the planning authority before proceeding.",
  },
  {
    setName: "Planning permission",
    value: "NO_APP_REQUIRED",
    text: "Permitted development",
    description:
      "It looks like the proposed changes may fall within the rules for Permitted Development and therefore would not need planning permission.",
  },
  {
    setName: "Planning permission",
    value: "PP-NOT_DEVELOPMENT",
    text: "Not development",
    description:
      "It looks like the proposed changes may not fall within the legal definition of ‘development’, and therefore would not require planning permission.",
  },
];

export const mockFlags: Flag[] = [
  {
    setName: "Planning permission",
    value: "IMMUNE",
    text: "Immune",
    description:
      "It looks like the changes may now be beyond the time limit for enforcement action. This does not apply if the changes have been deliberately concealed.",
  },
  {
    setName: "Listed building consent",
    value: "LB-MISSING_INFO",
    text: "Missing information",
  },
  {
    setName: "Works to trees & hedges",
    value: "TR-MISSING_INFO",
    text: "Missing information",
  },
  {
    setName: "Demolition in a conservation area",
    value: "DC-MISSING_INFO",
    text: "Missing information",
  },
  {
    setName: "Planning policy",
    value: "PO_MISSING_INFO",
    text: "Missing information",
  },
  {
    setName: "Community infrastructure levy",
    value: "CO_MISSING_INFO",
    text: "Missing information",
  },
  {
    setName: "Planning permission",
    value: "MISSING_INFO",
    text: "Missing information",
    description:
      "There is some key information missing that will be needed to assess this application",
  },
  {
    setName: "Listed building consent",
    value: "LB-REQUIRED",
    text: "Required",
  },
  {
    setName: "Works to trees & hedges",
    value: "TR-REQUIRED",
    text: "Required",
  },
  {
    setName: "Demolition in a conservation area",
    value: "DC-REQUIRED",
    text: "Required",
  },
  {
    setName: "Planning policy",
    value: "LIKELY_FAIL",
    text: "Fails to meet policy",
  },
  {
    setName: "Community infrastructure levy",
    value: "CO_EXEMPTION_VOID",
    text: "Exemption void",
  },
  {
    setName: "Works to trees & hedges",
    value: "TR-DE_MINIMIS",
    text: "De minimis",
  },
  {
    setName: "Community infrastructure levy",
    value: "CO_EXEMPT",
    text: "Exempt",
  },
  {
    setName: "Planning permission",
    value: "PLANNING_PERMISSION_REQUIRED",
    text: "Permission needed",
    description:
      "It looks like the proposed changes may require planning permission.",
  },
  {
    setName: "Listed building consent",
    value: "LB-DE_MINIMIS",
    text: "De minimis",
  },
  {
    setName: "Planning policy",
    value: "EDGE_CASE",
    text: "Edge case",
  },
  {
    setName: "Demolition in a conservation area",
    value: "DC-DE_MINIMIS",
    text: "De minimis",
  },
  {
    setName: "Community infrastructure levy",
    value: "CO_RELIEF_VOID",
    text: "Relief void",
  },
  {
    setName: "Works to trees & hedges",
    value: "TR-NOT_REQUIRED",
    text: "Not required",
  },
  {
    setName: "Demolition in a conservation area",
    value: "DC-NOT_REQUIRED",
    text: "Not required",
  },
  {
    setName: "Planning permission",
    value: "PRIOR_APPROVAL",
    text: "Prior approval",
    description:
      "It looks like the proposed changes do not require planning permission, however the applicant must apply for Prior Approval before proceeding.",
  },
  {
    setName: "Listed building consent",
    value: "LB-NOT_REQUIRED",
    text: "Not required",
  },
  {
    setName: "Planning policy",
    value: "LIKELY_PASS",
    text: "Meets policy",
  },
  {
    setName: "Planning permission",
    value: "PP-NOTICE",
    text: "Notice",
    description:
      "It looks like the proposed changes may not require planning permission, however the applicant must provide notice to the planning authority before proceeding.",
  },
  {
    setName: "Community infrastructure levy",
    value: "CO_RELIEF",
    text: "Relief",
  },
  {
    setName: "Planning permission",
    value: "NO_APP_REQUIRED",
    text: "Permitted development",
    description:
      "It looks like the proposed changes may fall within the rules for Permitted Development and therefore would not need planning permission.",
  },
  {
    setName: "Community infrastructure levy",
    value: "CO_LIABLE",
    text: "Liable",
  },
  {
    setName: "Community infrastructure levy",
    value: "CO_NOT_LIABLE",
    text: "Not liable",
  },
  {
    setName: "Planning permission",
    value: "PP-NOT_DEVELOPMENT",
    text: "Not development",
    description:
      "It looks like the proposed changes may not fall within the legal definition of ‘development’, and therefore would not require planning permission.",
  },
];
