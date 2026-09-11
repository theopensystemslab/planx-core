import {
  getUploadedFiles,
  isFileUploadResponse,
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
  test("extracts the file name and its labels from application files", () => {
    const app = {
      files: [
        {
          name: "front%20elevation.pdf",
          description: "Front elevation",
          type: [{ value: "sitePlan", description: "Site plan" }],
        },
      ],
      metadata: {
        service: {
          files: {
            required: [{ value: "sitePlan", description: "Site plan" }],
            recommended: [],
            optional: [],
          },
        },
      },
      responses: [],
    } as any;

    expect(getUploadedFiles(app)).toEqual([
      {
        name: "front elevation.pdf",
        labels: [{ label: "Site plan", requirement: "required" }],
      },
    ]);
  });

  test("ignores file upload responses, which are already covered by application files", () => {
    const app = {
      files: [],
      responses: [
        {
          question: "List item",
          responses: [
            {
              value: "https://example.com/file/private/abc/roof%20plan.pdf",
            },
          ],
        },
      ],
    } as any;

    expect(getUploadedFiles(app)).toEqual([]);
  });

  test("lists every label given to a file, with the requirement of each label", () => {
    const app = {
      files: [
        {
          name: "https://example.com/file/private/abc/plans.pdf",
          type: [
            { value: "sitePlan.proposed", description: "Site plan - proposed" },
            { value: "otherEvidence", description: "Other - evidence" },
            { value: "heritageStatement", description: "Heritage statement" },
          ],
        },
      ],
      metadata: {
        service: {
          files: {
            required: [
              {
                value: "sitePlan.proposed",
                description: "Site plan - proposed",
              },
            ],
            recommended: [
              { value: "otherEvidence", description: "Other - evidence" },
            ],
            optional: [
              { value: "heritageStatement", description: "Heritage statement" },
            ],
          },
        },
      },
      responses: [],
    } as any;

    expect(getUploadedFiles(app)).toEqual([
      {
        name: "plans.pdf",
        labels: [
          { label: "Site plan - proposed", requirement: "required" },
          { label: "Other - evidence", requirement: "recommended" },
          { label: "Heritage statement", requirement: "optional" },
        ],
      },
    ]);
  });

  test("treats labels which were not requested by the service as required", () => {
    const app = {
      files: [
        {
          name: "https://example.com/file/private/abc/photo.jpg",
          type: [{ value: "photographs.existing" }],
        },
      ],
      metadata: {
        service: {
          files: { required: [], recommended: [], optional: [] },
        },
      },
      responses: [],
    } as any;

    expect(getUploadedFiles(app)).toEqual([
      {
        name: "photo.jpg",
        labels: [{ label: "Photographs Existing", requirement: "required" }],
      },
    ]);
  });

  test("keeps identically named files uploaded separately on their own rows", () => {
    const app = {
      files: [
        {
          name: "https://example.com/file/private/abc/plan.pdf",
          type: [
            { value: "sitePlan.existing", description: "Site plan - existing" },
          ],
        },
        {
          name: "https://example.com/file/private/xyz/plan.pdf",
          type: [
            { value: "sitePlan.proposed", description: "Site plan - proposed" },
          ],
        },
      ],
      metadata: {
        service: {
          files: {
            required: [
              {
                value: "sitePlan.proposed",
                description: "Site plan - proposed",
              },
            ],
            recommended: [],
            optional: [],
          },
        },
      },
      responses: [],
    } as any;

    expect(getUploadedFiles(app)).toEqual([
      {
        name: "plan.pdf",
        labels: [{ label: "Site plan - existing", requirement: "required" }],
      },
      {
        name: "plan.pdf",
        labels: [{ label: "Site plan - proposed", requirement: "required" }],
      },
    ]);
  });

  test("returns a file with no labels rather than dropping it", () => {
    const app = {
      files: [
        {
          name: "https://example.com/file/private/abc/roof%20plan.pdf",
          type: [],
        },
      ],
      responses: [],
    } as any;

    expect(getUploadedFiles(app)).toEqual([
      { name: "roof plan.pdf", labels: [] },
    ]);
  });

  test("detects list file responses", () => {
    expect(
      isFileUploadResponse({
        question: "List item",
        responses: [
          {
            value: "https://example.com/file/private/abc/roof%20plan.pdf",
          },
        ],
      }),
    ).toBe(true);
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
