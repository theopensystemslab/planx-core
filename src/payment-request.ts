import { gql, GraphQLClient } from "graphql-request";
import { getDetailedSessionById } from "./session";
import { getLatestFlowGraph } from "./flow";
import keyPathAccessor from "lodash.property";
import setByKeyPath from "lodash.set";
import { ComponentType } from "./types";
import { sortFlow, sortBreadcrumbs } from "./logic";
import type { PaymentRequest, Session, KeyPath, Value } from "./types";

type PayNode = {
  type: ComponentType.Pay;
  data: { fn: string | undefined };
};

export async function createPaymentRequest(
  client: GraphQLClient,
  {
    sessionId,
    applicantName,
    payeeName,
    payeeEmail,
    sessionPreviewKeys,
  }: {
    sessionId: string;
    applicantName: string;
    payeeName: string;
    payeeEmail: string;
    sessionPreviewKeys: KeyPath[];
  }
): Promise<PaymentRequest> {
  const session = await getDetailedSessionById(client, sessionId);
  if (!session) {
    throw new Error("session not found");
  }
  if (!session.lockedAt) {
    throw new Error(
      "session must be locked before a payment request can be created"
    );
  }

  // build sessionPreviewData using sessionPreviewKeys
  // this throws if data is missing/invalid
  const sessionPreviewData = extractSessionPreviewData(
    session,
    sessionPreviewKeys
  );

  // payment requests can only be created for flows with a pay component
  // this throws if the pay component cannot be found
  const paymentAmountPounds = await getPaymentAmount(client, session);
  if (!paymentAmountPounds)
    throw new Error("Payment amount not found in passport");

  // Payment amount is stored in the passport in pounds, as a decimal (123.45)
  // GovPay requires the amount as an integer in pence (12345)
  const toPence = (decimal: number) => Math.trunc(decimal * 100);
  const paymentAmount = toPence(paymentAmountPounds);
  if (paymentAmount <= 0) {
    throw new Error(
      `payment amount must be a positive integer but was "${paymentAmount}"`
    );
  }

  const response: Record<"insert_payment_requests_one", PaymentRequest> =
    await client.request(
      gql`
        mutation CreatePaymentRequest(
          $sessionId: uuid!
          $applicantName: String!
          $payeeName: String!
          $payeeEmail: String!
          $paymentAmount: Int!
          $sessionPreviewData: jsonb!
        ) {
          insert_payment_requests_one(
            object: {
              session_id: $sessionId
              applicant_name: $applicantName
              payee_name: $payeeName
              payee_email: $payeeEmail
              payment_amount: $paymentAmount
              session_preview_data: $sessionPreviewData
            }
          ) {
            id
            sessionId: session_id
            applicantName: applicant_name
            payeeName: payee_name
            payeeEmail: payee_email
            paymentAmount: payment_amount
            sessionPreviewData: session_preview_data
          }
        }
      `,
      {
        sessionId,
        applicantName,
        payeeName,
        payeeEmail,
        paymentAmount,
        sessionPreviewData,
      }
    );
  return response?.insert_payment_requests_one;
}

export function extractSessionPreviewData(
  session: Session,
  sessionPreviewKeys: KeyPath[]
): PaymentRequest["sessionPreviewData"] {
  if (!session.data.passport?.data) {
    throw new Error("passport data not found");
  }
  const passport = session.data.passport.data!;
  const sessionPreviewData: PaymentRequest["sessionPreviewData"] = {};
  sessionPreviewKeys.forEach((keyPath: KeyPath) => {
    const value = keyPathAccessor(keyPath)(passport);
    if (value === undefined) {
      const stringKey = keyPath.join(".");
      throw new Error(`passport key "${stringKey}" not found in passport data`);
    }
    setByKeyPath(sessionPreviewData, keyPath, value as Value);
  });
  return sessionPreviewData;
}

// find the payment set in the passport
async function getPaymentAmount(
  client: GraphQLClient,
  session: Session
): Promise<number | undefined> {
  if (!session.data?.breadcrumbs) {
    throw new Error("breadcrumbs not found");
  }
  const breadcrumbs = session.data.breadcrumbs!;

  if (!session.data?.passport?.data) {
    throw new Error("passport not found");
  }
  const passport = session.data.passport.data!;

  const flowId = session.flowId;
  const flowGraph = await getLatestFlowGraph(client, flowId);
  if (!flowGraph) {
    throw new Error("flow not found");
  }

  const orderedBreadcrumbs = sortBreadcrumbs(flowGraph, breadcrumbs);
  const lastCrumb = orderedBreadcrumbs.at(-1)!;

  // if breadcrumbs includes the pay node
  // use its key to find the pay amount in the passport
  if (lastCrumb.type === ComponentType.Pay) {
    const amountKey = getPaymentAmountKeyFromNode(
      flowGraph[lastCrumb.id] as PayNode
    );
    return passport[amountKey];
  }

  const lastCrumbRootIndex = flowGraph._root.edges.indexOf(lastCrumb.id);

  // otherwise the pay node may not have been entered into breadcrumbs so
  // find the next node that is a pay component and use its key to find
  // the pay amount in the passport
  for (const node of sortFlow(flowGraph)) {
    const isNextNodeAfterLastCrumb =
      node.parentId === lastCrumb.id ||
      (lastCrumbRootIndex >= 0 &&
        node.id == flowGraph._root.edges[lastCrumbRootIndex + 1]);
    if (isNextNodeAfterLastCrumb && node.type === ComponentType.Pay) {
      const amountKey = getPaymentAmountKeyFromNode(
        flowGraph[node.id] as PayNode
      );
      return passport[amountKey];
    }
  }

  // throw if a pay component was not found
  throw new Error("could not find a pay node");
}

function getPaymentAmountKeyFromNode(payNode: PayNode) {
  const defaultPaymentKey = "application.fee.payable";
  return payNode.data.fn || defaultPaymentKey;
}
