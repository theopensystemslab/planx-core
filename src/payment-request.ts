import { gql, GraphQLClient } from "graphql-request";
import { PaymentRequest } from "./types";

export async function createPaymentRequest(
  client: GraphQLClient,
  {
    sessionId,
    payeeEmail,
    data,
  }: { sessionId: string; payeeEmail: string; data: PaymentRequest["data"] }
): Promise<PaymentRequest> {
  const response: Record<"insert_payment_requests_one", PaymentRequest> =
    await client.request(
      gql`
        mutation CreatePaymentRequest(
          $sessionId: uuid!
          $data: jsonb!
          $payeeEmail: string!
        ) {
          insert_payment_requests_one(
            object: {
              payee_email: $payeeEmail
              session_id: $sessionId
              session_preview_data: $data
            }
          )
        }
      `,
      { sessionId, data, payeeEmail }
    );
  return response?.insert_payment_requests_one;
}
