import { Flag } from "../types";

// flags grouped by categories, order is significant, earlier flags === more important
// https://www.figma.com/file/bnUUrsVRG6qPwDkTmVKACI/Design?node-id=1971%3A0
export const categoriesAndFlags: Record<string, Record<string, string[]>> = {
  "Planning permission": {
    IMMUNE: [
      "Immune",
      "It looks like the changes may now be beyond the time limit for enforcement action. This does not apply if the changes have been deliberately concealed.",
    ],
    MISSING_INFO: [
      "Missing information",
      "There is some key information missing that will be needed to assess this application",
    ],
    PLANNING_PERMISSION_REQUIRED: [
      "Permission needed",
      "It looks like the proposed changes may require planning permission.",
    ],
    PRIOR_APPROVAL: [
      "Prior approval",
      "It looks like the proposed changes do not require planning permission, however the applicant must apply for Prior Approval before proceeding.",
    ],
    "PP-NOTICE": [
      "Notice",
      "It looks like the proposed changes may not require planning permission, however the applicant must provide notice to the planning authority before proceeding.",
    ],
    NO_APP_REQUIRED: [
      "Permitted development",
      "It looks like the proposed changes may fall within the rules for Permitted Development and therefore would not need planning permission.",
    ],
    "PP-NOT_DEVELOPMENT": [
      "Not development",
      "It looks like the proposed changes may not fall within the legal definition of ‘development’, and therefore would not require planning permission.",
    ],
  },
  "Listed building consent": {
    "LB-MISSING_INFO": ["Missing information"],
    "LB-REQUIRED": ["Required"],
    "LB-DE_MINIMIS": ["De minimis"],
    "LB-NOT_REQUIRED": ["Not required"],
  },
  "Works to trees & hedges": {
    "TR-MISSING_INFO": ["Missing information"],
    "TR-REQUIRED": ["Required"],
    "TR-DE_MINIMIS": ["De minimis"],
    "TR-NOT_REQUIRED": ["Not required"],
  },
  "Demolition in a conservation area": {
    "DC-MISSING_INFO": ["Missing information"],
    "DC-REQUIRED": ["Required"],
    "DC-DE_MINIMIS": ["De minimis"],
    "DC-NOT_REQUIRED": ["Not required"],
  },
  "Planning policy": {
    PO_MISSING_INFO: ["Missing information"],
    LIKELY_FAIL: ["Fails to meet policy"],
    EDGE_CASE: ["Edge case"],
    LIKELY_PASS: ["Meets policy"],
  },
  "Community infrastructure levy": {
    CO_MISSING_INFO: ["Missing information"],
    CO_EXEMPTION_VOID: ["Exemption void"],
    CO_EXEMPT: ["Exempt"],
    CO_RELIEF_VOID: ["Relief void"],
    CO_RELIEF: ["Relief"],
    CO_LIABLE: ["Liable"],
    CO_NOT_LIABLE: ["Not liable"],
  },
};

export type FlagSet = keyof typeof categoriesAndFlags;

const parsedFlags = () => {
  const flagArray: Array<Flag> = [];
  Object.entries(categoriesAndFlags).reduce(
    (acc: Record<string, any>, [category, flags]) => {
      acc[category] = Object.entries(flags).reduce(
        (acc: Record<string, Flag>, [id, [text, officerDescription]]) => {
          acc[id] = {
            text,
            category,
            officerDescription,
          };

          // check that no other flags share the same ID
          if (flagArray.find((f: any) => f.id === id))
            throw new Error(`Multiple flags with same id (${id})`);

          // push the flag object to a flattened array for convenience
          flagArray.push({ ...acc[id], value: id, category });
          return acc;
        },
        {}
      );
      return acc;
    },
    {}
  );
  return flagArray;
};

export const flatFlags: Array<Flag> = parsedFlags();

export const DEFAULT_FLAG_CATEGORY = flatFlags[0].category;
