import slugify from "lodash.kebabcase";
import { graphQLClient } from "./graphql";
import { createUser } from "./user";
import { createTeam } from "./team";
import { createFlow, publishFlow } from "./flow";
import type { GraphQLClient } from "graphql-request";
import { generateOneAppXML } from "./export/oneApp";
import { getSessionById } from "./session";
import { getDocumentTemplateNamesForFlow, getDocumentTemplateNamesForSession } from "./document-templates";
import { Session } from "./types";

const defaultURL = process.env.HASURA_GRAPHQL_URL;

export * from "./passport";
export * from "./logic";
export { StaticSessionState } from "./session-state";
export { ComponentType } from "./types";
export type {
  NodeId,
  Edges,
  Value,
  Node,
  IndexedNode,
  OrderedFlow,
  NormalizedNode,
  NormalizedFlow,
  Crumb,
  Breadcrumbs,
  NormalizedCrumb,
  OrderedBreadcrumbs,
} from "./types";

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

  async getDocumentTemplateNamesForSession(sessionId: string): Promise<string[]> {
    return getDocumentTemplateNamesForSession(this.client, sessionId);
  }

  async generateOneAppXML(sessionId: string): Promise<string> {
    return generateOneAppXML(this.client, sessionId);
  }

  async getSessionById(sessionId: string): Promise<Session> {
    return getSessionById(this.client, sessionId);
  }
}
