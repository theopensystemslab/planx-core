import type {
  Passport as IPassport,
  Value,
  DataObject,
  KeyPath,
} from "../../types";
import getByKeyPath from "lodash.get";
import has from "lodash.has";

export class Passport {
  data: DataObject;

  constructor(passport: IPassport) {
    if (!passport.data) throw new Error("passport does not contain any data");
    this.data = passport.data!;
  }

  files() {
    const isFileUploadQuestion = (question) => has(question?.[0], "url");
    const getFileURLs = (questionWithFiles) =>
      questionWithFiles.map((question) => question.url);

    return Object.values(this.data)
      .filter(isFileUploadQuestion)
      .flatMap(getFileURLs);
  }

  strings(path: KeyPath): string[] {
    const values = get({ data: this.data, path });
    if (values === undefined || values === null) {
      return [];
    } else if (Array.isArray(values)) {
      return values.map((x) => String(x));
    }
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
}

// recursively find key by name (i.e. data["a.b.c"], data["a.b"], data["a"])
function get({
  data,
  path,
}: {
  data: Value | undefined;
  path: KeyPath;
}): Value | undefined {
  if (data === undefined) {
    return undefined;
  }
  let output = data;
  if (typeof data === "object" && !Array.isArray(data)) {
    output = getByKeyPath(data, path);
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
  }
}
