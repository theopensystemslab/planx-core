import { GraphQLClient } from "graphql-request";

import { Passport } from "../../models/passport";
import { getDocumentTemplateNamesForSession } from "../../requests/document-templates";
import { getSessionById } from "../../requests/session";
import { hasRequiredDataForTemplate } from "../../templates";
import { Passport as IPassport } from "../../types";
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

  const allTemplateNames = await getDocumentTemplateNamesForSession(
    client,
    sessionId,
  );
  const templateNames = allTemplateNames.filter((templateName) =>
    hasRequiredDataForTemplate({
      templateName,
      passport: session.data.passport as Required<IPassport>,
    }),
  );

  const payload = new DigitalPlanning({
    sessionId,
    passport,
    templateNames,
  }).getPayload();

  return payload;
}