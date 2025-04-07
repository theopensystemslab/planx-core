import { z } from "zod";

import {
  ComponentType,
  EnrichedCrumb,
  Node,
  QuestionAndResponses,
  Response,
} from "../../../types/index.js";
import { SchemaResponses } from "./schema.js";

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
  const nodeData = componentSchema.parse(node.data);
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
  // Generate a value per-response (e.g. ChecklistField, MapField)
  if (Array.isArray(schemaResponses)) {
    const format = (value: string | Record<string, unknown>) => ({
      value:
        typeof value === "string"
          ? value
          : // Serialise GeoJSON
            JSON.stringify(value),
    });

    const formattedResponses = schemaResponses.map(format);

    return formattedResponses;
  }

  // Single value response
  return [{ value: schemaResponses.toString() }];
};
