import { X2jOptions, XMLParser, XMLValidator } from "fast-xml-parser";
import get from "lodash.get";

import { Passport } from "../../models/passport";
import { Address, SiteAddress } from "../../types";
import { mockProposedLDCPassportData } from "./mocks/passport";
import { OneAppPayload } from "./model";
import {
  ApplicantOrAgent,
  ExternalAddress,
  FileAttachment,
  IOneAppPayload,
  ProposedUseApplication,
} from "./types";

// Match build options in OneAppPayload.buildXML()
const parseOptions: X2jOptions = {
  ignoreAttributes: false,
  attributeNamePrefix: "_",
};

const parser = new XMLParser(parseOptions);

describe("OneAppPayload", () => {
  const sessionId = "123";

  it("generates an xml declaration at the top of the document", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
      },
    });
    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();
    const isValid = XMLValidator.validate(xml!);
    expect(isValid).toBe(true);
    const declaration = xml!.slice(0, 56);
    const expectedDeclaration = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n`;
    expect(declaration).toEqual(expectedDeclaration);
  });

  it("safely escapes special XML characters", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "proposal.description": `< > & " '`,
      },
    });
    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();
    const isValid = XMLValidator.validate(xml!);
    expect(isValid).toBe(true);
  });
});

describe("Reference number", () => {
  const sessionId = "1234-abcdef-567-ghijklm";
  const passport = new Passport({ data: mockProposedLDCPassportData });

  it("sets sessionId as a reference number", () => {
    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();
    const expectedRefNum = "1234-abcdef-567-ghijklm";

    const result: IOneAppPayload = parser.parse(xml!);
    const resultRefNum =
      result["portaloneapp:Proposal"]["portaloneapp:ApplicationHeader"][
        "portaloneapp:RefNum"
      ];
    const resultFormattedRefNum =
      result["portaloneapp:Proposal"]["portaloneapp:ApplicationHeader"][
        "portaloneapp:FormattedRefNum"
      ];

    expect(resultRefNum).toEqual(expectedRefNum);
    expect(resultFormattedRefNum).toEqual(expectedRefNum);
  });
});

describe("Proposal completion date", () => {
  const sessionId = "123";
  const formattedNow = new Date(Date.now()).toISOString().split("T")[0];

  it("reads from `proposal.completion.date` passport variable if it exists", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "proposal.completion.date": "2022-01-01",
      },
    });
    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();
    const expectedCompletionDate = "2022-01-01";

    const result: IOneAppPayload = parser.parse(xml!);
    const resultCompletionDate =
      result["portaloneapp:Proposal"]["portaloneapp:ApplicationHeader"][
        "portaloneapp:DateSubmitted"
      ];

    expect(resultCompletionDate).toEqual(expectedCompletionDate);
  });

  it("defaults to now if `proposal.completion.date` passport variable is missing", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "proposal.description": "test",
      },
    });
    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();
    const expectedCompletionDate: string = formattedNow;

    const result: IOneAppPayload = parser.parse(xml!);
    const resultCompletionDate =
      result["portaloneapp:Proposal"]["portaloneapp:ApplicationHeader"][
        "portaloneapp:DateSubmitted"
      ];

    expect(resultCompletionDate).toEqual(expectedCompletionDate);
  });
});

describe("Payment details", () => {
  const sessionId = "123";

  it("reads from Pay passport variables if they exist", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "application.fee.payable": 103,
        "application.fee.reference.govPay": {
          amount: 103,
        },
      },
    });
    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();
    const expectedPayment = {
      "common:PaymentMethod": "OnlineViaPortal",
      "common:AmountDue": 103,
      "common:AmountPaid": 103,
      "common:Currency": "GBP",
    };

    const result: IOneAppPayload = parser.parse(xml!);
    const resultPayment =
      result["portaloneapp:Proposal"]["portaloneapp:ApplicationHeader"][
        "portaloneapp:Payment"
      ];

    expect(resultPayment).toMatchObject(expectedPayment);
  });

  it("defaults to 0 if resubmission or if Pay passport variables are missing", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "proposal.description": "test",
      },
    });
    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();
    const expectedPayment = {
      "common:PaymentMethod": "OnlineViaPortal",
      "common:AmountDue": 0,
      "common:AmountPaid": 0,
      "common:Currency": "GBP",
    };

    const result: IOneAppPayload = parser.parse(xml!);
    const resultPayment =
      result["portaloneapp:Proposal"]["portaloneapp:ApplicationHeader"][
        "portaloneapp:Payment"
      ];

    expect(resultPayment).toMatchObject(expectedPayment);
  });
});

