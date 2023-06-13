import { gql } from "graphql-request";
import type { GraphQLClient } from "graphql-request";
import type { Flag, FlagSet, FlagSetKey, FlagSetName } from "../types";

export class FlagsClient {
  protected client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
  }

  async getAllFlags(): Promise<Flag[]> {
    return getAllFlags(this.client);
  }

  async getFlags(flagSetKey: FlagSetKey): Promise<FlagSet> {
    return getFlagSet(this.client, flagSetKey);
  }
}

export async function getAllFlags(client: GraphQLClient): Promise<Flag[]> {
  const response: {
    result_flag_sets: { value: string; text: string }[];
    result_flags: Flag[];
  } = await client.request(
    gql`
      query GetAllFlags {
        result_flag_sets {
          value
          text
        }
        result_flags(order_by: { priority: asc }) {
          value
          text
          description
          setName: flag_set
        }
      }
    `
  );
  return response.result_flags.map((f: Flag) => ({
    ...f,
    setName: response.result_flag_sets.find(
      (set: { value: string; text: string }) => f.setName === set.value
    )!.text as FlagSetName,
  }));
}

export async function getFlagSet(
  client: GraphQLClient,
  flagSetKey: FlagSetKey
): Promise<FlagSet> {
  const response: {
    result_flag_sets: { value: string; text: string }[];
    result_flags: FlagSet;
  } = await client.request(
    gql`
      query GetFlagSet($flagSetKey: String!) {
        result_flag_sets(where: { value: { _eq: $flagSetKey } }) {
          text
        }
        result_flags(
          where: { flag_set: { _eq: $flagSetKey } }
          order_by: { priority: asc }
        ) {
          value
          text
          description
          setName: flag_set
        }
      }
    `,
    { flagSetKey }
  );
  return response.result_flags.map((f: Flag) => ({
    ...f,
    setName: response.result_flag_sets[0]!.text as FlagSetName,
  }));
}
