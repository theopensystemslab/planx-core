import { get as getByKeyPath, has } from "lodash";

import { ServiceFiles } from "../../export/digitalPlanning/schema/types";
import type {
  DataObject,
  KeyPath,
  Passport as IPassport,
  Value,
} from "../../types";

type PlanXFileCondition =
  | "AlwaysRequired"
  | "AlwaysRecommended"
  | "RequiredIf"
  | "RecommendedIf"
  | "NotRequired";

type ODPSchemaFileCondition = keyof ServiceFiles;

const FILE_CONDITION_MAP: Record<PlanXFileCondition, ODPSchemaFileCondition> = {
  AlwaysRequired: "required",
  RequiredIf: "required",
  AlwaysRecommended: "recommended",
  RecommendedIf: "recommended",
  NotRequired: "optional",
};

/**
 * Describes a user-uploaded file
 */
interface FileDetails {
  key: string;
  url: string;
  condition: ODPSchemaFileCondition;
}

/**
 * A simple file upload question (component type 140)
 */
type FileUploadQuestion = { url: string };

/**
 * A file upload and label question (component type 145)
 */
type FileUploadAndLabelQuestion = {
  url: string;
  rule: {
    condition: PlanXFileCondition;
  };
};

export type QuestionWithFiles = FileUploadQuestion | FileUploadAndLabelQuestion;

export class Passport {
  data: DataObject;

  constructor(passport: IPassport) {
    if (!passport.data) throw new Error("passport does not contain any data");
    this.data = passport.data;
  }

  fileDetails(): FileDetails[] {
    const isFileUploadQuestion = (
      entry: [string, Value | undefined],
    ): entry is [string, QuestionWithFiles[]] => {
      const [_key, question] = entry;
      return has(question?.[0], "url");
    };

    const isFileUploadAndLabelQuestion = (
      question: QuestionWithFiles,
    ): question is FileUploadAndLabelQuestion => has(question?.[0], "rule");

    const getFileDetails = ([key, questionWithFiles]: [
      string,
      QuestionWithFiles[],
    ]): FileDetails[] =>
      questionWithFiles.map((question) => ({
        key,
        url: question.url,
        condition: isFileUploadAndLabelQuestion(question)
          ? FILE_CONDITION_MAP[question.rule.condition]
          : "required",
      }));

    const fileDetails = Object.entries(this.data)
      .filter(isFileUploadQuestion)
      .flatMap(getFileDetails);

    return fileDetails;
  }

  fileURLs(): string[] {
    return this.fileDetails().map((file) => file.url);
  }

  has(path: KeyPath): boolean {
    const valueString = this.string(path).trim();
    return !["", "{}", "[]"].includes(valueString);
  }

  strings(path: KeyPath): string[] {
    const values = get({ data: this.data, path });
    if (values === undefined || values === null) {
      return [];
    } else if (Array.isArray(values)) {
      return values.map((x) => String(x));
    }
    if (typeof values === "object") return [JSON.stringify(values)];
    return [String(values)];
  }

  string(path: KeyPath): string {
    return this.strings(path).join(", ");
  }

  boolean(path: KeyPath): boolean {
    return (this.strings(path)[0] || "").toLowerCase() === "true";
  }

  number(path: KeyPath): number {
    return +(this.strings(path)[0] || 0);
  }

  any(path: KeyPath): unknown {
    if (!this.has(path)) return;
    return get({ data: this.data, path })!;
  }

  generic<T>(path: string): T | undefined {
    const keyPath = path.split(".");
    if (!this.has(keyPath)) return;
    return getGeneric<T>({ data: this.data, path: keyPath }) as T;
  }
}

function get({
  data,
  path,
}: {
  data: DataObject;
  path: KeyPath;
}): Value | undefined {
  const output: Value = getByKeyPath(data, path);
  if (output === undefined) {
    return undefined;
  }
  if (output === null) {
    return null;
  }
  if (typeof output === "boolean") {
    return output as boolean;
  }
  if (typeof output === "number") {
    return output as number;
  }
  if (typeof output === "string") {
    return output as string;
  }
  if (Array.isArray(output)) {
    if (output.map((x) => x).every((element) => typeof element === "string")) {
      return output as string[];
    }
    if (output.map((x) => x).every((element) => typeof element === "number")) {
      return output as number[];
    }
    return output as Value[];
  }
  if (typeof output === "object") {
    return output as DataObject;
  }
  ((_x: never) => new Error("Value should always be handled"))(output);
}

function getGeneric<T>({
  data,
  path,
}: {
  data: DataObject;
  path: KeyPath;
}): T | undefined {
  const output: Value = getByKeyPath(data, path);
  return output ? undefined : (output as T);
}
