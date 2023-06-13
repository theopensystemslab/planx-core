import type {
  FlowGraph,
  Breadcrumbs,
  Flag,
  FlagSet,
  FlagSetName,
} from "../types";

export const DEFAULT_RESULT_FLAG_SET_NAME: FlagSetName = "Planning permission";

export function getResultFlag({
  resultFlagSet,
  breadcrumbs,
  flow,
}: {
  resultFlagSet: FlagSet;
  breadcrumbs: Breadcrumbs;
  flow: FlowGraph;
}): Flag {
  const noResultFlag: Flag = {
    value: undefined,
    text: "No result",
    setName: resultFlagSet.length
      ? resultFlagSet[0].setName
      : DEFAULT_RESULT_FLAG_SET_NAME,
    description: "",
  };

  const keys = resultFlagSet.map((f) => f.value);

  const collectedFlags = Object.values(breadcrumbs).flatMap(
    ({ answers = [] }) => answers.map((id) => flow[id]?.data?.flag)
  ) as string[];

  const filteredCollectedFlags = collectedFlags
    .filter((flag) => flag && keys.includes(flag))
    .sort((a, b) => keys.indexOf(a) - keys.indexOf(b));

  const flag: Flag =
    resultFlagSet.find((f) => f.value === filteredCollectedFlags[0]) ||
    noResultFlag;

  return flag;
}
