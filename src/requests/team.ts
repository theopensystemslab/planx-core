import type { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

import { TeamRole } from "../types/roles";
import { Team, TeamSettings, TeamTheme } from "../types/team";
import { decrypt } from "../utils/encryption";

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

interface NewTeam {
  name: string;
  slug: string;
  domain?: string;
  reference?: string;
  settings?: Partial<TeamSettings>;
  theme?: Partial<TeamTheme>;
}

export class TeamClient {
  protected client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
  }

  async create(args: NewTeam): Promise<number> {
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

  async getIntegrations(args: {
    slug: string;
    env: PlanXEnv;
    encryptionKey: string;
  }): Promise<DecryptedIntegrations> {
    return getIntegrations({ client: this.client, ...args });
  }

  async getTeamSettings(slug: string): Promise<TeamSettings> {
    return getTeamSettings(this.client, slug);
  }

  async updateTheme(
    teamId: number,
    theme: Partial<TeamTheme>,
  ): Promise<boolean> {
    return updateTheme(this.client, teamId, theme);
  }

  async updateTeamSettings(
    teamId: number,
    teamSettings: Partial<TeamSettings>,
  ): Promise<boolean> {
    return updateTeamSettings(this.client, teamId, teamSettings);
  }
}

export async function createTeam(
  client: GraphQLClient,
  newTeam: NewTeam,
): Promise<number> {
  const response: { insert_teams_one: { id: number } } = await client.request(
    gql`
      mutation CreateTeam(
        $name: String!
        $slug: String!
        $domain: String
        $settings: team_settings_insert_input!
        $theme: team_themes_insert_input!
      ) {
        insert_teams_one(
          object: {
            name: $name
            slug: $slug
            domain: $domain
            # Create empty records for associated tables - these can get populated later
            team_settings: { data: $settings }
            theme: { data: $theme }
            integrations: { data: {} }
          }
        ) {
          id
        }
      }
    `,
    {
      ...newTeam,
      settings: {
        boundary_url: newTeam?.settings?.boundaryUrl,
        boundary_bbox: newTeam?.settings?.boundaryBBox,
        reference_code: newTeam?.settings?.referenceCode,
        help_email: newTeam?.settings?.helpEmail,
        help_phone: newTeam?.settings?.helpPhone,
        help_opening_hours: newTeam?.settings?.helpOpeningHours,
        email_reply_to_id: newTeam?.settings?.emailReplyToId,
        homepage: newTeam?.settings?.homepage,
        external_planning_site_url: newTeam?.settings?.externalPlanningSiteUrl,
        external_planning_site_name:
          newTeam?.settings?.externalPlanningSiteName,
        submission_email: newTeam?.settings?.submissionEmail,
      },
      theme: {
        primary_colour: newTeam.theme?.primaryColour,
        action_colour: newTeam.theme?.actionColour,
        link_colour: newTeam.theme?.linkColour,
        logo: newTeam.theme?.logo,
        favicon: newTeam.theme?.favicon,
      },
    },
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
          domain
          theme {
            primaryColour: primary_colour
            actionColour: action_colour
            linkColour: link_colour
            logo
            favicon
          }
          settings: team_settings {
            boundaryUrl: boundary_url
            boundaryBBox: boundary_bbox
            referenceCode: reference_code
            helpEmail: help_email
            helpPhone: help_phone
            helpOpeningHours: help_opening_hours
            emailReplyToId: email_reply_to_id
            homepage: homepage
            externalPlanningSiteName: external_planning_site_name
            externalPlanningSiteUrl: external_planning_site_url
          }
        }
      }
    `,
    { slug },
  );
  return response.teams[0];
}

interface GetEncryptedIntegrations {
  teams: {
    integrations: {
      bopsSubmissionURL: string | null;
      bopsSecret: string | null;
      govPaySecret: string | null;
      fileAPIKey: string | null;
      powerAutomateWebhookURL: string | null;
      powerAutomateAPIKey: string | null;
    } | null;
  }[];
}

interface DecryptedIntegrations {
  bopsSubmissionURL?: string;
  bopsToken?: string;
  govPayToken?: string;
  fileAPIKey?: string;
  powerAutomateWebhookURL?: string;
  powerAutomateAPIKey?: string;
}

/**
 * Return integration details for a team
 *
 * XXX: Why do we need env? Why are there columns for staging and production secrets?
 * Please see https://github.com/theopensystemslab/planx-new/pull/2499
 * @returns Integration details, decrypted
 */
async function getIntegrations({
  client,
  slug,
  env,
  encryptionKey,
}: {
  client: GraphQLClient;
  slug: string;
  env: PlanXEnv;
  encryptionKey: string;
}): Promise<DecryptedIntegrations> {
  const stagingQuery = gql`
    query GetStagingIntegrations($slug: String!) {
      teams(where: { slug: { _eq: $slug } }) {
        integrations {
          bopsSubmissionURL: staging_bops_submission_url
          bopsSecret: staging_bops_secret
          govPaySecret: staging_govpay_secret
          fileAPIKey: staging_file_api_key
          powerAutomateWebhookURL: power_automate_webhook_url
          powerAutomateAPIKey: staging_power_automate_api_key
        }
      }
    }
  `;

  const productionQuery = gql`
    query GetProductionIntegrations($slug: String!) {
      teams(where: { slug: { _eq: $slug } }) {
        integrations {
          bopsSubmissionURL: production_bops_submission_url
          bopsSecret: production_bops_secret
          govPaySecret: production_govpay_secret
          fileAPIKey: production_file_api_key
          powerAutomateWebhookURL: power_automate_webhook_url
          powerAutomateAPIKey: production_power_automate_api_key
        }
      }
    }
  `;

  const query = env === "production" ? productionQuery : stagingQuery;

  const {
    teams: [team],
  } = await client.request<GetEncryptedIntegrations>(query, { slug });

  if (!team) throw Error(`No team matching "${slug}" found.`);
  if (!team.integrations)
    throw Error(`Integrations not set up for team "${slug}".`);

  const decryptedIntegrations: DecryptedIntegrations = {
    bopsSubmissionURL: team.integrations.bopsSubmissionURL ?? undefined,
    bopsToken: decrypt(team.integrations.bopsSecret, encryptionKey),
    govPayToken: decrypt(team.integrations.govPaySecret, encryptionKey),
    fileAPIKey: decrypt(team.integrations.fileAPIKey, encryptionKey),
    powerAutomateWebhookURL:
      team.integrations.powerAutomateWebhookURL ?? undefined,
    powerAutomateAPIKey: decrypt(
      team.integrations.powerAutomateAPIKey,
      encryptionKey,
    ),
  };

  return decryptedIntegrations;
}

export async function getTeamSettings(client: GraphQLClient, slug: string) {
  const response: { teamSettings: TeamSettings[] } = await client.request(
    gql`
      query GetTeamSettings($slug: String!) {
        teamSettings: team_settings(where: { team: { slug: { _eq: $slug } } }) {
          boundaryUrl: boundary_url
          boundaryBBox: boundary_bbox
          referenceCode: reference_code
          helpEmail: help_email
          helpPhone: help_phone
          helpOpeningHours: help_opening_hours
          emailReplyToId: email_reply_to_id
          homepage: homepage
          externalPlanningSiteName: external_planning_site_name
          externalPlanningSiteUrl: external_planning_site_url
          submissionEmail: submission_email
        }
      }
    `,
    { slug },
  );

  return response.teamSettings[0];
}

async function updateTheme(
  client: GraphQLClient,
  teamId: number,
  theme: Partial<TeamTheme>,
) {
  const response: {
    update_team_themes: { returning: [{ team_id: number; id: number }] };
  } = await client.request(
    gql`
      mutation UpdateTeamTheme($team_id: Int, $theme: team_themes_set_input!) {
        update_team_themes(
          where: { team_id: { _eq: $team_id } }
          _set: $theme
        ) {
          returning {
            team_id
            id
          }
        }
      }
    `,
    {
      team_id: teamId,
      theme: {
        primary_colour: theme.primaryColour,
        action_colour: theme.actionColour,
        link_colour: theme.linkColour,
        logo: theme.logo,
        favicon: theme.favicon,
      },
    },
  );
  return Boolean(response.update_team_themes.returning[0]);
}

async function updateTeamSettings(
  client: GraphQLClient,
  teamId: number,
  teamSettings: Partial<TeamSettings>,
) {
  const response: {
    update_team_settings: {
      returning: [{ team_id: number; id: number }];
    };
  } = await client.request(
    gql`
      mutation UpdateTeamSettings(
        $team_id: Int
        $teamSettings: team_settings_set_input!
      ) {
        update_team_settings(
          where: { team_id: { _eq: $team_id } }
          _set: $teamSettings
        ) {
          returning {
            team_id
            id
          }
        }
      }
    `,
    {
      team_id: teamId,
      teamSettings: {
        boundary_url: teamSettings.boundaryUrl,
        boundary_bbox: teamSettings.boundaryBBox,
        reference_code: teamSettings.referenceCode,
        help_email: teamSettings.helpEmail,
        help_phone: teamSettings.helpPhone,
        help_opening_hours: teamSettings.helpOpeningHours,
        email_reply_to_id: teamSettings.emailReplyToId,
        homepage: teamSettings.homepage,
        submission_email: teamSettings.submissionEmail,
      },
    },
  );

  return Boolean(response.update_team_settings.returning[0]);
}
