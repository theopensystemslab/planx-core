import { ComponentType } from "./component.js";
import type { Value } from "./data.js";

export type FlowId = string;

export type NodeId = string;

export type Edges = Array<NodeId>;

export const NODE_TAGS = [
  "customisation", // TODO remove in favor of TemplatedNodeData
  "toReview",
  "automation",
  "analytics",
  "sensitiveData",
] as const;

export type NodeTag = (typeof NODE_TAGS)[number];

export type NodeTags = { tags?: NodeTag[] };

export type NodeFlags = { flags?: string[] };

export type TemplatedNodeData = {
  isTemplatedNode?: boolean;
  templatedNodeInstructions?: string;
  areTemplatedNodeInstructionsRequired?: boolean;
};

export type NodeData = Record<string, Value> &
  NodeTags &
  NodeFlags &
  TemplatedNodeData;

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
  folderId?: string;
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
