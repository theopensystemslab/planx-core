import { ComponentType } from "./types";
import type {
  IndexedNode,
  FlowGraph,
  OrderedFlow,
  NormalizedNode,
  NormalizedFlow,
  Breadcrumbs,
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
  flow: FlowGraph,
  breadcrumbs: Breadcrumbs
): OrderedBreadcrumbs {
  const breadcrumbIds = Object.keys(breadcrumbs);
  const orderedBreadcrumbs: OrderedBreadcrumbs = [];
  let sectionId: string | undefined;
  const searchNodeEdges = (id: string) => {
    const foundCrumb = breadcrumbIds.includes(id) ? breadcrumbs[id] : undefined;
    const foundNode = flow[id];
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
