import { X2jOptions, XMLParser, XMLValidator } from "fast-xml-parser";
import { get } from "lodash-es";
import { vi } from "vitest";

import { getGraphQLClient } from "../../requests/graphql.js";
import { generateOneAppXML } from "./index.js";
import { mockSession } from "./mocks/session.js";
import { OneAppPayload } from "./model.js";
import { FileAttachment } from "./types.js";

let mockHasRequiredDataForTemplate = vi.fn();
vi.mock("../../templates", () => {
  return {
    hasRequiredDataForTemplate: vi.fn(() => mockHasRequiredDataForTemplate()),
  };
});

vi.mock("../../requests/session", () => ({
  getSessionById: vi.fn(() => mockSession),
}));

let mockGetDocumentTemplateNamesForSession = vi.fn();
vi.mock("../../requests/document-templates", () => ({
  getDocumentTemplateNamesForSession: vi.fn(() =>
    mockGetDocumentTemplateNamesForSession(),
  ),
}));

// Match build options in OneAppPayload.buildXML()
const parseOptions: X2jOptions = {
  ignoreAttributes: false,
  attributeNamePrefix: "_",
};

const parser = new XMLParser(parseOptions);

const client = getGraphQLClient({ url: process.env.HASURA_GRAPHQL_URL! });

describe("generateOneAppXML", () => {
  test("includes template doc files when the flow has document templates", async () => {
    // Fist two templates valid, last two invalid
    mockGetDocumentTemplateNamesForSession = vi.fn(() => [
      "LDCE",
      "LDCE_redacted",
      "LDCP",
      "LDCP_redacted",
    ]);
    mockHasRequiredDataForTemplate = vi
      .fn()
      .mockImplementationOnce(() => true)
      .mockImplementationOnce(() => true)
      .mockImplementationOnce(() => false)
      .mockImplementationOnce(() => false);

    const xml = await generateOneAppXML({ client, sessionId: "abc123" });
    expect(xml).not.toBeUndefined();
    const isValid = XMLValidator.validate(xml!);
    expect(isValid).toBe(true);
    const result: OneAppPayload = parser.parse(xml!);
    const fileAttachmentsKey =
      "portaloneapp:Proposal.portaloneapp:FileAttachments.common:FileAttachment";
    const fileAttachments: FileAttachment[] | undefined = get(
      result,
      fileAttachmentsKey,
    );
    const expectedBoundaryFileDeclarations = [
      {
        "common:FileName": "LDCE.doc",
        "common:Reference": "Other",
      },
      {
        "common:FileName": "LDCE_redacted.doc",
        "common:Reference": "Other",
      },
    ];
    const unexpectedBoundaryFileDeclarations = [
      {
        "common:FileName": "LDCP.doc",
        "common:Reference": "Other",
      },
      {
        "common:FileName": "LDCP_redacted.doc",
        "common:Reference": "Other",
      },
    ];
    expect(fileAttachments).toEqual(
      expect.arrayContaining(expectedBoundaryFileDeclarations),
    );
    expect(fileAttachments).not.toEqual(
      expect.arrayContaining(unexpectedBoundaryFileDeclarations),
    );
  });
});
