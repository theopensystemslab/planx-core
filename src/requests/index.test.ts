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

  test("a public client can authorize a session", () => {
    const core = new CoreDomainClient();
    core.authorizeSession({ email: "blah@email.com", sessionId: "1234" });
    expect(core.client.requestConfig.headers).toEqual({
      "x-hasura-lowcal-session-id": "1234",
      "x-hasura-lowcal-email": "blah@email.com",
    });
  });

  test("an admin client cannot authorize a session", () => {
    const core = new CoreDomainClient({
      hasuraSecret: "shhh...",
      targetURL: "https://example.com",
    });
    expect(() =>
      core.authorizeSession({ email: "blah@email.com", sessionId: "1234" })
    ).toThrow();
  });
});
