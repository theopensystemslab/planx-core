import { ComponentType } from "./component";
import type { DataObject } from "./data";
import type { NodeId } from "./flow";
import type { GovUKPayment } from "./gov-uk-payment";

export type SessionData = {
  passport: Passport;
  breadcrumbs: Breadcrumbs;
  govUkPayment?: GovUKPayment;
  id: string;
};

export type Session = {
  data: SessionData;
  id: string;
  flowId: string;
};

export type DetailedSession = Session & {
  lockedAt: string;
  submittedAt: string;
};

export type Crumb = {
  auto?: boolean;
  answers?: Array<string>;
  data?: DataObject;
  override?: DataObject;
  feedback?: string;
};

export type Breadcrumbs = {
  [key: string]: Crumb;
};

export type NormalizedCrumb = Crumb & {
  id: string;
  type: ComponentType;
  autoAnswered: boolean;
  sectionId?: string;
  answers?: Array<string>;
  data?: DataObject;
  override?: DataObject;
  feedback?: string;
};

export type EnrichedCrumb = NormalizedCrumb & {
  questionData: DataObject;
  answerData?: Record<NodeId, DataObject>;
};

export type OrderedBreadcrumbs = EnrichedCrumb[];

// TODO: This should be { data: DataObject };
export type Passport = {
  data: Record<string, any>;
};

export type SessionMetadata = {
  id: string;
  createdAt: string;
  submittedAt: string;
  flow: {
    id: string;
    slug: string;
    team: {
      name: string;
      slug: string;
    };
  };
};
