import jsonSchema from "../export/digitalPlanning/schemas/application/schema.json" with { type: "json" };

/**
 * For a given 'anyOf' enum definition in the Application JSON Schema (with properties `value` & `description`), return its valid `values`
 * @param definition eg 'FileType'
 * @returns list of values
 */
export function getValidSchemaValues(definition: string): string[] | undefined {
  try {
    if (definition === "PlanningDesignation") {
      // PlanningDesignation definitions are a union of anyOf "intersecting" and "non-intersecting", we just need to grab values from either
      return (
        jsonSchema["definitions"][definition]["anyOf"] as unknown as Array<
          Record<string, Array<Record<string, string>>>
        >
      )[0]["anyOf"].map(
        (types: Record<string, string>) => types.properties["value"].const,
      );
    }

    return jsonSchema["definitions"][definition]["anyOf"].map(
      (types: Record<string, string>) => types.properties["value"].const,
    );
  } catch (error) {
    console.log(
      `Cannot find enum definition '${definition}' in json schema: ${error}`,
    );
    return undefined;
  }
}

/**
 * For a given 'anyOf' enum definition in the Application JSON Schema (with properties `value` & `description`), return a dictionary of its valid options
 * @param definition eg 'FileType'
 * @returns dictionary { [value]: description }
 */
export function getValidSchemaDictionary(
  definition: string,
): Record<string, string> | undefined {
  try {
    const dict: Record<string, string> = {};
    jsonSchema["definitions"][definition]["anyOf"].map(
      (types: Record<string, string>) => {
        dict[types.properties["value"].const] =
          types.properties["description"].const;
      },
    );
    return dict;
  } catch (error) {
    console.log(
      `Cannot find enum definition '${definition}' in json schema: ${error}`,
    );
    return undefined;
  }
}

export function getValidSchemaValuesByEnumPath(definition: string, property: string): string[] | undefined {
  try {
    const basePath = jsonSchema["definitions"][definition]["properties"][property];
    if (basePath) {
      const values =
        // Default most common enum path
        basePath["enum"] ||
        // Declaration uses an enumerated "value", free text "description"
        basePath["properties"]?.["value"]?.["enum"] ||
        // EPC, TitleNumber are discriminated unions and we want "known" variant
        basePath["properties"]?.["known"]?.["enum"];

      // Only return values if [string] suitable to auto-suggest in editor
      if (Array.isArray(values) && values.every(item => typeof item === "string")) {
        return values;
      }
    }
  } catch (error) {
    console.log(
      `Cannot find enum at 'definitions/${definition}/properties/${property}' in json schema: ${error}`,
    );
    return undefined;
  }
}
