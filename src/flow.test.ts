import { Flow } from "./flow";
import * as sectionScenarios from "./mocks/section-scenarios";
import type {
  NodeId,
  Breadcrumbs,
  NormalizedNode,
  SectionOverview,
} from "./types";

describe("Flow", () => {
  describe("nextNode", () => {
    const flow: Flow = new Flow(sectionScenarios.flow);
    const sectionTwoNode: NormalizedNode = sectionScenarios.normalizedFlow[9];

    test("the shortest path of a branching section", () => {
      const breadcrumbs = sectionScenarios.sectionOneShortestPath;
      const actual = flow.nextNode(breadcrumbs);
      expect(actual).toEqual(sectionTwoNode);
    });
    test("the longest path of a branching section", () => {
      const breadcrumbs = sectionScenarios.sectionOneLongestPath;
      const actual = flow.nextNode(breadcrumbs);
      expect(actual).toEqual(sectionTwoNode);
    });
  });

  describe("sectionOverview", () => {
    const sectionOverviewTest = ({
      breadcrumbs,
      cachedBreadcrumbs,
      updatedNodeIds,
      expected,
    }: {
      breadcrumbs: Breadcrumbs;
      cachedBreadcrumbs?: Breadcrumbs;
      updatedNodeIds?: Array<NodeId>;
      expected: SectionOverview;
    }) => {
      const flow = new Flow(sectionScenarios.flow);
      const actual = flow.sectionOverview({
        breadcrumbs,
        updatedNodeIds,
        cachedBreadcrumbs,
      });
      expect(actual).toEqual(expected);
    };

    describe('scenarios with a "ReadyToStart" and "CannotStartYet" section statuses', () => {
      test("no breadcrumbs (upcoming unvisited nodes)", () => {
        sectionOverviewTest({
          breadcrumbs: {},
          expected: sectionScenarios.initialOverview,
        });
      });
    });
    describe('scenarios with a "Complete" section status', () => {
      test("breadcrumbs which visit all the nodes in the shortest path of a branching section", () => {
        sectionOverviewTest({
          breadcrumbs: sectionScenarios.sectionOneShortestPath,
          expected: sectionScenarios.sectionOneShortestPathOverview,
        });
      });
      test("breadcrumbs which visit all the nodes in the longest path of a branching section", () => {
        sectionOverviewTest({
          breadcrumbs: sectionScenarios.sectionOneLongestPath,
          expected: sectionScenarios.sectionOneLongestPathOverview,
        });
      });
      test("breadcrumbs which visit a section with one node", () => {
        sectionOverviewTest({
          breadcrumbs: sectionScenarios.oneNode,
          expected: sectionScenarios.oneNodeOverview,
        });
      });
      test("breadcrumbs which visit a section with an auto-answered node", () => {
        sectionOverviewTest({
          breadcrumbs: sectionScenarios.autoNode,
          expected: sectionScenarios.autoNodeOverview,
        });
      });
      test("breadcrumbs which visit a section with zero nodes", () => {
        sectionOverviewTest({
          breadcrumbs: sectionScenarios.zeroNodes,
          expected: sectionScenarios.zeroNodesOverview,
        });
      });
    });
    describe('scenarios with a "ReadyToContinue" section status', () => {
      test("breadcrumbs with upcoming visited nodes", () => {
        sectionOverviewTest({
          breadcrumbs: sectionScenarios.partWayThrough,
          cachedBreadcrumbs: sectionScenarios.visitedUpcomingNodes,
          expected: sectionScenarios.visitedUpcomingNodesOverview,
        });
      });
    });
    describe('scenarios with a "CannotContinueYet" section status', () => {
      test("breadcrumbs with queued visted nodes", () => {
        sectionOverviewTest({
          breadcrumbs: sectionScenarios.partWayThrough,
          cachedBreadcrumbs: sectionScenarios.visitedQueuedNodes,
          expected: sectionScenarios.visitedQueuedNodesOverview,
        });
      });
    });
    describe('scenarios with an "Updated" section status', () => {
      test("breadcrumbs with removed nodes", () => {
        sectionOverviewTest({
          breadcrumbs: sectionScenarios.mostOfTheWayThrough,
          updatedNodeIds: sectionScenarios.updatedNodeIds,
          expected: sectionScenarios.mostOfTheWayThroughWithUpdates,
        });
      });
    });
  });
});
