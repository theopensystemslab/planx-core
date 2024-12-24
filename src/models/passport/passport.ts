import { get as getByKeyPath, has } from "lodash";

import type {
  DataObject,
  KeyPath,
  Passport as IPassport,
  Value,
} from "../../types/index.js";

interface File {
  key: string;
  url: string;
}

export type QuestionWithFiles = { url: string };

export class Passport {
  data: DataObject;
  files: File[];

  constructor(passport: IPassport) {
    if (!passport.data) throw new Error("passport does not contain any data");
    this.data = passport.data;
    this.files = this.getFiles();
  }

  private getFiles(): File[] {
    const isFileUploadQuestion = (
      entry: [string, Value | undefined],
    ): entry is [string, QuestionWithFiles[]] => {
      const [_key, question] = entry;
      return has(question?.[0], "url");
    };

    const buildFileDetails = ([key, questionWithFiles]: [
      string,
      QuestionWithFiles[],
    ]): File[] => questionWithFiles.map(({ url }) => ({ key, url }));

    const isSuccess = (file: File) => Boolean(file.url);

    const fileDetails = Object.entries(this.data)
      .filter(isFileUploadQuestion)
      .flatMap(buildFileDetails)
      .filter(isSuccess);

    return fileDetails;
  }

  getFileURLs(): string[] {
    return this.files.map((file) => file.url);
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

  any<T>(path: KeyPath): T | undefined {
    if (!this.has(path)) return;
    return get({ data: this.data, path })! as T;
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
