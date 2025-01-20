import { gql, GraphQLClient } from "graphql-request";
import { set as setByKeyPath } from "lodash-es";

import { Passport } from "../models/passport/index.js";
import { getLatestFlowGraph } from "../requests/flow.js";
import type {
  KeyPath,
  PaymentRequest,
  Session,
  Value,
} from "../types/index.js";
import { ComponentType, FlowGraph, Node } from "../types/index.js";
import { getFeeBreakdown } from "../utils/index.js";
import { FeeBreakdown } from "./../types/feeBreakdown.js";
import { getDetailedSessionById } from "./session.js";

export class PaymentRequestClient {
  protected client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
  }

  async create(args: {
    sessionId: string;
    applicantName: string;
    payeeName: string;
    payeeEmail: string;
    sessionPreviewKeys: Array<KeyPath>;
  }): Promise<PaymentRequest> {
    return createPaymentRequest(this.client, args);
  }

  async _markAsPaid(paymentRequestId: string): Promise<boolean> {
    return _markPaymentRequestAsPaid(this.client, paymentRequestId);
  }

  async _destroy(paymentRequestId: string): Promise<boolean> {
    return _destroyPaymentRequest(this.client, paymentRequestId);
  }
}

type PayNode = {
  type: ComponentType.Pay;
  data: {
    fn: string;
    govPayMetadata?: {
      key: string;
      value: string | boolean;
    }[];
  };
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
  },
): Promise<PaymentRequest> {
  const session = await getDetailedSessionById(client, sessionId);
  if (!session) {
    throw new Error("session not found");
  }
  if (!session.lockedAt) {
    throw new Error(
      "session must be locked before a payment request can be created",
    );
  }
  if (session.data.govUkPayment) {
    throw new Error(
      "cannot initiate a new payment request for a session which already has a GovUKPayment initialised",
    );
  }

  // build sessionPreviewData using sessionPreviewKeys
  // this throws if data is missing/invalid
  const sessionPreviewData = extractSessionPreviewData(
    session,
    sessionPreviewKeys,
  );

  // payment requests can only be created for flows with a pay component
  // this throws if the pay component cannot be found
  const payNode = await getPayNode(client, session);
  const govPayMetadata = payNode.data?.govPayMetadata || [
    { key: "source", value: "PlanX" },
    { key: "paidViaInviteToPay", value: true },
    { key: "flow", value: session.flow.slug },
  ];

  let feeBreakdown: FeeBreakdown | undefined = undefined;

  try {
    feeBreakdown = getFeeBreakdown(session.data.passport.data);
  } catch (error) {
    // Fail silently, frontend will handle missing fee breakdown
    console.error(`Unable to generate fee breakdown for session ${sessionId}`);
  }

  const paymentAmountPounds = await getPaymentAmount(session);
  if (!paymentAmountPounds)
    throw new Error("Payment amount not found in passport");

  // Payment amount is stored in the passport in pounds, as a decimal (123.45)
  // GovPay requires the amount as an integer in pence (12345)
  const toPence = (decimal: number) => Math.trunc(decimal * 100);
  const paymentAmount = toPence(paymentAmountPounds);
  if (paymentAmount <= 0) {
    throw new Error(
      `payment amount must be a positive integer but was "${paymentAmount}"`,
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
          $govPayMetadata: jsonb!
          $feeBreakdown: jsonb
        ) {
          insert_payment_requests_one(
            object: {
              session_id: $sessionId
              applicant_name: $applicantName
              payee_name: $payeeName
              payee_email: $payeeEmail
              payment_amount: $paymentAmount
              session_preview_data: $sessionPreviewData
              govpay_metadata: $govPayMetadata
              fee_breakdown: $feeBreakdown
            }
          ) {
            id
            sessionId: session_id
            applicantName: applicant_name
            payeeName: payee_name
            payeeEmail: payee_email
            paymentAmount: payment_amount
            sessionPreviewData: session_preview_data
            govPayMetadata: govpay_metadata
            feeBreakdown: fee_breakdown
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
        govPayMetadata,
        feeBreakdown,
      },
    );
  return response?.insert_payment_requests_one;
}

export function extractSessionPreviewData(
  session: Session,
  sessionPreviewKeys: KeyPath[],
): PaymentRequest["sessionPreviewData"] {
  const passport = new Passport(session.data.passport);
  if (
    typeof passport.data === "object" &&
    Object.keys(passport.data).length === 0
  ) {
    throw new Error("passport data not found");
  }
  const sessionPreviewData: PaymentRequest["sessionPreviewData"] = {};
  sessionPreviewKeys.forEach((keyPath: KeyPath) => {
    if (!passport.has(keyPath)) {
      throw new Error(
        `passport key "${keyPath.join(".")}" not found in passport data`,
      );
    }
    const value = passport.any(keyPath);
    setByKeyPath(sessionPreviewData, keyPath, value as Value);
  });
  return sessionPreviewData;
}

/**
 * Find the "Pay" node from the flow
 * Required to get metadata and match to match the "Pay" breadcrumb from the user's passport
 */
async function getPayNode(
  client: GraphQLClient,
  session: Session,
): Promise<PayNode> {
  const flow: FlowGraph | null = await getLatestFlowGraph(
    client,
    session.flow.id,
  );
  if (!flow) {
    throw new Error("flow not found");
  }

  const payNodes = Object.entries(flow)
    .filter(
      ([_nodeId, node]: [string, Node]) => node.type === ComponentType.Pay,
    )
    .map(([_nodeId, node]) => node as PayNode);

  if (payNodes.length < 1) {
    throw new Error("could not find a pay node");
  } else if (payNodes.length > 1) {
    throw new Error("found more than one pay node");
  }

  return payNodes[0];
}

/**
 * Find the payment amount from the the passport
 */
async function getPaymentAmount(session: Session): Promise<number | undefined> {
  const amountKey = "application.fee.payable";
  return new Passport(session.data.passport).number([amountKey]);
}

export async function _markPaymentRequestAsPaid(
  client: GraphQLClient,
  paymentRequestId: string,
): Promise<boolean> {
  const response: {
    update_payment_requests_by_pk: { paid_at?: string };
  } = await client.request(
    gql`
      mutation MarkPaymentRequestAsPaid($paymentRequestId: uuid!) {
        update_payment_requests_by_pk(
          pk_columns: { id: $paymentRequestId }
          _set: { paid_at: "now()" }
        ) {
          paid_at
        }
      }
    `,
    { paymentRequestId },
  );
  return Boolean(response.update_payment_requests_by_pk.paid_at);
}

export async function _destroyPaymentRequest(
  client: GraphQLClient,
  paymentRequestId: string,
): Promise<boolean> {
  const response: {
    delete_payment_requests_by_pk: { id: string } | null;
  } = await client.request(
    gql`
      mutation DestroyPaymentRequest($paymentRequestId: uuid!) {
        delete_payment_requests_by_pk(id: $paymentRequestId) {
          id
        }
      }
    `,
    { paymentRequestId },
  );
  return Boolean(response.delete_payment_requests_by_pk?.id);
}
