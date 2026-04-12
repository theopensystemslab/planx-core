import { GraphQLClient } from "graphql-request";

import { findPublishedFlowBySessionId, getFlowName } from "../requests/flow.js";
import { getSessionById } from "../requests/session.js";
import type { BOPSFullPayload } from "../types/index.js";
import { computeBOPSParams } from "./bops/index.js";
import { generateDigitalPlanningPayload } from "./digitalPlanning/index.js";
import { Application as ApplicationPayload } from "./digitalPlanning/schemas/application/types.js";
import { Enforcement as EnforcementPayload } from "./digitalPlanning/schemas/enforcement/types.js";
import { PreApplication as PreApplicationPayload } from "./digitalPlanning/schemas/preApplication/types.js";
import { generateOneAppXML } from "./oneApp/index.js";

export type ExportParams = {
  client: GraphQLClient;
  sessionId: string;
};

export class ExportClient {
  protected client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
  }

  bopsPayload(sessionId: string): Promise<BOPSFullPayload> {
    return generateBOPSPayload({ client: this.client, sessionId });
  }

  digitalPlanningDataPayload(
    sessionId: string,
    skipValidation?: boolean,
  ): Promise<ApplicationPayload | PreApplicationPayload | EnforcementPayload> {
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

export async function generateBOPSPayload({
  client,
  sessionId,
}: ExportParams): Promise<BOPSFullPayload> {
  try {
    const session = await getSessionById(client, sessionId);
    if (!session) throw new Error(`Cannot find session ${sessionId}`);

    const flow = await findPublishedFlowBySessionId(client, sessionId);
    if (!flow) throw new Error(`Cannot get published flow ${session.flow.id}.`);

    const flowName = await getFlowName(client, session.flow.id);
    const { breadcrumbs, passport } = session.data;

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
    throw new Error(
      `Cannot generate BOPS payload for session ${sessionId}: ${e}`,
    );
  }
}
