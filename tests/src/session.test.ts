import { flattenBreadcrumbs } from "@opensystemslab/planx-core";
import type {
  EnrichedCrumb,
  OrderedBreadcrumbs,
} from "@opensystemslab/planx-core/types";
import { ComponentType } from "@opensystemslab/planx-core/types";

import { $admin } from "./client";
import type { SessionScenarios } from "./context";
import {
  createSession,
  getFlow,
  getLowcalSession,
  getSession,
  setUpContext,
  tearDownTestContext,
} from "./context";

const sessions: SessionScenarios = {};

beforeAll(async () => {
  try {
    await setUpContext();
    // corresponding flow in ./mocks/flows.ts
    const defaultBreadcrumbs: OrderedBreadcrumbs = [
      {
        id: "abcdef",
        autoAnswered: false,
        type: ComponentType.Question,
        answers: ["ghijkl"],
        questionData: {
          fn: "AFn",
        },
        answerData: {
          ghijkl: {
            val: "AVal",
          },
        },
      },
    ];
    sessions["simple session"] = await createSession({
      breadcrumbs: defaultBreadcrumbs,
    });
    sessions["simple lowcal_sessions only session"] = await createSession({
      breadcrumbs: defaultBreadcrumbs,
      skipSessionsTable: true,
    });
    sessions["simple sessions only session"] = await createSession({
      breadcrumbs: defaultBreadcrumbs,
      skipLowcalSessionsTable: true,
    });
    sessions["modifiable session"] = await createSession({
      breadcrumbs: defaultBreadcrumbs,
    });
    sessions["another modifiable session"] = await createSession({
      breadcrumbs: defaultBreadcrumbs,
    });
    sessions["locked session"] = await createSession({ locked: true });
    sessions["unlocked session"] = await createSession({ locked: false });
    sessions["session to be deleted"] = await createSession();
  } catch {
    await tearDownTestContext(sessions);
  }
});

afterAll(async () => {
  await tearDownTestContext(sessions);
});

