import { GraphQLClient } from "graphql-request";

import { computeBOPSParams } from "../export/bops";
import { computeCSVData } from "../export/csv";
import { generateDigitalPlanningPayload } from "../export/digitalPlanning";
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
    const t0 = performance.now();
    const session = await getSessionById(client, sessionId);
    if (!session) throw new Error(`Cannot find session ${sessionId}`);
    const t1 = performance.now();
    console.log(`Call to getSessionById took ${t1 - t0} milliseconds.`);

    const t2 = performance.now();
    const flow = await findPublishedFlowBySessionId(client, sessionId);
    if (!flow) throw new Error(`Cannot get flow ${session.flowId}`);
    const t3 = performance.now();
    console.log(
      `Call to findPublishedFlowBySessionId took ${t3 - t2} milliseconds.`,
    );

    const t4 = performance.now();
    const flowName = await getFlowName(client, session.flowId);
    const { breadcrumbs, passport } = session.data;
    const t5 = performance.now();
    console.log(`Call to getFlowName took ${t5 - t4} milliseconds.`);

    // compute export data
    const t6 = performance.now();
    const exportData = computeBOPSParams({
      sessionId,
      flow,
      flowName,
      breadcrumbs,
      passport,
    });
    const t7 = performance.now();
    console.log(`Call to computeBOPSParams took ${t7 - t6} milliseconds.`);

    // compute redacted export data
    const defaultKeysToRedact = [
      "applicant.phone.primary",
      "applicant.phone.secondary",
      "applicant.email",
      "applicant.agent.phone.primary",
      "applicant.agent.phone.secondary",
      "applicant.agent.email",
    ];
    const t8 = performance.now();
    const redactedExportData = computeBOPSParams({
      sessionId,
      flow,
      flowName,
      breadcrumbs,
      passport,
      keysToRedact: keysToRedact || defaultKeysToRedact,
    });
    const t9 = performance.now();
    console.log(
      `Call to computeBOPSParams (redacted) took ${t9 - t8} milliseconds.`,
    );

    return {
      exportData,
      redactedExportData,
    };
  } catch (e) {
    throw new Error(`Cannot generate BOPS payload: ${e}`);
  }
}
