import { ComponentType, component } from "../../types";
import type {
  IndexedNode,
  CollectionType,
  FlowGraph,
  OrderedFlow,
  StructuredNode,
  StructuredFlow,
  Breadcrumbs,
  OrderedBreadcrumbs,
} from "../../types";

export function sortFlow(flow: FlowGraph): OrderedFlow {
  let sectionId: string | undefined;
  const nodes: IndexedNode[] = [];
  const searchNodeEdges = (
    id: string,
    rootNodeId: string,
    parentId?: string
  ) => {
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
      rootNodeId,
      parentId: parentId || null,
      sectionId,
      type: foundNode.type!,
      edges: foundNode.edges,
      data: foundNode.data || {},
    });
    foundNode.edges?.forEach((childEdgeId) => {
      searchNodeEdges(childEdgeId, rootNodeId, id);
    });
  };
  let parentId: string;
  flow._root.edges.forEach((rootEdgeId) => {
    searchNodeEdges(rootEdgeId, rootEdgeId, parentId);
    parentId = rootEdgeId;
  });
  return nodes;
}

export function expandFlow(flow: FlowGraph): StructuredFlow {
  const searchNodeEdges = (id: string, nodes: StructuredNode[]) => {
    const foundNode = flow[id];
    if (!foundNode) {
      throw new Error(`referenced node edge "${id}" not found`);
    }
    if (!foundNode.type) {
      throw new Error(`found node has no type: ${JSON.stringify(foundNode)}`);
    }
    const structuredNode: StructuredNode = {
      id,
      type: foundNode.type!,
      data: foundNode.data || {},
    };
    if (foundNode.edges) {
      const nestedNodes: StructuredNode[] = [];
      foundNode.edges?.forEach((edgeId) =>
        searchNodeEdges(edgeId, nestedNodes)
      );
      const key: CollectionType =
        component(foundNode.type!).branching?.collectionType || "eachOf";
      structuredNode.children = { [key]: nestedNodes };
    }
    nodes.push(structuredNode);
  };
  const nodes: Array<StructuredNode> = [];
  flow._root.edges.forEach((rootEdgeId) => {
    searchNodeEdges(rootEdgeId, nodes);
  });
  return nodes;
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
    (n) => n.id == lastCrumb.id
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
