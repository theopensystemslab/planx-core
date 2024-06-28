import { GeoJsonObject } from "geojson";

export interface Team {
  id: number;
  name: string;
  slug: string;
  theme: TeamTheme;
  teamSettings: TeamSettings;
  notifyPersonalisation?: NotifyPersonalisation;
  boundaryBBox?: GeoJsonObject;
  integrations: TeamIntegrations;
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
  boundaryJson?: GeoJsonObject;
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