// This tests that the passport values added in the "Open System Lab/Uniform Translator" flow
// are mapped as expected into the XML for Uniform submission
// https://editor.planx.uk/opensystemslab/uniform-translator
describe("Uniform Translator", () => {
  const sessionId = "123";

  it("maps the 'applicationTo' value", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "uniform.applicationTo": ["TEST123"],
      },
    });

    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();

    const result: IOneAppPayload = parser.parse(xml!);
    const applicationTo =
      result["portaloneapp:Proposal"]["portaloneapp:ApplicationHeader"][
        "portaloneapp:ApplicationTo"
      ];
    expect(applicationTo).toBe("TEST123");
  });

  it("maps the 'applicationScenario' value for an Existing LDC", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "uniform.scenarioNumber": ["14"],
        "uniform.consentRegime": ["Certificate of Lawfulness"],
        "application.type": "ldc.existing",
      },
    });

    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();

    const result: IOneAppPayload = parser.parse(xml!);
    const scenarioNumber =
      result["portaloneapp:Proposal"]["portaloneapp:ApplicationScenario"][
        "portaloneapp:ScenarioNumber"
      ];
    const consentRegime =
      result["portaloneapp:Proposal"]["portaloneapp:ConsentRegimes"][
        "portaloneapp:ConsentRegime"
      ];
    expect(scenarioNumber).toBe(14);
    expect(consentRegime).toBe("Certificate of Lawfulness");
  });

  it("maps the 'applicationScenario' value for a Proposed LDC", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "uniform.scenarioNumber": ["15"],
        "uniform.consentRegime": ["Certificate of Lawfulness"],
        "application.type": "ldc.proposed",
      },
    });

    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();

    const result: IOneAppPayload = parser.parse(xml!);
    const scenarioNumber =
      result["portaloneapp:Proposal"]["portaloneapp:ApplicationScenario"][
        "portaloneapp:ScenarioNumber"
      ];
    const consentRegime =
      result["portaloneapp:Proposal"]["portaloneapp:ConsentRegimes"][
        "portaloneapp:ConsentRegime"
      ];
    expect(scenarioNumber).toBe(15);
    expect(consentRegime).toBe("Certificate of Lawfulness");
  });

  it("maps the 'siteVisit' value", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "uniform.siteVisit": ["true"],
      },
    });

    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();

    const result: IOneAppPayload = parser.parse(xml!);
    const siteVisit =
      result["portaloneapp:Proposal"]["portaloneapp:ApplicationData"][
        "portaloneapp:SiteVisit"
      ]["common:SeeSite"];
    expect(siteVisit).toBe(true);
  });

  it("maps the 'isRelated' value with a connection", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "uniform.isRelated": ["true"],
      },
    });

    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();

    const result: IOneAppPayload = parser.parse(xml!);
    const isRelated =
      result["portaloneapp:Proposal"]["portaloneapp:DeclarationOfInterest"][
        "common:IsRelated"
      ];
    expect(isRelated).toBe(true);
  });

  it("maps the 'isRelated' value without a connection", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "uniform.isRelated": ["false"],
      },
    });

    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();

    const result: IOneAppPayload = parser.parse(xml!);
    const isRelated =
      result["portaloneapp:Proposal"]["portaloneapp:DeclarationOfInterest"][
        "common:IsRelated"
      ];
    expect(isRelated).toBe(false);
  });

  it("maps the 'personRole' value for an Agent", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "uniform.personRole": ["Agent"],
      },
    });

    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();

    const result: IOneAppPayload = parser.parse(xml!);
    const personRole =
      result["portaloneapp:Proposal"]["portaloneapp:Declaration"][
        "common:Signatory"
      ]["_PersonRole"];
    expect(personRole).toBe("Agent");
  });

  it("maps the 'personRole' value for an Applicant", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "uniform.personRole": ["Applicant"],
      },
    });

    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();

    const result: IOneAppPayload = parser.parse(xml!);
    const personRole =
      result["portaloneapp:Proposal"]["portaloneapp:Declaration"][
        "common:Signatory"
      ]["_PersonRole"];
    expect(personRole).toBe("Applicant");
  });

  it("maps the 'isUseChange' value", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "uniform.isUseChange": ["true"],
        "application.type": ["ldc.proposed"],
      },
    });
    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();

    const result: IOneAppPayload = parser.parse(xml!);
    const certificateOfLawfulness = result["portaloneapp:Proposal"][
      "portaloneapp:ApplicationData"
    ]["portaloneapp:CertificateLawfulness"] as ProposedUseApplication;
    const isUseChange =
      certificateOfLawfulness["portaloneapp:ProposedUseApplication"][
        "portaloneapp:DescriptionCPU"
      ]["common:IsUseChange"];
    expect(isUseChange).toBe(true);
  });
});

