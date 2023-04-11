import { validateSessionData } from "./payment-request";
import type { Session, KeyPath } from "./types";

describe("validateSessionData", () => {
  test("passport data must be available", () => {
    const emptySession: Session = {
      id: "abc",
      flowId: "abc",
      data: {
        id: "abc",
        passport: {},
        breadcrumbs: {},
      },
    };
    const previewKeys: KeyPath[] = [];
    const paymentAmountKey = "amount";
    expect(() =>
      validateSessionData({
        session: emptySession,
        sessionPreviewKeys: previewKeys,
        paymentAmountKey,
      })
    ).toThrow("passport data not found");
  });
  test("amount must not be undefined", () => {
    const invalidSession: Session = {
      id: "abc",
      flowId: "abc",
      data: {
        id: "abc",
        passport: {
          data: {},
        },
        breadcrumbs: {},
      },
    };
    const previewKeys: KeyPath[] = [];
    const paymentAmountKey = "amount";
    expect(() =>
      validateSessionData({
        session: invalidSession,
        sessionPreviewKeys: previewKeys,
        paymentAmountKey,
      })
    ).toThrow('invalid paymentAmount: "undefined"');
  });
  test("amount must be greater than zero", () => {
    const invalidSession: Session = {
      id: "abc",
      flowId: "abc",
      data: {
        id: "abc",
        passport: {
          data: {
            amount: -2,
          },
        },
        breadcrumbs: {},
      },
    };
    const previewKeys: KeyPath[] = [];
    const paymentAmountKey = "amount";
    expect(() =>
      validateSessionData({
        session: invalidSession,
        sessionPreviewKeys: previewKeys,
        paymentAmountKey,
      })
    ).toThrow('invalid paymentAmount: "-2"');
    const invalidSession2: Session = {
      id: "abc",
      flowId: "abc",
      data: {
        id: "abc",
        passport: {
          data: {
            amount: 0,
          },
        },
        breadcrumbs: {},
      },
    };
    expect(() =>
      validateSessionData({
        session: invalidSession2,
        sessionPreviewKeys: previewKeys,
        paymentAmountKey,
      })
    ).toThrow('invalid paymentAmount: "0"');
  });
  test("keys must be present in the passport", () => {
    const invalidSession: Session = {
      id: "abc",
      flowId: "abc",
      data: {
        id: "abc",
        passport: {
          data: {
            key1: "a",
            amount: 2,
          },
        },
        breadcrumbs: {},
      },
    };
    const previewKeys: KeyPath[] = [["key1"], ["key2", "notFoundKey"]];
    const paymentAmountKey = "amount";
    expect(() =>
      validateSessionData({
        session: invalidSession,
        sessionPreviewKeys: previewKeys,
        paymentAmountKey,
      })
    ).toThrow('passport key "key2.notFoundKey" not found in passport data');
  });
  test("a simple set of session preview keys are extracted from the session", () => {
    const session: Session = {
      id: "abc",
      flowId: "abc",
      data: {
        id: "abc",
        passport: {
          data: {
            a: 1,
            b: 2,
            c: 3,
            amount: 5,
          },
        },
        breadcrumbs: {},
      },
    };
    const previewKeys: KeyPath[] = [["a"], ["b"], ["c"]];

    const validatedSessionData = validateSessionData({
      session: session,
      sessionPreviewKeys: previewKeys,
      paymentAmountKey: "amount",
    });
    expect(validatedSessionData).toEqual({
      paymentAmount: 5,
      sessionPreviewData: { a: 1, b: 2, c: 3 },
    });
  });
  test("a set of compound keys are extracted from the session", () => {
    const session: Session = {
      id: "abc",
      flowId: "abc",
      data: {
        id: "abc",
        passport: {
          data: {
            "a.b": 1,
            "c.d": 2,
            "c.d.e": 3,
            "payment.amount": 7,
          },
        },
        breadcrumbs: {},
      },
    };
    const previewKeys: KeyPath[] = [["a.b"], ["c.d"], ["c.d.e"]];
    const validatedSessionData = validateSessionData({
      session: session,
      sessionPreviewKeys: previewKeys,
      paymentAmountKey: "payment.amount",
    });
    expect(validatedSessionData).toEqual({
      paymentAmount: 7,
      sessionPreviewData: { "a.b": 1, "c.d": 2, "c.d.e": 3 },
    });
  });
  test("a set of nested and compound keys are extracted from the session", () => {
    const session: Session = {
      id: "abc",
      flowId: "abc",
      data: {
        id: "abc",
        passport: {
          data: {
            a: {
              c: 0,
              "c.d": true,
              "c.d.e": 5,
            },
            b: {
              "c.d.e.f": false,
            },
            "payment.amount": 7,
          },
        },
        breadcrumbs: {},
      },
    };
    const previewKeys: KeyPath[] = [
      ["a", "c"],
      ["a", "c.d"],
      ["a", "c.d.e"],
      ["b", "c.d.e.f"],
    ];
    const validatedSessionData = validateSessionData({
      session: session,
      sessionPreviewKeys: previewKeys,
      paymentAmountKey: "payment.amount",
    });
    expect(validatedSessionData).toEqual({
      paymentAmount: 7,
      sessionPreviewData: {
        a: {
          c: 0,
          "c.d": true,
          "c.d.e": 5,
        },
        b: { "c.d.e.f": false },
      },
    });
  });
});
