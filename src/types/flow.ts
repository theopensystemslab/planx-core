import { ComponentType } from "./component";
import type { Value } from "./data";

export type NodeId = string;

export type Edges = Array<NodeId>;

export interface Node {
  id?: string;
  type?: ComponentType;
  edges?: Edges;
  data?: Record<NodeId, Value>;
}

export type FlowGraph = {
  _root: {
    edges: Edges;
  };
  [key: string]: Node;
};

export type IndexedNode = Node & {
  id: string;
  type: ComponentType;
  parentId: string | null; // null if it is the first node
  sectionId?: string;
};

export type OrderedFlow = Array<IndexedNode>;

export interface NormalizedNode extends IndexedNode {
  sectionId?: string;
  rootNodeId: string;
}

export type NormalizedFlow = Array<NormalizedNode>;
