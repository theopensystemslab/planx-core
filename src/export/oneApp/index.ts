import { GraphQLClient } from "graphql-request";

import { Passport } from "../../models/passport";
import { getDocumentTemplateNamesForSession } from "../../requests/document-templates";
import { SessionClient } from "../../requests/session";
import { hasRequiredDataForTemplate } from "../../templates";
import { OneAppPayload } from "./model";

export async function generateOneAppXML(
  client: GraphQLClient,
  sessionId: string,
): Promise<string> {
  const session = await new SessionClient(client).find(sessionId);
  if (!session) throw Error(`No session found matching ID ${sessionId}`);

  if (!session.passport.data)
    throw Error(`Data missing from passport for session ${sessionId}`);

  const allTemplateNames = await getDocumentTemplateNamesForSession(
    client,
    sessionId,
  );
  const templateNames = allTemplateNames.filter((templateName) =>
    hasRequiredDataForTemplate({
      templateName,
      passport: session.passport,
    }),
  );

  const payload = new OneAppPayload({
    sessionId,
    passport: new Passport(session.passport),
    templateNames,
  });

  const xml = payload.buildXML();
  return xml;
}
