import { z } from "zod";

import { EnrichedCrumb, QuestionAndResponses } from "../../../types/index.js";
import {
  formatQuestion,
  formatResponses,
  GetProposalDetails,
  parseNodeData,
  SchemaNodeData,
} from "./index.js";
import { SchemaResponses } from "./schema.js";

/**
 * Parse the breadcrumb which contains the user's responses
 */
export const parseResponses = (fn: string, crumb: EnrichedCrumb) => {
  const crumbDataSchema = z.object({
    [fn]: z.object({
      type: z.literal("FeatureCollection"),
      features: z.array(
        z.object({
          properties: z.record(
            z.union([
              z.string(),
              z.number(),
              z.array(z.string()),
              z.object({
                "area.squareMetres": z.number(),
                "area.hectares": z.number(),
              }),
            ]),
          ),
        }),
      ),
    }),
  });

  const crumbData = crumbDataSchema.parse(crumb.data);
  const schemaResponses = crumbData[fn];
  return schemaResponses;
};

type FeatureCollectionResponse = ReturnType<typeof parseResponses>;

/**
 * Extract entire GeoJSON FeatureCollection as a single response
 */
const getGeoJSONProposalDetails = (
  mapAndLabelResponses: FeatureCollectionResponse,
  nodeData: SchemaNodeData,
  metadata: QuestionAndResponses["metadata"],
): QuestionAndResponses => ({
  question: `[${nodeData.title}] GeoJSON FeatureCollection`,
  responses: [{ value: JSON.stringify(mapAndLabelResponses) }],
  metadata,
});

/**
 * Iterate over each feature in the FeatureCollection, extracting properties and formatting them as question and responses
 */
const getFieldProposalDetails = (
  mapAndLabelResponses: FeatureCollectionResponse,
  nodeData: SchemaNodeData,
  metadata: QuestionAndResponses["metadata"],
  crumb: EnrichedCrumb,
): QuestionAndResponses[] =>
  mapAndLabelResponses.features.flatMap((mapAndLabelResponses, index) =>
    nodeData.schema.fields.map((field) => {
      const question = formatQuestion({
        fieldTitle: field.data.title,
        schemaType: nodeData.schema.type,
        crumb,
        index,
      });

      const schemaResponses = mapAndLabelResponses.properties[
        field.data.fn
      ] as SchemaResponses;
      const responses = formatResponses(schemaResponses);

      return { question, responses, metadata };
    }),
  );

/**
 * MapAndLabel returns granular field responses, as well as the full GeoJSON feature collection
 */
export const getMapAndLabelProposalDetails: GetProposalDetails = (
  crumb,
  node,
  metadata,
) => {
  try {
    const nodeData = parseNodeData(node);
    const mapAndLabelResponses = parseResponses(nodeData.fn, crumb);

    const fieldResponses: QuestionAndResponses[] = getFieldProposalDetails(
      mapAndLabelResponses,
      nodeData,
      metadata,
      crumb,
    );

    const geoJSONResponse = getGeoJSONProposalDetails(
      mapAndLabelResponses,
      nodeData,
      metadata,
    );

    return [...fieldResponses, geoJSONResponse];
  } catch (error) {
    throw new Error(
      `Failed to get MapAndLabel proposal details. Error: ${error}`,
    );
  }
};
