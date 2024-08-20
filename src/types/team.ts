import { GeoJsonObject } from "geojson";

import { Role } from "./roles";
import { User } from "./user";

export interface Team {
  id: number;
  name: string;
  slug: string;
  theme: TeamTheme;
  settings: TeamSettings;
  integrations: TeamIntegrations;
  domain?: string;
  members?: TeamMember[];
}

export interface TeamTheme {
  primaryColour: string;
  actionColour: string;
  linkColour: string;
  logo: string | null;
  favicon: string | null;
}

export interface TeamSettings {
  boundaryUrl: string;
  boundaryBBox?: GeoJsonObject;
  referenceCode: string;
  helpEmail: string;
  helpPhone: string;
  helpOpeningHours: string;
  emailReplyToId: string;
  homepage?: string;
  externalPlanningSiteUrl: string;
  externalPlanningSiteName: string;
}

export interface TeamIntegrations {
  hasPlanningData: boolean;
}

export interface NotifyPersonalisation {
  helpEmail: string;
  helpPhone: string;
  emailReplyToId: string;
  helpOpeningHours: string;
}

export type TeamMember = Omit<User, "teams" | "isPlatformAdmin"> & {
  role: Role;
};
