import type { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

import { User } from "../types/user";

interface CreateUser {
  firstName: string;
  lastName: string;
  email: string;
  isPlatformAdmin?: boolean;
}

export class UserClient {
  protected client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
  }

  async create(args: CreateUser): Promise<number> {
    return createUser(this.client, args);
  }

  /**
   * Only used in test environments
   */
  async _destroy(userId: number): Promise<boolean> {
    return _destroyUser(this.client, userId);
  }

  /**
   * Only used in test environments
   */
  async _destroyAll(): Promise<boolean> {
    return _destroyAllUsers(this.client);
  }

  async getByEmail(email: string): Promise<User | null> {
    return getByEmail(this.client, email);
  }

  async getById(id: number): Promise<User | null> {
    return getById(this.client, id);
  }

  /**
   * Soft-delete a user by setting email address to null
   */
  async deleteUser(id: number): Promise<boolean> {
    return deleteUser(this.client, id);
  }
}

export async function createUser(
  client: GraphQLClient,
  args: CreateUser,
): Promise<number> {
  const response: { insert_users_one: { id: number } } = await client.request(
    gql`
      mutation CreateUser(
        $first_name: String!
        $last_name: String!
        $email: String!
        $is_platform_admin: Boolean = false
      ) {
        insert_users_one(
          object: {
            first_name: $first_name
            last_name: $last_name
            email: $email
            is_platform_admin: $is_platform_admin
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
      is_platform_admin: args.isPlatformAdmin,
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

export async function _destroyAllUsers(
  client: GraphQLClient,
): Promise<boolean> {
  const response: { deleteUsers: { affectedRows: number } } =
    await client.request(gql`
      mutation DestroyAllUsers {
        deleteUsers: delete_users(where: { id: { _is_null: false } }) {
          affectedRows: affected_rows
        }
      }
    `);
  return Boolean(response.deleteUsers.affectedRows);
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
            role
            team {
              name
              slug
              id
            }
          }
        }
      }
    `,
    { email },
  );
  return users?.[0] || null;
}

async function getById(
  client: GraphQLClient,
  id: number,
): Promise<User | null> {
  const { user }: { user: User | null } = await client.request(
    gql`
      query GetUserById($id: Int!) {
        user: users_by_pk(id: $id) {
          id
          firstName: first_name
          lastName: last_name
          email
          isPlatformAdmin: is_platform_admin
          teams {
            role
            team {
              name
              slug
              id
            }
          }
        }
      }
    `,
    { id },
  );
  return user;
}

async function deleteUser(client: GraphQLClient, id: number): Promise<boolean> {
  const { user }: { user: { id: number | null } } = await client.request(
    gql`
      mutation SoftDeleteUserById($id: Int!) {
        users: update_users_by_pk(
          pk_columns: { id: $id }
          _set: { email: null }
        ) {
          id
        }
      }
    `,
    { id },
  );
  return Boolean(user.id);
}
