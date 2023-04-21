import { Passport } from './types';
import { GraphQLClient, gql } from "graphql-request";

interface ProjectType {
  description: string;
}

export const getHumanReadableProjectType = async (
  client: GraphQLClient,
  sessionData: Passport["data"]
): Promise<string | undefined> => {
  const rawProjectType =
    sessionData?.["proposal.projectType"];
  if (!rawProjectType) return;
  // Get human readable values from db
  const humanReadableList = await getReadableProjectTypeFromRaw(client, rawProjectType);
  // Join in readable format - en-US ensures we use Oxford commas
  const formatter = new Intl.ListFormat("en-US", { type: "conjunction" });
  const joinedList = formatter.format(humanReadableList);
  // Convert first character to uppercase
  const humanReadableString =
    joinedList.charAt(0).toUpperCase() + joinedList.slice(1);
  return humanReadableString;
};

/**
 * Query DB to get human readable project type values, based on passport variables
 */
const getReadableProjectTypeFromRaw = async (
  client: GraphQLClient,
  rawList: string[]
): Promise<string[]> => {
  const query = gql`
    query GetHumanReadableProjectType($rawList: [String!]) {
      projectTypes: project_types(where: { value: { _in: $rawList } }) {
        description
      }
    }
  `;
  const { projectTypes } = await client.request<Record<"projectTypes", ProjectType[]>>(query, { rawList });
  const list = projectTypes.map(
    (result: { description: string }) => result.description
  );
  return list;
};