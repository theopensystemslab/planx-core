import {
  CoreDomainClient,
  sortFlow,
  Flow,
  normalizeFlow,
  orderBreadcrumbs,
} from "./index";

describe("CoreDomainClient", () => {
  test("instantiating a client without any arguments", () => {
    const core = new CoreDomainClient();
    expect(core).toBeInstanceOf(CoreDomainClient);
  });

  test("instantiating a client with a URL", () => {
    const core = new CoreDomainClient({ targetURL: "https://example.com" });
    expect(core).toBeInstanceOf(CoreDomainClient);
  });

  test("instantiating a client with a secret", () => {
    const core = new CoreDomainClient({ hasuraSecret: "shhh..." });
    expect(core).toBeInstanceOf(CoreDomainClient);
  });

  test("instantiating a client with a URL and a secret", () => {
    const core = new CoreDomainClient({
      hasuraSecret: "shhh...",
      targetURL: "https://example.com",
    });
    expect(core).toBeInstanceOf(CoreDomainClient);
  });
});

describe("Logic", () => {
  test("sortFlow is available", () => {
    expect(typeof sortFlow).toBe("function");
  });

  test("normalizeFlow is available", () => {
    expect(typeof normalizeFlow).toBe("function");
  });

  test("orderBreadcrumbs is available", () => {
    expect(typeof orderBreadcrumbs).toBe("function");
  });
});

describe("Flow", () => {
  test("the Flow class is available", () => {
    expect(typeof Flow).toBe("function");
  });
});
