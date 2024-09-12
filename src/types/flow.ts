import { ComponentType } from "./component";
import type { Value } from "./data";

export type FlowId = string;

export type NodeId = string;

export type Edges = Array<NodeId>;

export const NodeTags = ["placeholder"] as const;

export interface Node {
  id?: string;
  type?: ComponentType;
  edges?: Edges;
  data?: Record<string, Value>;
  tags?: typeof NodeTags;
}

type RootNode = {
  edges: Edges;
};

export type FlowGraph = {
  _root: RootNode;
  [key: string]: Node;
};

export type IndexedNode = Node & {
  id: string;
  type: ComponentType;
  parentId: string;
  sectionId?: string;
};

export type IndexedFlowGraph = {
  _root: RootNode;
} & {
  [key: string]: IndexedNode;
};

export type OrderedFlow = Array<IndexedNode>;

export interface NormalizedNode extends IndexedNode {
  sectionId?: string;
  rootNodeId: string;
}

export type NormalizedFlow = Array<NormalizedNode>;

export type FlowStatus = "online" | "offline";
