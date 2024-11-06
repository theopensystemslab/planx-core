import { z } from "zod";

import {
  ComponentType,
  EnrichedCrumb,
  Node,
  QuestionAndResponses,
  Response,
} from "../../../types";

export const isSchemaType = (type: ComponentType) =>
  [ComponentType.Page, ComponentType.List, ComponentType.MapAndLabel].includes(
    type,
  );

/**
 * Parse the data of a node which uses a schema for responses
 */
const parseNodeData = (node: Node) => {
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

/**
 * Parse the breadcrumb (SchemaResponse) which contains the user's responses
 */
export const parseSchemaResponses = (fn: string, crumb: EnrichedCrumb) => {
  const crumbDataSchema = z.object({
    [fn]: z.array(
      z.record(
        z.union([
          z.string(),
          z.number(),
          z.array(z.string()),
          z.record(z.unknown()),
        ]),
      ),
    ),
  });
  const crumbData = crumbDataSchema.parse(crumb.data);
  const schemaResponses = crumbData[fn];
  return schemaResponses;
};

/**
 * Format a question string for this granular field
 */
const formatQuestion = ({
  nodeTitle,
  fieldTitle,
  crumb,
  schemaType,
  index,
}: {
  nodeTitle: string;
  fieldTitle: string;
  crumb: EnrichedCrumb;
  schemaType: string;
  index: number;
}) => {
  let question = `${nodeTitle} - ${fieldTitle}`;

  if (crumb.type !== ComponentType.Page)
    question += ` (${schemaType} ${index + 1})`;

  return question;
};

export const formatResponses = (
  schemaResponses: string | number | string[] | Record<string, unknown>,
): Response[] =>
  Array.isArray(schemaResponses)
    ? schemaResponses.map((value) => ({ value: JSON.stringify(value) }))
    : [{ value: JSON.stringify(schemaResponses) }];

/**
 * Components which rely on an internal schema must be unpacked
 * Each component can provide multiple responses, with multiple fields, with (potentially) multiple answers
 */
export const getSchemaProposalDetails = (
  crumb: EnrichedCrumb,
  node: Node,
  metadata: QuestionAndResponses["metadata"],
): QuestionAndResponses[] => {
  try {
    const nodeData = parseNodeData(node);
    const schemaResponses = parseSchemaResponses(nodeData.fn, crumb);
    const fields = nodeData.schema.fields;

    const proposalDetails: QuestionAndResponses[] = schemaResponses.flatMap(
      (schemaResponse, index) =>
        fields.map((field) => {
          const question = formatQuestion({
            nodeTitle: nodeData.title,
            fieldTitle: field.data.title,
            schemaType: nodeData.schema.type,
            crumb,
            index,
          });
          const responses = formatResponses(schemaResponse[field.data.fn]);

          return { question, responses, metadata };
        }),
    );

    return proposalDetails;
  } catch (error) {
    throw new Error(`Failed to get schema proposal details. Error: ${error}`);
  }
};
