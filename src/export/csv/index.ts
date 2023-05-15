import { GraphQLClient } from "graphql-request";
import omit from "lodash.omit";
import { getFlowName, getLatestFlowGraph } from "../../flow";
import { getSessionById } from "../../session";
import { getBOPSParams } from "../bops/index";
import { BOPSFullPayload, QuestionAndResponses, Response } from "../bops/model";
import { CSVData } from "./model";

export async function generateCSVData(
  client: GraphQLClient,
  sessionId: string
): Promise<CSVData> {
  const session = await getSessionById(client, sessionId);
  const flow = await getLatestFlowGraph(client, session.flowId);
  if (!flow)
    throw new Error(
      `Cannot get flow ${session.flowId}, therefore cannot generate CSV data.`
    );
  const flowName = await getFlowName(client, session.flowId);

  const bopsData = getBOPSParams({
    breadcrumbs: session.data.breadcrumbs,
    flow: flow,
    passport: session.data.passport,
    sessionId: session.id,
    flowName: flowName,
  });

  // format dedicated BOPS properties (eg `applicant_email`) as list of questions & responses to match proposal_details
  //   omitting debug data and payload keys already in confirmation details
  const summary: BOPSFullPayload = {
    ...omit(bopsData, ["planx_debug_data", "files", "proposal_details"]),
  };
  const formattedSummary: { question: string; responses: Array<Response> }[] = [];
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
      responses: [{ value: file.filename.split("/").pop() || "Unknown filename" }],
      metadata: { notes: file.applicant_description || "" },
    });
  });

  // gather key reference fields, these will be first rows of CSV
  const references: { question: string; responses: Array<Response> }[] = [
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
    if (session.data.passport.data?.[key]) {
      references.push({
        question: key,
        responses: session.data.passport.data?.[key],
      });
    }
  });

  // concat data sections into single list, each object will be row in CSV
  return references
    .concat(formattedSummary)
    .concat(bopsData["proposal_details"] || [])
    .concat(formattedFiles);
}
