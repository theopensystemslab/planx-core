import { extractSessionPreviewData } from "./payment-request";
import type { Session, KeyPath } from "../types";

describe("extractSessionPreviewData", () => {
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
    expect(() => extractSessionPreviewData(emptySession, previewKeys)).toThrow(
      "passport data not found"
    );
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
          },
        },
        breadcrumbs: {},
      },
    };
    const previewKeys: KeyPath[] = [["key1"], ["key2", "notFoundKey"]];
    expect(() =>
      extractSessionPreviewData(invalidSession, previewKeys)
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
          },
        },
        breadcrumbs: {},
      },
    };
    const previewKeys: KeyPath[] = [["a"], ["b"], ["c"]];

    const sessionPreviewData = extractSessionPreviewData(session, previewKeys);
    expect(sessionPreviewData).toEqual({
      a: 1,
      b: 2,
      c: 3,
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
          },
        },
        breadcrumbs: {},
      },
    };
    const previewKeys: KeyPath[] = [["a.b"], ["c.d"], ["c.d.e"]];
    const sessionPreviewData = extractSessionPreviewData(session, previewKeys);
    expect(sessionPreviewData).toEqual({ "a.b": 1, "c.d": 2, "c.d.e": 3 });
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
    const sessionPreviewData = extractSessionPreviewData(session, previewKeys);
    expect(sessionPreviewData).toEqual({
      a: {
        c: 0,
        "c.d": true,
        "c.d.e": 5,
      },
      b: { "c.d.e.f": false },
    });
  });
});