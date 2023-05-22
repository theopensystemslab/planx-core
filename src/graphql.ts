import { GraphQLClient } from "graphql-request";

export function graphQLClient({
  url,
  secret,
  authorizedSession,
}: {
  url: string;
  secret?: string;
  authorizedSession?: {
    email: string;
    sessionId: string;
  };
}): GraphQLClient {
  let headers = {};
  if (secret) {
    headers = { "x-hasura-admin-secret": secret };
  } else if (authorizedSession) {
    headers = {
      "x-hasura-lowcal-session-id": authorizedSession.sessionId,
      "x-hasura-lowcal-email": authorizedSession.email,
    };
  }
  return new GraphQLClient(url, { headers });
}
