import { applicationSchema as jsonSchema } from "@opensystemslab/digital-planning-data-schemas/schemas";

/**
 * For a given 'anyOf' enum definition in the JSON Schema (with properties `value` & `description`), return its valid `values`
 * @param definition eg 'FileType'
 * @returns list of values
 */
export function getValidSchemaValues(definition: string): string[] | undefined {
  try {
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
 * For a given 'anyOf' enum definition in the JSON Schema (with properties `value` & `description`), return a dictionary of its valid options
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
