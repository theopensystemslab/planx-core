import slugify from "lodash.kebabcase";
import { graphQLClient } from "./graphql";
import { createUser } from "./user";
import { createTeam } from "./team";
import { ProjectTypeFormat, getProjectTypesForSession, getFormattedProjectTypesForSession } from "./project-types";
import { createFlow, publishFlow } from "./flow";
import type { GraphQLClient } from "graphql-request";
import { generateOneAppXML } from "./export/oneApp";
import { getSessionById, lockSession, unlockSession } from "./session";
import { createPaymentRequest } from "./payment-request";
import {
  getDocumentTemplateNamesForFlow,
  getDocumentTemplateNamesForSession,
} from "./document-templates";
import type { Session, PaymentRequest, KeyPath } from "./types";

const defaultURL = process.env.HASURA_GRAPHQL_URL;

export * from "./passport";
export * from "./logic";

export class CoreDomainClient {
  client: GraphQLClient;

  constructor(args?: {
    hasuraSecret?: string | undefined;
    targetURL?: string | undefined;
  }) {
    const url: string = args?.targetURL ? args?.targetURL : defaultURL!;
    this.client = graphQLClient({ url, secret: args?.hasuraSecret });
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
   * @returns List of project types for a session, raw or human readable
   * @example 
   * const rawList = getProjectTypesForSession("abc123". { format: "raw" })
   * console.log(rawList) 
   * // Logs ["swimmingPool.addition", "extension.rear", "window.new"]
   * 
   * const humanReadableList = getProjectTypesForSession("abc123". { format: "humanReadable" })
   * console.log(humanReadableList) 
   * // Logs ["addition of a swimming pool", "rear extension", "new window installation"]
  */
  async getProjectTypesForSession(args: {
    sessionId: string;
    format: ProjectTypeFormat;
  }): Promise<string[] | undefined> {
    return getProjectTypesForSession(this.client, args);
  }

  /**
   * @returns Human readable project types as a formatted list
   * @example 
   * const result = getFormattedProjectTypesForSession("abc123"})
   * console.log(result) 
   * // Logs "Addition of a swimming pool, rear extension, and new window installation"
   */
  async getFormattedProjectTypesForSession(sessionId: string): Promise<string | undefined> {
    return getFormattedProjectTypesForSession(this.client, sessionId);
  }
}
