import { expandFlow, sortFlow, sortBreadcrumbs } from "./logic";
import { ComponentType, component } from "../../types";
import type {
  NodeId,
  Breadcrumbs,
  OrderedBreadcrumbs,
  FlowGraph,
  OrderedFlow,
  IndexedNode,
  StructuredFlow,
  StructuredNode,
} from "../../types";

// NOTE: This is experimental and is not intended for use yet.
//
// StaticSessionState loads a flow and provides an interface for
// querying the state of a given set of OrderedBreadcrumbs
export class StaticSessionState {
  // data structure cache
  private flow: FlowGraph;
  private orderedFlow: OrderedFlow;
  private structuredFlow: StructuredFlow;

  constructor(flow: FlowGraph) {
    this.flow = flow;
    // do all the heavy crunching on construction
    this.orderedFlow = sortFlow(flow);
    this.structuredFlow = expandFlow(flow);
  }

  sortBreadcrumbs(unsortedBreadcrumbs: Breadcrumbs): OrderedBreadcrumbs {
    return sortBreadcrumbs(this.flow, unsortedBreadcrumbs);
  }

  sections(): StructuredNode[] {
    return this.orderedFlow
      .filter((node) => node.type == ComponentType.Section)
      .map((node) => this.findStructuredNode(node) as StructuredNode);
  }

  find(id: NodeId): StructuredNode | null {
    const indexedNode = this.findIndexedNode(id);
    return this.findStructuredNode(indexedNode);
  }

  findLast(id: NodeId): StructuredNode | null {
    const indexedNode = this.findLastIndexedNode(id);
    return this.findStructuredNode(indexedNode);
  }

  nextNodes(unsortedBreadcrumbs: Breadcrumbs): StructuredNode[] {
    const breadcrumbs = this.sortBreadcrumbs(unsortedBreadcrumbs);
    if (breadcrumbs.length == 0) {
      const firstNode = this.structuredFlow[0];
      return [firstNode];
    }
    // TODO - work in progress
    return [];
  }

  private remainingRootNodes(
    unsortedBreadcrumbs: Breadcrumbs
  ): Array<StructuredNode> {
    const breadcrumbs = this.sortBreadcrumbs(unsortedBreadcrumbs);
    if (breadcrumbs.length == 0) {
      return this.structuredFlow;
    }
    const lastCrumb = breadcrumbs.at(-1)!;
    const indexedNode = this.findIndexedNode(lastCrumb.id);
    if (!indexedNode)
      throw new Error(`Breadcrumb node "${lastCrumb.id}" could not be found`);
    const branchIndex = this.structuredFlow.findIndex(
      (branch: StructuredNode) => branch.id === indexedNode!.rootNodeId
    );
    return this.structuredFlow.slice(branchIndex + 1);
  }

  private findIndexedNode(id: NodeId): IndexedNode | undefined {
    return this.orderedFlow.find((node) => node.id === id);
  }

  private findLastIndexedNode(id: NodeId): IndexedNode | undefined {
    return this.orderedFlow.reverse().find((node) => node.id === id);
  }

  private findStructuredNode(
    indexedNode: IndexedNode | undefined
  ): StructuredNode | null {
    if (!indexedNode) return null;
    const node = this.structuredFlow.find(
      (node) => node.id === indexedNode.rootNodeId
    )!;
    const findWithinStructuredNode = (
      node: StructuredNode
    ): StructuredNode | null => {
      if (node.id === indexedNode.id) return node;
      if (node.children) {
        const collectionType =
          component(node.type!).branching?.collectionType || "eachOf";
        const children = node.children![collectionType] || [];
        for (const childNode of children) {
          const foundNode = findWithinStructuredNode(childNode);
          if (foundNode) return foundNode;
        }
      }
      return null;
    };
    return findWithinStructuredNode(node);
  }
}
