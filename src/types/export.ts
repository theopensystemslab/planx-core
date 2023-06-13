import { BOPSFullPayload, QuestionAndResponses } from "./bops";

export type BOPSExportData = {
  exportData: BOPSFullPayload;
  redactedExportData: BOPSFullPayload;
};

export type ExportData = {
  responses: QuestionAndResponses[];
  redactedResponses: QuestionAndResponses[];
};
