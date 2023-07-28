import { gql, GraphQLClient } from "graphql-request";
import omit from "lodash.omit";
import { v4 as uuidV4 } from "uuid";

import {
  computePassport,
  flattenBreadcrumbs,
  sortBreadcrumbs,
} from "../models/session/logic";
import type {
  Breadcrumbs,
  EnrichedCrumb,
  FlowGraph,
  FlowId,
  OrderedBreadcrumbs,
  OrderedSession,
  Passport as IPassport,
  SessionId,
} from "../types";

export class SessionClient {
  protected client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
  }

  async create({
    flowId,
    breadcrumbs,
    email,
  }: {
    flowId: FlowId;
    breadcrumbs: OrderedBreadcrumbs;
    email?: string;
  }): Promise<SessionId> {
    const sessionId: SessionId = uuidV4();
    await Promise.all([
      createSession({
        client: this.client,
        sessionId,
        flowId,
        breadcrumbs,
        email,
      }),
      createLowcalSession({
        client: this.client,
        sessionId,
        flowId,
        breadcrumbs,
        email,
      }),
    ]);
    return sessionId;
  }

  async find(sessionId: SessionId): Promise<OrderedSession | null> {
    // try to find the session
    const session = await getSessionByIdFromSession(this.client, sessionId);
    if (session) return session;
    // otherwise, find the lowcal_session and convert it to an OrderedSession
    return getSessionByIdFromLowcalSession(this.client, sessionId);
  }

  async setBreadcrumbs({
    sessionId,
    breadcrumbs,
  }: {
    sessionId: SessionId;
    breadcrumbs: OrderedBreadcrumbs;
  }): Promise<void> {
    await Promise.all([
      setSessionBreadcrumbs({
        client: this.client,
        sessionId,
        breadcrumbs,
      }),
      // also update lowcal_session
      setLowcalSessionBreadcrumbs({
        client: this.client,
        sessionId,
        breadcrumbs: flattenBreadcrumbs(breadcrumbs),
      }),
    ]);
  }

  async insertCrumb({
    sessionId,
    crumb,
  }: {
    sessionId: SessionId;
    crumb: EnrichedCrumb;
  }): Promise<OrderedBreadcrumbs> {
    const breadcrumbs = await insertSessionCrumb({
      client: this.client,
      sessionId,
      crumb,
    });
    if (!breadcrumbs)
      throw new Error(`error inserting breadcrumbs for session ${sessionId}`);
    // also update lowcal_session
    await setLowcalSessionBreadcrumbs({
      client: this.client,
      sessionId,
      breadcrumbs: flattenBreadcrumbs(breadcrumbs),
    });
    return breadcrumbs;
  }

  async lock(sessionId: SessionId): Promise<boolean | null> {
    return lockSession(this.client, sessionId);
  }

  async unlock(sessionId: SessionId): Promise<boolean | null> {
    return unlockSession(this.client, sessionId);
  }

  async _destroy(sessionId: SessionId): Promise<boolean> {
    return _destroySession(this.client, sessionId);
  }
}

async function getSessionByIdFromSession(
  client: GraphQLClient,
  sessionId: SessionId,
): Promise<OrderedSession | null> {
  const sessionResponse: {
    sessions_by_pk: {
      id: SessionId;
      flowId: FlowId;
      breadcrumbs: OrderedBreadcrumbs;
      paymentId: string | null;
      lockedAt: string | null;
      submittedAt: string | null;
    };
  } = await client.request(
    gql`
      query GetSessionById($id: uuid!) {
        sessions_by_pk(id: $id) {
          id
          flowId: flow_id
          breadcrumbs
          paymentId: payment_id
          lockedAt: locked_at
          submittedAt: submitted_at
        }
      }
    `,
    { id: sessionId },
  );
  if (sessionResponse?.sessions_by_pk) {
    const breadcrumbs: OrderedBreadcrumbs =
      sessionResponse?.sessions_by_pk.breadcrumbs;
    const passport: IPassport = computePassport(breadcrumbs || []);
    const session: OrderedSession = {
      ...sessionResponse?.sessions_by_pk,
      passport,
    };
    return session;
  }
  return null;
}

