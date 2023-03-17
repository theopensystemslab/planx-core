import { gql, GraphQLClient } from 'graphql-request';
import { Session } from './types';

export async function getSessionById(client: GraphQLClient, sessionId: string): Promise<Session> {
  const response: Record<"lowcal_sessions_by_pk", Session> = await client.request(
    gql`
      query GetSessionById(
        $id: uuid!
      ) {
        lowcal_sessions_by_pk(
          id: $id
        ) {
          data
          flow_id: flowId
          id
        }
      }
    `,
    {
      id: sessionId
    }
  );

  return response?.lowcal_sessions_by_pk;
}