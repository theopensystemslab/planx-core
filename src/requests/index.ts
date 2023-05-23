import slugify from "lodash.kebabcase";
import { graphQLClient } from "./graphql";
import { createUser } from "./user";
import { createTeam } from "./team";
import { formatRawProjectTypes } from "./project-types";
import { createFlow, publishFlow } from "./flow";
import { generateBOPSPayload } from "../export/bops";
import { generateCSVData } from "../export/csv";
import { generateOneAppXML } from "../export/oneApp";
import { getSessionById, lockSession, unlockSession } from "./session";
import { createPaymentRequest } from "./payment-request";
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
  client: GraphQLClient;
  protected type: "admin" | "public";
  protected url: string;

  constructor(args?: {
    hasuraSecret?: string | undefined;
    targetURL?: string | undefined;
  }) {
    const url: string = args?.targetURL ? args?.targetURL : defaultURL!;
    this.url = url;
    this.type = args?.hasuraSecret ? "admin" : "public";
    this.client = graphQLClient({ url, secret: args?.hasuraSecret });
  }

  authorizeSession(sessionDetails: { email: string; sessionId: string }) {
    if (this.type === "admin") {
      throw new Error(
        "authorizing a session with an admin client is not allowed"
      );
    }
    this.client = graphQLClient({
      url: this.url,
      authorizedSession: sessionDetails,
    });
  }

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

  async getSessionById(sessionId: string): Promise<Session> {
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
