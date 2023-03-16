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

export type Edges = Array<string>;

export interface Node {
  id?: string;
  type?: number;
  edges?: Edges;
  data?: Record<string, any>;
}

export type Flow = {
  _root: {
    edges: Edges;
  };
  [key: string]: Node;
};

export interface IndexedNode extends Node {
  id: string;
}

export type OrderedFlow = Array<IndexedNode>;

export interface Crumb {
  answers?: Array<string>;
  data?: Record<string, any>;
  auto?: boolean;
  override?: Record<string, any>;
  feedback?: string;
}

export interface EnrichedCrumb extends Crumb {
  id: string;
  sectionId?: string;
}

export type Breadcrumbs = {
  [key: string]: Crumb;
};

export type OrderedBreadcrumbs = Array<EnrichedCrumb>;