describe("Applicant address", () => {
  const harryPotterAddress: Partial<SiteAddress> = {
    title: "4, Privet Drive, Little Whinging, Surrey",
    postcode: "GU22 7QQ",
    x: 123,
    y: 456,
  };
  const sherlockHolmesAddress: Address = {
    country: "UK",
    county: "Greater London",
    line1: "221b Baker Street",
    line2: "",
    postcode: "NW1 6XE",
    town: "Marylebone",
  };
  const sessionId = "123";
  const applicantAddressKey =
    "portaloneapp:Proposal.portaloneapp:Applicant.common:ExternalAddress";

  it("should populate the address for a 'resident' application", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "applicant.resident": ["true"],
        _address: harryPotterAddress,
      },
    });
    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();

    const result: IOneAppPayload = parser.parse(xml!);
    const expectedAddress = {
      "common:InternationalAddress": {
        "apd:IntAddressLine": [4, "Privet Drive", "Little Whinging", "Surrey"],
        "apd:InternationalPostCode": "GU22 7QQ",
      },
    };
    const resultAddress: ExternalAddress = get(result, applicantAddressKey);
    expect(resultAddress).toMatchObject(expectedAddress);
  });

  it("should populate the address for a 'non-resident' application", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "applicant.resident": ["false"],
        _address: harryPotterAddress,
        "applicant.address": sherlockHolmesAddress,
      },
    });
    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();

    const result: IOneAppPayload = parser.parse(xml!);
    const expectedAddress: ExternalAddress = {
      "common:InternationalAddress": {
        "apd:IntAddressLine": [
          "221b Baker Street",
          "Marylebone",
          "Greater London",
        ],
        "apd:Country": "UK",
        "apd:InternationalPostCode": "NW1 6XE",
      },
    };
    const resultAddress: ExternalAddress = get(result, applicantAddressKey);
    expect(resultAddress).toMatchObject(expectedAddress);
  });
});

