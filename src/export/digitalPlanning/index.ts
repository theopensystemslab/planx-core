import { findPublishedFlowBySessionId } from "../../requests/flow.js";
import { getSessionById, getSessionMetadata } from "../../requests/session.js";
import { ExportParams } from "../index.js";
import { DigitalPlanning } from "./model.js";
import { Application as ApplicationPayload } from "./schemas/application/types.js";
import { PreApplication as PreApplicationPayload } from "./schemas/preApplication/types.js";

interface DigitalPlanningExportParams extends ExportParams {
  skipValidation?: boolean;
}

export async function generateDigitalPlanningPayload({
  client,
  sessionId,
  skipValidation,
}: DigitalPlanningExportParams): Promise<
  ApplicationPayload | PreApplicationPayload
> {
  const session = await getSessionById(client, sessionId);
  if (!session) throw new Error(`Cannot find session ${sessionId}`);

  const { passport, breadcrumbs, govUkPayment } = session.data;
  if (!passport || !breadcrumbs)
    throw new Error(`Data missing for session ${sessionId}`);

  const flow = await findPublishedFlowBySessionId(client, sessionId);
  if (!flow) throw new Error(`Cannot get published flow ${session.flow.id}`);

  const metadata = await getSessionMetadata(client, sessionId);
  if (!metadata)
    throw new Error(`Cannot get metadata for session ${sessionId}`);

  return new DigitalPlanning({
    sessionId,
    passport,
    breadcrumbs,
    govUkPayment,
    flow,
    metadata,
  }).getPayload(skipValidation);
}
