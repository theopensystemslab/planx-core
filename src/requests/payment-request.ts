import { gql, GraphQLClient } from "graphql-request";
import setByKeyPath from "lodash.set";

import { Passport } from "../models/passport";
import type {
  DataObject,
  KeyPath,
  OrderedSession,
  PaymentRequest,
} from "../types";
import { ComponentType } from "../types";
import { SessionClient } from "./session";

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
  const session = await new SessionClient(client).find(sessionId);
  if (!session) {
    throw new Error("session not found");
  }
  if (!session.lockedAt) {
    throw new Error(
      "session must be locked before a payment request can be created",
    );
  }
  if (session.paymentId) {
    throw new Error(
      "cannot initiate a new payment request for a session which already has a successful payment",
    );
  }

  // build sessionPreviewData using sessionPreviewKeys
  // this throws if data is missing/invalid
  const sessionPreviewData: DataObject = extractSessionPreviewData(
    session,
    sessionPreviewKeys,
  );

  // this throws if amount cannot be found
  const paymentAmountPounds = getPaymentAmount(session);

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
      },
    );
  return response?.insert_payment_requests_one;
}

export function extractSessionPreviewData(
  session: OrderedSession,
  sessionPreviewKeys: KeyPath[],
): DataObject {
  if (!session.passport?.data) {
    throw new Error("passport data not found");
  }
  const passport = new Passport(session.passport);

  const sessionPreviewData: PaymentRequest["sessionPreviewData"] = {};
  sessionPreviewKeys.forEach((keyPath: KeyPath) => {
    if (!passport.has(keyPath)) {
      const stringKey = keyPath.join(".");
      throw new Error(`passport key "${stringKey}" not found in passport data`);
    }
    const value = passport.any(keyPath);
    setByKeyPath(sessionPreviewData, keyPath, value);
  });
  return sessionPreviewData;
}

// find the payment amount set in the passport
function getPaymentAmount(session: OrderedSession): number {
  const payCrumb = session.breadcrumbs.find(
    (crumb) => crumb.type === ComponentType.Pay,
  );
  const amountKey =
    (payCrumb?.questionData?.fn as string) || "application.fee.payable";
  const amount = session.passport[amountKey];
  if (!amount) throw new Error("Payment amount not found in passport");
  return amount;
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
