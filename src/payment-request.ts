import { gql, GraphQLClient } from "graphql-request";
import { getSessionById } from "./session";
import type {
  PaymentRequest,
  PaymentRequestSessionPreview,
  Session,
} from "./types";

export async function createPaymentRequest(
  client: GraphQLClient,
  { sessionId, payeeEmail }: { sessionId: string; payeeEmail: string }
): Promise<PaymentRequest> {
  const session = await getSessionById(client, sessionId);
  const data: PaymentRequest["data"] = extractSessionPreviewData(session); // can throw
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
          ) {
            id
            session_id: sessionId
            payee_email: payeeEmail
            session_preview_data: data
          }
        }
      `,
      { sessionId, data, payeeEmail }
    );
  return response?.insert_payment_requests_one;
}

export function extractSessionPreviewData(
  session: Session
): PaymentRequestSessionPreview {
  if (!session.data.passport?.data) {
    throw new Error("passport data not found");
  }
  const data = session.data.passport.data!;
  const agentFirstName: string | undefined = data["applicant.agent.name.first"];
  const agentLastName: string | undefined = data["applicant.agent.name.last"];
  const projectType: string | undefined = data["proposal.projectType"];
  const address: string | undefined = data._address?.["single_line_address"];
  const agentName = [agentFirstName, agentLastName].filter(Boolean).join(" ");
  if (!agentName || !projectType || !address) {
    throw new Error("session missing required data");
  }
  return {
    agentName: agentName!,
    address: address!,
    projectType: projectType!,
  };
}
