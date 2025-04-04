import type { Passport } from "../types/index.js";

/* eslint @typescript-eslint/no-explicit-any: "off" */
/* eslint @typescript-eslint/no-unsafe-assignment: "off" */
export function hasValue(data: Record<string, any>, path: string): boolean {
  const value: any = get({ data, path });
  if (value === 0 || value === false) return true;
  return Boolean(value);
}

export function getString(data: Record<string, any>, path: string): string {
  return getStrings(data, path).join(", ");
}

export function getStrings(data: Record<string, any>, path: string): string[] {
  const values: any = get({ data, path }) ?? [];
  if (Array.isArray(values)) {
    return values.map((x) => String(x));
  } else if (values !== null) {
    return [String(values)];
  }
  return [];
}

export function getBoolean(data: Record<string, any>, path: string): boolean {
  const value: any = get({ data, path });
  if (Array.isArray(value) && value.length === 1) {
    return value[0] === true || value[0] === "true";
  }
  return value === true || value === "true";
}

export function applyRedactions(
  input: Passport,
  redactions: string[] = [],
): { data: Record<string, any> } {
  const outputData = { ...input.data };
  redactions.forEach((key) => {
    if (hasValue(outputData, key))
      get({ data: outputData, path: key, nullifyValue: true });
  });
  return { data: outputData };
}

// recursively find key by name (i.e. data["a.b.c"], data["a.b"], data["a"])
function get({
  data,
  path,
  nullifyValue = false,
  index = -1,
}: {
  data: Record<string, any>;
  path: string;
  nullifyValue?: boolean;
  index?: number;
}) {
  const parts = path.split(".");
  if (index === -1) {
    index = parts.length;
  }
  const key = parts.slice(0, index).join(".");
  if (data[key] === undefined && data[key] !== null && index > 0) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return get({ data, path, nullifyValue, index: index - 1 });
  }
  if (
    data[key] !== undefined &&
    data[key] !== null &&
    parts.slice(index).length > 0
  ) {
    const newPath = parts.slice(index).join(".");
    // eslint-disable-next-line
    return get({ data: data[key], path: newPath, nullifyValue });
  }
  if (nullifyValue) {
    data[key] = null;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return data[key];
}
