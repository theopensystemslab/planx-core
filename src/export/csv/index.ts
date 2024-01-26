import { omit } from "lodash";

import { Passport } from "../../models";
import type {
  BOPSFullPayload,
  Passport as IPassport,
  QuestionAndResponses,
  Response,
} from "../../types";

export function computeCSVData({
  sessionId,
  bopsData,
  passport,
}: {
  sessionId: string;
  bopsData: BOPSFullPayload;
  passport: IPassport;
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

  // check if the passport has payment or submission ids, add them as reference rows if exist
  const passportInstance = new Passport(passport);
  const conditionalKeys = [
    "application.fee.reference.govPay",
    "bopsId",
    "idoxSubmissionId",
  ];
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
    .concat(formattedSummary)
    .concat(bopsData["proposal_details"] || [])
    .concat(formattedFiles);
}
