import { GraphQLClient } from "graphql-request";
import { OneAppPayload } from "./model";
import { getDocumentTemplateNamesForSession } from "../../requests/document-templates";
import { getSessionById } from "../../requests/session";
import { Passport } from "../../models/passport";
import { Passport as IPassport } from "../../types";
import { hasRequiredDataForTemplate } from "@opensystemslab/planx-document-templates";

export async function generateOneAppXML(
  client: GraphQLClient,
  sessionId: string
): Promise<string> {
  const {
    data: { passport },
  } = await getSessionById(client, sessionId);
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
