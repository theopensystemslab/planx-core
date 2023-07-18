import { flattenBreadcrumbs } from "@opensystemslab/planx-core";
import type {
  FlowGraph,
  OrderedBreadcrumbs,
} from "@opensystemslab/planx-core/types";
import { v4 as uuidV4 } from "uuid";

import { $sql } from "./client";
import { simpleFlow } from "./mocks";

export type SessionContext = {
  id: string;
  breadcrumbs: OrderedBreadcrumbs;
};

export type SessionScenarios = {
  [scenario: string]: SessionContext;
};

export async function setUpContext() {
  try {
    await createUser();
    await createTeam();
    await createFlow(simpleFlow);
  } catch (e) {
    console.log("Failed to set up context");
    throw e;
  }
}

async function createTeam() {
  await $sql.run(
    `INSERT INTO teams (
       name,
       slug,
       theme,
       settings,
       submission_email
     )
     VALUES (
       'Integration Test Team',
       'integration-test-team',
       '{"primaryColor": "#444444"}'::jsonb,
       '{"externalPlanningSite": {"url": "https://www.planningportal.co.uk/", "name": "Planning Portal"}}'::jsonb,
       'simulate-delivered@notifications.service.gov.uk'
     );`,
  );
}

async function getTeam(): Promise<number> {
  const result = await $sql.run(
    `SELECT id FROM teams WHERE slug='integration-test-team';`,
  );
  if (result && Array.isArray(result)) return +result[0].id;
  throw new Error("no result");
}

async function destroyTeam() {
  await $sql.run(`DELETE FROM teams WHERE slug='integration-test-team';`);
}

async function createUser() {
  await $sql.run(`
    INSERT INTO users (first_name, last_name, email)
      VALUES ('integration-tester', 'test', 'simulate-delivered@notifications.service.gov.uk');`);
}

async function _getUser(): Promise<number> {
  const result = await $sql.run(
    `SELECT id FROM users WHERE first_name='integration-tester';`,
  );
  if (result && Array.isArray(result)) return +result[0].id;
  throw new Error("no result");
}

async function destroyUser() {
  await $sql.run(`DELETE FROM users WHERE first_name='integration-tester';`);
}

async function createFlow(
  flowgraph: FlowGraph | undefined = { _root: { edges: [] } },
) {
  const teamId = await getTeam();
  await $sql.run(`
    INSERT INTO flows
    (team_id, slug, "data", "version")
    VALUES('${teamId}', 'test-flow', '${JSON.stringify(flowgraph)}'::jsonb, 1);
  `);
}

export async function getFlow(): Promise<string> {
  const result = await $sql.run(`SELECT id FROM flows WHERE slug='test-flow';`);
  if (result && Array.isArray(result)) {
    return result[0].id;
  }
  throw new Error("no result");
}

async function destroyFlow() {
  await $sql.run(`DELETE FROM flows WHERE slug='test-flow';`);
}

export async function createSession({
  breadcrumbs = [],
  locked,
  skipLowcalSessionsTable = false,
  skipSessionsTable = false,
}: {
  breadcrumbs?: OrderedBreadcrumbs;
  locked?: boolean;
  skipLowcalSessionsTable?: boolean;
  skipSessionsTable?: boolean;
} = {}): Promise<SessionContext> {
  const id = uuidV4();
  const flowId = await getFlow();
  const breadcrumbsObject = flattenBreadcrumbs(breadcrumbs);
  try {
    if (!skipLowcalSessionsTable) {
      await $sql.run(
        `INSERT INTO lowcal_sessions (id, "data", email, flow_id, locked_at)
       VALUES(
         '${id}'::uuid,
         '{"breadcrumbs": ${JSON.stringify(breadcrumbsObject)}}'::jsonb,
         'simulate-delivered@notifications.service.gov.uk',
         '${flowId}'::uuid,
          ${locked ? "now()" : "NULL"}
       );`,
      );
    }
    if (!skipSessionsTable) {
      await $sql.run(
        `INSERT INTO sessions (id, breadcrumbs, email, flow_id, locked_at)
       VALUES(
         '${id}'::uuid,
         '${JSON.stringify(breadcrumbs)}'::jsonb,
         'simulate-delivered@notifications.service.gov.uk',
         '${flowId}'::uuid,
          ${locked ? "now()" : "NULL"}
       );`,
      );
    }
  } catch (e) {
    console.log("failed to create session");
    throw e;
  }
  return { id, breadcrumbs };
}

export async function getLowcalSession(
  sessionId: string,
): Promise<Record<string, string>> {
  const result = await $sql.run(
    `SELECT * FROM lowcal_sessions WHERE id = '${sessionId}'::uuid;`,
  );
  if (result && Array.isArray(result)) {
    return result[0];
  }
  throw new Error("no result");
}

export async function getSession(
  sessionId: string,
): Promise<Record<string, string>> {
  const result = await $sql.run(
    `SELECT * FROM sessions WHERE id = '${sessionId}'::uuid;`,
  );
  if (result && Array.isArray(result)) {
    return result[0];
  }
  throw new Error("no result");
}

async function destroySession(sessionId: string) {
  await $sql.run(`DELETE FROM lowcal_sessions WHERE id='${sessionId}'::uuid;`);
  await $sql.run(`DELETE FROM sessions WHERE id='${sessionId}'::uuid;`);
}

export async function tearDownTestContext(sessions: SessionScenarios) {
  try {
    for (const sessionContext of Object.values(sessions)) {
      await destroySession(sessionContext.id);
    }
    await destroyFlow();
    await destroyUser();
    await destroyTeam();
  } catch (e) {
    console.log("Failed to tear down context");
    throw e;
  }
}
