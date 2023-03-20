import { ComponentType } from "./types";

export function clearUndefinedKeys(input: unknown) {
  if (typeof input != "object") return;
  const obj = input as { [key: string]: unknown };
  Object.keys(obj).forEach((key: string) => {
    if (obj[key] === undefined) delete obj[key];
    if (obj[key] && typeof obj[key] == "object") {
      clearUndefinedKeys(obj[key]);
    }
  });
}

export function typeEnumToString(
  componentType: ComponentType | number
): string {
  // a numeric enum has a reverese mapping to its name
  const name = ComponentType[componentType];
  if (name) return name;
  throw new Error(`"${componentType}" is not a valid ComponentType`);
}

export function stringToTypeEnum(componentTypeString: string): ComponentType {
  for (const [key, value] of Object.entries(ComponentType)) {
    if (key == componentTypeString) {
      return value as ComponentType;
    }
  }
  throw new Error(`"${componentTypeString}" is not a valid ComponentType`);
}
