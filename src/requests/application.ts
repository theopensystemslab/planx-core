import { gql, GraphQLClient } from "graphql-request";
import type { ApplicationResponse } from "../types";

export class ApplicationClient {
  protected client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
  }

  async bopsResponse(sessionId: string): Promise<ApplicationResponse | null> {
    return bopsApplicationResponse(this.client, sessionId);
  }

  async emailResponse(sessionId: string): Promise<ApplicationResponse | null> {
    return emailApplicationResponse(this.client, sessionId);
  }

  async uniformResponse(
    sessionId: string
  ): Promise<ApplicationResponse | null> {
    return uniformApplicationResponse(this.client, sessionId);
  }
}

export async function uniformApplicationResponse(
  client: GraphQLClient,
  sessionId: string
): Promise<ApplicationResponse | null> {
  const response: {
    uniform_applications: { response: ApplicationResponse | null }[];
  } = await client.request(
    gql`
      query GetUniformApplicationResponse($sessionId: String!) {
        uniform_applications(
          where: { submission_reference: { _eq: $sessionId } }
          order_by: { created_at: desc }
          limit: 1
        ) {
          response
        }
      }
    `,
    { sessionId }
  );
  return response.uniform_applications.length > 0
    ? response.uniform_applications[0].response
    : null;
}

export async function bopsApplicationResponse(
  client: GraphQLClient,
  sessionId: string
): Promise<ApplicationResponse | null> {
  const response: { bops_applications: { response: ApplicationResponse }[] } =
    await client.request(
      gql`
        query GetBOPSApplicationResponse($sessionId: String!) {
          bops_applications(
            where: { session_id: { _eq: $sessionId } }
            order_by: { created_at: desc }
            limit: 1
          ) {
            response
          }
        }
      `,
      { sessionId }
    );
  return response.bops_applications.length > 0
    ? response.bops_applications[0].response
    : null;
}

export async function emailApplicationResponse(
  client: GraphQLClient,
  sessionId: string
): Promise<ApplicationResponse | null> {
  const response: { email_applications: { response: ApplicationResponse }[] } =
    await client.request(
      gql`
        query GetEmailApplicationResponse($sessionId: uuid!) {
          email_applications(
            where: { session_id: { _eq: $sessionId } }
            order_by: { created_at: desc }
            limit: 1
          ) {
            response
          }
        }
      `,
      { sessionId }
    );
  return response.email_applications.length > 0
    ? response.email_applications[0].response
    : null;
}
