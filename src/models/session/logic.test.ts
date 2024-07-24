import type { OrderedBreadcrumbs, OrderedFlow } from "../../types";
import { ComponentType } from "../../types";
import { findNextNodeOfType, sortBreadcrumbs, sortFlow } from "./logic";
import * as branching from "./mocks/branching-flow";
import * as complex from "./mocks/complex-flow-breadcrumbs";
import * as large from "./mocks/large-real-life-flow";
import * as sectioned from "./mocks/section-flow-breadcrumbs";
import * as simple from "./mocks/simple-flow-breadcrumbs";

describe("sortFlow", () => {
  test("it sorts a simple graph of nodes into an ordered array", () => {
    const sortedFlowNodes: OrderedFlow = sortFlow(simple.flow);
    expect(sortedFlowNodes).toEqual(simple.orderedFlow);
  });

  test("it sorts a graph with sections into an ordered array", () => {
    const sortedFlowNodes: OrderedFlow = sortFlow(sectioned.flow);
    expect(sortedFlowNodes).toEqual(sectioned.orderedFlow);
  });

  test("it sorts a complex graph of nodes into an ordered array", () => {
    const sortedFlowNodes: OrderedFlow = sortFlow(complex.flow);
    expect(sortedFlowNodes).toEqual(complex.orderedFlow);
  });

  test("it sorts a very large (5MB) graph of nodes into an ordered array within 5 seconds", () => {
    const output = expectReasonableExecutionTime(
      () => sortFlow(large.flow),
      5000,
    );
    const expectedNumberOfNodes = Object.entries(large.flow).length - 1; // excluding _root
    expect(output.length).toEqual(expectedNumberOfNodes);
  });

  test("corrupted flows throw an error", () => {
    expect(() => {
      sortFlow({
        _root: {
          edges: ["doesnt-exist"],
        },
      });
    }).toThrow();
  });
});

describe("sortBreadcrumbs", () => {
  test("it sorts breadcrumbs for a simple flow", () => {
    const orderedBreadcrumbs: OrderedBreadcrumbs = sortBreadcrumbs(
      simple.flow,
      simple.breadcrumbs,
    );
    expect(orderedBreadcrumbs).toEqual(simple.orderedBreadcrumbs);
  });

  test("it sorts breadcrumbs for a flow with sections", () => {
    const orderedBreadcrumbs: OrderedBreadcrumbs = sortBreadcrumbs(
      sectioned.flow,
      sectioned.breadcrumbs,
    );
    expect(orderedBreadcrumbs).toEqual(sectioned.orderedBreadcrumbs);
  });

  test("it sorts breadcrumbs for a complex flow", () => {
    const orderedBreadcrumbs: OrderedBreadcrumbs = sortBreadcrumbs(
      complex.flow,
      complex.breadcrumbs,
    );
    expect(orderedBreadcrumbs).toEqual(complex.orderedBreadcrumbs);
  });

  test("it sorts breadcrumbs for a very large (5MB) flow within 2 seconds", () => {
    const output = expectReasonableExecutionTime(
      () => sortBreadcrumbs(large.flow, large.breadcrumbs),
      2000,
    );
    expect(output.length).toEqual(Object.entries(large.breadcrumbs).length);
  });
});

describe("findNextNodeOfType", () => {
  test("it finds the next node in a simple flow", () => {
    const nextNode = findNextNodeOfType({
      flow: simple.flow,
      breadcrumbs: {
        firstQuestion: {
          auto: false,
          answers: ["firstAnswer"],
        },
      },
      componentType: ComponentType.Question,
    });
    expect(nextNode).toEqual({
      id: "secondQuestion",
      parentId: "_root",
      type: ComponentType.Question,
      edges: ["secondAnswer"],
      data: {
        text: "Second Question",
      },
    });
  });

  test("it finds the next node in a branching flow", () => {
    const multiselectChecklistBreadcrumbs = {
      Section1: { auto: true },
      Question1: { auto: false, answers: ["Question1AnswerA"] },
      Section2: { auto: true },
      Question2: { auto: false, answers: ["Question2AnswerB"] },
      Checklist1: {
        auto: false,
        answers: ["ChecklistOptionB", "ChecklistOptionC"],
      },
    };
    const nextNoticeNode = findNextNodeOfType({
      flow: branching.flow,
      breadcrumbs: multiselectChecklistBreadcrumbs,
      componentType: ComponentType.Notice,
    });
    expect(nextNoticeNode).toEqual({
      id: "NoticeB",
      parentId: "ChecklistOptionB", // this isn't really the parent but the previous node
      sectionId: "Section2",
      data: { color: "#EFEFEF", title: "Reached B", resetButton: false },
      type: ComponentType.Notice,
    });
    const nextSectionNode = findNextNodeOfType({
      flow: branching.flow,
      breadcrumbs: multiselectChecklistBreadcrumbs,
      componentType: ComponentType.Section,
    });
    expect(nextSectionNode).toEqual({
      id: "Section3",
      parentId: "_root",
      sectionId: "Section3",
      data: { title: "Section Three" },
      type: ComponentType.Section,
    });
  });
});

function expectReasonableExecutionTime<T>(fn: () => T, timeout: number): T {
  const testStartTime = new Date().getTime();
  const out = fn();
  expect(out).toBeTruthy();
  const timeElapsed = new Date().getTime() - testStartTime;
  if (timeElapsed > timeout) {
    throw new Error(
      `Test took ${timeElapsed}ms but was expected to complete in under ${timeout}ms`,
    );
  }
  return out;
}
