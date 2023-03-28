import { gql, GraphQLClient } from "graphql-request";
import { Session, PaymentRequest } from "./types";

export async function getSessionById(
  client: GraphQLClient,
  sessionId: string
): Promise<Session> {
  const response: Record<"lowcal_sessions_by_pk", Session> =
    await client.request(
      gql`
      query GetSessionById(
        $id: uuid!
      ) {
        lowcal_sessions_by_pk(
          id: $id
        ) {
          data
          flowId: flow_id
          id
        }
      `,
      {
        id: sessionId,
      }
    );

  return response?.lowcal_sessions_by_pk;
}

export async function lockSession(
  client: GraphQLClient,
  sessionId: string
): Promise<boolean> {
  const response: Record<"update_lowcal_sessions_by_pk", PaymentRequest> =
    await client.request(
      gql`
        mutation LockSession($id: uuid!, $timestamp: timestamptz!) {
          update_lowcal_sessions_by_pk(
            pk_columns: { id: $id }
            _set: { locked_at: $timestamp }
          ) {
            locked_at
          }
        }
      `,
      { id: sessionId, timestamp: new Date().toISOString() }
    );
  return !!response?.update_lowcal_sessions_by_pk;
}
