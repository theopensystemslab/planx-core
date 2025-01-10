import type {
  Breadcrumbs,
  Crumb,
  DataObject,
  FlowGraph,
  IndexedFlowGraph,
  IndexedNode,
  Node,
  NodeId,
  OrderedBreadcrumbs,
  OrderedFlow,
} from "../../types/index.js";
import { ComponentType } from "../../types/index.js";

export function sortFlow(flow: FlowGraph): OrderedFlow {
  let sectionId: string | undefined;
  const nodes: IndexedNode[] = [];
  const nodeIds = new Set<string>();
  const internalPortals: string[] = [];

  const searchNodeEdges = (id: string, parentId: string) => {
    // Skip already added nodes
    if (nodeIds.has(id)) return;
    nodeIds.add(id);

    const foundNode = flow[id];
    if (!foundNode) {
      throw new Error(`Referenced node edge "${id}" not found`);
    }

    const { edges, type, data } = foundNode;
    if (!type) {
      throw new Error(`Node is missing a type: "${JSON.stringify(foundNode)}"`);
    }

    // Create indexed node
    const nodeToAdd: IndexedNode = { id, parentId, type, data };

    // Conditionally add additional properties
    if (edges) nodeToAdd.edges = edges;

    sectionId = type === ComponentType.Section ? id : sectionId;
    if (sectionId) nodeToAdd.sectionId = sectionId;

    // Conditionally set internal portal id, taking most recent from the stack
    const internalPortalId = internalPortals[internalPortals.length - 1];
    if (internalPortalId) nodeToAdd.internalPortalId = internalPortalId;

    nodes.push(nodeToAdd);

    // If we've hit a portal, add it to the stack
    if (type === ComponentType.InternalPortal) internalPortals.push(id);

    edges?.forEach((childEdgeId) => {
      searchNodeEdges(childEdgeId, id);
    });

    // Remove portal from stack when we exit it
    if (type === ComponentType.InternalPortal) internalPortals.pop();
  };

  flow._root.edges.forEach((rootEdgeId) => {
    searchNodeEdges(rootEdgeId, "_root");
  });

  return nodes;
}

export function sortBreadcrumbs(
  flow: FlowGraph,
  breadcrumbs: Breadcrumbs,
): OrderedBreadcrumbs {
  const breadcrumbMap = new Map(Object.entries(breadcrumbs));
  const visited: Record<NodeId, Node | Crumb>[] = [];

  // Search for section nodes and nodes matching the user's breadcrumbs
  const searchNodeEdges = (id: string) => {
    const currentNode = flow[id];
    const crumb = breadcrumbMap.get(id);

    // Track section nodes so that we can append this data to our enriched crumbs
    if (currentNode.type === ComponentType.Section) {
      visited.push({ [id]: currentNode });
    }

    // Track crumbs in order (by flow depth)
    if (crumb) {
      visited.push({ [id]: crumb });
      // Drop from map so we don't store duplicates
      breadcrumbMap.delete(id);
    }

    currentNode.edges?.forEach(searchNodeEdges);
  };

  flow._root.edges.forEach(searchNodeEdges);

  // Build enriched and ordered breadcrumbs
  const orderedBreadcrumbs: OrderedBreadcrumbs = [];
  let currentSectionId: NodeId | undefined = undefined;

  visited.forEach((item) => {
    const [id, nodeOrCrumb] = Object.entries(item)[0];

    if (isSectionNode(nodeOrCrumb)) {
      currentSectionId = id;
      return;
    }

    const crumb = nodeOrCrumb;
    const node = flow[id];
    const answerData = buildAnswerData(crumb, flow);

    orderedBreadcrumbs.push({
      id,
      sectionId: currentSectionId,
      type: node.type!,
      autoAnswered: !!crumb.auto,
      answers: crumb.answers,
      data: crumb.data,
      override: crumb.override,
      feedback: crumb.feedback,
      questionData: node.data!,
      answerData,
    });
  });

  return orderedBreadcrumbs;
}

const isSectionNode = (nodeOrCrumb: Node | Crumb): nodeOrCrumb is Node =>
  "type" in nodeOrCrumb && nodeOrCrumb.type === ComponentType.Section;

const buildAnswerData = (crumb: Crumb, flow: FlowGraph) =>
  crumb.answers?.reduce((answerData: Record<NodeId, DataObject>, answerId) => {
    try {
      if (flow[answerId]) {
        answerData[answerId] = flow[answerId].data!;
      } else {
        answerData = {};
      }
      return answerData;
    } catch (error) {
      throw Error(
        `Failed to find orphaned breadcrumb ${answerId}. Error: ${error}`,
      );
    }
  }, {});

type Path = { id: string; type: ComponentType | "_root" }[];

type GetPathForNode = (params: { nodeId: string; flow: OrderedFlow }) => Path;

/**
 * Return a "path" for a given node which represents it's placement relative to the root node
 * A path begins with the provided node, and ends at the root (inclusive)
 */
export const getPathForNode: GetPathForNode = ({ nodeId, flow }) => {
  const indexedFlow = flow.reduce((acc, indexedNode) => {
    acc[indexedNode.id] = indexedNode;
    return acc;
  }, {} as IndexedFlowGraph);

  const path: Path = [];

  const traverseGraph = (currentNodeId: string) => {
    const { id, type, parentId } = indexedFlow[currentNodeId];
    path.push({ id, type });

    if (parentId === "_root") {
      path.push({ id: "_root", type: "_root" });
      return;
    }

    traverseGraph(parentId);
  };

  traverseGraph(nodeId);

  return path;
};
