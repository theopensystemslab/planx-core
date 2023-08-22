import type { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

import { User } from "../types/user";

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

  async getByEmail(email: string): Promise<User | null> {
    return getByEmail(this.client, email);
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

async function getByEmail(
  client: GraphQLClient,
  email: string,
): Promise<User | null> {
  const { users }: { users: User[] | null } = await client.request(
    gql`
      query GetUserByEmail($email: String!) {
        users: users(where: { email: { _eq: $email } }) {
          id
          firstName: first_name
          lastName: last_name
          email
          isPlatformAdmin: is_platform_admin
          teams {
            teamId: team_id
            role
          }
        }
      }
    `,
    { email },
  );
  return users?.[0] || null;
}
