import { gql } from "graphql-request";
import type { GraphQLClient } from "graphql-request";

export async function getDocumentTemplateNamesForFlow(
  client: GraphQLClient,
  flowId: string
): Promise<string[]> {
  const { flow_document_templates: response } = await client.request(gql`
    query GetDocumentTemplateNamesForFlow($flowId: uuid!) {
      flow_document_templates(where: {flow: {_eq: $flowId}}) {
        document_template
      }
    }`,
    { flowId }
  );
  return response.map(
    (data: { document_template: string }) => data.document_template
  );
}

export async function getDocumentTemplateNamesForSession(
  client: GraphQLClient,
  sessionId: string
): Promise<string[]> {
  const { lowcal_sessions_by_pk: { flow: { document_templates }} } = await client.request(gql`
    query GetDocumentTemplateNamesForSession($sessionId: uuid!) {
      lowcal_sessions_by_pk(id: $sessionId) {
        flow {
          document_templates {
            document_template
          }
        }
      }
    }`,
    { sessionId }
  );
  return document_templates.map((data: Record<"document_template", string>) => data.document_template)
}