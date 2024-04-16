import { GraphQLClient } from "graphql-request";

import { findPublishedFlowBySessionId, getFlowName } from "../requests/flow";
import { getSessionById, getSessionPassport } from "../requests/session";
import type { BOPSFullPayload, QuestionAndResponses } from "../types";
import { computeBOPSParams } from "./bops";
import { computeCSVData } from "./csv";
import { generateDigitalPlanningPayload } from "./digitalPlanning";
import { DigitalPlanningApplication } from "./digitalPlanning/schema/types";
import { generateOneAppXML } from "./oneApp";

export type ExportParams = {
  client: GraphQLClient;
  sessionId: string;
};

type RedactionOptions =
  | { isRedacted?: false; keysToRedact?: never }
  | { isRedacted: true; keysToRedact?: string[] };

export type ExportWithRedactionParams = ExportParams & RedactionOptions;

export class ExportClient {
  protected client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
  }

  csvData(sessionId: string): Promise<QuestionAndResponses[]> {
    return generateCSVData({ client: this.client, sessionId });
  }

  csvDataRedacted(sessionId: string): Promise<QuestionAndResponses[]> {
    return generateCSVData({
      client: this.client,
      sessionId,
      isRedacted: true,
    });
  }

  bopsPayload(sessionId: string): Promise<BOPSFullPayload> {
    return generateBOPSPayload({ client: this.client, sessionId });
  }

  bopsPayloadRedacted(sessionId: string): Promise<BOPSFullPayload> {
    return generateBOPSPayload({
      client: this.client,
      sessionId,
      isRedacted: true,
    });
  }

  digitalPlanningDataPayload(
    sessionId: string,
    skipValidation?: boolean,
  ): Promise<DigitalPlanningApplication> {
    return generateDigitalPlanningPayload({
      client: this.client,
      sessionId,
      skipValidation,
    });
  }

  async oneAppPayload(sessionId: string): Promise<string> {
    return generateOneAppXML({ client: this.client, sessionId });
  }
}

export async function generateCSVData({
  client,
  sessionId,
  isRedacted,
}: ExportWithRedactionParams) {
  const bopsData = await generateBOPSPayload({ client, sessionId, isRedacted });
  if (!bopsData) {
    throw new Error(
      `Cannot fetch BOPS data for session ${sessionId} so cannot generate CSV Data`,
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
    bopsData,
    passport,
  });
}

export async function generateBOPSPayload({
  client,
  sessionId,
  isRedacted = false,
  keysToRedact,
}: ExportWithRedactionParams): Promise<BOPSFullPayload> {
  try {
    const session = await getSessionById(client, sessionId);
    if (!session) throw new Error(`Cannot find session ${sessionId}`);

    const flow = await findPublishedFlowBySessionId(client, sessionId);
    if (!flow) throw new Error(`Cannot get published flow ${session.flow.id}.`);

    const flowName = await getFlowName(client, session.flow.id);
    const { breadcrumbs, passport } = session.data;

    if (isRedacted) {
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

      return redactedExportData;
    }

    // compute export data
    const exportData = computeBOPSParams({
      sessionId,
      flow,
      flowName,
      breadcrumbs,
      passport,
    });

    return exportData;
  } catch (e) {
    throw new Error(`Cannot generate BOPS payload: ${e}`);
  }
}
