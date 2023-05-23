import {
  sortFlow,
  expandFlow,
  sortBreadcrumbs,
  findNextNodeOfType,
} from "./logic";
import * as sectioned from "./mocks/section-flow-breadcrumbs";
import * as simple from "./mocks/simple-flow-breadcrumbs";
import * as complex from "./mocks/complex-flow-breadcrumbs";
import * as large from "./mocks/large-real-life-flow";
import * as branching from "./mocks/branching-flow";
import * as sectionScenarios from "./mocks/section-scenarios";
import { ComponentType } from "../../types";
import type {
  OrderedFlow,
  StructuredFlow,
  OrderedBreadcrumbs,
} from "../../types";

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

describe("expandFlow", () => {
  test("it expands a simple graph of nodes into an expanded structure", () => {
    const structuredSimpleFlow: StructuredFlow = expandFlow(simple.flow);
    expect(structuredSimpleFlow).toEqual(simple.structuredFlow);
  });

  test("it expands a graph with sections into an expanded structure", () => {
    const structuredSectionedFlow: StructuredFlow = expandFlow(sectioned.flow);
    expect(structuredSectionedFlow).toEqual(sectioned.structuredFlow);

    const structuredSectionScenariosFlow: StructuredFlow = expandFlow(
      sectionScenarios.flow
    );
    expect(structuredSectionScenariosFlow).toEqual(
      sectionScenarios.structuredFlow
    );
  });

  test("it expands a complex graph of nodes into an expanded structure", () => {
    const structuredComplexFlow: StructuredFlow = expandFlow(complex.flow);
    expect(structuredComplexFlow).toEqual(complex.structuredFlow);
  });

  test("it expands a very large (5MB) graph of nodes into a expanded structure within 3.5 seconds", () =>
    expectReasonableExecutionTime(() => expandFlow(large.flow), 3500));

  test("corrupted flows throw an error", () => {
    expect(() => {
      expandFlow({
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
      rootNodeId: "secondQuestion",
      parentId: "firstQuestion",
      type: ComponentType.Question,
      edges: ["Q2Answer1", "Q2Answer2", "Q2Answer3"],
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
      rootNodeId: "Question2",
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
      rootNodeId: "Section3",
      parentId: "EndOfSection2Notice",
      sectionId: "Section3",
      data: { title: "Section Three" },
      type: ComponentType.Section,
    });
  });
});

async function expectReasonableExecutionTime<T>(fn: () => T, timeout: number) {
  const runTimedTest = () => {
    const testStartTime = new Date().getTime();
    expect(fn()).toBeTruthy();
    const timeElapsed = new Date().getTime() - testStartTime;
    return timeElapsed;
  };

  // to avoid flaky tests allow timed runs to run twice
  const timeElapsedFirstRun = runTimedTest();
  if (timeElapsedFirstRun < timeout) return;

  // report both failures if second run fails
  const timeElapsedSecondRun = runTimedTest();
  if (timeElapsedSecondRun > timeout) {
    throw new Error(
      `Test took ${timeElapsedFirstRun}ms and then ${timeElapsedSecondRun}ms but was expected to complete in under ${timeout}ms`
    );
  }
}
