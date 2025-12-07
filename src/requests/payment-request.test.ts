import type { KeyPath, Session } from "../types/index.js";
import { extractSessionPreviewData } from "./payment-request.js";

describe("extractSessionPreviewData", () => {
  test("passport data must be available", () => {
    const emptySession: Session = {
      id: "abc",
      createdAt: "01-01-2025",
      updatedAt: "02-01-2025",
      data: {
        id: "flow-abc",
        passport: { data: {} },
        breadcrumbs: {},
      },
      flow: {
        id: "flow-abc",
        slug: "apply-for-something",
        name: "Apply for Something",
        team: {
          slug: "lambeth",
          name: "Lambeth",
          settings: {
            referenceCode: "LBH",
          },
        },
      },
    };
    const previewKeys: KeyPath[] = [];
    expect(() => extractSessionPreviewData(emptySession, previewKeys)).toThrow(
      "passport data not found",
    );
  });

  test("keys must be present in the passport", () => {
    const invalidSession: Session = {
      id: "abc",
      createdAt: "01-01-2025",
      updatedAt: "02-01-2025",
      data: {
        id: "flow-abc",
        passport: {
          data: {
            key1: "a",
          },
        },
        breadcrumbs: {},
      },
      flow: {
        id: "flow-abc",
        slug: "apply-for-something",
        name: "Apply for Something",
        team: {
          slug: "lambeth",
          name: "Lambeth",
          settings: {
            referenceCode: "LBH",
          },
        },
      },
    };
    const previewKeys: KeyPath[] = [["key1"], ["key2", "notFoundKey"]];
    expect(() =>
      extractSessionPreviewData(invalidSession, previewKeys),
    ).toThrow('passport key "key2.notFoundKey" not found in passport data');
  });

  test("a simple set of session preview keys are extracted from the session", () => {
    const session: Session = {
      id: "abc",
      createdAt: "01-01-2025",
      updatedAt: "02-01-2025",
      data: {
        id: "flow-abc",
        passport: {
          data: {
            a: 1,
            b: 2,
            c: 3,
          },
        },
        breadcrumbs: {},
      },
      flow: {
        id: "flow-abc",
        slug: "apply-for-something",
        name: "Apply for Something",
        team: {
          slug: "lambeth",
          name: "Lambeth",
          settings: {
            referenceCode: "LBH",
          },
        },
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
      createdAt: "01-01-2025",
      updatedAt: "02-01-2025",
      data: {
        id: "flow-abc",
        passport: {
          data: {
            "a.b": 1,
            "c.d": 2,
            "c.d.e": 3,
          },
        },
        breadcrumbs: {},
      },
      flow: {
        id: "flow-abc",
        slug: "apply-for-something",
        name: "Apply for Something",
        team: {
          slug: "lambeth",
          name: "Lambeth",
          settings: {
            referenceCode: "LBH",
          },
        },
      },
    };
    const previewKeys: KeyPath[] = [["a.b"], ["c.d"], ["c.d.e"]];
    const sessionPreviewData = extractSessionPreviewData(session, previewKeys);
    expect(sessionPreviewData).toEqual({ "a.b": 1, "c.d": 2, "c.d.e": 3 });
  });

  test("a set of nested and compound keys are extracted from the session", () => {
    const session: Session = {
      id: "abc",
      createdAt: "01-01-2025",
      updatedAt: "02-01-2025",
      data: {
        id: "flow-abc",
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
      flow: {
        id: "flow-abc",
        slug: "apply-for-something",
        name: "Apply for Something",
        team: {
          slug: "lambeth",
          name: "Lambeth",
          settings: {
            referenceCode: "LBH",
          },
        },
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
