import { sortFlow, normalizeFlow, sortBreadcrumbs } from "./logic";
import * as sectioned from "./mocks/section-flow-breadcrumbs";
import * as simple from "./mocks/simple-flow-breadcrumbs";
import * as complex from "./mocks/complex-flow-breadcrumbs";
import * as large from "./mocks/large-real-life-flow";
import type { OrderedFlow, NormalizedFlow, OrderedBreadcrumbs } from "./types";

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

  test("it sorts a very large (5MB) graph of nodes into a normalized array within 2 seconds", () =>
    expectReasonableExecutionTime(() => normalizeFlow(large.flow), 2000));
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

  test("it sorts breadcrumbs for a very large (5MB) flow within 1 seconds", () =>
    expectReasonableExecutionTime(
      () => sortBreadcrumbs(large.flow, large.breadcrumbs),
      1000
    ));
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
