import assert from "node:assert";

import type { GraphQLClient } from "graphql-request";

import { ApplicationClient } from "./application";
import {
  getDocumentTemplateNamesForFlow,
  getDocumentTemplateNamesForSession,
} from "./document-templates";
import { ExportClient } from "./export";
import { FlowClient } from "./flow";
import { graphQLClient } from "./graphql";
import { PaymentRequestClient } from "./payment-request";
import { formatRawProjectTypes } from "./project-types";
import { SessionClient } from "./session";
import { TeamClient } from "./team";
import { UserClient } from "./user";

assert(process.env.HASURA_GRAPHQL_URL);
const defaultURL = process.env.HASURA_GRAPHQL_URL;

// declarative data access client
export class DomainClient {
  client!: GraphQLClient;
  protected type: "admin" | "public";
  protected url: string;

  // client namespaces
  flow!: FlowClient;
  team!: TeamClient;
  user!: UserClient;
  session!: SessionClient;
  application!: ApplicationClient;
  paymentRequest!: PaymentRequestClient;
  export!: ExportClient;

  constructor(args?: { targetURL?: string; hasuraSecret?: string }) {
    this.type = args?.hasuraSecret ? "admin" : "public";
    this.url = args?.targetURL || defaultURL!;
    const client = graphQLClient({ url: this.url, secret: args?.hasuraSecret });
    this.setClient(client);
  }

  // step-up authorization for a public client interacting with a particular user session
  authorizeSession(sessionDetails: { email: string; sessionId: string }) {
    if (this.type === "admin") {
      throw new Error(
        "authorizing a session with an admin client is not allowed",
      );
    }
    const client = graphQLClient({
      url: this.url,
      authorizedSession: sessionDetails,
    });
    this.setClient(client);
  }

  // allows all resource clients to be updated in one go
  private setClient(client: GraphQLClient) {
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
  // namspacing prevents this class from growing too unwieldy while still allowing for
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

  /**
   * Convert and formats raw project types as a formatted list
   * @example
   * const result = formatRawProjectTypes(["swimmingPool.addition", "extension.rear", "window.new"])
   * console.log(result)
   * // Logs "Addition of a swimming pool, rear extension, and new window installation"
   */
  async formatRawProjectTypes(rawProjectTypes: string[] = []): Promise<string> {
    return formatRawProjectTypes(this.client, rawProjectTypes);
  }
}
