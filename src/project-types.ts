import { GraphQLClient, gql } from "graphql-request";

export enum ProjectTypeFormat {
  Raw = "raw",
  HumanReadable = "humanReadable",
}

const PROJECT_TYPE_KEY = "proposal.projectType";

interface ProjectType {
  description: string
}

export async function getProjectTypesForSession(
  client: GraphQLClient, 
  {
    sessionId, 
    format,
  }: {
    sessionId: string;
    format: ProjectTypeFormat;
  }
): Promise<string[] | undefined> {
  const rawProjectTypes = await getRawProjectTypesForSession(client, sessionId);
  if (format === ProjectTypeFormat.Raw) return rawProjectTypes;
  if (!rawProjectTypes) return;
  const humanReadableProjectTypes = await lookupHumanReadableProjectTypes(client, rawProjectTypes);
  return humanReadableProjectTypes;
}

async function getRawProjectTypesForSession(
  client: GraphQLClient, 
  sessionId: string,
  ): Promise<string[] | undefined> {
  const path = `passport.data.['${PROJECT_TYPE_KEY}']`
  const query = gql`
    query GetRawProjectTypesForSession($sessionId: uuid!, $path: String) {
      session: lowcal_sessions_by_pk(id: $sessionId) {
        rawProjectTypes: data(path: $path)
      }
    }
  `;
  const { session } = await client.request(query, { sessionId, path });
  return session?.rawProjectTypes;
}

async function lookupHumanReadableProjectTypes(
  client: GraphQLClient,
  rawList: string[]
): Promise<string[]> {
  const query = gql`
    query LookupHumanReadableProjectType($rawList: [String!]) {
      projectTypes: project_types(where: { value: { _in: $rawList } }) {
        description
      }
    }
  `;
  const { projectTypes } = await client.request<{ projectTypes: ProjectType[]}>(query, { rawList });
  const humanReadableProjectTypes = projectTypes.map((result) => result.description);
  return humanReadableProjectTypes;
}

export async function getFormattedProjectTypesForSession(
  client: GraphQLClient,
  sessionId: string,
): Promise<string | undefined> {
  const projectTypes = await getProjectTypesForSession(
    client, 
    { sessionId, format: ProjectTypeFormat.HumanReadable }
  );
  if (!projectTypes) return;
  const formattedProjectTypes = formatHumanReadableProjectTypes(projectTypes);
  return formattedProjectTypes;
}

async function formatHumanReadableProjectTypes(
  projectTypes: string[],
): Promise<string | undefined> {
  // Join in readable format - en-US ensures we use Oxford commas
  const formatter = new Intl.ListFormat("en-US", { type: "conjunction" });
  const joinedList = formatter.format(projectTypes);
  // Convert first character to uppercase
  const formattedProjectTypes =
    joinedList.charAt(0).toUpperCase() + joinedList.slice(1);
  return formattedProjectTypes;
}

export async function formatRawProjectTypes(
  client: GraphQLClient,
  rawProjectTypes: string[]
): Promise<string | undefined> {
  const humanReadableProjectTypes = await lookupHumanReadableProjectTypes(client, rawProjectTypes);
  const formattedProjectTypes = formatHumanReadableProjectTypes(humanReadableProjectTypes);
  return formattedProjectTypes;
}