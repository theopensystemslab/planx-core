import { gql } from "graphql-request";
import { normalizeFlow, sortBreadcrumbs } from "./logic";
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
  flowGraph: FlowGraph;
  normalizedFlow: NormalizedFlow;

  constructor(flowGraph: FlowGraph) {
    this.flowGraph = flowGraph;
    this.normalizedFlow = normalizeFlow(flowGraph);
  }

  get sections() {
    return this.normalizedFlow.filter(
      (node) => node.type == ComponentType.Section
    );
  }

  sortBreadcrumbs(unsortedBreadcrumbs: Breadcrumbs): OrderedBreadcrumbs {
    return sortBreadcrumbs(this.normalizedFlow, unsortedBreadcrumbs);
  }

  currentNode(breadcrumbs: OrderedBreadcrumbs): NormalizedNode {
    const currentIndex = this.currentIndex(breadcrumbs);
    return this.normalizedFlow[currentIndex]!;
  }

  nextNode(breadcrumbs: OrderedBreadcrumbs): NormalizedNode | null {
    // return the first node if breadcrumbs are empty
    if (breadcrumbs.length == 0) {
      return this.normalizedFlow[0];
    }
    // otherwise return the first remaining node
    const remaining = this.remainingNodes(breadcrumbs);
    return remaining.length ? remaining[0] : null;
  }

  remainingNodes(breadcrumbs: OrderedBreadcrumbs): Array<NormalizedNode> {
    const currentIndex = this.currentIndex(breadcrumbs);
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
    breadcrumbs: OrderedBreadcrumbs;
    cachedBreadcrumbs?: OrderedBreadcrumbs;
    updatedNodeIds?: Array<NodeId>;
  }): SectionOverview {
    // construct the default section overview
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

    // return the default section overview if breadcrumbs are empty
    if (breadcrumbs.length == 0) {
      return sections;
    }

    // compute Complete and ReadyToStart statuses
    let sectionIndex = 0;
    let seenCrumb: NormalizedCrumb;
    breadcrumbs.forEach((crumb: NormalizedCrumb) => {
      const notSeenThisSection =
        !seenCrumb || (seenCrumb && crumb.sectionId != seenCrumb.sectionId);
      if (notSeenThisSection) {
        // increment section index
        sectionIndex++;
        // mark the section as ReadyToStart
        if (sections[sectionIndex]) {
          sections[sectionIndex].status = SectionStatuses.ReadyToStart;
        }
        // mark the previous section as Complete
        sections[sectionIndex - 1].status = SectionStatuses.Complete;
      }
      // track this crumb as seen
      seenCrumb = crumb;
    });

    // compute ReadyToContinue and CannotContinueYet statuses
    if (cachedBreadcrumbs) {
      const upcomingIds = this.remainingNodes(breadcrumbs).map(
        (node: NormalizedNode) => node.id
      );
      cachedBreadcrumbs
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

    // compute the Updated status
    if (updatedNodeIds) {
      breadcrumbs.forEach((crumb) => {
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

  private currentIndex(breadcrumbs: OrderedBreadcrumbs) {
    const lastCrumb: NormalizedCrumb = breadcrumbs.at(-1)!;
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
