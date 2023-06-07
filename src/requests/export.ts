import { GraphQLClient } from "graphql-request";
import type { BOPSFullPayload } from "../export/bops/model";
import { fetchBOPSParams } from "../export/bops";

export class ExportClient {
  protected client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
  }

  bopsPayload(sessionId: string): Promise<BOPSFullPayload> {
    return generateBOPSPayload(this.client, sessionId);
  }
}

export async function generateBOPSPayload(
  client: GraphQLClient,
  sessionId: string
): Promise<BOPSFullPayload> {
  try {
    return fetchBOPSParams(client, sessionId);
  } catch (e) {
    throw new Error(`Cannot cannot generate BOPS payload: ${e}`);
  }
}
