import { z } from "zod";

import {
  ComponentType,
  EnrichedCrumb,
  QuestionAndResponses,
} from "../../../types/index.js";
import {
  formatQuestion,
  formatResponses,
  GetProposalDetails,
  parseNodeData,
} from "./index.js";

export const isSchemaType = (type: ComponentType) =>
  [ComponentType.Page, ComponentType.List].includes(type);

/**
 * Parse the breadcrumb (SchemaResponse) which contains the user's responses
 */
export const parseResponses = (fn: string, crumb: EnrichedCrumb) => {
  const crumbDataSchema = z.object({
    [fn]: z.array(
      z.record(
        z.union([
          z.string(),
          z.number(),
          z.array(z.string()),
          z.array(z.record(z.unknown())), // GeoJSON array
        ]),
      ),
    ),
  });
  const crumbData = crumbDataSchema.parse(crumb.data);
  const schemaResponses = crumbData[fn];
  return schemaResponses;
};

export const getSchemaProposalDetails: GetProposalDetails = (
  crumb,
  node,
  metadata,
) => {
  try {
    const nodeData = parseNodeData(node);
    const schemaResponses = parseResponses(nodeData.fn, crumb);
    const fields = nodeData.schema.fields;

    const proposalDetails: QuestionAndResponses[] = schemaResponses.flatMap(
      (schemaResponse, index) =>
        fields.map((field) => {
          const question = formatQuestion({
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
