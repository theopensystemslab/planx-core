import { getValidSchemaDictionary } from "./digitalPlanningSchema";

export function formatRawProjectTypes(rawProjectTypes: string[]): string {
  const schemaProjectTypes = getValidSchemaDictionary("ProjectType");
  if (schemaProjectTypes) {
    const matchingDescriptions = Object.entries(schemaProjectTypes)
      .filter(([key, _description]) => rawProjectTypes.includes(key))
      .map(([_key, description]) => description.toLocaleLowerCase());
    if (matchingDescriptions.length === 0) {
      return "Unknown";
    }
    return formatHumanReadableProjectTypes(matchingDescriptions);
  } else {
    return "Unknown";
  }
}

export function formatHumanReadableProjectTypes(
  projectTypes: string[],
): string {
  // Join in readable format - en-US ensures we use Oxford commas
  const formatter = new Intl.ListFormat("en-US", { type: "conjunction" });
  const joinedList = formatter.format(projectTypes);
  // Convert first character to uppercase
  const formattedProjectTypes =
    joinedList.charAt(0).toUpperCase() + joinedList.slice(1);
  return formattedProjectTypes;
}
