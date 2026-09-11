import { startCase } from "lodash-es";

import type { Application } from "../../../export/digitalPlanning/schemas/application/types.js";
import type { QuestionAndResponses } from "../../../export/digitalPlanning/schemas/application/types.js";
import type { Enforcement } from "../../../export/digitalPlanning/schemas/enforcement/types.js";
import type { PreApplication } from "../../../export/digitalPlanning/schemas/preApplication/types.js";
import type { PlanXExportData, ResponseObject } from "../../../types/index.js";

type RequestedFileType = {
  value?: string;
  description?: string;
};

export type FileRules = "required" | "recommended" | "optional";

export type UploadedFileLabel = {
  label: string;
  rule: FileRules;
};

export type UploadedFile = {
  name: string;
  number?: string;
  labels: UploadedFileLabel[];
};

const ruleTypes: FileRules[] = ["required", "recommended", "optional"];

export function validatePlanXExportData(data: PlanXExportData[]): boolean {
  return (
    Array.isArray(data) &&
    data.length > 0 &&
    data.every((entry: object) => {
      return (
        Object.hasOwn(entry, "question") && Object.hasOwn(entry, "responses")
      );
    })
  );
}

export function safeDecodeURI(data: string): string {
  try {
    return decodeURI(data);
  } catch (error) {
    return data;
  }
}

export function prettyQuestion(data: PlanXExportData["question"]): string {
  const isPhrasedAsQuestion = data.includes("?");
  const isFileUpload = data.includes("File");
  const isCustomLabeledKey = !data.includes("_") && data.includes(" ");

  if (isPhrasedAsQuestion || isFileUpload || isCustomLabeledKey) {
    return safeDecodeURI(data);
  } else {
    return safeDecodeURI(startCase(data));
  }
}

export function prettyResponse(data: PlanXExportData["responses"]): string {
  if (!data) {
    return "";
  }
  if (typeof data === "string") {
    return safeDecodeURI(data.trim());
  }
  if (typeof data === "number") {
    return data.toString();
  }
  if (typeof data === "boolean") {
    return data ? "True" : "False";
  }
  if (Array.isArray(data)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return getResponseValuesFromList(data);
  }
  return "Error displaying response";
}

function getFileNameFromValue(value: string): string {
  const trimmed = safeDecodeURI(value.trim());
  if (!trimmed) return "";

  try {
    const path = trimmed.split("?")[0];
    const filePath = path.includes("://") ? new URL(path).pathname : path;
    return (
      decodeURIComponent(filePath).split(/[\\/]/).filter(Boolean).pop() ??
      trimmed
    );
  } catch {
    return trimmed.split(/[\\/]/).filter(Boolean).pop() ?? trimmed;
  }
}

export function isFileUploadResponse(data: QuestionAndResponses): boolean {
  if (!data || typeof data !== "object") {
    return false;
  }

  const responseValues = Array.isArray(data.responses)
    ? data.responses
        .map((entry) => {
          if (typeof entry === "string") {
            return entry;
          }
          if (entry && typeof entry === "object" && "value" in entry) {
            return entry.value;
          }
          return "";
        })
        .filter(Boolean)
    : typeof data.responses === "string"
      ? [data.responses]
      : [];

  return responseValues.some((value) => {
    if (typeof value !== "string") return false;
    const unicodeSafeValue = getFileNameFromValue(value);
    return /\.(pdf|doc|docx|jpg|jpeg|png|gif|txt|csv|xlsx?|pptx?)$/i.test(
      unicodeSafeValue,
    );
  });
}

export function getUploadedFiles(
  data: Application | Enforcement | PreApplication,
): UploadedFile[] {
  const requestedFiles: Partial<Record<FileRules, RequestedFileType[]>> =
    data.metadata && "service" in data.metadata && data.metadata.service
      ? (data.metadata.service.files ?? {})
      : {};

  const rulesByFileType = new Map<string, FileRules>();
  ruleTypes.forEach((rule) => {
    (requestedFiles[rule] ?? []).forEach((fileType) => {
      if (fileType?.value && !rulesByFileType.has(fileType.value)) {
        rulesByFileType.set(fileType.value, rule);
      }
    });
  });

  const getRule = (value?: string): FileRules =>
    (value && rulesByFileType.get(value)) || "required";

  const fileList = Array.isArray(data.files) ? data.files : [];

  return fileList.flatMap((file) => {
    const fileName = getFileNameFromValue(file.name || "");
    if (!fileName) return [];

    const fileTypes: RequestedFileType[] = Array.isArray(file.type)
      ? file.type.filter(Boolean)
      : [];

    const labels = fileTypes
      .map((fileType) => ({
        label: safeDecodeURI(
          fileType.description || startCase(fileType.value ?? ""),
        ),
        rule: getRule(fileType.value),
      }))
      .filter(({ label }) => Boolean(label));

    const number = file.number?.trim();

    return [{ name: fileName, ...(number && { number }), labels }];
  });
}

function getResponseValuesFromList(data: ResponseObject[]): string {
  if (data?.length === 1) {
    if (typeof data?.[0]?.["value"] === "string") {
      return safeDecodeURI(data?.[0]?.["value"]);
    } else {
      return data?.[0]?.["value"];
    }
  }
  if (data?.length > 1) {
    const dataValues = data?.map((d) => d?.["value"]);
    return safeDecodeURI(dataValues?.filter(Boolean)?.join("\n"));
  }
  return "Error displaying list of responses";
}
