import type { GovUKPayment } from "./gov-uk-payment";
import type { Breadcrumbs } from "./breadcrumbs";

export * from "./component";
export * from "./gov-uk-payment";
export * from "./flow";
export * from "./sections";
export * from "./breadcrumbs";
export * from "./component";

// TODO: This should be Record<string, Value>;
export interface Passport {
  data?: Record<string, any>;
}

export type Address = {
  line1: string;
  line2?: string;
  town: string;
  county?: string;
  postcode: string;
  country?: string;
};

// Addresses can come from two sources:
//   1. Ordnance Survey provides _known_ addresses that have a UPRN
//   2. Applicants propose _new_ addresses that do not yet have a UPRN
type AddressSources = "os" | "proposed";

// Minimum-required address details if proposing an address
//   these fields also satisfy component dependencies like DrawBoundary & PlanningConstraints
export interface MinimumSiteAddress {
  latitude: number;
  longitude: number;
  x: number;
  y: number;
  title: string;
  source: AddressSources;
}

// Full SiteAddress reflects selecting a record from the OS Places API "LPI" datasource
export interface SiteAddress extends MinimumSiteAddress {
  uprn?: string;
  blpu_code?: string;
  organisation?: string | null;
  sao?: string | null;
  pao?: string;
  street?: string;
  town?: string;
  postcode?: string;
  single_line_address?: string;
  planx_description?: string; // joined via table blpu_codes
  planx_value?: string; // joined via table blpu_codes
}

export const GOV_PAY_PASSPORT_KEY = "application.fee.reference.govPay" as const;

export interface SessionData {
  passport: Passport;
  breadcrumbs: Breadcrumbs;
  govUkPayment?: GovUKPayment;
  id: string;
}

export interface Session {
  data: SessionData;
  id: string;
  flowId: string;
}
