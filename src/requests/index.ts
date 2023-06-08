import slugify from "lodash.kebabcase";
import { graphQLClient } from "./graphql";
import { formatRawProjectTypes } from "./project-types";
import { generateOneAppXML } from "../export/oneApp";
import { ApplicationClient } from "./application";
import { FlowClient, createFlow, publishFlow } from "./flow";
import { UserClient, createUser } from "./user";
import { TeamClient, createTeam } from "./team";
import {
  SessionClient,
  getSessionById,
  lockSession,
  unlockSession,
} from "./session";
import { PaymentRequestClient, createPaymentRequest } from "./payment-request";
import { ExportClient, generateBOPSPayload, generateCSVData } from "./export";
import {
  getDocumentTemplateNamesForFlow,
  getDocumentTemplateNamesForSession,
} from "./document-templates";
import type { Session, PaymentRequest, KeyPath } from "../types";
import type { BOPSFullPayload } from "../export/bops/model";
import type { CSVData } from "../export/csv/model";
import type { GraphQLClient } from "graphql-request";

const defaultURL = process.env.HASURA_GRAPHQL_URL;

export class CoreDomainClient {
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

  constructor(args?: {
    hasuraSecret?: string | undefined;
    targetURL?: string | undefined;
  }) {
    const url: string = args?.targetURL ? args?.targetURL : defaultURL!;
    this.url = url;
    this.type = args?.hasuraSecret ? "admin" : "public";
    const client = graphQLClient({ url, secret: args?.hasuraSecret });
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

  authorizeSession(sessionDetails: { email: string; sessionId: string }) {
    if (this.type === "admin") {
      throw new Error(
        "authorizing a session with an admin client is not allowed"
      );
    }
    const client = graphQLClient({
      url: this.url,
      authorizedSession: sessionDetails,
    });
    this.setClient(client);
  }

  // TODO: refactor below into client namespaces (e.g. SessionClient)
  // namspacing prevents this class from growing too unwieldy while still allowing for
  // a simple interface for callers.
  // Namespacing also allows for terser function names (e.g. `client.session.lock("123")`)

  async createUser(args: {
    firstName: string;
    lastName: string;
    email: string;
  }): Promise<number> {
    return createUser(this.client, args);
  }

  async createTeam(args: {
    name: string;
    slug: string | undefined;
    logo: string;
    primaryColor: string;
    homepage: string;
    submissionEmail: string;
  }): Promise<number> {
    const slug = args.slug ? args.slug : slugify(args.name);
    return createTeam(this.client, { ...args, slug });
  }

  async createFlow(args: {
    teamId: number;
    slug: string;
    data?: object;
  }): Promise<string> {
    return createFlow(this.client, args);
  }

  async publishFlow(args: {
    flow: { id: string; data: object };
    publisherId: number;
  }): Promise<number> {
    return publishFlow(this.client, args);
  }

  // TODO: Remove this once planx-new updated
  async getDocumentTemplateNames(flowId: string): Promise<string[]> {
    return getDocumentTemplateNamesForFlow(this.client, flowId);
  }

  async getDocumentTemplateNamesForFlow(flowId: string): Promise<string[]> {
    return getDocumentTemplateNamesForFlow(this.client, flowId);
  }

  async getDocumentTemplateNamesForSession(
    sessionId: string
  ): Promise<string[]> {
    return getDocumentTemplateNamesForSession(this.client, sessionId);
  }

  async generateBOPSPayload(sessionId: string): Promise<BOPSFullPayload> {
    return generateBOPSPayload(this.client, sessionId);
  }

  async generateCSVData(sessionId: string): Promise<CSVData> {
    return generateCSVData(this.client, sessionId);
  }

  async generateOneAppXML(sessionId: string): Promise<string> {
    return generateOneAppXML(this.client, sessionId);
  }

  async getSessionById(sessionId: string): Promise<Session | null> {
    return getSessionById(this.client, sessionId);
  }

  async lockSession(sessionId: string): Promise<boolean | null> {
    return lockSession(this.client, sessionId);
  }

  async unlockSession(sessionId: string): Promise<boolean | null> {
    return unlockSession(this.client, sessionId);
  }

  async createPaymentRequest(args: {
    sessionId: string;
    applicantName: string;
    payeeName: string;
    payeeEmail: string;
    sessionPreviewKeys: Array<KeyPath>;
  }): Promise<PaymentRequest> {
    return createPaymentRequest(this.client, args);
  }

  /**
   * Convert and formats raw project types as a formatted list
   * @example
   * const result = formatRawProjectTypes(["swimmingPool.addition", "extension.rear", "window.new"])
   * console.log(result)
   * // Logs "Addition of a swimming pool, rear extension, and new window installation"
   */
  async formatRawProjectTypes(rawProjectTypes: string[]): Promise<string> {
    return formatRawProjectTypes(this.client, rawProjectTypes);
  }
}
