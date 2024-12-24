import type { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";
import { capitalize } from "lodash";

import type { FlowGraph, FlowStatus } from "../types/index.js";

export class FlowClient {
  protected client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
  }

  async create(args: {
    teamId: number;
    slug: string;
    name: string;
    data?: object;
    status?: FlowStatus;
  }): Promise<string> {
    return createFlow(this.client, args);
  }

  async publish(args: {
    flow: { id: string; data: object };
    publisherId: number;
  }): Promise<number> {
    return publishFlow(this.client, args);
  }

  async setStatus(args: { flow: { id: string }; status: FlowStatus }) {
    return setStatus(this.client, args);
  }

  async setDescription(args: { flow: { id: string }; description: string }) {
    return setDescription(this.client, args);
  }

  /**
   * Only used in test environments
   */
  async _destroy(flowId: string): Promise<boolean> {
    return _destroyFlow(this.client, flowId);
  }

  /**
   * Only used in test environments
   */
  async _destroyAll(): Promise<boolean> {
    return _destroyAllFlows(this.client);
  }

  async _destroyPublished(publishedFlowId: number): Promise<boolean> {
    return _destroyPublishedFlow(this.client, publishedFlowId);
  }
}

export async function getLatestFlowGraph(
  client: GraphQLClient,
  flowId: string,
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
      { flowId },
    );
  return response.published_flows?.length
    ? response.published_flows[0].data
    : null;
}

export async function getMostRecentPublishedFlowBeforeTimestamp(
  client: GraphQLClient,
  { flowId, before }: { flowId: string; before: string },
): Promise<FlowGraph | null> {
  const response: { published_flows: { data: FlowGraph }[] } =
    await client.request(
      gql`
        query GetPublishedFlowAtOrBeforeTimestamp(
          $flowId: uuid!
          $before: timestamptz!
        ) {
          published_flows(
            where: { flow_id: { _eq: $flowId }, created_at: { _lte: $before } }
            order_by: { created_at: desc }
            limit: 1
          ) {
            data
          }
        }
      `,
      { flowId, before },
    );
  return response.published_flows?.length
    ? response.published_flows[0].data
    : null;
}

export async function findPublishedFlowBySessionId(
  client: GraphQLClient,
  sessionId: string,
): Promise<FlowGraph | null> {
  const response: {
    lowcal_sessions_by_pk: { flowId: string; updatedAt: string } | null;
  } = await client.request(
    gql`
      query GetSessionDetailsToFindPublishedFlow($id: uuid!) {
        lowcal_sessions_by_pk(id: $id) {
          flowId: flow_id
          updatedAt: updated_at
        }
      }
    `,
    { id: sessionId },
  );
  if (!response.lowcal_sessions_by_pk)
    throw new Error(`Cannot find session ${sessionId}`);
  const { flowId, updatedAt } = response.lowcal_sessions_by_pk;
  return getMostRecentPublishedFlowBeforeTimestamp(client, {
    flowId,
    before: updatedAt,
  });
}

export async function createFlow(
  client: GraphQLClient,
  args: {
    teamId: number;
    slug: string;
    name: string;
    data?: object;
    status?: FlowStatus;
  },
): Promise<string> {
  const response: { insert_flows_one: { id: string } } = await client.request(
    gql`
      mutation CreateFlow(
        $teamId: Int!
        $flowSlug: String!
        $flowName: String!
        $data: jsonb
        $status: flow_status_enum_enum
      ) {
        insert_flows_one(
          object: {
            team_id: $teamId
            slug: $flowSlug
            name: $flowName
            data: $data
            version: 1
            status: $status
          }
        ) {
          id
        }
      }
    `,
    {
      teamId: args.teamId,
      flowSlug: args.slug,
      flowName: args.name,
      data: args.data,
      status: args.status || "offline",
    },
  );
  await createAssociatedOperation(client, {
    flowId: response.insert_flows_one.id,
  });
  return response.insert_flows_one.id;
}

export async function publishFlow(
  client: GraphQLClient,
  args: { flow: { id: string; data: object }; publisherId: number },
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
      },
    );

  return response.insert_published_flows_one.id;
}

// Add a row to `operations` for an inserted flow, otherwise ShareDB throws a silent error when opening the flow in the UI
async function createAssociatedOperation(
  client: GraphQLClient,
  args: { flowId: string },
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
      { flowId: args.flowId },
    );
  return response.insert_operations_one.id;
}

export async function getFlowName(
  client: GraphQLClient,
  flowId: string,
): Promise<string> {
  const response: { flows_by_pk: { slug: string } } = await client.request(
    gql`
      query GetFlowSlug($flowId: uuid!) {
        flows_by_pk(id: $flowId) {
          slug
        }
      }
    `,
    { flowId },
  );
  const slug = response.flows_by_pk.slug;
  const nameFromSlug = capitalize(slug.replaceAll?.("-", " "));
  return nameFromSlug;
}

export async function _destroyFlow(
  client: GraphQLClient,
  flowId: string,
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
      { flowId },
    );
  return Boolean(response.delete_flows_by_pk?.id);
}

export async function _destroyAllFlows(
  client: GraphQLClient,
): Promise<boolean> {
  const response: { deleteFlows: { affectedRows: string } } =
    await client.request(gql`
      mutation DestroyAllFlows {
        deleteFlows: delete_flows(where: { id: { _is_null: false } }) {
          affectedRows: affected_rows
        }
      }
    `);
  return Boolean(response.deleteFlows.affectedRows);
}

export async function _destroyPublishedFlow(
  client: GraphQLClient,
  publishedFlowId: number,
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
      { publishedFlowId },
    );
  return Boolean(response.delete_published_flows_by_pk?.id);
}

interface SetFlowStatus {
  flow: {
    id: string;
    status: FlowStatus;
  };
}

interface SetFlowDescription {
  flow: {
    id: string;
    description: string;
  };
}

async function setStatus(
  client: GraphQLClient,
  args: { flow: { id: string }; status: FlowStatus },
) {
  try {
    const { flow } = await client.request<SetFlowStatus>(
      gql`
        mutation SetFlowStatus(
          $flowId: uuid!
          $status: flow_status_enum_enum!
        ) {
          flow: update_flows_by_pk(
            pk_columns: { id: $flowId }
            _set: { status: $status }
          ) {
            id
            status
          }
        }
      `,
      {
        flowId: args.flow.id,
        status: args.status,
      },
    );

    return flow;
  } catch (error) {
    new Error(
      `Failed to update flow status to "${args.status}". Error: ${error}`,
    );
  }
}

async function setDescription(
  client: GraphQLClient,
  args: { flow: { id: string }; description: string },
) {
  try {
    const { flow } = await client.request<SetFlowDescription>(
      gql`
        mutation SetFlowDescription($flowId: uuid!, $description: String!) {
          flow: update_flows_by_pk(
            pk_columns: { id: $flowId }
            _set: { description: $description }
          ) {
            id
            description
          }
        }
      `,
      {
        flowId: args.flow.id,
        description: args.description,
      },
    );

    return flow;
  } catch (error) {
    new Error(
      `Failed to update flow description to "${args.description}". Error: ${error}`,
    );
  }
}
