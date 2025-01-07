import { vi } from "vitest";

import { CoreDomainClient } from "./index.js";

describe("DomainClient", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubEnv("HASURA_GRAPHQL_ADMIN_SECRET", "shhh");
    vi.stubEnv("HASURA_GRAPHQL_URL", "http://a.b.c");
  });

  afterAll(() => {
    vi.unstubAllEnvs();
  });

  describe("CoreDomainClient", () => {
    beforeEach(() => {
      vi.resetModules();
      vi.stubEnv("HASURA_GRAPHQL_ADMIN_SECRET", "shhh");
      vi.stubEnv("HASURA_GRAPHQL_URL", "http://a.b.c");
    });

    afterAll(() => {
      vi.unstubAllEnvs();
    });

    test("instantiating a client without any arguments", () => {
      const core = new CoreDomainClient();
      expect(core).toBeInstanceOf(CoreDomainClient);
    });

    test("instantiating a client with a URL", () => {
      const core = new CoreDomainClient({ targetURL: "https://example.com" });
      expect(core).toBeInstanceOf(CoreDomainClient);
    });

    test("instantiating a client with an admin secret", () => {
      const auth = { adminSecret: "shhh..." };
      const core = new CoreDomainClient({ auth });
      expect(core).toBeInstanceOf(CoreDomainClient);
    });

    test("instantiating a client with a URL and an admin secret", () => {
      const auth = { adminSecret: "shhh..." };
      const core = new CoreDomainClient({
        targetURL: "https://example.com",
        auth,
      });
      expect(core).toBeInstanceOf(CoreDomainClient);
    });

    test("instantiating a client with session details", () => {
      const auth = { session: { email: "blah@email.com", sessionId: "1234" } };
      const core = new CoreDomainClient({ auth });
      expect(core.client.requestConfig.headers).toEqual({
        "x-hasura-lowcal-session-id": "1234",
        "x-hasura-lowcal-email": "blah@email.com",
      });
    });

    test("instantiating a client with a JSON web token", () => {
      const auth = { jwt: "ABC123" };
      const core = new CoreDomainClient({ auth });
      expect(core.client.requestConfig.headers).toEqual({
        authorization: "Bearer ABC123",
      });
    });
  });
});
