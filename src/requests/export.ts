import { GraphQLClient } from "graphql-request";
import { getSessionById, getSessionPassport } from "./session";
import { findPublisedFlowBySessionId, getFlowName } from "./flow";
import { computeCSVData } from "../export/csv";
import { computeBOPSParams } from "../export/bops";
import type { CSVData } from "../export/csv/model";
import type { BOPSFullPayload } from "../export/bops/model";

export class ExportClient {
  protected client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
  }

  csvData(sessionId: string): Promise<CSVData> {
    return generateCSVData(this.client, sessionId);
  }

  bopsPayload(sessionId: string): Promise<BOPSFullPayload> {
    return generateBOPSPayload(this.client, sessionId);
  }
}

export async function generateCSVData(
  client: GraphQLClient,
  sessionId: string
): Promise<CSVData> {
  const bopsData = await generateBOPSPayload(client, sessionId);
  if (!bopsData) {
    throw new Error(
      `Cannot fetch BOPS Params for session ${sessionId} so Cannot generate CSV Data`
    );
  }
  const passport = await getSessionPassport(client, sessionId);
  if (!passport) {
    throw new Error(
      `Cannot find passport for session ${sessionId} so Cannot generate CSV Data`
    );
  }
  return computeCSVData({
    sessionId,
    bopsData,
    passport,
  });
}

export async function generateBOPSPayload(
  client: GraphQLClient,
  sessionId: string
): Promise<BOPSFullPayload> {
  try {
    const session = await getSessionById(client, sessionId);
    if (!session) throw new Error(`Cannot find session ${sessionId}`);
    const flow = await findPublisedFlowBySessionId(client, sessionId);
    if (!flow) throw new Error(`Cannot get flow ${session.flowId}`);
    const flowName = await getFlowName(client, session.flowId);
    const { breadcrumbs, passport } = session.data;
    return computeBOPSParams({
      sessionId,
      flow,
      flowName,
      breadcrumbs,
      passport,
    });
  } catch (e) {
    throw new Error(`Cannot cannot generate BOPS payload: ${e}`);
  }
}