describe("Applicant contact details", () => {
  const sessionId = "123";

  const applicantKey = "portaloneapp:Proposal.portaloneapp:Applicant";
  const expectedApplicant: ApplicantOrAgent = {
    "common:PersonName": {
      "pdt:PersonNameTitle": "Mme",
      "pdt:PersonGivenName": "Jane",
      "pdt:PersonFamilyName": "Doe",
    },
    "common:OrgName": "DLUHC",
    "common:ContactDetails": {
      "common:Email": {
        "apd:EmailAddress": "jane@gov.uk",
        _EmailUsage: "work",
        _EmailPreferred: "yes",
      },
      "common:Telephone": {
        "apd:TelNationalNumber": "(01234) 567890",
        _TelUse: "work",
        _TelPreferred: "no",
        _TelMobile: "yes",
      },
      _PreferredContactMedium: "E-Mail",
    },
    "common:ExternalAddress": {
      "common:InternationalAddress": {
        "apd:IntAddressLine": ["1a", "AMERSHAM ROAD", "BEACONSFIELD"],
        "apd:InternationalPostCode": "HP9 2HA",
      },
    },
  };

  it("should populate the Applicant when TextInput components are used", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "applicant.title": "Mme",
        "applicant.name.first": "Jane",
        "applicant.name.last": "Doe",
        "applicant.company.name": "DLUHC",
        "applicant.phone.primary": "(01234) 567890",
        "applicant.email": "jane@gov.uk",
      },
    });

    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();
    const result: IOneAppPayload = parser.parse(xml!);
    const resultApplicant: ApplicantOrAgent = get(result, applicantKey);
    expect(resultApplicant).toMatchObject(expectedApplicant);
  });

  it("should populate the Applicant when a ContactInput component is used", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "_contact.applicant": {
          applicant: {
            title: "Mme",
            firstName: "Jane",
            lastName: "Doe",
            organisation: "Local planning authority",
            phone: "(01234) 567890",
            email: "jane@gov.uk",
          },
        },
        "applicant.title": "Mme",
        "applicant.name.first": "Jane",
        "applicant.name.last": "Doe",
        "applicant.company.name": "DLUHC",
        "applicant.phone.primary": "(01234) 567890",
        "applicant.email": "jane@gov.uk",
      },
    });

    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();
    const result: IOneAppPayload = parser.parse(xml!);
    const resultApplicant: ApplicantOrAgent = get(result, applicantKey);
    expect(resultApplicant).toMatchObject(expectedApplicant);
  });
});

describe("File handling", () => {
  const sessionId = "123";
  const passport = new Passport({ data: mockProposedLDCPassportData });
  const fileAttachmentsKey =
    "portaloneapp:Proposal.portaloneapp:FileAttachments.common:FileAttachment";

  it("includes required files", () => {
    const expectedFileDeclarations = [
      {
        "common:FileName": "application.csv",
        "common:Reference": "Other",
      },
      {
        "common:Identifier": "N10049",
        "common:FileName": "proposal.xml",
        "common:Reference": "Schema XML File",
      },
    ];
    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();
    const isValid = XMLValidator.validate(xml!);
    expect(isValid).toBe(true);
    const result: IOneAppPayload = parser.parse(xml!);
    const fileAttachments: FileAttachment[] = get(result, fileAttachmentsKey);
    expect(fileAttachments).toEqual(
      expect.arrayContaining(expectedFileDeclarations),
    );
  });

  it("includes user uploaded files", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "property.drawing.elevation": [
          {
            url: "https://api.1234.planx.pizza/file/private/nanoId1/user_file.pdf",
          },
        ],
        "proposal.drawing.elevation": [
          {
            url: "https://api.1234.planx.pizza/file/private/nanoId2/user_photo.png",
          },
        ],
      },
    });
    const expectedReviewFileDeclarations = [
      {
        "common:FileName": "nanoId1-user_file.pdf",
        "common:Reference": "Other",
      },
      {
        "common:FileName": "nanoId2-user_photo.png",
        "common:Reference": "Other",
      },
    ];
    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();
    const isValid = XMLValidator.validate(xml!);
    expect(isValid).toBe(true);
    const result: IOneAppPayload = parser.parse(xml!);
    const fileAttachments: FileAttachment[] = get(result, fileAttachmentsKey);
    expect(fileAttachments).toEqual(
      expect.arrayContaining(expectedReviewFileDeclarations),
    );
  });

  it("includes auto generated files", () => {
    const expectedReviewFileDeclarations = [
      {
        "common:FileName": "Overview.htm",
        "common:Reference": "Other",
      },
    ];
    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();
    const isValid = XMLValidator.validate(xml!);
    expect(isValid).toBe(true);
    const result: IOneAppPayload = parser.parse(xml!);
    const fileAttachments: FileAttachment[] = get(result, fileAttachmentsKey);
    expect(fileAttachments).toEqual(
      expect.arrayContaining(expectedReviewFileDeclarations),
    );
  });

  it("includes generated boundary GeoJSON and HTML files when 'property.boundary.site' is present in the passport", () => {
    const expectedBoundaryFileDeclarations = [
      {
        "common:FileName": "LocationPlanGeoJSON.geojson",
        "common:Reference": "Other",
      },
      {
        "common:FileName": "LocationPlan.htm",
        "common:Reference": "Other",
      },
    ];
    const xml = new OneAppPayload({
      sessionId,
      passport: new Passport({
        data: {
          ...passport.data,
          "property.boundary.site": {},
        },
      }),
    }).buildXML();
    expect(xml).not.toBeUndefined();
    const isValid = XMLValidator.validate(xml!);
    expect(isValid).toBe(true);
    const result: IOneAppPayload = parser.parse(xml!);
    const fileAttachments: FileAttachment[] = get(result, fileAttachmentsKey);
    expect(fileAttachments).toEqual(
      expect.arrayContaining(expectedBoundaryFileDeclarations),
    );
  });

  it("does not include a boundary geojson file when 'property.boundary.site' is not present in the passport", () => {
    const xml = new OneAppPayload({
      sessionId,
      passport,
    }).buildXML();
    expect(xml).not.toBeUndefined();
    const isValid = XMLValidator.validate(xml!);
    expect(isValid).toBe(true);
    const result: IOneAppPayload = parser.parse(xml!);
    const fileAttachments: FileAttachment[] = get(result, fileAttachmentsKey);
    expect(fileAttachments).not.toEqual(
      expect.arrayContaining([
        {
          "common:FileName": "LocationPlanGeoJSON.geojson",
          "common:Reference": "Other",
        },
      ]),
    );
  });

  it("includes template doc files when the flow has document templates", () => {
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
    const xml = new OneAppPayload({
      sessionId,
      passport,
      templateNames: ["LDCE", "LDCE_redacted"],
    }).buildXML();
    expect(xml).not.toBeUndefined();
    const isValid = XMLValidator.validate(xml!);
    expect(isValid).toBe(true);
    const result: OneAppPayload = parser.parse(xml!);
    const fileAttachments: FileAttachment[] | undefined = get(
      result,
      fileAttachmentsKey,
    );
    expect(fileAttachments).toEqual(
      expect.arrayContaining(expectedBoundaryFileDeclarations),
    );
  });
});

