import { clearUndefinedKeys } from "./helpers";
import { ComponentType } from "./types";
import type {
  IndexedNode,
  FlowGraph,
  OrderedFlow,
  NormalizedNode,
  NormalizedFlow,
  Crumb,
  Breadcrumbs,
  NormalizedCrumb,
  OrderedBreadcrumbs,
} from "./types";

export function sortFlow(flow: FlowGraph): OrderedFlow {
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

export function normalizeFlow(flow: FlowGraph): NormalizedFlow {
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
    };
    clearUndefinedKeys(normalizedNode);

    return normalizedNode;
  });
}

export function sortBreadcrumbs(
  normalizedFlow: NormalizedFlow,
  breadcrumbs: Breadcrumbs
): OrderedBreadcrumbs {
  if (!Array.isArray(normalizedFlow)) {
    throw new Error("Flow must be normalized as Array<NormalizedNode>");
  }
  const orderedBreadcrumbs: OrderedBreadcrumbs = [];
  normalizedFlow.forEach((node) => {
    const crumb: Crumb = breadcrumbs[node.id];
    if (!crumb) return;
    const normalizedCrumb: NormalizedCrumb = {
      id: node.id,
      parentId: node.parentId,
      sectionId: node.sectionId,
      rootNodeId: node.rootNodeId,
      autoAnswered: !!crumb.auto,
      ...crumb,
    };
    delete normalizedCrumb.auto; // cleanup
    orderedBreadcrumbs.push(normalizedCrumb);
  });
  return orderedBreadcrumbs;
}
