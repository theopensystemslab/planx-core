import { StaticSessionState } from "./session-state";
import * as sectionScenarios from "./mocks/section-scenarios";
import * as logicScenarios from "./mocks/logic-scenarios";
import {
  flow as flowWithSections,
  breadcrumbs as flowWithSectionsBreadcrumbs,
  sectionNodes,
} from "./mocks/section-flow-breadcrumbs";
import { flow as flowWithoutSections } from "./mocks/simple-flow-breadcrumbs";
import { ComponentType } from "../../types";
import type { Breadcrumbs, StructuredNode } from "../../types";

describe("StaticSessionState", () => {
  describe("sections", () => {
    test("sections are returned for a flow with sections", () => {
      const session = new StaticSessionState(flowWithSections);
      expect(session.sections()).toEqual(sectionNodes);
    });
    test("an empty array is returned for a flow without sections", () => {
      const session = new StaticSessionState(flowWithoutSections);
      expect(session.sections()).toEqual([]);
    });
  });

  describe("find", () => {
    const session = new StaticSessionState(logicScenarios.flow);
    test("the first matching node id is found", () => {
      expect(session.find("NestedChecklistAnswer2")).toEqual({
        id: "NestedChecklistAnswer2",
        type: ComponentType.Answer,
        data: {
          val: "lateMorning",
          text: "Late morning",
        },
      });
    });
    test("no matching node ids returns null", () => {
      expect(session.find("tenthSection")).toEqual(null);
    });
  });

  describe("sortBreadcrumbs", () => {
    test("breadcrumbs which reference nodes not in the StaticSessionState's flow are removed", () => {
      const session = new StaticSessionState(sectionScenarios.flow);
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

  describe("nextNodes", () => {
    const session = new StaticSessionState(sectionScenarios.flow);
    describe("an empty set of breadcrumbs", () => {
      test("the first node is returned when breadcrumbs are empty", () => {
        const firstNode: StructuredNode = sectionScenarios.structuredFlow[0];
        const breadcrumbs: Breadcrumbs = {};
        const actual = session.nextNodes(breadcrumbs);
        expect(actual).toEqual([firstNode]);
      });
    });
    describe("branching paths which return the same next node", () => {
      test("the shortest path of a branching section", () => {
        const sectionTwoNode: StructuredNode =
          sectionScenarios.structuredFlow[9];
        const breadcrumbs = sectionScenarios.sectionOneShortestPath;
        const actual = session.nextNodes(breadcrumbs);
        expect(actual).toEqual([sectionTwoNode]);
      });
      test("the longest path of a branching section", () => {
        const sectionTwoNode: StructuredNode =
          sectionScenarios.structuredFlow[9];
        const breadcrumbs = sectionScenarios.sectionOneLongestPath;
        const actual = session.nextNodes(breadcrumbs);
        expect(actual).toEqual([sectionTwoNode]);
      });
    });
    // TODO - work in progress
    describe.skip("multiple next nodes", () => {
      test("all of the children of the next node are returned", () => {
        const childNodes: StructuredNode[] = [
          sectionScenarios.structuredFlow[1],
          sectionScenarios.structuredFlow[2],
          sectionScenarios.structuredFlow[3],
        ];
        const breadcrumbs = sectionScenarios.upcomingQuestion;
        const actual = session.nextNodes(breadcrumbs);
        expect(actual.length).toEqual(3);
        expect(actual).toEqual(childNodes);
      });
    });
    describe("the end of a flow", () => {
      test("no nodes are returned when breadcrumbs are full", () => {
        const breadcrumbs = sectionScenarios.allOfTheWayThrough;
        const actual = session.nextNodes(breadcrumbs);
        expect(actual).toEqual([]);
      });
    });
  });
});
