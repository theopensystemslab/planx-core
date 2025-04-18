import { GeoJsonObject } from "geojson";

export interface Team {
  id: number;
  name: string;
  slug: string;
  theme: TeamTheme;
  settings: TeamSettings;
  integrations: TeamIntegrations;
  domain?: string;
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
  submissionEmail?: string;
  isTrial: boolean;
}

export interface TeamIntegrations {
  hasPlanningData: boolean;
}

export type TeamContactSettings = Pick<
  TeamSettings,
  | "helpEmail"
  | "helpPhone"
  | "emailReplyToId"
  | "helpOpeningHours"
  | "submissionEmail"
>;
