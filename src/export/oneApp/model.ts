import { XMLBuilder, XmlBuilderOptions } from "fast-xml-parser";
import type { PartialDeep } from "type-fest";
import { ZodError } from "zod";

import { Passport } from "../../models/passport/index.js";
import type {
  Address,
  AddressSources,
  GovUKPayment,
  SiteAddress,
} from "../../types/index.js";
import { GOV_PAY_PASSPORT_KEY } from "../../types/index.js";
import { iOneAppPayloadSchema } from "./schema.js";
import type {
  ApplicantOrAgent,
  ApplicationScenario,
  ConsentRegimes,
  ExistingUseApplication,
  ExternalAddress,
  FileAttachment,
  IOneAppPayload,
  Payment,
  ProposedUseApplication,
} from "./types.js";

/**
 * Available values for passport variable "application.type"
 */
export type PlanXAppTypes = "ldc.existing" | "ldc.proposed";

interface OneAppPayloadArgs {
  sessionId: string;
  passport: Passport;
  templateNames?: string[] | undefined;
}

export class OneAppPayload {
  sessionId: string;
  passport: Passport;
  templateNames: string[];

  proposalCompletionDate: string;
  siteAddress: SiteAddress;
  payload: PartialDeep<IOneAppPayload>;

  constructor({ sessionId, passport, templateNames }: OneAppPayloadArgs) {
    this.sessionId = sessionId;
    this.passport = passport;
    this.templateNames = templateNames || [];

    this.proposalCompletionDate = this.setProposalCompletionDate();
    this.siteAddress = this.getSiteAddress();
    this.payload = this.mapPassportToOneAppPayload();
  }

  private stringToBool(value: string): boolean | undefined {
    if (value) return value.toLowerCase() === "true";
  }

  private mapPassportToOneAppPayload(): PartialDeep<IOneAppPayload> {
    return {
      "portaloneapp:Proposal": {
        "portaloneapp:ApplicationHeader": {
          "portaloneapp:ApplicationTo": this.passport.string([
            "uniform.applicationTo",
          ]),
          "portaloneapp:DateSubmitted": this.proposalCompletionDate,
          "portaloneapp:RefNum": this.sessionId,
          "portaloneapp:FormattedRefNum": this.sessionId,
          "portaloneapp:Payment": this.getPayment(),
        },
        "portaloneapp:FileAttachments": {
          "common:FileAttachment": [
            ...(this.getGeneratedFiles() as FileAttachment[]),
            ...(this.getUserUploadedFiles() as FileAttachment[]),
          ],
        },
        "portaloneapp:Applicant": this.getApplicant(),
        "portaloneapp:Agent": this.getAgent(),
        "portaloneapp:SiteLocation": {
          "bs7666:BS7666Address": {
            "bs7666:PAON": {
              "bs7666:Description":
                this.siteAddress.pao || this.siteAddress.title,
            },
            "bs7666:StreetDescription": this.siteAddress.street,
            "bs7666:Town": this.siteAddress.town,
            "bs7666:PostCode": this.siteAddress.postcode,
            "bs7666:UniquePropertyReferenceNumber": this.siteAddress.uprn,
          },
          "common:SiteGridRefence": {
            "bs7666:X": Math.round(this.siteAddress.x),
            "bs7666:Y": Math.round(this.siteAddress.y),
          },
        },
        "portaloneapp:ApplicationScenario": {
          "portaloneapp:ScenarioNumber":
            (this.passport.string([
              "uniform.scenarioNumber",
            ]) as ApplicationScenario["portaloneapp:ScenarioNumber"]) ||
            undefined,
        },
        "portaloneapp:ConsentRegimes": {
          "portaloneapp:ConsentRegime":
            (this.passport.string([
              "uniform.consentRegime",
            ]) as ConsentRegimes["portaloneapp:ConsentRegime"]) || undefined,
        },
        "portaloneapp:ApplicationData": {
          "portaloneapp:Advice": {
            "common:HaveSoughtAdvice": this.passport.boolean([
              "application.preAppAdvice",
            ]),
          },
          "portaloneapp:SiteVisit": {
            "common:SeeSite": this.passport.boolean(["uniform.siteVisit"]),
            // TODO: Can we just drop this?
            "common:VisitContactDetails": {
              "common:ContactAgent": "",
            },
          },
          "portaloneapp:CertificateLawfulness":
            this.getCertificateOfLawfulness(),
        },
        "portaloneapp:Declaration": {
          "common:DeclarationDate": this.proposalCompletionDate,
          "common:DeclarationMade": this.passport.string([
            "application.declaration.accurate",
          ]),
          "common:Signatory": {
            _PersonRole: this.passport.string(["uniform.personRole"]),
          },
        },
        "portaloneapp:DeclarationOfInterest": {
          "common:IsRelated": this.passport.boolean(["uniform.isRelated"]),
        },
      },
    };
  }

