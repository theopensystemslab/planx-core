import { QuestionAndResponses } from "./bops";

export type ExportData = {
  responses: QuestionAndResponses[];
  redactedResponses: QuestionAndResponses[];
};

export interface PlanXExportData {
  question: string;
  responses: unknown;
  metadata?: {
    portal_name?: string;
    section_name?: string;
    policy_refs?: PolicyRefs[];
    flags?: string[];
  };
}

export interface PolicyRefs {
  text: string;
}

export interface ResponseObject {
  value: string;
  metadata?: {
    flags?: string[];
  };
}