async function getSessionByIdFromLowcalSession(
  client: GraphQLClient,
  sessionId: SessionId,
): Promise<OrderedSession | null> {
  const lowcalSessionResponse: {
    lowcal_sessions_by_pk: {
      id: SessionId;
      flowId: FlowId;
      breadcrumbs: Breadcrumbs;
      paymentId: string | null;
      lockedAt: string | null;
      submittedAt: string | null;
      flow: { data: FlowGraph };
    };
  } = await client.request(
    gql`
      query GetLowcalSessionById($id: uuid!) {
        lowcal_sessions_by_pk(id: $id) {
          id
          flowId: flow_id
          breadcrumbs: data(path: "breadcrumbs")
          paymentId: data(path: "govUkPayment.payment_id")
          lockedAt: locked_at
          submittedAt: submitted_at
          flow {
            data
          }
        }
      }
    `,
    { id: sessionId },
  );
  if (lowcalSessionResponse?.lowcal_sessions_by_pk) {
    const flow: FlowGraph =
      lowcalSessionResponse?.lowcal_sessions_by_pk.flow.data;
    const breadcrumbs: OrderedBreadcrumbs = sortBreadcrumbs(
      flow,
      lowcalSessionResponse?.lowcal_sessions_by_pk.breadcrumbs,
    );
    const passport: IPassport = computePassport(breadcrumbs);
    const session: OrderedSession = {
      ...omit(lowcalSessionResponse?.lowcal_sessions_by_pk, "flow"),
      breadcrumbs,
      passport,
    };
    return session;
  }
  return null;
}

