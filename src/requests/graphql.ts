import { GraphQLClient } from "graphql-request";

interface JWTAuth {
  jwt: string;
}

interface SessionAuth {
  session: {
    email: string;
    sessionId: string;
  };
}

interface AdminAuth {
  adminSecret: string;
}

export type Auth = JWTAuth | SessionAuth | AdminAuth;

/**
 * Client which queries using user's JWT for role-bases access to Hasura
 * Should be used for all requests made my authorised users
 */
const getRoleBasedClient = (url: string, auth: JWTAuth) =>
  new GraphQLClient(url, { headers: { authorization: `Bearer ${auth.jwt}` } });

/**
 * Session based client which allows non-authorised users access to their session
 * Used for Save & Return
 */
const getSessionClient = (url: string, auth: SessionAuth) =>
  new GraphQLClient(url, {
    headers: {
      "x-hasura-lowcal-session-id": auth.session.sessionId,
      "x-hasura-lowcal-email": auth.session.email,
    },
  });

/**
 * Admin client with full access to Hasura
 * Should be used with caution - only for testing / scripting
 * @deprecated Consider moving to an "api" role in Hasura
 */
const getAdminClient = (url: string, auth: AdminAuth) =>
  new GraphQLClient(url, {
    headers: { "x-hasura-admin-secret": auth.adminSecret },
  });

export function getGraphQLClient({
  url,
  auth,
}: {
  url: string;
  auth?: Auth;
}): GraphQLClient {
  // Return public client by default
  if (!auth) return new GraphQLClient(url);

  if ("jwt" in auth) return getRoleBasedClient(url, auth);
  if ("session" in auth) return getSessionClient(url, auth);
  if ("adminSecret" in auth) return getAdminClient(url, auth);

  throw Error(
    "Unable to instantiate GraphQL client - insufficient auth details provided",
  );
}
