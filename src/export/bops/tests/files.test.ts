import type { FileTag } from "../../../types/index.js";
import { computeBOPSParams, extractTagsFromPassportKey } from "../index.js";

const PASSPORT_UPLOAD_KEY = "locationPlan";

const mockFlow = {
  _root: {
    edges: ["FnyZh5IrV3"],
  },
  FnyZh5IrV3: {
    data: {
      fn: "elevations.existing",
      color: "#EFEFEF",
    },
    type: 140,
  },
};

const mockBreadcrumbs = {
  FnyZh5IrV3: {
    auto: false,
    data: {
      "elevations.existing": [
        {
          url: "http://localhost:7002/file/private/y2uubi9x/placeholder.png",
          filename: "placeholder.png",
          cachedSlot: {
            file: {
              path: "placeholder.png",
              type: "image/png",
              size: 6146,
            },
            status: "success",
            progress: 1,
            id: "oPd5GUV_T-bWZWJb0wGs8",
            url: "http://localhost:7002/file/private/y2uubi9x/placeholder.png",
          },
        },
      ],
    },
  },
};

const mockPassport = {
  data: {
    "elevations.existing": [
      {
        url: "http://localhost:7002/file/private/y2uubi9x/placeholder.png",
        filename: "placeholder.png",
        cachedSlot: {
          file: {
            path: "placeholder.png",
            type: "image/png",
            size: 6146,
          },
          status: "success",
          progress: 1,
          id: "oPd5GUV_T-bWZWJb0wGs8",
          url: "http://localhost:7002/file/private/y2uubi9x/placeholder.png",
        },
      },
    ],
  },
};

test("makes file object", () => {
  const actual = computeBOPSParams({
    breadcrumbs: mockBreadcrumbs,
    flow: mockFlow,
    passport: mockPassport,
    sessionId: "123",
    flowName: "Apply for a lawful development certificate",
  }).files;

  const expected = [
    expect.objectContaining({
      filename: "http://localhost:7002/file/private/y2uubi9x/placeholder.png",
    }),
  ];

  expect(actual).toEqual(expected);
});

interface TestTag {
  key: string;
  tags: Array<FileTag>;
}

// Google Sheet listing tags: https://bit.ly/3yIscgc
describe("It extracts tags for", () => {
  const data: Record<string, TestTag> = {
    "No passport key": {
      key: "",
      tags: [],
    },
    "Unmatchable passport key": {
      key: "foo",
      tags: [],
    },
    "Location plan": {
      key:
        PASSPORT_UPLOAD_KEY === "locationPlan"
          ? PASSPORT_UPLOAD_KEY
          : "key changed unexpectedly!",
      tags: [/*"Proposed", "Drawing",*/ "Site", "Plan"],
    },
    "Existing site plan": {
      key: "sitePlan.existing",
      tags: ["Existing", /*"Drawing", "Site",*/ "Plan"], // "Site" is reserved for red-line drawings ONLY!
    },
    "Proposed site plan": {
      key: "sitePlan.proposed",
      tags: ["Proposed", /*"Drawing", "Site",*/ "Plan"],
    },
    "Existing floor plan": {
      key: "floorPlan.existing",
      tags: ["Existing", /*"Drawing",*/ "Floor", "Plan"],
    },
    "Proposed floor plan": {
      key: "floorPlan.proposed",
      tags: ["Proposed", /*"Drawing",*/ "Floor", "Plan"],
    },
    "Existing roof plan": {
      key: "roofPlan.existing",
      tags: ["Existing", /*"Drawing",*/ "Roof", "Plan"],
    },
    "Proposed roof plan": {
      key: "roofPlan.proposed",
      tags: ["Proposed", /*"Drawing",*/ "Roof", "Plan"],
    },
    "Existing elevations": {
      key: "elevations.existing",
      tags: ["Existing", /*"Drawing",*/ "Elevation"],
    },
    "Proposed elevations": {
      key: "elevations.proposed",
      tags: ["Proposed", /*"Drawing",*/ "Elevation"],
    },
    "Existing sections": {
      key: "sections.existing",
      tags: ["Existing", /*"Drawing",*/ "Section"],
    },
    "Proposed sections": {
      key: "sections.proposed",
      tags: ["Proposed", /*"Drawing",*/ "Section"],
    },
    "Existing Photographs": {
      key: "photographs.existing",
      tags: ["Existing", "Photograph"],
    },
    Visualisation: {
      key: "visualisations",
      tags: [
        /*"Proposed", "Visualisation"*/
      ],
    },
    "Proposed outbuilding roof plan": {
      key: "roofPlan.proposed.outbuilding",
      tags: ["Proposed", /*"Drawing",*/ "Roof", "Plan"],
    },
    "Proposed extension roof plan": {
      key: "roofPlan.proposed.extension",
      tags: ["Proposed", /*"Drawing",*/ "Roof", "Plan"],
    },
    "Proposed porch roof plan": {
      key: "roofPlan.proposed.porch",
      tags: ["Proposed", /*"Drawing",*/ "Roof", "Plan"],
    },
    "Existing use plan": {
      key: "usePlan.existing",
      tags: ["Existing", /*"Drawing", "Use",*/ "Plan"],
    },
    "Proposed use plan": {
      key: "usePlan.proposed",
      tags: ["Proposed", /*"Drawing", "Use",*/ "Plan"],
    },
    "Existing unit plans": {
      key: "unitPlan.existing",
      tags: ["Existing", /*"Drawing", "Unit",*/ "Plan"],
    },
    "Proposed unit plans": {
      key: "unitPlan.proposed",
      tags: ["Proposed", /*"Drawing", "Unit",*/ "Plan"],
    },
    "Additional drawings": {
      key: "otherDrawing",
      tags: [/*"Proposed", "Drawing",*/ "Other"],
    },
    "Additional documents": {
      key: "otherDocument",
      tags: [/*"Proposed", "Document",*/ "Other"],
    },
    // Evidence of immunity
    Photographs: {
      key: "photographs.proposed",
      tags: ["Proposed", "Photograph"],
    },
    "Utility bill": {
      key: "utilityBill",
      tags: [/*"Proposed", "Document",*/ "Utility Bill"],
    },
    "Building control certificate": {
      key: "buildingControlCertificate",
      tags: [/*"Proposed", "Document",*/ "Building Control Certificate"],
    },
    "Construction invoice": {
      key: "constructionInvoice",
      tags: [/*"Proposed", "Document",*/ "Construction Invoice"],
    },
    "Council tax documents": {
      key: "councilTaxBill",
      tags: [/*"Proposed", "Document",*/ "Council Tax Document"],
    },
    "Tenancy agreements": {
      key: "tenancyAgreement",
      tags: [/*"Proposed", "Document",*/ "Tenancy Agreement"],
    },
    "Tenancy invoices": {
      key: "tenancyInvoice",
      tags: [/*"Proposed", "Document"*,*/ "Tenancy Invoice"],
    },
    "Bank statements": {
      key: "bankStatement",
      tags: [/*"Proposed", "Document",*/ "Bank Statement"],
    },
    "Statutory declaration": {
      key: "statutoryDeclaration",
      tags: [/*"Proposed", "Document",*/ "Statutory Declaration"],
    },
  };

  Object.entries(data).forEach(([example, { key, tags }]) => {
    test(`${example}`, () => {
      expect(extractTagsFromPassportKey(key)).toStrictEqual(tags);
    });
  });
});
