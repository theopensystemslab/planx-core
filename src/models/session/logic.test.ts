import {
  ComponentType,
  type OrderedBreadcrumbs,
  type OrderedFlow,
} from "../../types";
import { getPathForNode, sortBreadcrumbs, sortFlow } from "./logic";
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

describe.only("getPathForNode", () => {
  const flow = sortFlow(large.flow);
  it("returns a path for a complex flow", () => {
    const path = getPathForNode({ nodeId: "kTEuqpqCh2", flow });

    expect(path).toHaveLength(58);
    expect(path[0].id).toBe("_root");
    expect(path[57].id).toBe("kTEuqpqCh2");
  });

  it("returns a filtered path for a complex flow", () => {
    const filter = [ComponentType.InternalPortal, ComponentType.ExternalPortal];
    const path = getPathForNode({ nodeId: "kTEuqpqCh2", flow, filter });

    // Test length and IDs
    expect(path).toHaveLength(13);
    expect(path[0].id).toBe("_root");
    expect(path[12].id).toBe("kTEuqpqCh2");

    // Test types
    expect(path[0].type).toEqual("_root");

    // All "middle steps" should match filter
    for (let i = 1; i < path.length - 1; i++) {
      expect(filter).toContain(path[i].type);
    }

    // Final step matches type of provided nodeId
    expect(path.at(-1)?.type).toEqual(ComponentType.Answer);
  });

  test("it returns a path for a complex flow in a reasonable amount of time", () => {
    expectReasonableExecutionTime(
      () => getPathForNode({ nodeId: "kTEuqpqCh2", flow }),
      2000,
    );
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
