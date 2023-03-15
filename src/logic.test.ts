import { sortBreadcrumbs, sortFlow } from "./logic";
import * as sectioned from "./mocks/section-flow-breadcrumbs";
import * as simple from "./mocks/simple-flow-breadcrumbs";
import * as complex from "./mocks/complex-flow-breadcrumbs";
import type { OrderedBreadcrumbs, OrderedFlow } from "./types";

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
});

describe("sortBreadcrumbs", () => {
  test("it sorts breadcrumbs in simple flows", () => {
    const orderedBreadcrumbs: OrderedBreadcrumbs = sortBreadcrumbs(
      simple.flow,
      simple.breadcrumbs
    );

    expect(orderedBreadcrumbs.length).toBe(3);
    expect(orderedBreadcrumbs).toEqual(simple.orderedBreadcrumbs);
  });

  test("it sorts breadcrumbs in flows with sections", () => {
    const orderedBreadcrumbs: OrderedBreadcrumbs = sortBreadcrumbs(
      sectioned.flow,
      sectioned.breadcrumbs
    );

    expect(orderedBreadcrumbs.length).toBe(6);
    expect(orderedBreadcrumbs).toEqual(sectioned.orderedBreadcrumbs);
  });

  test.todo("it sorts breadcrumbs in complex flows");
});
