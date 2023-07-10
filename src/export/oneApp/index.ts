import { GraphQLClient } from "graphql-request";
import { OneAppPayload } from "./model";
import { getDocumentTemplateNamesForSession } from "../../requests/document-templates";
import { getSessionById } from "../../requests/session";
import { Passport } from "../../models/passport";
import { Passport as IPassport } from "../../types";
import { hasRequiredDataForTemplate } from "../../templates";

export async function generateOneAppXML(
  client: GraphQLClient,
  sessionId: string
): Promise<string> {
  const session = await getSessionById(client, sessionId);
  if (!session) throw Error(`No session found matching ID ${sessionId}`);
  const {
    data: { passport },
  } = session;
  if (!passport?.data)
    throw Error(`Data missing from passport for session ${sessionId}`);

  const allTemplateNames = await getDocumentTemplateNamesForSession(
    client,
    sessionId
  );
  const templateNames = allTemplateNames.filter((templateName) =>
    hasRequiredDataForTemplate({
      templateName,
      passport: passport as Required<IPassport>,
    })
  );

  const files = new Passport(passport).getFiles();

  const payload = new OneAppPayload({
    sessionId,
    passport,
    files,
    templateNames,
  });
  const xml = payload.buildXML();
  return xml;
}