test("Parsing error", () => {
  const invalidConfig = {
    sessionId: "abc123",
    passport: new Passport({ data: { invalid: "invalid" } }),
  };
  expect(() => new OneAppPayload(invalidConfig).buildXML()).toThrowError(
    /Invalid OneApp Payload/,
  );
});

test("Unhandled error", () => {
  const config = {
    sessionId: "abc123",
    passport: new Passport({ data: mockProposedLDCPassportData }),
  };
  const payload = new OneAppPayload(config) as unknown as {
    buildXML: () => void;
    getXMLBuilder: () => void;
  };
  payload.getXMLBuilder = jest.fn().mockImplementation(() => {
    throw Error();
  });
  expect(() => payload.buildXML()).toThrowError(/Unhandled exception/);
});

describe("Refinement rules", () => {
  const sessionId = "123";

  test("An error is thrown if no email values are submitted", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "applicant.email": undefined,
        "applicant.agent.email": undefined,
      },
    });
    expect(() =>
      new OneAppPayload({
        sessionId,
        passport,
      }).buildXML(),
    ).toThrowError(
      /An email address must be supplied for either applicant or agent/,
    );
  });

  test("Applicant email is optional if agent email is provided", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "applicant.email": undefined,
        "applicant.agent.email": "agent@agency.com",
      },
    });
    expect(() =>
      new OneAppPayload({
        sessionId,
        passport,
      }).buildXML(),
    ).not.toThrowError();
  });

  test("An error is thrown if no telephone values are submitted", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "applicant.phone.primary": undefined,
        "applicant.agent.phone.primary": undefined,
      },
    });
    expect(() =>
      new OneAppPayload({
        sessionId,
        passport,
      }).buildXML(),
    ).toThrowError(
      /A telephone number must be supplied for either applicant or agent/,
    );
  });

  test("Applicant telephone number is optional if agent telephone number is provided", () => {
    const passport = new Passport({
      data: {
        ...mockProposedLDCPassportData,
        "applicant.phone.primary": undefined,
        "applicant.agent.phone.primary": "(123) 456789",
      },
    });
    expect(() =>
      new OneAppPayload({
        sessionId,
        passport,
      }).buildXML(),
    ).not.toThrowError();
  });
});
