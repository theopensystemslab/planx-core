import { normalizeFlow, sortBreadcrumbs } from "./logic";
import { ComponentType, SectionStatuses } from "../../types";
import type {
  NodeId,
  Breadcrumbs,
  OrderedBreadcrumbs,
  NormalizedCrumb,
  FlowGraph,
  NormalizedFlow,
  NormalizedNode,
  SectionOverview,
} from "../../types";

// TODO
// SessionState loads a flow and provides an interface for
// creating, updating and exporting a set of breadcrumbs
// export class SessionState {}

// StaticSessionState loads a flow and provides an interface for
// querying the state of a given set of OrderedBreadcrumbs
export class StaticSessionState {
  flow: FlowGraph;
  normalizedFlow: NormalizedFlow;

  constructor(flow: FlowGraph) {
    this.flow = flow;
    this.normalizedFlow = normalizeFlow(flow);
  }

  get sections() {
    return this.normalizedFlow.filter(
      (node) => node.type == ComponentType.Section,
    );
  }

  sortBreadcrumbs(unsortedBreadcrumbs: Breadcrumbs): OrderedBreadcrumbs {
    return sortBreadcrumbs(this.flow, unsortedBreadcrumbs);
  }

  currentNodes(breadcrumbs: OrderedBreadcrumbs): NormalizedNode[] {
    if (breadcrumbs.length == 0) {
      return [];
    }
    const currentIndex = this.currentIndex(breadcrumbs);
    const nextNode = this.normalizedFlow[currentIndex]!;
    return this.findAllRelatedNodes(nextNode);
  }

  nextNodes(breadcrumbs: OrderedBreadcrumbs): NormalizedNode[] {
    let individualNextNode: NormalizedNode | null = null;
    // get the first node if breadcrumbs are empty
    if (breadcrumbs.length == 0) {
      individualNextNode = this.normalizedFlow[0];
    } else {
      // otherwise get the first remaining node
      const remaining = this.remainingNodes(breadcrumbs);
      individualNextNode = remaining.length ? remaining[0] : null;
    }
    if (individualNextNode == null) return [];
    // return the related nodes
    return this.findAllRelatedNodes(individualNextNode);
  }

  findIds(nodeIds: Array<NodeId>): Array<NormalizedNode> {
    return this.normalizedFlow.filter((node) => nodeIds.includes(node.id));
  }

  findAllRelatedNodes(node: NormalizedNode): Array<NormalizedNode> {
    if (node.edges?.length) {
      return [node, ...this.findIds(node.edges)];
    }
    return [node];
  }

  remainingNodes(breadcrumbs: OrderedBreadcrumbs): Array<NormalizedNode> {
    if (breadcrumbs.length == 0) {
      return this.normalizedFlow;
    }
    const currentIndex = this.currentIndex(breadcrumbs);
    const currentNode = this.normalizedFlow[currentIndex]!;
    return this.normalizedFlow.filter((node, index) => {
      const afterCurrent = index > currentIndex;
      const nextChildNode = afterCurrent && node.parentId == currentNode.id;
      const nextRootNode =
        afterCurrent && node.rootNodeId != currentNode.rootNodeId;
      return nextChildNode || nextRootNode;
    });
  }

  sectionOverview({
    breadcrumbs,
    cachedBreadcrumbs,
    updatedNodeIds,
  }: {
    breadcrumbs: OrderedBreadcrumbs;
    cachedBreadcrumbs?: OrderedBreadcrumbs;
    updatedNodeIds?: Array<NodeId>;
  }): SectionOverview {
    // construct the default section overview
    const sections: SectionOverview = this.sections.map(
      (sectionNode, index) => {
        const id = sectionNode.id;
        const title = (sectionNode.data?.title as string) || "";
        const status =
          index == 0
            ? SectionStatuses.ReadyToStart
            : SectionStatuses.CannotStartYet;
        return { id, title, status };
      },
    );

    // return the default section overview if breadcrumbs are empty
    if (breadcrumbs.length == 0) {
      return sections;
    }

    // compute Complete and ReadyToStart statuses
    let sectionIndex = 0;
    let seenCrumb: NormalizedCrumb;
    breadcrumbs.forEach((crumb: NormalizedCrumb) => {
      const notSeenThisSection =
        !seenCrumb || (seenCrumb && crumb.sectionId != seenCrumb.sectionId);
      if (notSeenThisSection) {
        // increment section index
        sectionIndex++;
        // mark the section as ReadyToStart
        if (sections[sectionIndex]) {
          sections[sectionIndex].status = SectionStatuses.ReadyToStart;
        }
        // mark the previous section as Complete
        sections[sectionIndex - 1].status = SectionStatuses.Complete;
      }
      // track this crumb as seen
      seenCrumb = crumb;
    });

    // compute ReadyToContinue and CannotContinueYet statuses
    if (cachedBreadcrumbs) {
      const upcomingIds = this.remainingNodes(breadcrumbs).map(
        (node: NormalizedNode) => node.id,
      );
      cachedBreadcrumbs
        .filter((crumb) => upcomingIds.includes(crumb.id))
        .reverse() // work backwards to prioritize ReadyToContinue
        .forEach((crumb) => {
          const sectionIndex = sections.findIndex(
            (section) => section.id == crumb.sectionId,
          );
          sections[sectionIndex].status = SectionStatuses.CannotContinueYet;
          if (upcomingIds[0] === crumb.id) {
            sections[sectionIndex].status = SectionStatuses.ReadyToContinue;
          }
        });
    }

    // compute the Updated status
    if (updatedNodeIds) {
      breadcrumbs.forEach((crumb) => {
        [crumb.id, ...(crumb.answers || [])]
          .filter((answerId) => updatedNodeIds.includes(answerId))
          .forEach((id) => {
            if (updatedNodeIds.includes(id)) {
              const sId = sections.findIndex((s) => s.id == crumb.sectionId);
              sections[sId].status = SectionStatuses.Updated;
            }
          });
      });
    }

    return sections;
  }

  private currentIndex(breadcrumbs: OrderedBreadcrumbs) {
    const lastCrumb: NormalizedCrumb = breadcrumbs.at(-1)!;
    const currentIndex = this.normalizedFlow.findIndex((node) => {
      if (lastCrumb.answers?.length) {
        const lastAnswerId = lastCrumb.answers.at(-1);
        return node.id === lastAnswerId;
      }
      return node.id === lastCrumb.id;
    });
    if (currentIndex === undefined) {
      throw new Error(`"${lastCrumb.id}" not found in this flow`);
    }
    return currentIndex;
  }
}
