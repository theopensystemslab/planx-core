import type {
  Breadcrumbs,
  DataObject,
  FlowGraph,
  IndexedNode,
  NodeId,
  OrderedBreadcrumbs,
  OrderedFlow,
  Passport as IPassport,
  Value,
} from "../../types";
import { ComponentType } from "../../types";

export function sortFlow(flow: FlowGraph): OrderedFlow {
  let sectionId: string | undefined;
  const nodes: IndexedNode[] = [];
  const searchNodeEdges = (id: string, parentId?: string) => {
    // skip already added nodes
    if (nodes.map((n) => n.id).includes(id)) return;
    const foundNode = flow[id];
    if (!foundNode) {
      throw new Error(`Referenced node edge "${id}" not found`);
    }
    if (!foundNode.type) {
      throw new Error(`Node is missing a type: "${JSON.stringify(foundNode)}"`);
    }
    sectionId = foundNode.type == ComponentType.Section ? id : sectionId;
    nodes.push({
      id,
      parentId: parentId || null,
      sectionId,
      type: foundNode.type!,
      edges: foundNode.edges,
      data: foundNode.data,
    });
    foundNode.edges?.forEach((childEdgeId) => {
      searchNodeEdges(childEdgeId, id);
    });
  };
  let parentId: string;
  flow._root.edges.forEach((rootEdgeId) => {
    searchNodeEdges(rootEdgeId, parentId);
    parentId = rootEdgeId;
  });
  return nodes;
}

export function sortBreadcrumbs(
  flow: FlowGraph,
  breadcrumbs: Breadcrumbs,
): OrderedBreadcrumbs {
  const breadcrumbIds = Object.keys(breadcrumbs);
  const orderedBreadcrumbs: OrderedBreadcrumbs = [];
  let sectionId: string | undefined;
  const searchNodeEdges = (id: string) => {
    // skip already added crumbs
    if (orderedBreadcrumbs.map((b) => b.id).includes(id)) return;
    const foundCrumb = breadcrumbIds.includes(id) ? breadcrumbs[id] : undefined;
    const foundNode = flow[id];
    const answerData =
      foundCrumb && (foundCrumb.answers || []).length
        ? foundCrumb.answers!.reduce(
            (acc, answerId) => {
              acc[answerId] = flow[answerId].data!;
              return acc;
            },
            {} as Record<NodeId, DataObject>,
          )
        : undefined;
    if (foundCrumb && foundNode) {
      sectionId = foundNode.type == ComponentType.Section ? id : sectionId;
      orderedBreadcrumbs.push({
        id,
        sectionId,
        type: foundNode.type!,
        autoAnswered: !!foundCrumb.auto,
        answers: foundCrumb.answers,
        data: foundCrumb.data,
        override: foundCrumb.override,
        feedback: foundCrumb.feedback,
        questionData: foundNode.data!,
        answerData,
      });
    }
    foundNode.edges?.forEach((childEdgeId) => {
      searchNodeEdges(childEdgeId);
    });
    // short-circuit if complete
    if (orderedBreadcrumbs.length === breadcrumbIds.length) {
      return orderedBreadcrumbs;
    }
  };
  flow._root.edges.forEach((rootEdgeId) => {
    searchNodeEdges(rootEdgeId);
  });
  return orderedBreadcrumbs;
}

export function flattenBreadcrumbs(
  orderedBreadcrumbs: OrderedBreadcrumbs,
): Breadcrumbs {
  return orderedBreadcrumbs!.reduce((acc, crumb) => {
    acc[crumb.id] = {
      auto: crumb.autoAnswered,
      answers: crumb.answers,
      data: crumb.data,
      override: crumb.override,
      feedback: crumb.feedback,
    };
    return acc;
  }, {} as Breadcrumbs);
}

export function computePassport(breadcrumbs: OrderedBreadcrumbs): IPassport {
  const passportData: Record<string, Value> = {};
  for (const crumb of breadcrumbs) {
    const key = crumb.questionData?.fn as string | undefined;
    if (!key || !crumb.answerData) continue;
    const values: Value[] = Object.entries(crumb.answerData!)
      .map(([_id, value]) => value)
      .filter(
        (val) => val !== undefined && val !== null && String(val).trim() !== "",
      );
    if (values.length === 0) continue;
    const existingValue = passportData[key];
    if (existingValue && Array.isArray(existingValue)) {
      const combined: Set<Value> = existingValue
        .concat(values)
        .reduce((set: Set<Value>, currentValue: Value) => {
          if (
            !values.some(
              (val) =>
                val !== currentValue &&
                String(val).startsWith(String(currentValue)),
            )
          ) {
            set.add(currentValue);
          }
          return set;
        }, new Set<Value>());
      passportData[key] = [...combined];
    } else {
      passportData[key] = values;
    }
  }
  return { data: passportData };
}

export function findNextNodeOfType({
  flow,
  breadcrumbs,
  componentType,
}: {
  flow: FlowGraph;
  breadcrumbs: Breadcrumbs;
  componentType: ComponentType;
}): IndexedNode | undefined {
  const orderedBreadcrumbs = sortBreadcrumbs(flow, breadcrumbs);
  const lastCrumb = orderedBreadcrumbs.at(-1)!;
  const sortedFlow = sortFlow(flow);
  const sortedFlowLastNodeIndex = sortedFlow.findIndex(
    (n) => n.id == lastCrumb.id,
  );
  const truncatedFlow = sortedFlow.slice(sortedFlowLastNodeIndex);

  for (const node of truncatedFlow) {
    const parentNodeIsLastCrumb = node.parentId === lastCrumb.id;
    if (parentNodeIsLastCrumb && node.type === componentType) {
      return node;
    }
    const parentNodeIsCrumbAnswer =
      node.parentId &&
      lastCrumb.answers &&
      lastCrumb.answers.includes(node.parentId!);
    if (parentNodeIsCrumbAnswer && node.type === componentType) {
      return node;
    }
  }
  // when the above fails, fallback to a naïve scan of matching upcoming nodes
  // FIXME: this approach does not respect flow branching logic
  return truncatedFlow.find((n) => n.type === componentType);
}
