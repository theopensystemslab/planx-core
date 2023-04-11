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
  Breadcrumbs,
} from "./types";

type ValidatedSessionData = {
  sessionPreviewData: PaymentRequest["sessionPreviewData"];
  paymentAmount: number;
};

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
  // this throws if the pay component cannot be found
  const paymentAmountKey: string = await getPaymentAmountKey({
    client,
    flowId: session.flowId,
    breadcrumbs: session.data?.breadcrumbs,
  });

  // build sessionPreviewData using sessionPreviewKeys and the paymentAmountKey
  // this throws if data is missing/invalid
  const validatedSessionData: ValidatedSessionData = validateSessionData({
    session,
    sessionPreviewKeys,
    paymentAmountKey,
  });

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
      {
        sessionId,
        payeeName,
        payeeEmail,
        sessionPreviewData: validatedSessionData.sessionPreviewData,
        //TODO paymentAmount: validatedSessionData.paymentAmount
      }
    );
  return response?.insert_payment_requests_one;
}

// lookup the "paymentAmount" passport key from the pay component of a given flow
async function getPaymentAmountKey({
  client,
  flowId,
  breadcrumbs,
}: {
  client: GraphQLClient;
  flowId: string;
  breadcrumbs: Breadcrumbs | undefined;
}): Promise<string> {
  if (!breadcrumbs) {
    throw new Error("breadcrumbs not found");
  }
  const flowGraph = await getLatestFlowGraph(client, flowId);
  if (!flowGraph) {
    throw new Error("flow not found");
  }
  for (const [crumbId, _] of Object.entries(breadcrumbs)) {
    const node = flowGraph[crumbId];
    if (node.type === ComponentType.Pay) {
      return (node.data?.fn as string) || "amount";
    }
  }
  throw new Error("flow must contain a pay node");
}

export function validateSessionData({
  session,
  sessionPreviewKeys,
  paymentAmountKey,
}: {
  session: Session;
  sessionPreviewKeys: KeyPath[];
  paymentAmountKey: string;
}): ValidatedSessionData {
  if (!session.data.passport?.data) {
    throw new Error("passport data not found");
  }
  const data = session.data.passport.data!;
  const paymentAmount = data[paymentAmountKey];
  if (!paymentAmount || paymentAmount <= 0) {
    throw new Error(`invalid paymentAmount: "${paymentAmount}"`);
  }
  const sessionPreviewData: PaymentRequest["sessionPreviewData"] = {};
  sessionPreviewKeys.forEach((keyPath: KeyPath) => {
    const value = keyPathAccessor(keyPath)(data);
    if (value === undefined) {
      const stringKey = keyPath.join(".");
      throw new Error(`passport key "${stringKey}" not found in passport data`);
    }
    setByKeyPath(sessionPreviewData, keyPath, value as Value);
  });
  return {
    sessionPreviewData,
    paymentAmount,
  };
}