  private getCertificateOfLawfulness():
    | PartialDeep<ProposedUseApplication>
    | ExistingUseApplication {
    const planXAppType = this.passport.string([
      "application.type",
    ]) as PlanXAppTypes;
    return planXAppType === "ldc.proposed"
      ? this.getProposedUseApplication()
      : this.getExistingUseApplication();
  }

  // TODO: A lot of duplication here I'm sure we can tidy up
  // Test this once we are confident we have reached feature parity
  private getProposedUseApplication(): PartialDeep<ProposedUseApplication> {
    return {
      "portaloneapp:ProposedUseApplication": {
        "portaloneapp:DescriptionCPU": {
          "common:IsUseChange": this.stringToBool(
            this.passport.string(["uniform.isUseChange"]),
          ),
          "common:ProposedUseDescription": this.passport.string([
            "proposal.description",
          ]),
          "common:ExistingUseDescription": this.passport.string([
            "proposal.description",
          ]),
          "common:IsUseStarted": this.stringToBool(
            this.passport.string(["proposal.started"]),
          ),
        },
        "portaloneapp:GroundsCPU": {
          "common:UseLawfulnessReason": this.passport.string([
            "proposal.description",
          ]),
          "common:SupportingInformation": {
            "common:Reference": this.passport.string(["proposal.description"]),
          },
          "common:ProposedUseStatus": this.passport.string([
            "uniform.proposedUseStatus",
          ]),
          "common:LawfulDevCertificateReason": this.passport.string([
            "proposal.description",
          ]),
        },
      },
    };
  }

  private getExistingUseApplication(): ExistingUseApplication {
    return {
      "portaloneapp:ExistingUseApplication": {
        "portaloneapp:DescriptionCEU": this.passport.string([
          "proposal.description",
        ]),
        "portaloneapp:GroundsCEU": {
          "common:CertificateLawfulnessReason": this.passport.string([
            "proposal.description",
          ]),
        },
        "portaloneapp:InformationCEU": {
          "common:UseBegunDate":
            this.passport.string(["proposal.started.date"]) || undefined,
        },
      },
    };
  }

  private getApplicant(): PartialDeep<ApplicantOrAgent> {
    return this.getApplicantOrAgent("applicant");
  }

  private getAgent(): PartialDeep<ApplicantOrAgent> | undefined {
    const isAgentInPassport = Boolean(
      this.passport.string(["applicant.agent.name.first"]),
    );
    if (!isAgentInPassport) return;
    return this.getApplicantOrAgent("applicant.agent");
  }

  private getApplicantOrAgent(
    person: "applicant.agent" | "applicant",
  ): PartialDeep<ApplicantOrAgent> {
    return {
      "common:PersonName": {
        "pdt:PersonNameTitle":
          this.passport.string([`${person}.title`]) || undefined,
        "pdt:PersonGivenName": this.passport.string([`${person}.name.first`]),
        "pdt:PersonFamilyName": this.passport.string([`${person}.name.last`]),
      },
      "common:OrgName":
        this.passport.string([`${person}.company.name`]) || undefined,
      "common:ContactDetails": {
        "common:Email": {
          "apd:EmailAddress":
            this.passport.string([`${person}.email`]) || undefined,
        },
        "common:Telephone": {
          "apd:TelNationalNumber":
            this.passport.string([`${person}.phone.primary`]) || undefined,
        },
      },
      "common:ExternalAddress": this.getAddressForPerson(person),
    };
  }

  private getAddressForPerson(
    person: "applicant.agent" | "applicant",
  ): ExternalAddress {
    const address = this.passport.data[
      `${person}.address`
    ] as unknown as Address;
    if (address)
      return {
        "common:InternationalAddress": {
          "apd:IntAddressLine": [
            address?.line1,
            address?.line2,
            address?.town,
            address?.county,
          ].filter(Boolean) as string[],
          "apd:Country": address?.country,
          "apd:InternationalPostCode": address?.postcode,
        },
      };

    // If we do not have an address for the person, derive one from the SiteAddress which will always be present
    return this.getAddressFromSiteAddress();
  }

