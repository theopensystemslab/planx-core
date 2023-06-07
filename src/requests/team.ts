import { gql } from "graphql-request";
import type { GraphQLClient } from "graphql-request";

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

  async _destroy(teamId: number): Promise<boolean> {
    return _destroyTeam(this.client, teamId);
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
  }
): Promise<number> {
  const input = {
    name,
    slug,
    theme: {
      logo,
      primary: primaryColor,
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
        $theme: jsonb!
        $settings: jsonb!
        $submissionEmail: String!
        $notifyPersonalisation: jsonb!
      ) {
        insert_teams_one(
          object: {
            name: $name
            slug: $slug
            theme: $theme
            settings: $settings
            submission_email: $submissionEmail
            notify_personalisation: $notifyPersonalisation
          }
        ) {
          id
        }
      }
    `,
    input
  );
  return response.insert_teams_one.id;
}

export async function _destroyTeam(
  client: GraphQLClient,
  teamId: number
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
      { teamId }
    );
  return Boolean(response.delete_teams_by_pk?.id);
}
