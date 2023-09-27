import { GraphQLClient } from "graphql-request";

import { Passport } from "../../models/passport";
import { getSessionById } from "../../requests/session";
import { DigitalPlanning } from "./model";
import { DigitalPlanningDataSchema as DigitalPlanningPayload } from "./schema/types";

export async function generateDigitalPlanningPayload(
  client: GraphQLClient,
  sessionId: string,
): Promise<DigitalPlanningPayload> {
  const session = await getSessionById(client, sessionId);
  if (!session) throw Error(`No session found matching ID ${sessionId}`);

  if (!session.data.passport?.data)
    throw Error(`Data missing from passport for session ${sessionId}`);

  const passport = new Passport(session.data.passport);

  return new DigitalPlanning({
    sessionId,
    passport,
  }).getPayload();
}

export async function generateDigitalPlanningPayloadWithoutValidation(
  client: GraphQLClient,
  sessionId: string,
): Promise<DigitalPlanningPayload> {
  const session = await getSessionById(client, sessionId);
  if (!session) throw Error(`No session found matching ID ${sessionId}`);

  if (!session.data.passport?.data)
    throw Error(`Data missing from passport for session ${sessionId}`);

  const passport = new Passport(session.data.passport);

  return new DigitalPlanning({
    sessionId,
    passport,
  }).getPayloadWithoutValidation();
}
