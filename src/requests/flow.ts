import { gql } from "graphql-request";
import type { GraphQLClient } from "graphql-request";
import capitalize from "lodash.capitalize";
import type { FlowGraph } from "../types";

export class FlowClient {
  protected client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
  }

  async create(args: {
    teamId: number;
    slug: string;
    data?: object;
  }): Promise<string> {
    return createFlow(this.client, args);
  }

  async publish(args: {
    flow: { id: string; data: object };
    publisherId: number;
  }): Promise<number> {
    return publishFlow(this.client, args);
  }

  async _destroy(flowId: string): Promise<boolean> {
    return _destroyFlow(this.client, flowId);
  }

  async _destroyPublished(publishedFlowId: number): Promise<boolean> {
    return _destroyPublishedFlow(this.client, publishedFlowId);
  }
}

export async function getLatestFlowGraph(
  client: GraphQLClient,
  flowId: string
): Promise<FlowGraph | null> {
  const response: { published_flows: { data: FlowGraph }[] } =
    await client.request(
      gql`
        query GetLatestPublishedFlowData($flowId: uuid!) {
          published_flows(
            where: { flow_id: { _eq: $flowId } }
            order_by: { created_at: desc }
            limit: 1
          ) {
            data
          }
        }
      `,
      { flowId }
    );
  return response.published_flows?.length
    ? response.published_flows[0].data
    : null;
}

export async function createFlow(
  client: GraphQLClient,
  args: { teamId: number; slug: string; data?: object }
): Promise<string> {
  const response: { insert_flows_one: { id: string } } = await client.request(
    gql`
      mutation CreateFlow($teamId: Int!, $flowSlug: String!, $data: jsonb) {
        insert_flows_one(
          object: { team_id: $teamId, slug: $flowSlug, data: $data, version: 1 }
        ) {
          id
        }
      }
    `,
    {
      teamId: args.teamId,
      flowSlug: args.slug,
      data: args.data,
    }
  );
  await createAssociatedOperation(client, {
    flowId: response.insert_flows_one.id,
  });
  return response.insert_flows_one.id;
}

export async function publishFlow(
  client: GraphQLClient,
  args: { flow: { id: string; data: object }; publisherId: number }
): Promise<number> {
  const response: { insert_published_flows_one: { id: number } } =
    await client.request(
      gql`
        mutation InsertPublishedFlow(
          $publishedFlow: published_flows_insert_input!
        ) {
          insert_published_flows_one(object: $publishedFlow) {
            id
          }
        }
      `,
      {
        publishedFlow: {
          flow_id: args.flow.id,
          data: args.flow.data,
          publisher_id: args.publisherId,
        },
      }
    );

  return response.insert_published_flows_one.id;
}

// Add a row to `operations` for an inserted flow, otherwise ShareDB throws a silent error when opening the flow in the UI
async function createAssociatedOperation(
  client: GraphQLClient,
  args: { flowId: string }
): Promise<number> {
  const response: { insert_operations_one: { id: number } } =
    await client.request(
      gql`
        mutation InsertOperation($flowId: uuid!, $data: jsonb = {}) {
          insert_operations_one(
            object: { flow_id: $flowId, version: 1, data: $data }
          ) {
            id
          }
        }
      `,
      { flowId: args.flowId }
    );
  return response.insert_operations_one.id;
}

export async function getFlowName(
  client: GraphQLClient,
  flowId: string
): Promise<string> {
  const response: { flows_by_pk: { slug: string } } = await client.request(
    gql`
      query GetFlowSlug($flowId: uuid!) {
        flows_by_pk(id: $flowId) {
          slug
        }
      }
    `,
    { flowId }
  );
  const slug = response.flows_by_pk.slug;
  const nameFromSlug = capitalize(slug.replaceAll?.("-", " "));
  return nameFromSlug;
}

export async function _destroyFlow(
  client: GraphQLClient,
  flowId: string
): Promise<boolean> {
  const response: { delete_flows_by_pk: { id: string } | null } =
    await client.request(
      gql`
        mutation DestroyFlow($flowId: uuid!) {
          delete_flows_by_pk(id: $flowId) {
            id
          }
        }
      `,
      { flowId }
    );
  return Boolean(response.delete_flows_by_pk?.id);
}

export async function _destroyPublishedFlow(
  client: GraphQLClient,
  publishedFlowId: number
): Promise<boolean> {
  const response: { delete_published_flows_by_pk: { id: number } | null } =
    await client.request(
      gql`
        mutation DestroyPublishedFlow($publishedFlowId: Int!) {
          delete_published_flows_by_pk(id: $publishedFlowId) {
            id
          }
        }
      `,
      { publishedFlowId }
    );
  return Boolean(response.delete_published_flows_by_pk?.id);
}