async function createLowcalSession({
  client,
  sessionId,
  flowId,
  breadcrumbs,
  email = "",
}: {
  client: GraphQLClient;
  sessionId: SessionId;
  flowId: FlowId;
  breadcrumbs: OrderedBreadcrumbs;
  email?: string;
}): Promise<SessionId> {
  const response: {
    insert_lowcal_sessions_one: { id: SessionId };
  } = await client.request(
    gql`
      mutation CreateLowcalSession(
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
      sessionId,
      flowId,
      data: { id: sessionId, breadcrumbs },
      email,
    },
  );
  return response?.insert_lowcal_sessions_one.id;
}

async function createSession({
  client,
  sessionId,
  flowId,
  breadcrumbs,
  email = "",
}: {
  client: GraphQLClient;
  sessionId: SessionId;
  flowId: FlowId;
  breadcrumbs: OrderedBreadcrumbs;
  email?: string;
}): Promise<SessionId> {
  const response: {
    insert_sessions_one: {
      id: SessionId;
    };
  } = await client.request(
    gql`
      mutation CreateSession(
        $sessionId: uuid!
        $flowId: uuid!
        $breadcrumbs: jsonb!
        $email: String!
      ) {
        insert_sessions_one(
          object: {
            id: $sessionId
            flow_id: $flowId
            breadcrumbs: $breadcrumbs
            email: $email
          }
        ) {
          id
        }
      }
    `,
    {
      sessionId,
      flowId,
      breadcrumbs,
      email,
    },
  );
  return response?.insert_sessions_one.id;
}

async function insertSessionCrumb({
  client,
  sessionId,
  crumb,
}: {
  client: GraphQLClient;
  sessionId: SessionId;
  crumb: EnrichedCrumb;
}): Promise<OrderedBreadcrumbs | null> {
  const query = gql`
    mutation InsertSessionCrumb($id: uuid!, $crumb: jsonb!) {
      update_sessions(
        where: { id: { _eq: $id } }
        _append: { breadcrumbs: $crumb }
      ) {
        returning {
          breadcrumbs
        }
      }
    }
  `;
  const response: {
    update_sessions: { returning: [{ breadcrumbs: OrderedBreadcrumbs }] };
  } = await client.request(query, { id: sessionId, crumb });
  return response?.update_sessions.returning[0]?.breadcrumbs || null;
}

async function setSessionBreadcrumbs({
  client,
  sessionId,
  breadcrumbs,
}: {
  client: GraphQLClient;
  sessionId: SessionId;
  breadcrumbs: OrderedBreadcrumbs;
}): Promise<OrderedBreadcrumbs | null> {
  const query = gql`
    mutation UpdateSessionBreadcrumbs($id: uuid!, $breadcrumbs: jsonb!) {
      update_sessions(
        where: { id: { _eq: $id } }
        _set: { breadcrumbs: $breadcrumbs }
      ) {
        returning {
          breadcrumbs
        }
      }
    }
  `;
  const response: {
    update_sessions: { returning: [{ breadcrumbs: OrderedBreadcrumbs }] };
  } = await client.request(query, {
    id: sessionId,
    breadcrumbs,
  });
  return response?.update_sessions.returning[0]?.breadcrumbs || null;
}

async function setLowcalSessionBreadcrumbs({
  client,
  sessionId,
  breadcrumbs,
}: {
  client: GraphQLClient;
  sessionId: SessionId;
  breadcrumbs: Breadcrumbs;
}): Promise<Breadcrumbs | null> {
  const query = gql`
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
  `;
  const response: {
    update_lowcal_sessions: { returning: [{ data: Breadcrumbs }] };
  } = await client.request(query, {
    id: sessionId,
    breadcrumbs,
  });
  return response?.update_lowcal_sessions.returning.length
    ? response?.update_lowcal_sessions.returning[0]?.data
    : null;
}

async function lockSession(
  client: GraphQLClient,
  sessionId: SessionId,
): Promise<boolean | null> {
  const query = (table: string) => gql`
    mutation LockSession($id: uuid!) {
      update_${table}(
        where: { id: { _eq: $id }, locked_at: { _is_null: true } }
        _set: { locked_at: "now()" }
      ) {
        returning {
          locked_at
        }
      }
    }
  `;
  let response:
    | { update_lowcal_sessions: { returning: [{ locked_at: string | null }] } }
    | undefined;
  try {
    response = await client.request(query("lowcal_sessions"), {
      id: sessionId,
    });
    // also update sessions table
    await client.request(query("sessions"), { id: sessionId });
  } catch {
    return false;
  }
  return response?.update_lowcal_sessions.returning.length
    ? !!response?.update_lowcal_sessions.returning[0]?.locked_at
    : null;
}

async function unlockSession(
  client: GraphQLClient,
  sessionId: SessionId,
): Promise<boolean | null> {
  const query = (table: string) => gql`
    mutation UnlockSession($id: uuid!) {
      update_${table}(
        where: { id: { _eq: $id }, locked_at: { _is_null: false } }
        _set: { locked_at: null }
      ) {
        returning {
          locked_at
        }
      }
    }
  `;
  let response:
    | { update_lowcal_sessions: { returning: [{ locked_at: string | null }] } }
    | undefined;
  try {
    response = await client.request(query("lowcal_sessions"), {
      id: sessionId,
    });
    // also update sessions table
    await client.request(query("sessions"), { id: sessionId });
  } catch {
    return false;
  }
  return response?.update_lowcal_sessions.returning.length
    ? !response?.update_lowcal_sessions.returning[0]?.locked_at
    : null;
}

async function _destroySession(
  client: GraphQLClient,
  sessionId: SessionId,
): Promise<boolean> {
  const query = (table: string) => gql`
    mutation DestroySession($sessionId: uuid!) {
      delete_${table}_by_pk(id: $sessionId) {
        id
      }
    }
  `;
  const response: { delete_lowcal_sessions_by_pk: { id: SessionId } | null } =
    await client.request(query("lowcal_sessions"), { sessionId });
  // also delete from the sessions table
  await client.request(query("sessions"), { sessionId });
  return Boolean(response.delete_lowcal_sessions_by_pk?.id);
}
