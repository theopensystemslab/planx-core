import { gql, GraphQLClient } from "graphql-request";
import { getDetailedSessionById } from "./session";
import keyPathAccessor from "lodash.property";
import setByKeyPath from "lodash.set";
import type { PaymentRequest, Session, KeyPath, Value } from "./types";

export async function createPaymentRequest(
  client: GraphQLClient,
  {
    sessionId,
    sessionPreviewKeys,
    payeeName,
    payeeEmail,
    originatorEmail,
  }: {
    sessionId: string;
    sessionPreviewKeys: KeyPath[];
    payeeName: string;
    payeeEmail: string;
    originatorEmail: string,
  }
): Promise<PaymentRequest> {
  // Grant public client permissions to access individual session
  client.setHeaders({
    "x-hasura-lowcal-session-id": sessionId,
    "x-hasura-lowcal-email": originatorEmail,
  })

  const session = await getDetailedSessionById(client, sessionId);
  if (!session) {
    throw new Error("session not found");
  }
  if (!session.lockedAt) {
    throw new Error(
      "session must be locked before a payment request can be created"
    );
  }
  const sessionPreviewData: PaymentRequest["sessionPreviewData"] =
    buildSessionPreviewData(session, sessionPreviewKeys); // throws if sessionPreviewData cannot be built
  const response: Record<"insert_payment_requests_one", PaymentRequest> =
    await client.request(
      gql`
        mutation CreatePaymentRequest(
          $sessionId: uuid!
          $payeeName: String!
          $payeeEmail: String!
          $sessionPreviewData: jsonb!
        ) {
          insert_payment_requests_one(
            object: {
              session_id: $sessionId
              payee_name: $payeeName
              payee_email: $payeeEmail
              session_preview_data: $sessionPreviewData
            }
          ) {
            id
            sessionId: session_id
            payeeName: payee_name
            payeeEmail: payee_email
            sessionPreviewData: session_preview_data
          }
        }
      `,
      { sessionId, payeeName, payeeEmail, sessionPreviewData }
    );
  return response?.insert_payment_requests_one;
}

export function buildSessionPreviewData(
  session: Session,
  sessionPreviewKeys: KeyPath[]
): PaymentRequest["sessionPreviewData"] {
  if (!session.data.passport?.data) {
    throw new Error("passport data not found");
  }
  const data = session.data.passport.data!;
  const sessionPreviewData: PaymentRequest["sessionPreviewData"] = {};
  sessionPreviewKeys.forEach((keyPath: KeyPath) => {
    const value = keyPathAccessor(keyPath)(data);
    if (value === undefined) {
      const stringKey = keyPath.join(".");
      throw new Error(`passport key ${stringKey} not found in passport data`);
    }
    setByKeyPath(sessionPreviewData, keyPath, value as Value);
  });
  return sessionPreviewData;
}
