import { gql } from "graphql-request";
import { normalizeFlow, orderBreadcrumbs } from "./logic";
import { ComponentType, SectionStatuses } from "./types";
import type { GraphQLClient } from "graphql-request";
import type {
  Breadcrumbs,
  OrderedBreadcrumbs,
  NormalizedCrumb,
  FlowGraph,
  NormalizedFlow,
  NormalizedNode,
  SectionOverview,
} from "./types";

export class Flow {
  flow: FlowGraph;
  normalizedFlow: NormalizedFlow;

  constructor(flow: FlowGraph) {
    this.flow = flow;
    this.normalizedFlow = normalizeFlow(flow);
  }

  nextNode(breadcrumbs: Breadcrumbs): NormalizedNode | null {
    const breadcrumbsAreEmpty = Object.keys(breadcrumbs).length == 0;
    if (breadcrumbsAreEmpty) {
      return this.normalizedFlow[0];
    }

    const orderedBreadcrumbs: OrderedBreadcrumbs = orderBreadcrumbs(
      this.normalizedFlow,
      breadcrumbs
    );
    const lastCrumb: NormalizedCrumb = orderedBreadcrumbs.at(-1)!;
    const currentIndex = this.normalizedFlow.findIndex((node) => {
      if (lastCrumb.answers?.length) {
        const lastAnswerId = lastCrumb.answers.at(-1);
        return node.id === lastAnswerId;
      }
      return node.id === lastCrumb.id;
    });

    if (!currentIndex) {
      throw new Error("Breadcrumb contains a node id not found in the flow");
    }

    const currentNode = this.normalizedFlow[currentIndex!]!;

    const nextNode = this.normalizedFlow.find((node, index) => {
      const afterCurrent = index > currentIndex;
      const nextChildNode = afterCurrent && node.parentId == currentNode.id;
      const nextRootNode =
        afterCurrent && node.rootNodeId != currentNode.rootNodeId;
      return nextChildNode || nextRootNode;
    });

    return nextNode || null;
  }

  sectionOverview({
    breadcrumbs,
    cachedBreadcrumbs,
  }: {
    breadcrumbs: Breadcrumbs;
    cachedBreadcrumbs?: Breadcrumbs;
  }): SectionOverview {
    const sections: SectionOverview = this.normalizedFlow
      .filter((node) => node.type == ComponentType.Section)
      .map((sectionNode, index) => {
        const id = sectionNode.id;
        const title = (sectionNode.data?.title as string) || "";
        const status =
          index == 0
            ? SectionStatuses.ReadyToStart
            : SectionStatuses.CannotStartYet;
        return { id, title, status };
      });
    const breadcrumbsAreEmpty = Object.keys(breadcrumbs).length === 0;
    if (breadcrumbsAreEmpty) {
      return sections;
    }

    const orderedBreadcrumbs: OrderedBreadcrumbs = orderBreadcrumbs(
      this.normalizedFlow,
      breadcrumbs
    );

    let seenCrumb: NormalizedCrumb;
    let sectionIndex = 0;
    orderedBreadcrumbs.forEach((crumb: NormalizedCrumb) => {
      const crumbInNextSection =
        !seenCrumb || (seenCrumb && crumb.sectionId != seenCrumb.sectionId);
      if (crumbInNextSection) {
        // mark section as complete
        sections[sectionIndex].status = SectionStatuses.Complete;
        if (sectionIndex < sections.length - 1) {
          sections[sectionIndex + 1].status = SectionStatuses.ReadyToStart;
        }
        sectionIndex++;
      }
      seenCrumb = crumb;
    });

    if (!cachedBreadcrumbs) return sections;

    const lastCrumb: NormalizedCrumb = orderedBreadcrumbs.at(-1)!;
    const currentIndex = this.normalizedFlow.findIndex((node) => {
      if (lastCrumb.answers?.length) {
        const lastAnswerId = lastCrumb.answers.at(-1);
        return node.id === lastAnswerId;
      }
      return node.id === lastCrumb.id;
    });

    const currentNode = this.normalizedFlow[currentIndex!]!;

    const upcomingIds = this.normalizedFlow
      .filter((node, index) => {
        const afterCurrent = index > currentIndex;
        const nextChildNode = afterCurrent && node.parentId == currentNode.id;
        const nextRootNode =
          afterCurrent && node.rootNodeId != currentNode.rootNodeId;
        return nextChildNode || nextRootNode;
      })
      .map((node: NormalizedNode) => node.id);

    const visitedIds: OrderedBreadcrumbs = orderBreadcrumbs(
      this.normalizedFlow,
      cachedBreadcrumbs
    );

    // set cannot continue on all upcoming
    visitedIds
      .filter((node: NormalizedNode, index: number) =>
        upcomingIds.includes(node.id)
      )
      .forEach((node) => {
        const sId = sections.findIndex((s) => s.id == node.sectionId);
        sections[sId].status = SectionStatuses.CannotContinueYet;
      });

    // special case for next upcoming and visited nodes
    if (upcomingIds[0] === visitedIds[0].id) {
      const sId = sections.findIndex((s) => s.id == visitedIds[0].sectionId);
      sections[sId].status = SectionStatuses.ReadyToContinue;
    }

    return sections;
  }
}

export async function createFlow(
  client: GraphQLClient,
  args: { teamId: number; slug: string; data?: object }
): Promise<string> {
  const { insert_flows_one: response } = await client.request(
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
  await createAssociatedOperation(client, { flowId: response.id });
  return response.id;
}

export async function publishFlow(
  client: GraphQLClient,
  args: { flow: { id: string; data: object }; publisherId: number }
): Promise<number> {
  const { insert_published_flows_one: response } = await client.request(
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

  return response.id;
}

// Add a row to `operations` for an inserted flow, otherwise ShareDB throws a silent error when opening the flow in the UI
async function createAssociatedOperation(
  client: GraphQLClient,
  args: { flowId: string }
): Promise<number> {
  const { insert_operations_one: response } = await client.request(
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
  return response.id;
}
