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

const textAndDateInput = z.string();

const numberInput = z.number();

const questionAndChecklistInput = z.array(z.string());

/**
 * The MapInput field generates a GeoJSON array
 * Not validated against the full GeoJSON spec, but sufficient for our requirements here
 */
const mapInput = z.array(z.record(z.unknown()));

const addressInput = z.object({
  line1: z.string(),
  line2: z.string().optional(),
  town: z.string(),
  county: z.string().optional(),
  postcode: z.string(),
  country: z.string().optional(),
});

const schemaResponsesSchema = z.union([
  textAndDateInput,
  numberInput,
  questionAndChecklistInput,
  mapInput,
  addressInput,
]);

export type SchemaResponses = z.infer<typeof schemaResponsesSchema>;

/**
 * Parse the breadcrumb (SchemaResponse) which contains the user's responses
 */
export const parseResponses = (fn: string, crumb: EnrichedCrumb) => {
  const crumbDataSchema = z.object({
    [fn]: z.array(z.record(schemaResponsesSchema)),
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
