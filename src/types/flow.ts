import { ComponentType } from "./component";
import type { Value } from "./data";

export type FlowId = string;

export type NodeId = string;

export type Edges = Array<NodeId>;

export const NODE_TAGS = ["placeholder"] as const;

export type NodeTags = { tags?: typeof NODE_TAGS };

export type NodeData = Record<string, Value> & NodeTags;

export interface Node {
  id?: NodeId;
  type?: ComponentType;
  edges?: Edges;
  data?: NodeData;
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
  internalPortalId?: string;
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
