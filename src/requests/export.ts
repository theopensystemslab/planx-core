import { GraphQLClient } from "graphql-request";

import { computeBOPSParams } from "../export/bops";
import { computeCSVData } from "../export/csv";
import {
  generateDigitalPlanningPayload,
  generateDigitalPlanningPayloadWithoutValidation,
} from "../export/digitalPlanning";
import { DigitalPlanningDataSchema } from "../export/digitalPlanning/schema/types";
import type { BOPSExportData, ExportData } from "../types";
import { findPublishedFlowBySessionId, getFlowName } from "./flow";
import { getSessionById, getSessionPassport } from "./session";

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

  digitalPlanningDataPayload(
    sessionId: string,
  ): Promise<DigitalPlanningDataSchema> {
    return generateDigitalPlanningPayload(this.client, sessionId);
  }

  /** Temp export for testing */
  digitalPlanningDataPayloadWithoutValidation(
    sessionId: string,
  ): Promise<DigitalPlanningDataSchema> {
    return generateDigitalPlanningPayloadWithoutValidation(
      this.client,
      sessionId,
    );
  }
}

export async function generateCSVData(
  client: GraphQLClient,
  sessionId: string,
): Promise<ExportData> {
  const bopsExportData = await generateBOPSPayload(client, sessionId);
  if (!bopsExportData) {
    throw new Error(
      `Cannot fetch BOPS Params for session ${sessionId} so cannot generate CSV Data`,
    );
  }
  const passport = await getSessionPassport(client, sessionId);
  if (!passport) {
    throw new Error(
      `Cannot find passport for session ${sessionId} so cannot generate CSV Data`,
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

    const flow = await findPublishedFlowBySessionId(client, sessionId);
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
    throw new Error(`Cannot generate BOPS payload: ${e}`);
  }
}
