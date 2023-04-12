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

// KeyPath is an array of keys representing the path to a property
// for example KeyPath ["a", "b"] for { "a": { "b": true } } === `true`
export type KeyPath = Array<string>;

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

export interface IndexedNode extends Node {
  id: string;
  parentId: string | null; // null if it is the first node
}

export type OrderedFlow = Array<IndexedNode>;

export interface NormalizedNode extends IndexedNode {
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

export interface NormalizedCrumb extends Crumb {
  id: string;
  type: ComponentType;
  autoAnswered: boolean;
  sectionId?: string;
  answers?: Array<string>;
  data?: Record<string, Value>
  override?: Record<string, Value>
  feedback?: string;
}

export type OrderedBreadcrumbs = Array<NormalizedCrumb>;

export const SectionStatuses = {
  ReadyToStart: "READY TO START",
  CannotStartYet: "CANNOT START YET",
  ReadyToContinue: "READY TO CONTINUE",
  CannotContinueYet: "CANNOT CONTINUE YET",
  Complete: "COMPLETE",
  Updated: "NEW INFORMATION NEEDED",
} as const;

export type SectionStatus =
  typeof SectionStatuses[keyof typeof SectionStatuses];

export type SectionOverview = Array<{
  id: NodeId;
  title: string;
  status: SectionStatus;
}>;

// TODO: This should be Record<string, Value>;
export interface Passport {
  data?: Record<string, any>;
}

// https://docs.payments.service.gov.uk/api_reference/#status-and-finished
export enum PaymentStatus {
  created = "created",
  started = "started",
  submitted = "submitted",
  capturable = "capturable",
  success = "success",
  failed = "failed",
  cancelled = "cancelled",
  error = "error",
  unknown = "unknown", // used when response status is not valid
}

// https://docs.payments.service.gov.uk/making_payments/#receiving-the-api-response
export interface GovUKPayment {
  amount: number;
  reference: string;
  state: {
    status: PaymentStatus;
    finished: boolean;
  };
  payment_id: string;
  created_date: string;
  _links: {
    self: {
      href: string;
      method: string;
    };
    next_url?: {
      href: string;
      method: string;
    };
    next_url_post: {
      type: string;
      params: {
        chargeTokenId: string;
      };
      href: string;
      method: string;
    };
  };
}

export type Address = {
  line1: string;
  line2?: string;
  town: string;
  county?: string;
  postcode: string;
  country?: string;
};

// Addresses can come from two sources:
//   1. Ordnance Survey provides _known_ addresses that have a UPRN
//   2. Applicants propose _new_ addresses that do not yet have a UPRN
type AddressSources = "os" | "proposed";

// Minimum-required address details if proposing an address
//   these fields also satisfy component dependencies like DrawBoundary & PlanningConstraints
export interface MinimumSiteAddress {
  latitude: number;
  longitude: number;
  x: number;
  y: number;
  title: string;
  source: AddressSources;
}

// Full SiteAddress reflects selecting a record from the OS Places API "LPI" datasource
export interface SiteAddress extends MinimumSiteAddress {
  uprn?: string;
  blpu_code?: string;
  organisation?: string | null;
  sao?: string | null;
  pao?: string;
  street?: string;
  town?: string;
  postcode?: string;
  single_line_address?: string;
  planx_description?: string; // joined via table blpu_codes
  planx_value?: string; // joined via table blpu_codes
}

export const GOV_PAY_PASSPORT_KEY = "application.fee.reference.govPay" as const;

export interface SessionData {
  passport: Passport;
  breadcrumbs: Breadcrumbs;
  govUkPayment?: GovUKPayment;
  id: string;
}

export interface Session {
  data: SessionData;
  id: string;
  flowId: string;
}

export interface DetailedSession extends Session {
  lockedAt: string;
}

export interface PaymentRequest {
  id: string;
  sessionId: string;
  payeeName: string;
  payeeEmail: string;
  sessionPreviewData: { [key: string]: Value };
}
