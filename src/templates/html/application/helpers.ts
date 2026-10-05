import { startCase } from "lodash-es";

import type { PlanXExportData, ResponseObject } from "../../../types/index.js";

type FileType = {
  value?: string;
  description?: string;
};

const ruleTypes = ["required", "recommended", "optional"] as const;
type FileRules = (typeof ruleTypes)[number];

type UploadedFileLabel = {
  label: string;
  rule: FileRules;
};

type UploadedFileInput = {
  name?: string;
  number?: string;
  type?: FileType[];
};

type RequestedFiles = Partial<Record<FileRules, FileType[]>>;

export type UploadedFile = {
  name: string;
  number?: string;
  labels: UploadedFileLabel[];
};

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

function getFileName(value: string): string {
  const path = value.trim().split("?")[0] ?? "";
  return safeDecodeURI(path.split(/[\\/]/).filter(Boolean).pop() ?? "");
}

export function getUploadedFiles(
  files: UploadedFileInput[] | undefined,
  requestedFiles: RequestedFiles = {},
): UploadedFile[] {
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

  return (files ?? []).flatMap((file) => {
    const fileName = getFileName(file.name || "");
    if (!fileName) return [];

    const fileTypes = (file.type ?? []).filter(Boolean);

    const labels = fileTypes
      .map((fileType) => ({
        label: fileType.description || startCase(fileType.value ?? ""),
        rule: getRule(fileType.value),
      }))
      .filter(({ label }) => Boolean(label));

    const number = file.number?.trim();

    return [{ name: fileName, ...(number ? { number } : {}), labels }];
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
