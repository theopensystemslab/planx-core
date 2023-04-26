import {
  sortFlow,
  normalizeFlow,
  sortBreadcrumbs,
  findNextNodeOfType,
} from "./logic";
import * as sectioned from "./mocks/section-flow-breadcrumbs";
import * as simple from "./mocks/simple-flow-breadcrumbs";
import * as complex from "./mocks/complex-flow-breadcrumbs";
import * as large from "./mocks/large-real-life-flow";
import * as branching from "./mocks/branching-flow";
import { ComponentType } from "../../../types";
import type {
  OrderedFlow,
  NormalizedFlow,
  OrderedBreadcrumbs,
} from "../../../types";

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

  test("it sorts a very large (5MB) graph of nodes into an ordered array within 2 seconds", () =>
    expectReasonableExecutionTime(() => sortFlow(large.flow), 2000));

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

describe("normalizeFlow", () => {
  test("it sorts a simple graph of nodes into an normalized array", () => {
    const normalizedFlow: NormalizedFlow = normalizeFlow(simple.flow);
    expect(normalizedFlow).toEqual(simple.normalizedFlow);
  });

  test("it sorts a graph with sections into an normalized array", () => {
    const normalizedFlow: NormalizedFlow = normalizeFlow(sectioned.flow);
    expect(normalizedFlow).toEqual(sectioned.normalizedFlow);
  });

  test("it sorts a complex graph of nodes into an normalized array", () => {
    const normalizedFlow: NormalizedFlow = normalizeFlow(complex.flow);
    expect(normalizedFlow).toEqual(complex.normalizedFlow);
  });

  test("it sorts a very large (5MB) graph of nodes into a normalized array within 3.5 seconds", () =>
    expectReasonableExecutionTime(() => normalizeFlow(large.flow), 3500));
});

describe("sortBreadcrumbs", () => {
  test("it sorts breadcrumbs for a simple flow", () => {
    const orderedBreadcrumbs: OrderedBreadcrumbs = sortBreadcrumbs(
      simple.flow,
      simple.breadcrumbs
    );
    expect(orderedBreadcrumbs).toEqual(simple.orderedBreadcrumbs);
  });

  test("it sorts breadcrumbs for a flow with sections", () => {
    const orderedBreadcrumbs: OrderedBreadcrumbs = sortBreadcrumbs(
      sectioned.flow,
      sectioned.breadcrumbs
    );
    expect(orderedBreadcrumbs).toEqual(sectioned.orderedBreadcrumbs);
  });

  test("it sorts breadcrumbs for a complex flow", () => {
    const orderedBreadcrumbs: OrderedBreadcrumbs = sortBreadcrumbs(
      complex.flow,
      complex.breadcrumbs
    );
    expect(orderedBreadcrumbs).toEqual(complex.orderedBreadcrumbs);
  });

  test("it sorts breadcrumbs for a very large (5MB) flow within 2 seconds", () =>
    expectReasonableExecutionTime(
      () => sortBreadcrumbs(large.flow, large.breadcrumbs),
      2000
    ));
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
      parentId: "firstQuestion",
      type: ComponentType.Question,
      edges: ["secondAnswer"],
      data: {
        text: "Second Question",
      },
    });
  });

  test("it finds the next node in a branching flow", () => {
    const mulitselectChecklistBreadcrumbs = {
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
      breadcrumbs: mulitselectChecklistBreadcrumbs,
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
      breadcrumbs: mulitselectChecklistBreadcrumbs,
      componentType: ComponentType.Section,
    });
    expect(nextSectionNode).toEqual({
      id: "Section3",
      parentId: "EndOfSection2Notice",
      sectionId: "Section3",
      data: { title: "Section Three" },
      type: ComponentType.Section,
    });
  });
});

async function expectReasonableExecutionTime<T>(fn: () => T, timeout: number) {
  const testStartTime = new Date().getTime();
  expect(fn()).toBeTruthy();
  const timeElapsed = new Date().getTime() - testStartTime;
  if (timeElapsed > timeout) {
    throw new Error(
      `Test took ${timeElapsed}ms but was expected to complete in under ${timeout}ms`
    );
  }
}