describe("SessionClient", () => {
  describe("create()", () => {
    it("returns the id of a new session", async () => {
      const breadcrumbs = [
        {
          id: "new",
          autoAnswered: false,
          type: ComponentType.Notice,
          questionData: {
            title: "q",
          },
          answerData: {},
        },
      ];
      const flowId = await getFlow();

      const sessionId = await $admin.session.create({
        flowId,
        breadcrumbs,
      });
      // record session for tear-down
      sessions["create()"] = { id: sessionId, breadcrumbs };

      await expect(typeof sessionId).toBe("string");
      await expect(sessionId.length).toEqual(36);

      // ensure data at returned sessionId is retrievable
      const fetchedSession = await $admin.session.find(sessionId);
      await expect(fetchedSession).toEqual({
        id: expect.any(String),
        flowId,
        breadcrumbs,
        passport: { data: {} },
        paymentId: null,
        lockedAt: null,
        submittedAt: null,
      });
    });
  });

  describe("find()", () => {
    const expectedPassport = { data: { AFn: [{ val: "AVal" }] } };

    it("returns a session", async () => {
      const flowId = await getFlow();
      const { id, breadcrumbs } = sessions["simple session"];
      const fetchedSession = await $admin.session.find(id);
      await expect(fetchedSession).toHaveProperty("id", id);
      await expect(fetchedSession).toHaveProperty("flowId", flowId);
      await expect(fetchedSession).toHaveProperty("breadcrumbs", breadcrumbs);
      await expect(fetchedSession).toHaveProperty("passport", expectedPassport);
      await expect(fetchedSession).toHaveProperty("paymentId", null);
      await expect(fetchedSession).toHaveProperty("lockedAt", null);
      await expect(fetchedSession).toHaveProperty("submittedAt", null);
    });

    it("returns a session when there's only a record in the sessions table", async () => {
      const flowId = await getFlow();
      const { id, breadcrumbs } = sessions["simple sessions only session"];
      const fetchedSession = await $admin.session.find(id);
      await expect(fetchedSession).toHaveProperty("id", id);
      await expect(fetchedSession).toHaveProperty("flowId", flowId);
      await expect(fetchedSession).toHaveProperty("breadcrumbs", breadcrumbs);
      await expect(fetchedSession).toHaveProperty("passport", expectedPassport);
      await expect(fetchedSession).toHaveProperty("paymentId", null);
      await expect(fetchedSession).toHaveProperty("lockedAt", null);
      await expect(fetchedSession).toHaveProperty("submittedAt", null);
    });

    it("returns a session when there's only a record in the lowcal_sessions table", async () => {
      const flowId = await getFlow();
      const { id, breadcrumbs } =
        sessions["simple lowcal_sessions only session"];
      const fetchedSession = await $admin.session.find(id);
      await expect(fetchedSession).toHaveProperty("id", id);
      await expect(fetchedSession).toHaveProperty("flowId", flowId);
      await expect(fetchedSession).toHaveProperty("breadcrumbs", breadcrumbs);
      await expect(fetchedSession).toHaveProperty("passport", expectedPassport);
      await expect(fetchedSession).toHaveProperty("paymentId", null);
      await expect(fetchedSession).toHaveProperty("lockedAt", null);
      await expect(fetchedSession).toHaveProperty("submittedAt", null);
    });
  });

  describe("setBreadcrumbs()", () => {
    it("updates the breadcrumb of a session as a whole", async () => {
      const newBreadcrumbs: OrderedBreadcrumbs = [
        {
          id: "123",
          autoAnswered: false,
          type: ComponentType.Question,
          answers: ["456"],
          questionData: {
            fn: "answer",
          },
          answerData: {
            ghijkl: {
              val: "yes",
            },
          },
        },
      ];
      const { id } = sessions["modifiable session"];

      await $admin.session.setBreadcrumbs({
        sessionId: id,
        breadcrumbs: newBreadcrumbs,
      });

      const fetchedSession = await $admin.session.find(id);
      await expect(fetchedSession?.breadcrumbs).toEqual(newBreadcrumbs);

      // the session table is updated with ordered breadcrumbs
      const sessionObject = await getSession(id);
      await expect(JSON.parse(sessionObject?.breadcrumbs)).toEqual(
        newBreadcrumbs,
      );

      // the lowcal session is updated with flattened breadcrumbs
      const lowcalSessionObject = await getLowcalSession(id);
      await expect(JSON.parse(lowcalSessionObject?.data).breadcrumbs).toEqual(
        flattenBreadcrumbs(newBreadcrumbs),
      );
    });
  });

  describe("insertCrumb()", () => {
    it("updates the breadcrumb of a session with a single crumb", async () => {
      const { id, breadcrumbs } = sessions["another modifiable session"];
      const newCrumb: EnrichedCrumb = {
        id: "new-crumb",
        autoAnswered: false,
        type: ComponentType.Question,
        answers: ["new-crumb-answer"],
        questionData: {
          fn: "question",
        },
        answerData: {
          "new-crumb-answer": {
            val: "answer",
          },
        },
      };
      const expectedBreadcrumbs: OrderedBreadcrumbs = [
        ...breadcrumbs,
        newCrumb,
      ];

      const updatedBreadcrumbs = await $admin.session.insertCrumb({
        sessionId: id,
        crumb: newCrumb,
      });
      // the returned breadcrumbs are updated
      await expect(updatedBreadcrumbs).toEqual(expectedBreadcrumbs);

      // the fetched breadcrumbs are updated
      const fetchedSession = await $admin.session.find(id);
      await expect(fetchedSession?.breadcrumbs).toEqual(expectedBreadcrumbs);

      // the session table is updated with ordered breadcrumbs
      const sessionObject = await getSession(id);
      await expect(JSON.parse(sessionObject?.breadcrumbs)).toEqual(
        expectedBreadcrumbs,
      );

      // the lowcal session is updated with flattened breadcrumbs
      const lowcalSessionObject = await getLowcalSession(id);
      await expect(JSON.parse(lowcalSessionObject?.data).breadcrumbs).toEqual(
        flattenBreadcrumbs(expectedBreadcrumbs),
      );
    });
  });

  describe("lock()", () => {
    it("locks an unlocked session", async () => {
      const { id } = sessions["unlocked session"];

      // show the session starts locked
      const fetchedSession = await $admin.session.find(id);
      await expect(fetchedSession).not.toBe(null);
      await expect(fetchedSession!.lockedAt).toBe(null);

      // lock the session
      await $admin.session.lock(id);

      // show the session is now unlocked
      const refetchedSession = await $admin.session.find(id);
      await expect(refetchedSession).not.toBe(null);
      await expect(refetchedSession!.lockedAt).not.toBe(null);

      // the session is locked
      const sessionObject = await getSession(id);
      await expect(sessionObject.locked_at).not.toEqual("NULL");

      // the lowcal_session is locked
      const lowcalSessionObject = await getLowcalSession(id);
      await expect(lowcalSessionObject.locked_at).not.toEqual("NULL");
    });
  });

  describe("unlock()", () => {
    it("unlocks a locked session", async () => {
      const { id } = sessions["locked session"];

      // show the session starts locked
      const fetchedSession = await $admin.session.find(id);
      await expect(fetchedSession).not.toBe(null);
      await expect(fetchedSession!.lockedAt).not.toBe(null);

      // unlock the session
      await $admin.session.unlock(id);

      // show the session is now unlocked
      const refetchedSession = await $admin.session.find(id);
      await expect(refetchedSession).not.toBe(null);
      await expect(refetchedSession!.lockedAt).toBe(null);

      // the session is unlocked
      const sessionObject = await getSession(id);
      await expect(sessionObject.locked_at).toEqual("NULL");

      // the lowcal_session is unlocked
      const lowcalSessionObject = await getLowcalSession(id);
      await expect(lowcalSessionObject.locked_at).toEqual("NULL");
    });
  });

  describe("_destroy()", () => {
    it("removes a session", async () => {
      const { id } = sessions["session to be deleted"];

      // show the session can be found
      const fetchedSession = await $admin.session.find(id);
      await expect(fetchedSession).not.toBe(null);

      // destroy the session
      await $admin.session._destroy(id);

      // show the session can no longer be found
      const refetchedSession = await $admin.session.find(id);
      await expect(refetchedSession).toBe(null);

      // the session is gone
      const sessionObject = await getSession(id);
      await expect(sessionObject).toBe(undefined);

      // the lowcal_session is gone
      const lowcalSessionObject = await getLowcalSession(id);
      await expect(lowcalSessionObject).toBe(undefined);
    });
  });
});
