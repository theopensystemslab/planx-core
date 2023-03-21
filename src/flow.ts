import { gql } from "graphql-request";
import { normalizeFlow, orderBreadcrumbs } from "./logic";
import { ComponentType, SectionStatuses } from "./types";
import type { GraphQLClient } from "graphql-request";
import type {
  NodeId,
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

  get sections() {
    return this.normalizedFlow.filter(
      (node) => node.type == ComponentType.Section
    );
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
    const remaining = this.remainingNodes(orderedBreadcrumbs);
    return remaining.length ? remaining[0] : null;
  }

  remainingNodes(
    orderedBreadcrumbs: OrderedBreadcrumbs
  ): Array<NormalizedNode> {
    const currentIndex = this.currentIndex(orderedBreadcrumbs);
    const currentNode = this.normalizedFlow[currentIndex]!;
    return this.normalizedFlow.filter((node, index) => {
      const afterCurrent = index > currentIndex;
      const nextChildNode = afterCurrent && node.parentId == currentNode.id;
      const nextRootNode =
        afterCurrent && node.rootNodeId != currentNode.rootNodeId;
      return nextChildNode || nextRootNode;
    });
  }

  sectionOverview({
    breadcrumbs,
    cachedBreadcrumbs,
    updatedNodeIds,
  }: {
    breadcrumbs: Breadcrumbs;
    cachedBreadcrumbs?: Breadcrumbs;
    updatedNodeIds?: Array<NodeId>;
  }): SectionOverview {
    const sections: SectionOverview = this.sections.map(
      (sectionNode, index) => {
        const id = sectionNode.id;
        const title = (sectionNode.data?.title as string) || "";
        const status =
          index == 0
            ? SectionStatuses.ReadyToStart
            : SectionStatuses.CannotStartYet;
        return { id, title, status };
      }
    );
    const breadcrumbsAreEmpty = Object.keys(breadcrumbs).length === 0;
    if (breadcrumbsAreEmpty) {
      return sections;
    }

    const orderedBreadcrumbs: OrderedBreadcrumbs = orderBreadcrumbs(
      this.normalizedFlow,
      breadcrumbs
    );

    let sectionIndex = 0;
    let seenCrumb: NormalizedCrumb;
    orderedBreadcrumbs.forEach((crumb: NormalizedCrumb) => {
      const notSeenThisSection =
        !seenCrumb || (seenCrumb && crumb.sectionId != seenCrumb.sectionId);
      if (notSeenThisSection) {
        // increment section index
        sectionIndex++;
        // mark the section as ready to start
        if (sections[sectionIndex]) {
          sections[sectionIndex].status = SectionStatuses.ReadyToStart;
        }
        // mark the previous section as complete
        sections[sectionIndex - 1].status = SectionStatuses.Complete;
      }
      // track this crumb as seen
      seenCrumb = crumb;
    });

    if (cachedBreadcrumbs) {
      const upcomingIds = this.remainingNodes(orderedBreadcrumbs).map(
        (node: NormalizedNode) => node.id
      );
      orderBreadcrumbs(this.normalizedFlow, cachedBreadcrumbs)
        .filter((crumb) => upcomingIds.includes(crumb.id))
        .reverse() // work backwards to prioritize ReadyToContinue
        .forEach((crumb) => {
          const sectionIndex = sections.findIndex(
            (section) => section.id == crumb.sectionId
          );
          sections[sectionIndex].status = SectionStatuses.CannotContinueYet;
          if (upcomingIds[0] === crumb.id) {
            sections[sectionIndex].status = SectionStatuses.ReadyToContinue;
          }
        });
    }

    // special case for updated node ids
    if (updatedNodeIds) {
      orderedBreadcrumbs.forEach((crumb) => {
        [crumb.id, ...(crumb.answers || [])]
          .filter((answerId) => updatedNodeIds.includes(answerId))
          .forEach((id) => {
            if (updatedNodeIds.includes(id)) {
              const sId = sections.findIndex((s) => s.id == crumb.sectionId);
              sections[sId].status = SectionStatuses.Updated;
            }
          });
      });
    }

    return sections;
  }

  private currentIndex(orderedBreadcrumbs: OrderedBreadcrumbs) {
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
    return currentIndex;
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
