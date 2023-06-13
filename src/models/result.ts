import {
  LooseFlowGraph,
  Breadcrumbs,
  ComponentType,
  Flag,
  ResultData,
  resultOverrides,
  flatFlags,
  FlagSet,
  DEFAULT_FLAG_CATEGORY,
} from "../types";

export function getResultData({
  breadcrumbs,
  flow,
  flagSet = DEFAULT_FLAG_CATEGORY,
  overrides,
}: {
  breadcrumbs: Breadcrumbs;
  flow: LooseFlowGraph;
  flagSet?: FlagSet;
  overrides?: resultOverrides;
}): ResultData {
  const EMPTY_FLAG: Flag = {
    value: undefined,
    text: "No result",
    description: "",
    category: flagSet,
  };

  const SUPPORTED_DECISION_TYPES = [
    ComponentType.Checklist,
    ComponentType.Answer,
  ];

  const possibleFlags = flatFlags.filter((f) => f.category === flagSet);
  const keys = possibleFlags.map((f) => f.value);
  const collectedFlags = Object.values(breadcrumbs).flatMap(
    ({ answers = [] }) => answers.map((id) => flow[id]?.data?.flag)
  );

  const filteredCollectedFlags = collectedFlags
    .filter((flag) => flag && keys.includes(flag))
    .sort((a, b) => keys.indexOf(a) - keys.indexOf(b));

  const flag: Flag =
    possibleFlags.find((f) => f.value === filteredCollectedFlags[0]) ||
    EMPTY_FLAG;

  const responses = Object.entries(breadcrumbs)
    .map(([k, { answers = [] }]) => {
      const question = { id: k, ...flow[k] };

      const questionType = question?.type as ComponentType | undefined;

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

  const filteredResponses = responses.every((r: any) => r.hidden)
    ? responses.map((r: any) => ({ ...r, hidden: false }))
    : responses;

  const heading =
    (flag.value && overrides && overrides[flag.value]?.heading) || flag.text;

  const description =
    (flag.value && overrides && overrides[flag.value]?.description) || flagSet;

  return {
    [flagSet]: {
      flag,
      displayText: { heading, description },
      responses: filteredResponses,
    },
  };
}
