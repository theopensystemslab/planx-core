import { gql, GraphQLClient } from "graphql-request";
import { v4 as uuidV4 } from "uuid";

import type {
  Breadcrumbs,
  DetailedSession,
  Passport,
  Session,
  SessionData,
  SessionMetadata,
} from "../types/index.js";

export class SessionClient {
  protected client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
  }

  async find(sessionId: string): Promise<Session | null> {
    return getSessionById(this.client, sessionId);
  }

  async findDetails(sessionId: string): Promise<DetailedSession | null> {
    return getDetailedSessionById(this.client, sessionId);
  }

  async create({
    flowId,
    data,
    email = "",
  }: {
    flowId: string;
    data: Partial<SessionData>;
    email?: string;
  }) {
    return createSession({ client: this.client, flowId, data, email });
  }

  async updateBreadcrumbs({
    sessionId,
    breadcrumbs,
  }: {
    sessionId: string;
    breadcrumbs: Breadcrumbs;
  }): Promise<Breadcrumbs | null> {
    return updateSessionBreadcrumbs({
      client: this.client,
      sessionId,
      breadcrumbs,
    });
  }

  async lock(sessionId: string): Promise<boolean | null> {
    return lockSession(this.client, sessionId);
  }

  async unlock(sessionId: string): Promise<boolean | null> {
    return unlockSession(this.client, sessionId);
  }

  async _destroy(sessionId: string): Promise<boolean> {
    return _destroySession(this.client, sessionId);
  }
}

export async function getSessionById(
  client: GraphQLClient,
  sessionId: string,
): Promise<Session | null> {
  const response: Record<"lowcal_sessions_by_pk", Session> =
    await client.request(
      gql`
        query GetSessionById($id: uuid!) {
          lowcal_sessions_by_pk(id: $id) {
            id
            data
            flow {
              id
              slug
              name
            }
          }
        }
      `,
      { id: sessionId },
    );
  return response?.lowcal_sessions_by_pk;
}

export async function getDetailedSessionById(
  client: GraphQLClient,
  sessionId: string,
): Promise<DetailedSession | null> {
  const response: {
    lowcal_sessions_by_pk: DetailedSession | null;
  } = await client.request(
    gql`
      query GetSessionDetails($id: uuid!) {
        lowcal_sessions_by_pk(id: $id) {
          id
          lockedAt: locked_at
          submittedAt: submitted_at
          data
          flow {
            id
            slug
            name
          }
        }
      }
    `,
    { id: sessionId },
  );
  return response.lowcal_sessions_by_pk;
}

export async function getSessionBreadcrumbs(
  client: GraphQLClient,
  sessionId: string,
): Promise<Breadcrumbs | null> {
  const response: Record<
    "lowcal_sessions_by_pk",
    { breadcrumbs: Breadcrumbs }
  > = await client.request(
    gql`
      query GetSessionById($id: uuid!) {
        lowcal_sessions_by_pk(id: $id) {
          breadcrumbs: data(path: "breadcrumbs")
        }
      }
    `,
    { id: sessionId },
  );
  return response?.lowcal_sessions_by_pk?.breadcrumbs || null;
}

export async function getSessionPassport(
  client: GraphQLClient,
  sessionId: string,
): Promise<Passport | null> {
  const response: Record<"lowcal_sessions_by_pk", { passport: Passport }> =
    await client.request(
      gql`
        query GetSessionById($id: uuid!) {
          lowcal_sessions_by_pk(id: $id) {
            passport: data(path: "passport")
          }
        }
      `,
      { id: sessionId },
    );
  return response?.lowcal_sessions_by_pk?.passport || null;
}

export async function getSessionMetadata(
  client: GraphQLClient,
  sessionId: string,
): Promise<SessionMetadata | null> {
  const response: Record<"lowcal_sessions_by_pk", SessionMetadata> =
    await client.request(
      gql`
        query GetSessionById($id: uuid!) {
          lowcal_sessions_by_pk(id: $id) {
            id
            createdAt: created_at
            submittedAt: submitted_at
            flow {
              id
              slug
              name
              team {
                name
                slug
                settings: team_settings {
                  referenceCode: reference_code
                }
              }
            }
          }
        }
      `,
      { id: sessionId },
    );

  return response?.lowcal_sessions_by_pk;
}

