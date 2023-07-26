import { EnhancedGISResponse } from "../types";

export const DEFAULT_APPLICATION_TYPE = "lawfulness_certificate";

// See minimum POST schema for /api/v1/planning_applications
// https://ripa.bops.services/api-docs/index.html
interface BOPSMinimumPayload {
  application_type: typeof DEFAULT_APPLICATION_TYPE | string;
  site: {
    uprn?: string;
    address_1: string;
    address_2?: string;
    town?: string;
    postcode?: string;
    latitude: number;
    longitude: number;
    x: number;
    y: number;
    source: string;
  };
  applicant_email: string;
}

export interface BOPSFullPayload extends BOPSMinimumPayload {
  description?: string;
  payment_reference?: string;
  payment_amount?: number;
  ward?: string;
  work_status?: "proposed" | "existing";
  applicant_first_name?: string;
  applicant_last_name?: string;
  applicant_phone?: string;
  agent_first_name?: string;
  agent_last_name?: string;
  agent_phone?: string;
  agent_email?: string;
  proposal_details?: Array<QuestionAndResponses>;
  feedback?: {
    result?: string;
    find_property?: string;
    planning_constraints?: string;
  };
  constraints?: Record<string, boolean>;
  constraints_proposed?: EnhancedGISResponse[];
  files?: Array<File>;
  boundary_geojson?: unknown;
  result?: {
    flag?: string;
    heading?: string;
    description?: string;
    override?: string;
  };
  planx_debug_data?: Record<string, unknown>;
  user_role?: ApplicationUserRole;
  works?: {
    start_date?: string;
    finish_date?: string;
  };
}

export const USER_ROLES = ["applicant", "agent", "proxy"] as const;

export type ApplicationUserRole = (typeof USER_ROLES)[number];

export interface QuestionMetaData {
  notes?: string;
  auto_answered?: boolean;
  policy_refs?: Array<{
    url?: string;
    text?: string;
  }>;
  section_name?: string;
  feedback?: string;
}

export interface ResponseMetaData {
  flags?: Array<string>;
}

export interface Response {
  value: string;
  metadata?: ResponseMetaData;
}

export interface QuestionAndResponses {
  question: string;
  metadata?: QuestionMetaData;
  responses: Array<Response> | string;
}

// Using PLAN_TAGS & EVIDENCE_TAGS provided by BOPS, from:
// https://github.com/unboxed/bops/blob/master/app/models/document.rb
// will also be in POST Schema https://ripa.bops.services/api-docs
type PlanTag =
  | "Front"
  | "Rear"
  | "Side"
  | "Roof"
  | "Floor"
  | "Site"
  | "Plan"
  | "Elevation"
  | "Section"
  | "Proposed"
  | "Existing";

type EvidenceTag =
  | "Photograph"
  | "Utility Bill"
  | "Building Control Certificate"
  | "Construction Invoice"
  | "Council Tax Document"
  | "Tenancy Agreement"
  | "Tenancy Invoice"
  | "Bank Statement"
  | "Statutory Declaration"
  | "Other";

export type FileTag = PlanTag | EvidenceTag;

export interface File {
  filename: string;
  tags?: Array<FileTag>;
  applicant_description?: string;
}
