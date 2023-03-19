// This needs to stay in sync with the TYPES enum
// in planx-new/editor.planx.uk/src/@planx/components/types.ts
export enum ComponentType {
  Flow = 1,
  Result = 3,
  TaskList = 7,
  Notice = 8,
  FindProperty = 9,
  DrawBoundary = 10,
  PlanningConstraints = 11,
  PropertyInformation = 12,
  Question = 100, // Statement/DropDown
  Checklist = 105,
  TextInput = 110,
  DateInput = 120,
  AddressInput = 130,
  ContactInput = 135,
  FileUpload = 140,
  MultipleFileUpload = 145,
  NumberInput = 150,
  Answer = 200, // Response
  Content = 250,
  InternalPortal = 300,
  ExternalPortal = 310,
  Section = 360,
  SetValue = 380,
  Pay = 400,
  Filter = 500,
  Review = 600,
  Send = 650,
  Calculate = 700,
  Confirmation = 725,
}

export type NodeId = string;

export type Edges = Array<NodeId>;

export type Value =
  | string
  | number
  | boolean
  | null
  | Array<Value>
  | { [key: string]: Value };

export interface Node {
  id?: string;
  type?: ComponentType;
  edges?: Edges;
  data?: Record<NodeId, Value>;
}

export type Flow = {
  _root: {
    edges: Edges;
  };
  [key: string]: Node;
};

export interface IndexedNode extends Node {
  id: string;
  parentId: string | null; // null if it is the first node
}

export type OrderedFlow = Array<IndexedNode>;

export interface NormalizedNode extends IndexedNode {
  component: string;
  sectionId?: string;
  rootNodeId: string;
}

export type NormalizedFlow = Array<NormalizedNode>;

export interface Crumb {
  auto?: boolean;
  answers?: Array<string>;
  data?: Record<string, Value>;
  override?: Record<string, Value>;
  feedback?: string;
}

export type Breadcrumbs = {
  [key: string]: Crumb;
};

export interface EnrichedCrumb extends Crumb {
  id: string;
  autoAnswered: boolean;
  sectionId?: string;
  details: {
    component: string;
    nodeData?: Record<string, Value>;
    answerData?: {
      [id: NodeId]: Record<string, Value>;
    };
  };
}

export type EnrichedBreadcrumbs = Array<EnrichedCrumb>;