export async function createSession({
  client,
  flowId,
  data,
  email = "",
}: {
  client: GraphQLClient;
  flowId: string;
  data: Partial<SessionData>;
  email?: string;
}): Promise<string> {
  const newSessionId = uuidV4();
  const response: {
    insert_lowcal_sessions_one: { id: string };
  } = await client.request(
    gql`
      mutation CreateSession(
        $sessionId: uuid!
        $flowId: uuid!
        $data: jsonb!
        $email: String!
      ) {
        insert_lowcal_sessions_one(
          object: {
            id: $sessionId
            flow_id: $flowId
            data: $data
            email: $email
          }
        ) {
          id
        }
      }
    `,
    {
      sessionId: newSessionId,
      flowId,
      data: { ...data, id: newSessionId },
      email,
    },
  );
  return response?.insert_lowcal_sessions_one.id;
}

export async function updateSessionBreadcrumbs({
  client,
  sessionId,
  breadcrumbs,
}: {
  client: GraphQLClient;
  sessionId: string;
  breadcrumbs: Breadcrumbs;
}): Promise<Breadcrumbs | null> {
  const response: {
    update_lowcal_sessions: { returning: [{ data: Breadcrumbs }] };
  } = await client.request(
    gql`
      mutation UpdateSessionBreadcrumbs($id: uuid!, $breadcrumbs: jsonb!) {
        update_lowcal_sessions(
          where: { id: { _eq: $id } }
          _append: { data: { breadcrumbs: $breadcrumbs } }
        ) {
          returning {
            data(path: "breadcrumbs")
          }
        }
      }
    `,
    { id: sessionId, breadcrumbs },
  );
  return response?.update_lowcal_sessions.returning.length
    ? response?.update_lowcal_sessions.returning[0]?.data
    : null;
}

export async function lockSession(
  client: GraphQLClient,
  sessionId: string,
): Promise<boolean | null> {
  let response:
    | { update_lowcal_sessions: { returning: [{ locked_at: string | null }] } }
    | undefined;
  try {
    response = await client.request(
      gql`
        mutation LockSession($id: uuid!) {
          update_lowcal_sessions(
            where: { id: { _eq: $id }, locked_at: { _is_null: true } }
            _set: { locked_at: "now()" }
          ) {
            returning {
              locked_at
            }
          }
        }
      `,
      { id: sessionId },
    );
  } catch {
    return false;
  }
  return response?.update_lowcal_sessions.returning.length
    ? !!response?.update_lowcal_sessions.returning[0]?.locked_at
    : null;
}

export async function unlockSession(
  client: GraphQLClient,
  sessionId: string,
): Promise<boolean | null> {
  let response:
    | { update_lowcal_sessions: { returning: [{ locked_at: string | null }] } }
    | undefined;
  try {
    response = await client.request(
      gql`
        mutation UnlockSession($id: uuid!) {
          update_lowcal_sessions(
            where: { id: { _eq: $id }, locked_at: { _is_null: false } }
            _set: { locked_at: null }
          ) {
            returning {
              locked_at
            }
          }
        }
      `,
      { id: sessionId },
    );
  } catch {
    return false;
  }
  return response?.update_lowcal_sessions.returning.length
    ? !response?.update_lowcal_sessions.returning[0]?.locked_at
    : null;
}

export async function _destroySession(
  client: GraphQLClient,
  sessionId: string,
): Promise<boolean> {
  const response: { delete_lowcal_sessions_by_pk: { id: string } | null } =
    await client.request(
      gql`
        mutation DestroySession($sessionId: uuid!) {
          delete_lowcal_sessions_by_pk(id: $sessionId) {
            id
          }
        }
      `,
      { sessionId },
    );
  return Boolean(response.delete_lowcal_sessions_by_pk?.id);
}
