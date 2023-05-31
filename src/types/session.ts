import type { Value } from "./data";
import { ComponentType } from "./component";
import type { GovUKPayment } from "./gov-uk-payment";

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

export interface DetailedSession extends Session {
  lockedAt: string;
  submittedAt: string;
}

export interface Crumb {
  auto?: boolean;
  answers?: Array<string>;
  data?: Record<string, Value>;
  override?: Record<string, Value>;
  feedback?: string;
}

export type Breadcrumbs = {
  [key: string]: Crumb;
};

export interface NormalizedCrumb extends Crumb {
  id: string;
  type: ComponentType;
  autoAnswered: boolean;
  sectionId?: string;
  answers?: Array<string>;
  data?: Record<string, Value>;
  override?: Record<string, Value>;
  feedback?: string;
}

export type OrderedBreadcrumbs = Array<NormalizedCrumb>;

// TODO: This should be Record<string, Value>;
export interface Passport {
  data?: Record<string, any>;
}
