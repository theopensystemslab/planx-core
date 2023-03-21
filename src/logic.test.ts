import { sortFlow, normalizeFlow, orderBreadcrumbs } from "./logic";
import * as sectioned from "./mocks/section-flow-breadcrumbs";
import * as simple from "./mocks/simple-flow-breadcrumbs";
import * as complex from "./mocks/complex-flow-breadcrumbs";
import type { OrderedFlow, NormalizedFlow, OrderedBreadcrumbs } from "./types";

describe("sortFlow", () => {
  test("it sorts a simple graph of nodes into an ordered array", () => {
    const sortedFlowNodes: OrderedFlow = sortFlow(simple.flow);
    expect(sortedFlowNodes.length).toBe(6);
    expect(sortedFlowNodes).toEqual(simple.orderedFlow);
  });

  test("it sorts a graph with sections into an ordered array", () => {
    const sortedFlowNodes: OrderedFlow = sortFlow(sectioned.flow);
    expect(sortedFlowNodes.length).toBe(9);
    expect(sortedFlowNodes).toEqual(sectioned.orderedFlow);
  });

  test("it sorts a complex graph of nodes into an ordered array", () => {
    const sortedFlowNodes: OrderedFlow = sortFlow(complex.flow);
    expect(sortedFlowNodes.length).toBe(27);
    expect(sortedFlowNodes).toEqual(complex.orderedFlow);
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

describe("normalizeFlow", () => {
  test("it sorts a simple graph of nodes into an normalized array", () => {
    const normalizedFlow: NormalizedFlow = normalizeFlow(simple.flow);
    expect(normalizedFlow.length).toBe(6);
    expect(normalizedFlow).toEqual(simple.normalizedFlow);
  });

  test("it sorts a graph with sections into an normalized array", () => {
    const normalizedFlow: NormalizedFlow = normalizeFlow(sectioned.flow);
    expect(normalizedFlow.length).toBe(9);
    expect(normalizedFlow).toEqual(sectioned.normalizedFlow);
  });

  test("it sorts a complex graph of nodes into an normalized array", () => {
    const normalizedFlow: NormalizedFlow = normalizeFlow(complex.flow);
    expect(normalizedFlow.length).toBe(27);
    expect(normalizedFlow).toEqual(complex.normalizedFlow);
  });
});

describe("orderBreadcrumbs", () => {
  test("it sorts breadcrumbs in simple flows", () => {
    const normalizedFlow: NormalizedFlow = normalizeFlow(simple.flow);
    const orderedBreadcrumbs: OrderedBreadcrumbs = orderBreadcrumbs(
      normalizedFlow,
      simple.breadcrumbs
    );
    expect(orderedBreadcrumbs.length).toBe(3);
    expect(orderedBreadcrumbs).toEqual(simple.orderedBreadcrumbs);
  });

  test("it sorts breadcrumbs in flows with sections", () => {
    const normalizedFlow: NormalizedFlow = normalizeFlow(sectioned.flow);
    const orderedBreadcrumbs: OrderedBreadcrumbs = orderBreadcrumbs(
      normalizedFlow,
      sectioned.breadcrumbs
    );
    expect(orderedBreadcrumbs.length).toBe(6);
    expect(orderedBreadcrumbs).toEqual(sectioned.orderedBreadcrumbs);
  });

  test("it sorts breadcrumbs in complex flows", () => {
    const normalizedFlow: NormalizedFlow = normalizeFlow(complex.flow);
    const orderedBreadcrumbs: OrderedBreadcrumbs = orderBreadcrumbs(
      normalizedFlow,
      complex.breadcrumbs
    );
    expect(orderedBreadcrumbs.length).toBe(7);
    expect(orderedBreadcrumbs).toEqual(complex.orderedBreadcrumbs);
  });
});
