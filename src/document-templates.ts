import { gql } from "graphql-request";
import type { GraphQLClient } from "graphql-request";

export async function getDocumentTemplateNamesForFlow(
  client: GraphQLClient,
  flowId: string
): Promise<string[]> {
  const response: { flow_document_templates: [{ document_template: string }] } =
    await client.request(
      gql`
        query GetDocumentTemplateNamesForFlow($flowId: uuid!) {
          flow_document_templates(where: { flow: { _eq: $flowId } }) {
            document_template
          }
        }
      `,
      { flowId }
    );
  return response.flow_document_templates.map(
    (data: { document_template: string }) => data.document_template
  );
}

export async function getDocumentTemplateNamesForSession(
  client: GraphQLClient,
  sessionId: string
): Promise<string[]> {
  const response: {
    lowcal_sessions_by_pk: {
      flow: {
        document_templates: { document_template: string }[];
      };
    };
  } = await client.request(
    gql`
      query GetDocumentTemplateNamesForSession($sessionId: uuid!) {
        lowcal_sessions_by_pk(id: $sessionId) {
          flow {
            document_templates {
              document_template
            }
          }
        }
      }
    `,
    { sessionId }
  );
  return response.lowcal_sessions_by_pk.flow.document_templates.map(
    (data: { document_template: string }) => data.document_template
  );
}
