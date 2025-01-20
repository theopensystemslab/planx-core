import { gql, GraphQLClient } from "graphql-request";

import type { ApplicationResponse } from "../types/index.js";

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
    sessionId: string,
  ): Promise<ApplicationResponse | null> {
    return uniformApplicationResponse(this.client, sessionId);
  }

  async _destroyAll(sessionId: string): Promise<void> {
    await Promise.all([
      _destroyBopsApplication(this.client, sessionId),
      _destroyEmailApplication(this.client, sessionId),
      _destroyUniformApplication(this.client, sessionId),
    ]);
  }
}

export async function uniformApplicationResponse(
  client: GraphQLClient,
  sessionId: string,
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
    { sessionId },
  );
  return response.uniform_applications.length > 0
    ? response.uniform_applications[0].response
    : null;
}

export async function bopsApplicationResponse(
  client: GraphQLClient,
  sessionId: string,
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
      { sessionId },
    );
  return response.bops_applications.length > 0
    ? response.bops_applications[0].response
    : null;
}

export async function emailApplicationResponse(
  client: GraphQLClient,
  sessionId: string,
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
      { sessionId },
    );
  return response.email_applications.length > 0
    ? response.email_applications[0].response
    : null;
}

export async function _destroyBopsApplication(
  client: GraphQLClient,
  sessionId: string,
): Promise<boolean> {
  const response: { delete_bops_applications: { affected_rows: number } } =
    await client.request(
      gql`
        mutation DestroyBopsApplication($sessionId: String!) {
          delete_bops_applications(where: { session_id: { _eq: $sessionId } }) {
            affected_rows
          }
        }
      `,
      { sessionId },
    );
  return Boolean(response.delete_bops_applications?.affected_rows);
}

export async function _destroyEmailApplication(
  client: GraphQLClient,
  sessionId: string,
): Promise<boolean> {
  const response: { delete_email_applications: { affected_rows: number } } =
    await client.request(
      gql`
        mutation DestroyEmailApplication($sessionId: uuid!) {
          delete_email_applications(
            where: { session_id: { _eq: $sessionId } }
          ) {
            affected_rows
          }
        }
      `,
      { sessionId },
    );
  return Boolean(response.delete_email_applications?.affected_rows);
}

export async function _destroyUniformApplication(
  client: GraphQLClient,
  sessionId: string,
): Promise<boolean> {
  const response: { delete_uniform_applications: { affected_rows: number } } =
    await client.request(
      gql`
        mutation DestroyUniformApplication($sessionId: String!) {
          delete_uniform_applications(
            where: { submission_reference: { _eq: $sessionId } }
          ) {
            affected_rows
          }
        }
      `,
      { sessionId },
    );
  return Boolean(response.delete_uniform_applications?.affected_rows);
}
