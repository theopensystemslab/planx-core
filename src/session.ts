import { gql, GraphQLClient } from "graphql-request";
import { Session, DetailedSession } from "./types";

export async function getSessionById(
  client: GraphQLClient,
  sessionId: string
): Promise<Session> {
  const response: Record<"lowcal_sessions_by_pk", Session> =
    await client.request(
      gql`
        query GetSessionById($id: uuid!) {
          lowcal_sessions_by_pk(id: $id) {
            data
            flowId: flow_id
            id
          }
        }
      `,
      { id: sessionId }
    );
  return response?.lowcal_sessions_by_pk;
}

export async function getDetailedSessionById(
  client: GraphQLClient,
  sessionId: string
): Promise<DetailedSession | undefined> {
  const response: {
    lowcal_sessions_by_pk: DetailedSession | undefined;
  } = await client.request(
    gql`
      query GetSessionDetails($id: uuid!) {
        lowcal_sessions_by_pk(id: $id) {
          id
          flowId: flow_id
          lockedAt: locked_at
          data
        }
      }
    `,
    { id: sessionId }
  );
  return response.lowcal_sessions_by_pk;
}

export async function lockSession(
  client: GraphQLClient,
  sessionId: string
): Promise<boolean> {
  const response: {
    update_lowcal_sessions_by_pk: { locked_at: string | null };
  } = await client.request(
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
  return !!response?.update_lowcal_sessions_by_pk.locked_at;
}
