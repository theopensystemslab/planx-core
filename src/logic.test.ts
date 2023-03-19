import { sortFlow, normalizeFlow, enrichBreadcrumbs } from "./logic";
import * as sectioned from "./mocks/section-flow-breadcrumbs";
import * as simple from "./mocks/simple-flow-breadcrumbs";
import * as complex from "./mocks/complex-flow-breadcrumbs";
import type { OrderedFlow, NormalizedFlow, EnrichedBreadcrumbs } from "./types";

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
    expect(sortedFlowNodes.length).toBe(28);
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

describe("enrichBreadcrumbs", () => {
  test("it sorts breadcrumbs in simple flows", () => {
    const enrichedBreadcrumbs: EnrichedBreadcrumbs = enrichBreadcrumbs(
      simple.flow,
      simple.breadcrumbs
    );
    expect(enrichedBreadcrumbs.length).toBe(3);
    expect(enrichedBreadcrumbs).toEqual(simple.enrichedBreadcrumbs);
  });

  test("it sorts breadcrumbs in flows with sections", () => {
    const enrichedBreadcrumbs: EnrichedBreadcrumbs = enrichBreadcrumbs(
      sectioned.flow,
      sectioned.breadcrumbs
    );
    expect(enrichedBreadcrumbs.length).toBe(6);
    expect(enrichedBreadcrumbs).toEqual(sectioned.enrichedBreadcrumbs);
  });

  test.skip("it sorts breadcrumbs in complex flows", () => {
    const enrichedBreadcrumbs: EnrichedBreadcrumbs = enrichBreadcrumbs(
      complex.flow,
      complex.breadcrumbs
    );
    expect(enrichedBreadcrumbs.length).toBe(6);
    expect(enrichedBreadcrumbs).toEqual(complex.enrichedBreadcrumbs);
  });
});

describe("normalizeFlow", () => {
  test("it sorts a simple graph of nodes into an normalized array", () => {
    const normalizedFlowNodes: NormalizedFlow = normalizeFlow(simple.flow);
    expect(normalizedFlowNodes.length).toBe(6);
    expect(normalizedFlowNodes).toEqual(simple.normalizedFlow);
  });

  test("it sorts a graph with sections into an normalized array", () => {
    const normalizedFlowNodes: NormalizedFlow = normalizeFlow(sectioned.flow);
    expect(normalizedFlowNodes.length).toBe(9);
    expect(normalizedFlowNodes).toEqual(sectioned.normalizedFlow);
  });

  test("it sorts a complex graph of nodes into an normalized array", () => {
    const normalizedFlowNodes: NormalizedFlow = normalizeFlow(complex.flow);
    expect(normalizedFlowNodes.length).toBe(28);
    expect(normalizedFlowNodes).toEqual(complex.normalizedFlow);
  });
});
