import { ComponentType } from "./types";
import { clearUndefinedKeys } from "./helpers";
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
  const nodes: IndexedNode[] = [];
  const searchNodeEdges = (id: string, parentId?: string) => {
    const foundNode = flow[id];
    if (!foundNode) {
      throw new Error(`Referenced node edge "${id}" not found`);
    }
    nodes.push({
      id,
      parentId: parentId || null,
      type: foundNode.type,
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

export function normalizeFlow(flow: FlowGraph): NormalizedFlow {
  let sectionId: string;
  let rootNodeId: string;
  const rootEdges = flow._root.edges;
  return sortFlow(flow).map((node: IndexedNode) => {
    const isRootNode = rootEdges.includes(node.id);
    if (isRootNode) {
      rootNodeId = node.id;
      sectionId = node.type == ComponentType.Section ? node.id : sectionId;
    }
    const normalizedNode: NormalizedNode = {
      id: node.id,
      parentId: node.parentId,
      type: node.type,
      edges: node.edges,
      data: node.data,
      rootNodeId,
      sectionId,
    };
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
