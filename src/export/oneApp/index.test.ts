import { X2jOptionsOptional, XMLParser, XMLValidator } from "fast-xml-parser";
import get from "lodash.get";
import { OneAppPayload } from "./model";
import { generateOneAppXML } from "./index";
import { graphQLClient } from "../../requests/graphql";
import { FileAttachment } from "./types";
import { mockSession } from "./mocks/session";

let mockHasRequiredDataForTemplate = jest.fn();
jest.mock("../../templates", () => {
  return {
    hasRequiredDataForTemplate: jest.fn(() => mockHasRequiredDataForTemplate()),
  };
});

jest.mock("../../requests/session", () => ({
  getSessionById: jest.fn(() => mockSession),
}));

let mockGetDocumentTemplateNamesForSession = jest.fn();
jest.mock("../../requests/document-templates", () => ({
  getDocumentTemplateNamesForSession: jest.fn(() =>
    mockGetDocumentTemplateNamesForSession()
  ),
}));

// Match build options in OneAppPayload.buildXML()
const parseOptions: X2jOptionsOptional = {
  ignoreAttributes: false,
  attributeNamePrefix: "_",
};

const parser = new XMLParser(parseOptions);

const client = graphQLClient({ url: process.env.HASURA_GRAPHQL_URL! });

describe("generateOneAppXML", () => {
  test("includes template doc files when the flow has document templates", async () => {
    // Fist two templates valid, last two invalid
    mockGetDocumentTemplateNamesForSession = jest.fn(() => [
      "LDCE",
      "LDCE_redacted",
      "LDCP",
      "LDCP_redacted",
    ]);
    mockHasRequiredDataForTemplate = jest
      .fn()
      .mockImplementationOnce(() => true)
      .mockImplementationOnce(() => true)
      .mockImplementationOnce(() => false)
      .mockImplementationOnce(() => false);

    const xml = await generateOneAppXML(client, "abc123");
    expect(xml).not.toBeUndefined();
    const isValid = XMLValidator.validate(xml!);
    expect(isValid).toBe(true);
    const result: OneAppPayload = parser.parse(xml!);
    const fileAttachmentsKey =
      "portaloneapp:Proposal.portaloneapp:FileAttachments.common:FileAttachment";
    const fileAttachments: FileAttachment[] | undefined = get(
      result,
      fileAttachmentsKey
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
      expect.arrayContaining(expectedBoundaryFileDeclarations)
    );
    expect(fileAttachments).not.toEqual(
      expect.arrayContaining(unexpectedBoundaryFileDeclarations)
    );
  });
});
