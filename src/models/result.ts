import type {
  Breadcrumbs,
  Flag,
  FlagSet,
  FlowGraph,
  ResultData,
} from "../types";
import {
  ComponentType,
  DEFAULT_FLAG_CATEGORY,
  flatFlags,
  resultOverrides,
} from "../types";

// Functions in this file need to stay in sync with planx-new/editor.planx.uk/src/pages/FlowEditor/lib/store/preview.ts !!
//   TODO eventually replace/combine ??
export function getResultData({
  breadcrumbs,
  flow,
  category = DEFAULT_FLAG_CATEGORY,
  overrides,
}: {
  breadcrumbs: Breadcrumbs;
  flow: FlowGraph;
  category?: FlagSet;
  overrides?: resultOverrides;
}): ResultData {
  const SUPPORTED_DECISION_TYPES = [
    ComponentType.Checklist,
    ComponentType.Question,
  ];

  const possibleFlags: Flag[] = flatFlags.filter(
    (f) => f.category === category,
  );

  const collectedFlags = collectedFlagValuesByCategory(
    category,
    breadcrumbs,
    flow,
  );

  // The highest order flag collected in this category is our result, else "No result"
  const flag: Flag = possibleFlags.find(
    (f) => f.value === collectedFlags?.[0],
  ) || {
    value: undefined,
    text: "No result",
    category: category as FlagSet,
    bgColor: "#EEEEEE",
    color: "#000000",
    description: "",
  };

  // Get breadcrumb nodes that set the result flag value (limited to Question & Checklist types)
  const responses = Object.entries(breadcrumbs)
    .map(([nodeId, { answers = [] }]) => {
      const question = { id: nodeId, ...flow[nodeId] };
      const questionType = question?.type;
      if (!questionType || !SUPPORTED_DECISION_TYPES.includes(questionType))
        return null;

      const selections = answers.map((answerId) => ({
        id: answerId,
        ...flow[answerId],
      }));
      const hidden = !selections.some(
        (selection) =>
          selection.data?.flags &&
          flag.value &&
          selection.data.flags.includes(flag.value),
      );

      return {
        question,
        selections,
        hidden,
      };
    })
    .filter(Boolean);

  // Get the heading & description for this result flag
  const heading =
    (flag.value && overrides && overrides[flag.value]?.heading) || flag.text;
  const description =
    (flag.value && overrides && overrides[flag.value]?.description) || category;

  return {
    [category]: {
      flag,
      displayText: { heading, description },
      responses: responses.every((response) => Boolean(response?.hidden))
        ? responses.map((response) => ({ ...response, hidden: false }))
        : responses,
    },
  } as ResultData;
}

const collectedFlagValuesByCategory = (
  category: FlagSet = DEFAULT_FLAG_CATEGORY,
  breadcrumbs: Breadcrumbs,
  flow: FlowGraph,
): Array<Flag["value"]> => {
  // Get all possible flag values for this flagset category
  const possibleFlags = flatFlags.filter((flag) => flag.category === category);
  const possibleFlagValues = possibleFlags.map((flag) => flag.value);

  // Get all flags collected so far based on selected answers, excluding flags not in this category
  const collectedFlags: Array<Flag["value"]> = [];
  Object.entries(breadcrumbs).forEach(([_nodeId, breadcrumb]) => {
    if (breadcrumb.answers) {
      breadcrumb.answers.forEach((answerId) => {
        const node = flow?.[answerId];
        if (node?.data?.flags) {
          node.data.flags.forEach((flag: Flag["value"]) => {
            if (possibleFlagValues.includes(flag)) collectedFlags.push(flag);
          });
        }
      });
    }
  });

  // Return de-duplicated collected flags in hierarchical order
  return [
    ...new Set(
      collectedFlags.sort(
        (a, b) => possibleFlagValues.indexOf(a) - possibleFlagValues.indexOf(b),
      ),
    ),
  ];
};
