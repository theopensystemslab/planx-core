import { gql } from "graphql-request";
import type { GraphQLClient } from "graphql-request";

export class UserClient {
  protected client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
  }

  async create(args: {
    firstName: string;
    lastName: string;
    email: string;
  }): Promise<number> {
    return createUser(this.client, args);
  }

  async _destroy(userId: number): Promise<boolean> {
    return _destroyUser(this.client, userId);
  }
}

export async function createUser(
  client: GraphQLClient,
  args: { firstName: string; lastName: string; email: string },
): Promise<number> {
  const response: { insert_users_one: { id: number } } = await client.request(
    gql`
      mutation CreateUser(
        $first_name: String!
        $last_name: String!
        $email: String!
      ) {
        insert_users_one(
          object: {
            first_name: $first_name
            last_name: $last_name
            email: $email
          }
        ) {
          id
        }
      }
    `,
    {
      first_name: args.firstName,
      last_name: args.lastName,
      email: args.email,
    },
  );
  return response.insert_users_one.id;
}

export async function _destroyUser(
  client: GraphQLClient,
  userId: number,
): Promise<boolean> {
  const response: { delete_users_by_pk: { id: number } | null } =
    await client.request(
      gql`
        mutation DestroyUser($userId: Int!) {
          delete_users_by_pk(id: $userId) {
            id
          }
        }
      `,
      { userId },
    );
  return Boolean(response.delete_users_by_pk?.id);
}
