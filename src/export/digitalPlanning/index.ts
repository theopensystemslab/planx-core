import { getMostRecentPublishedFlowBeforeTimestamp } from "../../requests/flow.js";
import { getSessionById } from "../../requests/session.js";
import { ExportParams } from "../index.js";
import { DigitalPlanning } from "./model.js";
import { Application as ApplicationPayload } from "./schemas/application/types.js";
import { Enforcement as EnforcementPayload } from "./schemas/enforcement/types.js";
import { PreApplication as PreApplicationPayload } from "./schemas/preApplication/types.js";

interface DigitalPlanningExportParams extends ExportParams {
  skipValidation?: boolean;
}

export async function generateDigitalPlanningPayload({
  client,
  sessionId,
  skipValidation,
}: DigitalPlanningExportParams): Promise<
  ApplicationPayload | PreApplicationPayload | EnforcementPayload
> {
  const session = await getSessionById(client, sessionId);
  if (!session) throw new Error(`Cannot find session ${sessionId}`);

  const { id: flowId, passport, breadcrumbs } = session.data;
  if (!flowId || !passport || !breadcrumbs)
    throw new Error(`Data missing for session ${sessionId}`);

  const sessionLastUpdatedAt = session.updatedAt;
  const flow = await getMostRecentPublishedFlowBeforeTimestamp(client, {
    flowId,
    before: sessionLastUpdatedAt,
  });
  if (!flow) throw new Error(`Cannot get published flow ${session.flow.id}`);

  return new DigitalPlanning({
    session,
    flow,
  }).getPayload(skipValidation);
}
