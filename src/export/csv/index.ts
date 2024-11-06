import { omit } from "lodash";

import { Passport } from "../../models";
import type {
  BOPSFullPayload,
  GovUKPayment,
  Passport as IPassport,
  QuestionAndResponses,
  Response,
} from "../../types";

export function computeCSVData({
  sessionId,
  bopsData,
  passport,
  govUkPayment,
}: {
  sessionId: string;
  bopsData: BOPSFullPayload;
  passport: IPassport;
  govUkPayment?: GovUKPayment;
}): QuestionAndResponses[] {
  // format dedicated BOPS properties (eg `applicant_email`) as list of questions & responses to match proposal_details
  //   omitting debug data and payload keys already in confirmation details
  const summary: Partial<BOPSFullPayload> = {
    ...omit(bopsData, ["planx_debug_data", "files", "proposal_details"]),
  };
  const formattedSummary: {
    question: string;
    responses: Response[];
  }[] = [];
  Object.keys(summary).forEach((key) => {
    formattedSummary.push({
      question: key,
      responses: summary[key as keyof typeof summary] as Response[],
    });
  });

  // similarly format file uploads as list of questions, responses, metadata
  const formattedFiles: QuestionAndResponses[] = [];
  bopsData["files"]?.forEach((file) => {
    formattedFiles.push({
      question: file.tags
        ? `File upload: ${file.tags.join(", ")}`
        : "File upload",
      responses: file.filename.split("/").pop() || "Unknown file name",
      metadata: { notes: file.applicant_description || "" },
    });
  });

  // gather key reference fields, these will be first rows of CSV
  const references: {
    question: string;
    responses: Array<Response> | string;
  }[] = [
    {
      question: "Planning Application Reference", // match language used on Confirmation page
      responses: sessionId,
    },
    {
      question: "Property Address",
      responses: [
        bopsData.site?.address_1,
        bopsData.site?.address_2,
        bopsData.site?.town,
        bopsData.site?.postcode,
      ]
        .filter(Boolean)
        .join(" ")
        .replaceAll(",", ""), // omit commas for csv > pdf parsing later by Uniform
    },
  ];

  const passportInstance = new Passport(passport);

  // check if the passport has payment info (or session govUkPayment if invite to pay), add as reference row if exists
  const selfPayPassportKey = "application.fee.reference.govPay";
  if (passportInstance.has([selfPayPassportKey]) || govUkPayment) {
    references.push({
      question: selfPayPassportKey,
      responses:
        (passportInstance.any([selfPayPassportKey]) as Response[]) ||
        (govUkPayment as unknown as Response[]),
    });
  }

  // check if the passport has submission ids, add them as reference rows if exist
  const conditionalKeys = ["bopsId", "idoxSubmissionId"];
  conditionalKeys.forEach((key) => {
    if (passportInstance.has([key])) {
      references.push({
        question: key,
        responses: passportInstance.any([key]) as Response[],
      });
    }
  });

  // concat data sections into single list, each object will be row in CSV
  return references
    .concat(
      formattedSummary.filter(
        (record) => !record.responses.some((response) => response.value !== ""),
      ),
    )
    .concat(
      bopsData["proposal_details"]?.filter(
        (detail) => detail.responses.length > 0,
      ) || [],
    )
    .concat(formattedFiles);
}
