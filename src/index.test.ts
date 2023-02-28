import { CoreDomainClient } from "./index";

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
