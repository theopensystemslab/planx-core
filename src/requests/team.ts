import type { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

import { TeamRole } from "../types/roles";
import { Team } from "../types/team";

interface UpsertMember {
  userId: number;
  teamId: number;
  role: TeamRole;
}

interface RemoveMember {
  userId: number;
  teamId: number;
}

type PlanXEnv = "pizza" | "staging" | "production";

export class TeamClient {
  protected client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
  }

  async create(args: {
    name: string;
    slug: string;
    logo: string;
    primaryColor: string;
    homepage: string;
    submissionEmail: string;
  }): Promise<number> {
    return createTeam(this.client, args);
  }

  async addMember(args: UpsertMember) {
    return upsertMember(this.client, args);
  }

  async changeMemberRole(args: UpsertMember) {
    return upsertMember(this.client, args);
  }

  async removeMember(args: RemoveMember) {
    return removeMember(this.client, args);
  }

  /**
   * Only used in test environments
   */
  async _destroy(teamId: number): Promise<boolean> {
    return _destroyTeam(this.client, teamId);
  }

  /**
   * Only used in test environments
   */
  async _destroyAll(): Promise<boolean> {
    return _destroyAllTeams(this.client);
  }

  async getBySlug(slug: string): Promise<Team> {
    return getBySlug(this.client, slug);
  }

  async getBopsSubmissionURL(
    slug: string,
    env: PlanXEnv,
  ): Promise<string | null> {
    return getBopsSubmissionURL(this.client, slug, env);
  }
}

const defaultNotifyPersonalisation = {
  helpEmail: "example@council.gov.uk",
  helpPhone: "(01234) 567890",
  emailReplyToId: "727d48fa-cb8a-42f9-b8b2-55032f3bb451",
  helpOpeningHours: "Monday - Friday, 9am - 5pm",
};

const defaultSettings = {
  settings: {
    homepage: "https://example.com",
    externalPlanningSite: {
      url: "https://planningportal.co.uk",
      name: "Planning Portal",
    },
  },
};

export async function createTeam(
  client: GraphQLClient,
  {
    name,
    slug,
    logo,
    primaryColor,
    homepage,
    submissionEmail,
  }: {
    name: string;
    slug: string;
    logo: string;
    primaryColor: string;
    homepage: string;
    submissionEmail: string;
  },
): Promise<number> {
  const input = {
    name,
    slug,
    theme: {
      logo,
      primary_colour: primaryColor,
    },
    submissionEmail,
    settings: {
      ...defaultSettings,
      homepage,
    },
    notifyPersonalisation: defaultNotifyPersonalisation,
  };
  const response: { insert_teams_one: { id: number } } = await client.request(
    gql`
      mutation CreateTeam(
        $name: String!
        $slug: String!
        $theme: team_themes_insert_input!
        $settings: jsonb!
        $submissionEmail: String!
        $notifyPersonalisation: jsonb!
      ) {
        insert_teams_one(
          object: {
            name: $name
            slug: $slug
            theme: { data: $theme }
            settings: $settings
            submission_email: $submissionEmail
            notify_personalisation: $notifyPersonalisation
          }
        ) {
          id
        }
      }
    `,
    input,
  );
  return response.insert_teams_one.id;
}

export async function _destroyTeam(
  client: GraphQLClient,
  teamId: number,
): Promise<boolean> {
  const response: { delete_teams_by_pk: { id: number } | null } =
    await client.request(
      gql`
        mutation DestroyTeam($teamId: Int!) {
          delete_teams_by_pk(id: $teamId) {
            id
          }
        }
      `,
      { teamId },
    );
  return Boolean(response.delete_teams_by_pk?.id);
}

export async function _destroyAllTeams(
  client: GraphQLClient,
): Promise<boolean> {
  const response: { deleteTeams: { affectedRows: number } } =
    await client.request(gql`
      mutation DestroyAllTeams {
        deleteTeams: delete_teams(where: { id: { _is_null: false } }) {
          affectedRows: affected_rows
        }
      }
    `);
  return Boolean(response.deleteTeams.affectedRows);
}

export async function upsertMember(
  client: GraphQLClient,
  args: UpsertMember,
): Promise<boolean> {
  const response: { insert_team_members_one: { id: number } | null } =
    await client.request(
      gql`
        mutation UpsertTeamMember(
          $role: user_roles_enum = teamViewer
          $team_id: Int
          $user_id: Int
        ) {
          insert_team_members_one(
            object: { team_id: $team_id, user_id: $user_id, role: $role }
            on_conflict: {
              constraint: team_members_user_id_team_id_key
              update_columns: role
            }
          ) {
            id
          }
        }
      `,
      {
        team_id: args.teamId,
        user_id: args.userId,
        role: args.role,
      },
    );
  return Boolean(response.insert_team_members_one?.id);
}

export async function removeMember(
  client: GraphQLClient,
  args: RemoveMember,
): Promise<boolean> {
  const response: { delete_team_members: { affected_rows: number } } =
    await client.request(
      gql`
        mutation AddTeamMember($team_id: Int, $user_id: Int) {
          delete_team_members(
            where: { team_id: { _eq: $team_id }, user_id: { _eq: $user_id } }
          ) {
            affected_rows
          }
        }
      `,
      {
        team_id: args.teamId,
        user_id: args.userId,
      },
    );
  return Boolean(response.delete_team_members?.affected_rows);
}

async function getBySlug(client: GraphQLClient, slug: string) {
  const response: { teams: Team[] } = await client.request(
    gql`
      query GetTeamBySlug($slug: String!) {
        teams(where: { slug: { _eq: $slug } }) {
          id
          name
          slug
          settings
          theme
          notifyPersonalisation: notify_personalisation
          boundaryBBox: boundary_bbox
        }
      }
    `,
    { slug },
  );
  return response.teams[0];
}

interface GetBopsSubmissionURL {
  teams: {
    integrations: {
      bopsSubmissionURL: string | null;
    } | null;
  }[];
}

async function getBopsSubmissionURL(
  client: GraphQLClient,
  slug: string,
  env: PlanXEnv,
) {
  const stagingQuery = gql`
    query GetStagingBopsSubmissionURL($slug: String!) {
      teams(where: { slug: { _eq: $slug } }) {
        integrations {
          bopsSubmissionURL: staging_bops_submission_url
        }
      }
    }
  `;

  const productionQuery = gql`
    query GetProductionBopsSubmissionURL($slug: String!) {
      teams(where: { slug: { _eq: $slug } }) {
        integrations {
          bopsSubmissionURL: production_bops_submission_url
        }
      }
    }
  `;

  const query = env === "production" ? productionQuery : stagingQuery;

  const {
    teams: [team],
  } = await client.request<GetBopsSubmissionURL>(query, { slug });

  return team?.integrations?.bopsSubmissionURL ?? null;
}
