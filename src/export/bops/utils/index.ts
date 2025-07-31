import { z } from "zod";

import {
  ComponentType,
  EnrichedCrumb,
  Node,
  QuestionAndResponses,
  Response,
} from "../../../types/index.js";
import { ArraySchemaResponses, SchemaResponses } from "./schema.js";

/**
 * Schema driven components and MapAndLabel components must be unpacked
 * Each component can provide multiple responses, with multiple fields, with (potentially) multiple answers
 */
export type GetProposalDetails = (
  crumb: EnrichedCrumb,
  node: Node,
  metadata: QuestionAndResponses["metadata"],
) => QuestionAndResponses[];

/**
 * Parse the data of a node which uses a schema
 */
export const parseNodeData = (node: Node) => {
  const componentSchema = z.object({
    fn: z.string(),
    title: z.string(),
    schema: z.object({
      type: z.string(),
      fields: z.array(
        z.object({
          data: z.object({
            fn: z.string(),
            title: z.string(),
          }),
        }),
      ),
    }),
  });
  const result = componentSchema.safeParse(node.data);

  if (!result.success) {
    throw Error("Failed to parse node data", {
      cause: result.error.flatten(),
    });
  }

  const nodeData = result.data;
  return nodeData;
};

export type SchemaNodeData = ReturnType<typeof parseNodeData>;

/**
 * Format a question string for this granular field
 */
export const formatQuestion = ({
  fieldTitle,
  crumb,
  schemaType,
  index,
}: {
  fieldTitle: string;
  crumb: EnrichedCrumb;
  schemaType: string;
  index: number;
}) =>
  crumb.type === ComponentType.Page
    ? fieldTitle
    : `[${schemaType} ${index + 1}] ${fieldTitle}`;

export const formatResponses = (
  schemaResponses: SchemaResponses,
): Response[] => {
  // Generate a value per-response
  if (Array.isArray(schemaResponses)) {
    const format = (value: ArraySchemaResponses[number]) => {
      // ChecklistField
      if (typeof value === "string") return { value };

      // FileUploadField
      if (typeof value.filename === "string") return { value: value.filename };

      // Fallback to serialised GeoJSON (MapField, other)
      return { value: JSON.stringify(value) };
    };

    const formattedResponses = schemaResponses.map(format);

    return formattedResponses;
  }

  // Single value response
  return [{ value: schemaResponses.toString() }];
};
