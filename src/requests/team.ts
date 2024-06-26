import { GeoJsonObject } from "geojson";
import type { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

import { TeamRole } from "../types/roles";
import { GeneralTeamSettings, Team, TeamTheme } from "../types/team";
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

interface CreateTeam {
  name: string;
  slug: string;
  homepage: string;
  submissionEmail?: string;
  boundary?: GeoJsonObject;
  referenceCode: string;
}

export class TeamClient {
  protected client: GraphQLClient;

  constructor(client: GraphQLClient) {
    this.client = client;
  }

  async create(args: CreateTeam): Promise<number> {
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

  async updateTheme(
    teamId: number,
    theme: Partial<TeamTheme>,
  ): Promise<boolean> {
    return updateTheme(this.client, teamId, theme);
  }

  async updateGeneralSettings(
    teamId: number,
    generalSettings: Partial<GeneralTeamSettings>,
  ): Promise<boolean> {
    return updateGeneralSettings(this.client, teamId, generalSettings);
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
    homepage,
    submissionEmail,
    boundary,
    referenceCode,
  }: CreateTeam,
): Promise<number> {
  const input = {
    name,
    slug,
    submissionEmail,
    settings: {
      ...defaultSettings,
      homepage,
    },
    notifyPersonalisation: defaultNotifyPersonalisation,
    referenceCode,
    ...(boundary && { boundary }),
  };
  const response: { insert_teams_one: { id: number } } = await client.request(
    gql`
      mutation CreateTeam(
        $name: String!
        $slug: String!
        $settings: jsonb!
        $submissionEmail: String
        $notifyPersonalisation: jsonb!
        $boundary: jsonb
        $referenceCode: String!
      ) {
        insert_teams_one(
          object: {
            name: $name
            slug: $slug
            settings: $settings
            submission_email: $submissionEmail
            notify_personalisation: $notifyPersonalisation
            reference_code: $referenceCode
            # Fall back to default values for optional values
            ${boundary ? "boundary: $boundary" : ""}
            # Create empty records for theme and integrations - these can get populated later
            theme: { data: {} }
            integrations: { data: {} }
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
          theme {
            primaryColour: primary_colour
            actionColour: action_colour
            linkColour: link_colour
            logo
            favicon
          }
          team_settings {
            boundaryUrl: boundary_url
            boundaryJson: boundary_json
            referenceCode: reference_code
            helpEmail: help_email
            helpPhone: help_phone
            helpOpeningHours: help_opening_hours
            emailReplyToId: email_reply_to_id
            homepage: homepage
          }
          notifyPersonalisation: notify_personalisation
          boundaryBBox: boundary_bbox
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

async function updateGeneralSettings(
  client: GraphQLClient,
  teamId: number,
  generalSettings: Partial<GeneralTeamSettings>,
) {
  const response: {
    update_team_general_settings: {
      returning: [{ team_id: number; id: number }];
    };
  } = await client.request(
    gql`
      mutation UpdateGeneralSettings(
        $team_id: Int
        $generalSettings: team_settings_set_input!
      ) {
        update_team_settings(
          where: { team_id: { _eq: $team_id } }
          _set: $generalSettings
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
      generalSettings: {
        boundary_url: generalSettings.boundaryUrl,
        reference_code: generalSettings.referenceCode,
        help_email: generalSettings.helpEmail,
        help_phone: generalSettings.helpPhone,
        help_opening_hours: generalSettings.helpOpeningHours,
        email_reply_to_id: generalSettings.emailReplyToId,
        homepage: generalSettings.homepage,
      },
    },
  );
  return Boolean(response.update_team_general_settings.returning[0]);
}
