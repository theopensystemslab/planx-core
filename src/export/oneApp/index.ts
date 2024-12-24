import { Passport } from "../../models/passport/index.js";
import { getDocumentTemplateNamesForSession } from "../../requests/document-templates.js";
import { getSessionById } from "../../requests/session.js";
import { hasRequiredDataForTemplate } from "../../templates/index.js";
import { Passport as IPassport } from "../../types/index.js";
import { ExportParams } from "../index.js";
import { OneAppPayload } from "./model.js";

export async function generateOneAppXML({
  client,
  sessionId,
}: ExportParams): Promise<string> {
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

  const payload = new OneAppPayload({
    sessionId,
    passport,
    templateNames,
  });

  const xml = payload.buildXML();
  return xml;
}
