import omit from "lodash.omit";

import type {
  BOPSFullPayload,
  Passport,
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
  passport: Passport;
}): QuestionAndResponses[] {
  // format dedicated BOPS properties (eg `applicant_email`) as list of questions & responses to match proposal_details
  //   omitting debug data and payload keys already in confirmation details
  const summary: Record<string, any> = {
    ...omit(bopsData, ["planx_debug_data", "files", "proposal_details"]),
  };
  const formattedSummary: {
    question: string;
    responses: Array<Response>;
  }[] = [];
  Object.keys(summary).forEach((key) => {
    formattedSummary.push({
      question: key,
      responses: summary[key],
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
  const conditionalKeys = [
    "application.fee.reference.govPay",
    "bopsId",
    "idoxSubmissionId",
  ];
  conditionalKeys.forEach((key) => {
    if (passport.data?.[key]) {
      references.push({
        question: key,
        responses: passport.data?.[key],
      });
    }
  });

  // concat data sections into single list, each object will be row in CSV
  return references
    .concat(formattedSummary)
    .concat(bopsData["proposal_details"] || [])
    .concat(formattedFiles);
}
