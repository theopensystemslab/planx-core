import { GraphQLClient } from 'graphql-request';
import { OneAppPayload } from "./model";
import { getDocumentTemplateNames } from "../../document-templates"
import { getSessionById } from '../../session';
import { Passport } from '../../passport';

export async function generateOneAppXML(client: GraphQLClient, sessionId: string): Promise<string> {
  const session = await getSessionById(client, sessionId);
  const templateNames = await getDocumentTemplateNames(client, session.flowId);
  const payload = new OneAppPayload({
    sessionId: session.id,
    passport: session.data.passport,
    files: new Passport(session.data.passport).getFiles(),
    templateNames,
  });
  const xml = payload.buildXML();
  return xml;
}