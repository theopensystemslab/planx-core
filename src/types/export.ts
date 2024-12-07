import { Application } from "../export/digitalPlanning/schema/types";
import { QuestionAndResponses } from "./bops";

export type ExportData = {
  responses: QuestionAndResponses[];
  redactedResponses: QuestionAndResponses[];
};

export interface PlanXExportData {
  question: string;
  responses: unknown;
  metadata?: {
    auto_answered?: boolean;
    portal_name?: string;
    section_name?: string;
    policy_refs?: PolicyRefs[];
    flags?: string[];
  };
}

export interface PolicyRefs {
  text: string;
  url?: string;
}

export interface ResponseObject {
  value: string;
  metadata?: {
    flags?: string[];
  };
}

export type DigitalPlanningPayload = Application;
