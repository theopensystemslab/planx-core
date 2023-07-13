import { GraphQLClient } from "graphql-request";
import { getSessionById, getSessionPassport } from "./session";
import { findPublisedFlowBySessionId, getFlowName } from "./flow";
import { computeCSVData } from "../export/csv";
import { computeBOPSParams } from "../export/bops";
import type { BOPSExportData, ExportData } from "../types";

export class ExportClient {
  protected client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
  }

  csvData(sessionId: string): Promise<ExportData> {
    return generateCSVData(this.client, sessionId);
  }

  bopsPayload(sessionId: string): Promise<BOPSExportData> {
    return generateBOPSPayload(this.client, sessionId);
  }
}

export async function generateCSVData(
  client: GraphQLClient,
  sessionId: string,
): Promise<ExportData> {
  const bopsExportData = await generateBOPSPayload(client, sessionId);
  if (!bopsExportData) {
    throw new Error(
      `Cannot fetch BOPS Params for session ${sessionId} so Cannot generate CSV Data`,
    );
  }
  const passport = await getSessionPassport(client, sessionId);
  if (!passport) {
    throw new Error(
      `Cannot find passport for session ${sessionId} so Cannot generate CSV Data`,
    );
  }
  return computeCSVData({
    sessionId,
    bopsExportData,
    passport,
  });
}

export async function generateBOPSPayload(
  client: GraphQLClient,
  sessionId: string,
  keysToRedact?: string[],
): Promise<BOPSExportData> {
  try {
    const session = await getSessionById(client, sessionId);
    if (!session) throw new Error(`Cannot find session ${sessionId}`);
    const flow = await findPublisedFlowBySessionId(client, sessionId);
    if (!flow) throw new Error(`Cannot get flow ${session.flowId}`);
    const flowName = await getFlowName(client, session.flowId);
    const { breadcrumbs, passport } = session.data;

    // compute export data
    const exportData = computeBOPSParams({
      sessionId,
      flow,
      flowName,
      breadcrumbs,
      passport,
    });

    // compute redacted export data
    const defaultKeysToRedact = [
      "applicant.phone.primary",
      "applicant.phone.secondary",
      "applicant.email",
      "applicant.agent.phone.primary",
      "applicant.agent.phone.secondary",
      "applicant.agent.email",
    ];
    const redactedExportData = computeBOPSParams({
      sessionId,
      flow,
      flowName,
      breadcrumbs,
      passport,
      keysToRedact: keysToRedact || defaultKeysToRedact,
    });

    return {
      exportData,
      redactedExportData,
    };
  } catch (e) {
    throw new Error(`Cannot cannot generate BOPS payload: ${e}`);
  }
}
