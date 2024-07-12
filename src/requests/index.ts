import type { GraphQLClient } from "graphql-request";

import { ExportClient } from "../export";
import { ApplicationClient } from "./application";
import {
  getDocumentTemplateNamesForFlow,
  getDocumentTemplateNamesForSession,
} from "./document-templates";
import { FlowClient } from "./flow";
import { Auth, getGraphQLClient } from "./graphql";
import { PaymentRequestClient } from "./payment-request";
import { SessionClient } from "./session";
import { TeamClient } from "./team";
import { UserClient } from "./user";

const defaultURL = process.env.HASURA_GRAPHQL_URL!;

// declarative data access client
export class CoreDomainClient {
  client!: GraphQLClient;
  protected url: string;

  // client namespaces
  flow!: FlowClient;
  team!: TeamClient;
  user!: UserClient;
  session!: SessionClient;
  application!: ApplicationClient;
  paymentRequest!: PaymentRequestClient;
  export!: ExportClient;

  constructor(args?: { targetURL?: string | undefined; auth?: Auth }) {
    const url = args?.targetURL || defaultURL;
    this.url = url;
    const client = getGraphQLClient({ url, auth: args?.auth });
    this.setClient(client);
  }

  // allows all namespaced clients to be updated in one go
  setClient(client: GraphQLClient) {
    this.client = client;
    this.team = new TeamClient(this.client);
    this.user = new UserClient(this.client);
    this.flow = new FlowClient(this.client);
    this.session = new SessionClient(this.client);
    this.application = new ApplicationClient(this.client);
    this.paymentRequest = new PaymentRequestClient(this.client);
    this.export = new ExportClient(this.client);
  }

  // TODO: refactor below into client namespaces (e.g. SessionClient)
  // namespacing prevents this class from growing too unwieldy while still allowing for
  // a simple interface for callers.
  // Namespacing also allows for terser function names (e.g. `client.session.lock("123")`)

  // TODO: Remove this once planx-new updated
  async getDocumentTemplateNames(flowId: string): Promise<string[]> {
    return getDocumentTemplateNamesForFlow(this.client, flowId);
  }

  async getDocumentTemplateNamesForFlow(flowId: string): Promise<string[]> {
    return getDocumentTemplateNamesForFlow(this.client, flowId);
  }

  async getDocumentTemplateNamesForSession(
    sessionId: string,
  ): Promise<string[]> {
    return getDocumentTemplateNamesForSession(this.client, sessionId);
  }
}
