import { gql, GraphQLClient } from "graphql-request";

interface ProjectType {
  description: string;
}

export async function formatRawProjectTypes(
  client: GraphQLClient,
  rawProjectTypes: string[],
): Promise<string> {
  const humanReadableProjectTypes = await lookupHumanReadableProjectTypes(
    client,
    rawProjectTypes,
  );
  const formattedProjectTypes = formatHumanReadableProjectTypes(
    humanReadableProjectTypes,
  );
  return formattedProjectTypes;
}

async function lookupHumanReadableProjectTypes(
  client: GraphQLClient,
  rawList: string[],
): Promise<string[]> {
  const query = gql`
    query LookupHumanReadableProjectType($rawList: [String!]) {
      projectTypes: project_types(where: { value: { _in: $rawList } }) {
        description
      }
    }
  `;
  const { projectTypes } = await client.request<{
    projectTypes: ProjectType[];
  }>(query, { rawList });
  const humanReadableProjectTypes = projectTypes.map(
    (result) => result.description,
  );
  return humanReadableProjectTypes;
}

export function formatHumanReadableProjectTypes(
  projectTypes: string[],
): string {
  // Join in readable format - en-US ensures we use Oxford commas
  const formatter = new Intl.ListFormat("en-US", { type: "conjunction" });
  const joinedList = formatter.format(projectTypes);
  // Convert first character to uppercase
  const formattedProjectTypes =
    joinedList.charAt(0).toUpperCase() + joinedList.slice(1);
  return formattedProjectTypes;
}
