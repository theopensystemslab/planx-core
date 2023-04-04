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
): Promise<boolean | null> {
  let response:
    | { update_lowcal_sessions: { returning: [{ locked_at: string | null }] } }
    | undefined;
  try {
    response = await client.request(
      gql`
        mutation LockSession($id: uuid!, $timestamp: timestamptz!) {
          update_lowcal_sessions(
            where: { id: { _eq: $id }, locked_at: { _is_null: true } }
            _set: { locked_at: $timestamp }
          ) {
            returning {
              locked_at
            }
          }
        }
      `,
      { id: sessionId, timestamp: new Date().toISOString() }
    );
  } catch {
    return false;
  }
  return response?.update_lowcal_sessions.returning.length
    ? !!response?.update_lowcal_sessions.returning[0]?.locked_at
    : null;
}
