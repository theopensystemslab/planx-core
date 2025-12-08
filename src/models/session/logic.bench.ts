import { bench, describe } from "vitest";

import { getPathForNode, sortBreadcrumbs, sortFlow } from "./logic.js";
import {
  getLargeFlow,
  largeFlowBreadcrumbs,
} from "./mocks/large-real-life-flow.js";

describe("sortFlow", () => {
  bench("large flow", () => {
    sortFlow(getLargeFlow());
  });
});

describe("sortBreadcrumbs", () => {
  bench("large flow", () => {
    sortBreadcrumbs(getLargeFlow(), largeFlowBreadcrumbs);
  });
});

const flow = sortFlow(getLargeFlow());

describe("getPathForNode", () => {
  bench("large flow", () => {
    getPathForNode({ nodeId: "kTEuqpqCh2", flow });
  });
});
