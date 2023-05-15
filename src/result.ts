import { LooseFlowGraph } from "./export/bops/model";
import { DEFAULT_FLAG_CATEGORY, FlagSet, flatFlags } from "./flags";
import {
  Breadcrumbs,
  ComponentType,
  Flag,
  ResultData,
  resultOverrides,
} from "./types";

const SUPPORTED_DECISION_TYPES = [
  ComponentType.Checklist,
  ComponentType.Answer,
];

export const getResultData = (
  breadcrumbs: Breadcrumbs,
  flow: LooseFlowGraph,
  flagSet: FlagSet = DEFAULT_FLAG_CATEGORY,
  overrides?: resultOverrides
) => {
  const categories = [flagSet];

  return categories.reduce(
    (
      acc: {
        [category: string]: {
          flag: Flag;
          responses: any[];
          displayText: { heading: string; description: string };
        };
      },
      category: string
    ) => {
      const possibleFlags = flatFlags.filter((f) => f.category === category);
      const keys = possibleFlags.map((f) => f.value);
      const collectedFlags = Object.values(breadcrumbs).flatMap(
        ({ answers = [] }) => answers.map((id) => flow[id]?.data?.flag)
      );

      const filteredCollectedFlags = collectedFlags
        .filter((flag) => flag && keys.includes(flag))
        .sort((a, b) => keys.indexOf(a) - keys.indexOf(b));

      const flag: Flag = possibleFlags.find(
        (f) => f.value === filteredCollectedFlags[0]
      ) || {
        // value: "PP-NO_RESULT",
        value: undefined,
        text: "No result",
        category,
        officerDescription: "",
      };

      const responses = Object.entries(breadcrumbs)
        .map(([k, { answers = [] }]) => {
          const question = { id: k, ...flow[k] };

          const questionType = question?.type;

          if (!questionType || !SUPPORTED_DECISION_TYPES.includes(questionType))
            return null;

          const selections = answers.map((id) => ({ id, ...flow[id] }));
          const hidden = !selections.some(
            (r) => r.data?.flag && r.data.flag === flag?.value
          );

          return {
            question,
            selections,
            hidden,
          };
        })
        .filter(Boolean);

      const heading =
        (flag.value && overrides && overrides[flag.value]?.heading) ||
        flag.text;
      const description =
        (flag.value && overrides && overrides[flag.value]?.description) ||
        flagSet;

      acc[category] = {
        flag,
        displayText: { heading, description },
        responses: responses.every((r: any) => r.hidden)
          ? responses.map((r: any) => ({ ...r, hidden: false }))
          : responses,
      };

      return acc;
    },
    {} as ReturnType<ResultData>
  );
};
