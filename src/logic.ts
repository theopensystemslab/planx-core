import type {
  IndexedNode,
  Flow,
  OrderedFlow,
  Crumb,
  EnrichedCrumb,
  OrderedBreadcrumbs,
  Breadcrumbs,
} from "./types";
import { ComponentType } from "./types";

export function sortFlow(flow: Flow): OrderedFlow {
  const nodes = new Set<IndexedNode>([]);
  const searchNodeEdges = (id: string) => {
    const foundNode = flow[id];
    if (!foundNode) {
      throw new Error(`Referenced node edge "${id}" not found`);
    }
    nodes.add({ id: id, ...foundNode });
    flow[id].edges?.forEach((childEdgeId) => {
      searchNodeEdges(childEdgeId);
    });
  };
  flow._root.edges.forEach((rootEdgeId) => {
    searchNodeEdges(rootEdgeId);
  });
  return [...nodes];
}

export function sortBreadcrumbs(
  flow: Flow,
  breadcrumbs: Breadcrumbs
): OrderedBreadcrumbs {
  const orderedFlow: OrderedFlow = sortFlow(flow);
  const orderedBreadcrumbs: OrderedBreadcrumbs = [];

  // select breadcrumbs from sorted nodes
  let currentSectionId = "";
  orderedFlow.forEach((node) => {
    if (node.type == ComponentType.Section) {
      currentSectionId = node.id;
    }

    const crumb: Crumb = breadcrumbs[node.id];
    if (!crumb) return;

    const enrichedCrumb: EnrichedCrumb = {
      id: node.id,
      ...crumb,
    };

    // record the section id in each crumb to
    // make section grouping and querying easy
    if (currentSectionId) {
      enrichedCrumb.sectionId = currentSectionId;
    }

    orderedBreadcrumbs.push(enrichedCrumb);
  });
  return orderedBreadcrumbs;
}
