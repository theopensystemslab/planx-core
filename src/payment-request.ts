import { gql, GraphQLClient } from "graphql-request";
import { getSessionById, sessionIsLocked } from "./session";
import keyPathAccessor from "lodash.property";
import type { PaymentRequest, Session, KeyPath, Value } from "./types";

export async function createPaymentRequest(
  client: GraphQLClient,
  {
    sessionId,
    sessionPreviewKeys,
    agentName,
    payeeEmail,
  }: {
    sessionId: string;
    sessionPreviewKeys: KeyPath[];
    agentName: string;
    payeeEmail: string;
  }
): Promise<PaymentRequest> {
  const isSessionLocked = await sessionIsLocked(client, sessionId);
  if (!isSessionLocked) {
    throw new Error(
      "session mush be locked before a payment request can be created"
    );
  }
  const session = await getSessionById(client, sessionId);
  const sessionPreviewData: PaymentRequest["sessionPreviewData"] =
    buildSessionPreviewData(session, sessionPreviewKeys); // throws if sessionPreviewData cannot be built
  const response: Record<"insert_payment_requests_one", PaymentRequest> =
    await client.request(
      gql`
        mutation CreatePaymentRequest(
          $sessionId: uuid!
          $sessionPreviewData: jsonb!
          $payeeEmail: string!
        ) {
          insert_payment_requests_one(
            object: {
              session_id: $sessionId
              payee_email: $payeeEmail
              agent_name: $agentName
              session_preview_data: $sessionPreviewData
            }
          ) {
            id: payment_request_id
            agentName: agent_name
            sessionId: session_id
            payeeEmail: payee_email
            sessionPreviewData: session_preview_data
          }
        }
      `,
      { sessionId, sessionPreviewData, agentName, payeeEmail }
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
    const stringKey = keyPath.join(".");
    const value = keyPathAccessor(keyPath)(data);
    if (value === undefined) {
      throw new Error(`passport key ${stringKey} not found in passport data`);
    }
    sessionPreviewData[stringKey] = value as Value;
  });
  return sessionPreviewData;
}
