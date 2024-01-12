import { GeoJsonObject } from "geojson";

export interface Team {
  id: number;
  name: string;
  slug: string;
  settings?: TeamSettings;
  theme?: TeamTheme;
  notifyPersonalisation?: NotifyPersonalisation;
  boundaryBBox?: GeoJsonObject;
}

export interface TeamTheme {
  primaryColour: string;
  actionColour: string;
  linkColour: string;
  logo: string | null;
  favicon: string | null;
}

export interface TeamSettings {
  design?: {
    color?: string;
  };
  homepage?: string;
  externalPlanningSite: {
    name: string;
    url: string;
  };
  supportEmail?: string;
  boundary?: string;
  hasPlanningData?: boolean;
}

export interface NotifyPersonalisation {
  helpEmail: string;
  helpPhone: string;
  emailReplyToId: string;
  helpOpeningHours: string;
}
