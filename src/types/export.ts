import { BOPSFullPayload, QuestionAndResponses } from "./bops";

export type BOPSExportData = {
  exportData: BOPSFullPayload;
  redactedExportData: BOPSFullPayload;
};

export type ExportData = {
  responses: QuestionAndResponses[];
  redactedResponses: QuestionAndResponses[];
};

export interface PolicyRefs {
  text: string;
}

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
