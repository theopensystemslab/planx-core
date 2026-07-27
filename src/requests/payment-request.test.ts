import type { KeyPath, Session } from "../types/index.js";
import { extractSessionPreviewData } from "./payment-request.js";

describe("extractSessionPreviewData", () => {
  test("passport data must be available", () => {
    const emptySession: Session = {
      id: "abc",
      data: {
        id: "flow-abc",
        passport: { data: {} },
        breadcrumbs: {},
      },
      flow: {
        id: "flow-abc",
        slug: "apply-for-something",
        name: "Apply for Something",
        email_template: "application",
      },
    };
    const previewKeys: KeyPath[] = [];
    expect(() => extractSessionPreviewData(emptySession, previewKeys)).toThrow(
      "passport data not found",
    );
  });

  test("realistic session preview keys are extracted from the session", () => {
    const session: Session = {
      id: "abc",
      data: {
        id: "flow-abc",
        passport: {
          data: {
            "proposal.projectType": ["alter", "new"],
            _address: {
              title: "123 MAIN STREET, LAMBETH, SE19 1N1",
            },
            "property.type": ["commercial"],
          },
        },
        breadcrumbs: {},
      },
      flow: {
        id: "flow-abc",
        slug: "apply-for-something",
        name: "Apply for Something",
        email_template: "application",
      },
    };
    // Keep mock aligned to `SESSION_PREVIEW_KEYS` defined in planx-new
    const previewKeys: KeyPath[] = [
      ["_address", "title"],
      ["proposal.projectType"],
    ];

    const sessionPreviewData = extractSessionPreviewData(session, previewKeys);
    expect(sessionPreviewData).toEqual({
      _address: {
        title: "123 MAIN STREET, LAMBETH, SE19 1N1",
      },
      "proposal.projectType": ["alter", "new"],
    });
  });

  test("missing `proposal.projectType` session preview key is set as 'Not submitted'", () => {
    const session: Session = {
      id: "abc",
      data: {
        id: "flow-abc",
        passport: {
          data: {
            _address: {
              title: "123 MAIN STREET, LAMBETH, SE19 1N1",
            },
            "property.type": ["commercial"],
          },
        },
        breadcrumbs: {},
      },
      flow: {
        id: "flow-abc",
        slug: "apply-for-something",
        name: "Apply for Something",
        email_template: "application",
      },
    };
    // Keep mock aligned to `SESSION_PREVIEW_KEYS` defined in planx-new
    const previewKeys: KeyPath[] = [
      ["_address", "title"],
      ["proposal.projectType"],
    ];

    const sessionPreviewData = extractSessionPreviewData(session, previewKeys);
    expect(sessionPreviewData).toEqual({
      _address: {
        title: "123 MAIN STREET, LAMBETH, SE19 1N1",
      },
      "proposal.projectType": ["Not submitted"],
    });
  });

  test("missing `_address.title` session preview key is set as 'Not submitted'", () => {
    const session: Session = {
      id: "abc",
      data: {
        id: "flow-abc",
        passport: {
          data: {
            "proposal.projectType": ["alter", "new"],
            "property.type": ["commercial"],
          },
        },
        breadcrumbs: {},
      },
      flow: {
        id: "flow-abc",
        slug: "apply-for-something",
        name: "Apply for Something",
        email_template: "application",
      },
    };
    // Keep mock aligned to `SESSION_PREVIEW_KEYS` defined in planx-new
    const previewKeys: KeyPath[] = [
      ["_address", "title"],
      ["proposal.projectType"],
    ];

    const sessionPreviewData = extractSessionPreviewData(session, previewKeys);
    expect(sessionPreviewData).toEqual({
      _address: {
        title: "Not submitted",
      },
      "proposal.projectType": ["alter", "new"],
    });
  });

  test("all missing session preview keys are set as 'Not submitted'", () => {
    const session: Session = {
      id: "abc",
      data: {
        id: "flow-abc",
        passport: {
          data: {
            "property.type": ["commercial"],
            "something.else.discretionary": 5,
            _address: {
              x: 10,
              y: 10,
            },
          },
        },
        breadcrumbs: {},
      },
      flow: {
        id: "flow-abc",
        slug: "apply-for-something",
        name: "Apply for Something",
        email_template: "application",
      },
    };
    // Keep mock aligned to `SESSION_PREVIEW_KEYS` defined in planx-new
    const previewKeys: KeyPath[] = [
      ["_address", "title"],
      ["proposal.projectType"],
    ];

    const sessionPreviewData = extractSessionPreviewData(session, previewKeys);
    expect(sessionPreviewData).toEqual({
      _address: {
        title: "Not submitted",
      },
      "proposal.projectType": ["Not submitted"],
    });
  });

  test("a set of compound keys are extracted from the session", () => {
    const session: Session = {
      id: "abc",
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
        email_template: "application",
      },
    };
    const previewKeys: KeyPath[] = [["a.b"], ["c.d"], ["c.d.e"]];
    const sessionPreviewData = extractSessionPreviewData(session, previewKeys);
    expect(sessionPreviewData).toEqual({ "a.b": 1, "c.d": 2, "c.d.e": 3 });
  });

  test("a set of nested and compound keys are extracted from the session", () => {
    const session: Session = {
      id: "abc",
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
        email_template: "application",
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