  private getAddressFromSiteAddress(): ExternalAddress {
    return {
      "common:InternationalAddress": {
        "apd:IntAddressLine": this.siteAddress.title?.split(", "),
        "apd:InternationalPostCode": this.siteAddress.postcode,
      },
    };
  }

  private getGeneratedFiles(): Partial<FileAttachment>[] {
    // TODO: Test if "N10049" is a required value. Schema suggests that it isn't.
    const files = [
      {
        "common:Identifier": "N10049",
        "common:FileName": "proposal.xml",
        "common:Reference": "Schema XML File",
      },
      {
        "common:FileName": "application.csv",
      },
      {
        "common:FileName": "Overview.htm",
      },
      {
        "common:FileName": "RedactedOverview.htm",
      },
    ];

    if (this.passport.data["property.boundary.site"]) {
      files.push({
        "common:FileName": "LocationPlanGeoJSON.geojson",
      });
      files.push({
        "common:FileName": "LocationPlan.htm",
      });
    }

    for (const templateName of this.templateNames) {
      files.push({
        "common:FileName": `${templateName}.doc`,
      });
    }

    return files;
  }

  private getUserUploadedFiles(): Partial<FileAttachment>[] {
    return this.passport.getFileURLs().map((file) => {
      const uniqueFilename = decodeURIComponent(
        file.split("/").slice(-2).join("-"),
      );
      return {
        "common:FileName": uniqueFilename,
      };
    });
  }

  private setProposalCompletionDate(): string {
    // ensure that date is valid and in yyyy-mm-dd format
    let proposalCompletionDate = this.passport.string([
      "proposal.completion.date",
    ]);
    if (proposalCompletionDate) {
      proposalCompletionDate = new Date(proposalCompletionDate)
        .toISOString()
        .split("T")[0];
    } else {
      proposalCompletionDate = new Date(Date.now()).toISOString().split("T")[0];
    }
    return proposalCompletionDate;
  }

  private getPayment(): Partial<Payment> {
    const payment = this.passport.data[
      GOV_PAY_PASSPORT_KEY
    ] as unknown as GovUKPayment;
    return {
      "common:AmountDue": this.passport.number(["application.fee.payable"]),
      "common:AmountPaid": payment?.amount,
    };
  }

  private getSiteAddress(): SiteAddress {
    const number = (field: string): number => {
      return this.passport.number(["_address", field]);
    };
    const string = (field: string): string => {
      return this.passport.string(["_address", field]);
    };
    const optionalString = (field: string): string | undefined => {
      return string(field) || undefined;
    };
    return {
      latitude: number("latitude"),
      longitude: number("longitude"),
      x: number("x"),
      y: number("y"),
      title: string("title"),
      source: string("source") as AddressSources,
      uprn: optionalString("uprn"),
      blpu_code: optionalString("blpu_code"),
      organisation: optionalString("organisation"),
      sao: optionalString("sao"),
      pao: optionalString("pao"),
      street: optionalString("street"),
      town: optionalString("town"),
      postcode: optionalString("postcode"),
      single_line_address: optionalString("single_line_address"),
      planx_description: optionalString("planx_description"),
      planx_value: optionalString("planx_value"),
    };
  }

  private getXMLBuilder(): XMLBuilder {
    const buildOptions: Partial<XmlBuilderOptions> = {
      ignoreAttributes: false,
      attributeNamePrefix: "_",
      format: true,
      suppressEmptyNode: true,
    };
    return new XMLBuilder(buildOptions);
  }

  public buildXML(): string {
    const xmlDeclaration = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n`;
    try {
      const validatedPayload = iOneAppPayloadSchema.parse(this.payload);
      const xmlBuilder = this.getXMLBuilder();
      const xml: string = xmlBuilder.build(validatedPayload);
      return xmlDeclaration + xml;
    } catch (error) {
      // Fail silently, do not notify applicant of failure
      if (error instanceof ZodError) {
        throw Error(
          `Invalid OneApp Payload for session ${this.sessionId}. Errors: ${error}`,
        );
      }
      throw Error(
        `Unhandled exception when building XML for session ${this.sessionId}. Errors: ${error}`,
      );
    }
  }
}
