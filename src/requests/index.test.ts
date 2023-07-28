import { DomainClient } from "./index";

describe("DomainClient", () => {
  const OriginalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = {
      ...OriginalEnv,
      HASURA_GRAPHQL_ADMIN_SECRET: "shhh",
      HASURA_GRAPHQL_URL: "http://a.b.c",
    };
  });

  afterAll(() => {
    process.env = OriginalEnv;
  });

  test("instantiating a client without any arguments", () => {
    const core = new DomainClient();
    expect(core).toBeInstanceOf(DomainClient);
  });

  test("instantiating a client with a URL", () => {
    const core = new DomainClient({ targetURL: "https://example.com" });
    expect(core).toBeInstanceOf(DomainClient);
  });

  test("instantiating a client with a secret", () => {
    const core = new DomainClient({ hasuraSecret: "shhh..." });
    expect(core).toBeInstanceOf(DomainClient);
  });

  test("instantiating a client with a URL and a secret", () => {
    const core = new DomainClient({
      hasuraSecret: "shhh...",
      targetURL: "https://example.com",
    });
    expect(core).toBeInstanceOf(DomainClient);
  });

  test("a public client can authorize a session", () => {
    const core = new DomainClient();
    core.authorizeSession({ email: "blah@email.com", sessionId: "1234" });
    expect(core.client.requestConfig.headers).toEqual({
      "x-hasura-lowcal-session-id": "1234",
      "x-hasura-lowcal-email": "blah@email.com",
    });
  });

  test("an admin client cannot authorize a session", () => {
    const core = new DomainClient({
      hasuraSecret: "shhh...",
      targetURL: "https://example.com",
    });
    expect(() =>
      core.authorizeSession({ email: "blah@email.com", sessionId: "1234" }),
    ).toThrow();
  });
});
