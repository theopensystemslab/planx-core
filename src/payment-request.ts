import { gql, GraphQLClient } from "graphql-request";
import { getDetailedSessionById } from "./session";
import { getLatestFlowGraph } from "./flow";
import keyPathAccessor from "lodash.property";
import setByKeyPath from "lodash.set";
import { ComponentType } from "./types";
import type {
  PaymentRequest,
  Session,
  KeyPath,
  Value,
  Node,
  FlowGraph,
} from "./types";

export async function createPaymentRequest(
  client: GraphQLClient,
  {
    sessionId,
    sessionPreviewKeys,
    payeeName,
    payeeEmail,
  }: {
    sessionId: string;
    sessionPreviewKeys: KeyPath[];
    payeeName: string;
    payeeEmail: string;
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

  // payment requests can only be created for flows with a pay component
  // lookup the "amount" passport key from the pay component and add it to sessionPreviewKeys
  const flowGraph: FlowGraph | object =
    getLatestFlowGraph(client, session.flowId) || {};
  const result = Object.entries(flowGraph).find(
    ([_, node]: [string, Node]) => node.type === ComponentType.Pay
  );
  const payNode: Node = result?.length ? result[1] : undefined;
  if (!payNode) {
    throw new Error("flow must contain a pay node");
  }
  const amountKey: string = (payNode.data?.fn as string) ?? "amount";
  sessionPreviewKeys.push([amountKey]);

  // build sessionPreviewData using sessionPreviewKeys and throw if data is missing
  const sessionPreviewData: PaymentRequest["sessionPreviewData"] =
    buildSessionPreviewData(session, sessionPreviewKeys);

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
