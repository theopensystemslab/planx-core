import { GeoJsonObject } from "geojson";

export interface Team {
  id: number;
  name: string;
  slug: string;
  theme: TeamTheme;
  settings: TeamSettings;
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
  isTrial: boolean;
  paymentProvider: "govpay" | "stripe" | null;
}

export type TeamContactSettings = Pick<
  TeamSettings,
  "helpEmail" | "helpPhone" | "emailReplyToId" | "helpOpeningHours"
>;

export interface TeamInvoiceDetails {
  addressLine1: string;
  addressLine2?: string;
  townCity: string;
  county?: string;
  postcode: string;
  businessName: string;
  emailAddress: string;
  companyRegistration?: string;
  vatNumber: string;
}
