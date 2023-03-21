import { SessionState } from "./session-state";
import * as logic from "./logic";
import * as sectionScenarios from "./mocks/section-scenarios";
import {
  flow as flowWithSections,
  breadcrumbs as flowWithSectionsBreadcrumbs,
  sectionNodes,
} from "./mocks/section-flow-breadcrumbs";
import { flow as flowWithoutSections } from "./mocks/simple-flow-breadcrumbs";
import type {
  NodeId,
  Breadcrumbs,
  OrderedBreadcrumbs,
  NormalizedNode,
  SectionOverview,
} from "./types";

describe("SessionState", () => {
  const session = new SessionState(sectionScenarios.flow);

  describe("flow", () => {
    test("the flow passed in at construction is exposed", () => {
      expect(session.flow).toEqual(sectionScenarios.flow);
    });
  });

  describe("normalizedFlow", () => {
    test("the flow passed in at construction is normalized and exposed", () => {
      expect(session.normalizedFlow).toEqual(
        logic.normalizeFlow(sectionScenarios.flow)
      );
    });
  });

  describe("sections", () => {
    test("sections are returned for a flow with sections", () => {
      const session = new SessionState(flowWithSections);
      expect(session.sections).toEqual(sectionNodes);
    });
    test("an empty array is returned for a flow without sections", () => {
      const session = new SessionState(flowWithoutSections);
      expect(session.sections).toEqual([]);
    });
  });

  describe("sortBreadcrumbs", () => {
    test("breadcrumbs are sorted against nodes the SessionState's flow", () => {
      const sortSpy = jest.spyOn(logic, "sortBreadcrumbs");
      session.sortBreadcrumbs(sectionScenarios.sectionOneShortestPath);
      expect(sortSpy).toHaveBeenCalledWith(
        session.normalizedFlow,
        sectionScenarios.sectionOneShortestPath
      );
      jest.restoreAllMocks();
    });
    test("breadcrumbs which reference nodes not in the SessionState's flow are removed", () => {
      const mixedBreadcrumbs = Object.assign(
        sectionScenarios.sectionOneShortestPath,
        flowWithSectionsBreadcrumbs
      );
      const expected = session.sortBreadcrumbs(
        sectionScenarios.sectionOneShortestPath
      );
      expect(session.sortBreadcrumbs(mixedBreadcrumbs)).toEqual(expected);
    });
  });

  describe("currentNode", () => {
    describe("an empty set of breadcrumbs", () => {
      test("null is returned when breadcrumbs are empty", () => {
        const breadcrumbs: OrderedBreadcrumbs = [];
        const actual = session.currentNode(breadcrumbs);
        expect(actual).toEqual(null);
      });
    });
    describe("branching paths which return the same next node", () => {
      test("the shortest path of a branching section", () => {
        const breadcrumbs = session.sortBreadcrumbs(
          sectionScenarios.sectionOneShortestPath
        );
        const actual = session.currentNode(breadcrumbs);
        const finalNodeInShortestPath: NormalizedNode =
          sectionScenarios.normalizedFlow[2];
        expect(actual).toEqual(finalNodeInShortestPath);
      });
      test("the longest path of a branching section", () => {
        const breadcrumbs = session.sortBreadcrumbs(
          sectionScenarios.sectionOneLongestPath
        );
        const actual = session.currentNode(breadcrumbs);
        const finalNodeInLongestPath: NormalizedNode =
          sectionScenarios.normalizedFlow[8];
        expect(actual).toEqual(finalNodeInLongestPath);
      });
    });
    describe("the end of a flow", () => {
      test("null is returned when breadcrumbs are full", () => {
        const breadcrumbs = session.sortBreadcrumbs(
          sectionScenarios.allOfTheWayThrough
        );
        const actual = session.nextNode(breadcrumbs);
        expect(actual).toEqual(null);
      });
    });
  });

  describe("nextNode", () => {
    describe("an empty set of breadcrumbs", () => {
      test("the first node is returned when breadcrumbs are empty", () => {
        const firstNode: NormalizedNode = sectionScenarios.normalizedFlow[0];
        const breadcrumbs: OrderedBreadcrumbs = [];
        const actual = session.nextNode(breadcrumbs);
        expect(actual).toEqual(firstNode);
      });
    });
    describe("branching paths which return the same next node", () => {
      const sectionTwoNode: NormalizedNode = sectionScenarios.normalizedFlow[9];

      test("the shortest path of a branching section", () => {
        const breadcrumbs = session.sortBreadcrumbs(
          sectionScenarios.sectionOneShortestPath
        );
        const actual = session.nextNode(breadcrumbs);
        expect(actual).toEqual(sectionTwoNode);
      });
      test("the longest path of a branching section", () => {
        const breadcrumbs = session.sortBreadcrumbs(
          sectionScenarios.sectionOneLongestPath
        );
        const actual = session.nextNode(breadcrumbs);
        expect(actual).toEqual(sectionTwoNode);
      });
    });
    describe("the end of a flow", () => {
      test("null is returned when breadcrumbs are full", () => {
        const breadcrumbs = session.sortBreadcrumbs(
          sectionScenarios.allOfTheWayThrough
        );
        const actual = session.nextNode(breadcrumbs);
        expect(actual).toEqual(null);
      });
    });
  });

  describe("remainingNodes", () => {
    describe("scenarios with remaining nodes", () => {
      test("all nodes are returned when breadcrumbs are empty", () => {
        const breadcrumbs: OrderedBreadcrumbs = [];
        const actual = session.remainingNodes(breadcrumbs);
        expect(actual).toEqual(sectionScenarios.normalizedFlow);
      });
      test("some nodes are returned when breadcrumbs are part way through a flow", () => {
        const breadcrumbs = session.sortBreadcrumbs(
          sectionScenarios.partWayThrough
        );
        const actual = session.remainingNodes(breadcrumbs);
        const expectedNextNode = session.nextNode(breadcrumbs);
        expect(actual.length).toEqual(8);
        expect(actual[0]).toEqual(expectedNextNode);
      });
    });
    describe("scenarios with no remaining nodes", () => {
      test("an empty array is returned when breadcrumbs are all of the way through a flow", () => {
        const breadcrumbs = session.sortBreadcrumbs(
          sectionScenarios.allOfTheWayThrough
        );
        const actual = session.remainingNodes(breadcrumbs);
        expect(actual).toEqual([]);
      });
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
      const sortedBreadcrumbs = session.sortBreadcrumbs(breadcrumbs);
      const sortedCachedBreadcrumbs = cachedBreadcrumbs
        ? session.sortBreadcrumbs(cachedBreadcrumbs!)
        : undefined;
      expect(
        session.sectionOverview({
          breadcrumbs: sortedBreadcrumbs,
          cachedBreadcrumbs: sortedCachedBreadcrumbs,
          updatedNodeIds,
        })
      ).toEqual(expected);
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
