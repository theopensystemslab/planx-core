import { GraphQLClient } from "graphql-request";

import { findPublishedFlowBySessionId } from "../../requests/flow";
import { getSessionById, getSessionMetadata } from "../../requests/session";
import { DigitalPlanning } from "./model";
import { DigitalPlanningApplication as DigitalPlanningPayload } from "./schema/types";

export async function generateDigitalPlanningPayload(
  client: GraphQLClient,
  sessionId: string,
): Promise<DigitalPlanningPayload> {
  const session = await getSessionById(client, sessionId);
  if (!session) throw new Error(`Cannot find session ${sessionId}`);

  const { passport, breadcrumbs } = session.data;
  if (!passport || !breadcrumbs)
    throw new Error(`Data missing for session ${sessionId}`);

  const flow = await findPublishedFlowBySessionId(client, sessionId);
  if (!flow) throw new Error(`Cannot get flow ${session.flowId}`);

  const metadata = await getSessionMetadata(client, sessionId);
  if (!metadata)
    throw new Error(`Cannot get metadata for session ${sessionId}`);

  return new DigitalPlanning({
    sessionId,
    passport,
    breadcrumbs,
    flow,
    metadata,
  }).getPayload();
}
