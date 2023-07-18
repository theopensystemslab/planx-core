import assert from "node:assert";

import { DomainClient, TestClient } from "@opensystemslab/planx-core";

// check env variables are defined
assert(process.env.HASURA_GRAPHQL_ADMIN_SECRET);
assert(process.env.HASURA_GRAPHQL_URL);

export const $admin = new DomainClient({
  targetURL: process.env.HASURA_GRAPHQL_URL,
  hasuraSecret: process.env.HASURA_GRAPHQL_ADMIN_SECRET!,
});

export const $public = new DomainClient({
  targetURL: process.env.HASURA_GRAPHQL_URL,
});

export const $sql = new TestClient({
  hasuraSecret: process.env.HASURA_GRAPHQL_ADMIN_SECRET!,
});
