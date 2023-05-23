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

export type IndexedNode = {
  id: string;
  type: ComponentType;
  parentId: string | null; // null if it is the first node
  rootNodeId: string;
  sectionId?: string;
  edges?: Edges;
  data?: Record<NodeId, Value>;
};

export type OrderedFlow = Array<IndexedNode>;

export type CollectionType = "oneOf" | "anyOf" | "eachOf";

export type StructuredNode = {
  id: string;
  children?: {
    [type in CollectionType]?: Array<StructuredNode>;
  };
  data: Record<NodeId, Value>;
  type: ComponentType;
};

export type StructuredFlow = Array<StructuredNode>;
