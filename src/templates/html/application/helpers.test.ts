import {
  getUploadedFiles,
  prettyQuestion,
  prettyResponse,
  safeDecodeURI,
  validatePlanXExportData,
} from "./helpers.js";

describe("validatePlanXExportData", () => {
  test("null", () => {
    //@ts-ignore
    expect(validatePlanXExportData(null)).toBe(false);
  });
  test("undefined", () => {
    //@ts-ignore
    expect(validatePlanXExportData(undefined)).toBe(false);
  });
  test("object", () => {
    //@ts-ignore
    expect(validatePlanXExportData({})).toBe(false);
  });
  test("empty", () => {
    //@ts-ignore
    expect(validatePlanXExportData([])).toBe(false);
  });
  test("empty object", () => {
    //@ts-ignore
    expect(validatePlanXExportData([{}])).toBe(false);
  });
  test("invalid", () => {
    expect(
      validatePlanXExportData([
        {
          //@ts-ignore
          q: "really?",
          a: "no",
        },
      ]),
    ).toBe(false);
  });
  test("mixed", () => {
    expect(
      validatePlanXExportData([
        {
          //@ts-ignore
          q: "really?",
          a: "no",
        },
        {
          question: "is it?",
          responses: "yes",
        },
      ]),
    ).toBe(false);
  });
  test("valid", () => {
    expect(
      validatePlanXExportData([
        {
          question: "is it?",
          responses: "yes",
        },
      ]),
    ).toBe(true);
  });
});

describe("safeDecodeURI", () => {
  test("It handles URI encoded strings", () =>
    expect(
      safeDecodeURI("https://testURL.pizza/file%20with%20spaces.pdf"),
    ).toEqual("https://testURL.pizza/file with spaces.pdf"));

  test("It handles non-URI encoded strings", () =>
    expect(safeDecodeURI("50% or less")).toEqual("50% or less"));
});

describe("prettyQuestion", () => {
  test("It leaves original question text and casing in tact", () =>
    expect(
      prettyQuestion("Do you know the title numbers of the properties?"),
    ).toEqual("Do you know the title numbers of the properties?"));

  test("It leaves file upload question text and casing in tact", () =>
    expect(prettyQuestion("File upload: Proposed, Elevation")).toEqual(
      "File upload: Proposed, Elevation",
    ));

  test("It start-cases and splits question text that is machine-readable", () =>
    expect(prettyQuestion("application.fee.reference.govPay")).toEqual(
      "Application Fee Reference Gov Pay",
    ));

  test("It handles questions that have URI-encoded text", () =>
    expect(
      prettyQuestion("Did you upload 39%20River%20Court%202.jpg?"),
    ).toEqual("Did you upload 39 River Court 2.jpg?"));
});

describe("getUploadedFiles", () => {
  test("It lists each uploaded file with its file types and their rules", () => {
    const files = [
      {
        name: "https://api.editor.planx.dev/file/private/abc123/site%20plan.pdf",
        type: [
          { value: "sitePlan.proposed", description: "Site plan - proposed" },
          { value: "heritageStatement", description: "Heritage statement" },
        ],
      },
      {
        name: "https://api.editor.planx.dev/file/private/def456/photo.jpg",
        type: [
          {
            value: "photographs.existing",
            description: "Photographs - existing",
          },
        ],
      },
    ];
    const requestedFiles = {
      required: [
        { value: "sitePlan.proposed", description: "Site plan - proposed" },
      ],
      recommended: [
        { value: "heritageStatement", description: "Heritage statement" },
      ],
      optional: [
        {
          value: "photographs.existing",
          description: "Photographs - existing",
        },
      ],
    };

    expect(getUploadedFiles(files, requestedFiles)).toEqual([
      {
        name: "site plan.pdf",
        labels: [
          { label: "Site plan - proposed", rule: "required" },
          { label: "Heritage statement", rule: "recommended" },
        ],
      },
      {
        name: "photo.jpg",
        labels: [{ label: "Photographs - existing", rule: "optional" }],
      },
    ]);
  });

  test("It shows the drawing number of a file that has one", () => {
    const files = [
      {
        name: "https://api.editor.planx.dev/file/private/abc123/proposed.pdf",
        number: "PL-001 Rev B",
        type: [
          { value: "sitePlan.proposed", description: "Site plan - proposed" },
        ],
      },
      {
        name: "https://api.editor.planx.dev/file/private/def456/existing.pdf",
        type: [
          { value: "sitePlan.existing", description: "Site plan - existing" },
        ],
      },
    ];

    expect(getUploadedFiles(files)).toEqual([
      {
        name: "proposed.pdf",
        number: "PL-001 Rev B",
        labels: [{ label: "Site plan - proposed", rule: "required" }],
      },
      {
        name: "existing.pdf",
        labels: [{ label: "Site plan - existing", rule: "required" }],
      },
    ]);
  });
});

describe("prettyResponse", () => {
  test("It decodes files names", () =>
    expect(prettyResponse("39%20River%20Court%202.jpg")).toEqual(
      "39 River Court 2.jpg",
    ));

  test("It handles the value from a question response", () =>
    expect(
      prettyResponse([
        {
          value: "No",
        },
      ]),
    ).toEqual("No"));

  test("It decodes file names when they're the value of a question response", () =>
    expect(
      prettyResponse([
        {
          value: "39%20River%20Court%202.jpg",
        },
      ]),
    ).toEqual("39 River Court 2.jpg"));

  test("It handles many values from a checklist response and inserts line breaks that will be split later", () =>
    expect(
      prettyResponse([
        {
          value: "Replace window with window",
        },
        {
          value: "Replace door with door",
        },
      ]),
    ).toEqual("Replace window with window\nReplace door with door"));

  test("It handles number responses", () =>
    expect(prettyResponse(10300)).toEqual("10300"));

  test("It handles plain text responses", () =>
    expect(prettyResponse("applicant@test.com")).toEqual("applicant@test.com"));

  test("It handles boolean responses", () =>
    expect(prettyResponse(true)).toEqual("True"));
});
