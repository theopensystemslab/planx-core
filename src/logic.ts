import { ComponentType } from "./types";
import { typeEnumToString, clearUndefinedKeys } from "./helpers";
import type {
  IndexedNode,
  Flow,
  OrderedFlow,
  NormalizedNode,
  NormalizedFlow,
  Crumb,
  Breadcrumbs,
  EnrichedCrumb,
  EnrichedBreadcrumbs,
} from "./types";

export function sortFlow(flow: Flow): OrderedFlow {
  const nodes = new Set<IndexedNode>([]);
  const searchNodeEdges = (id: string, parentId?: string) => {
    const foundNode = flow[id];
    if (!foundNode) {
      throw new Error(`Referenced node edge "${id}" not found`);
    }
    nodes.add({
      id,
      parentId: parentId || null,
      ...foundNode,
    });
    flow[id].edges?.forEach((childEdgeId) => {
      searchNodeEdges(childEdgeId, id);
    });
  };
  let parentId: string;
  flow._root.edges.forEach((rootEdgeId) => {
    searchNodeEdges(rootEdgeId, parentId);
    parentId = rootEdgeId;
  });
  return [...nodes];
}

export function normalizeFlow(flow: Flow): NormalizedFlow {
  let currentSectionId: string;
  let rootNodeId: string;
  return sortFlow(flow).map((node: IndexedNode) => {
    const isRootNode = flow._root.edges.includes(node.id);
    if (isRootNode) {
      rootNodeId = node.id;
    }

    const isSectionType = node.type == ComponentType.Section;
    if (isSectionType) currentSectionId = node.id;

    const normalizedNode: NormalizedNode = {
      ...node,
      rootNodeId,
      sectionId: currentSectionId,
      component: "",
    };
    if (node.type) {
      normalizedNode.component = typeEnumToString(node.type!);
    }
    clearUndefinedKeys(normalizedNode);

    return normalizedNode;
  });
}

export function enrichBreadcrumbs(
  flow: Flow,
  breadcrumbs: Breadcrumbs
): EnrichedBreadcrumbs {
  const normalizedFlow: NormalizedFlow = normalizeFlow(flow);
  const enrichBreadcrumbs: EnrichedBreadcrumbs = [];
  normalizedFlow.forEach((node) => {
    const crumb: Crumb = breadcrumbs[node.id];
    if (!crumb) return;

    const answerData: EnrichedCrumb["details"]["answerData"] = {};
    crumb.answers?.forEach((id) => {
      if (flow[id].data) answerData[id] = flow[id].data!;
    });

    const enrichedCrumb: EnrichedCrumb = {
      id: node.id,
      answers: crumb.answers,
      data: crumb.data,
      override: crumb.override,
      feedback: crumb.feedback,
      autoAnswered: !!crumb.auto,
      sectionId: node.sectionId,
      details: {
        component: node.component,
        nodeData: node.data,
        answerData: Object.keys(answerData).length ? answerData : undefined,
      },
    };
    clearUndefinedKeys(enrichedCrumb);
    enrichBreadcrumbs.push(enrichedCrumb);
  });
  return enrichBreadcrumbs;
}
