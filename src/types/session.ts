import { ComponentType } from "./component";
import type { DataObject } from "./data";
import type { NodeId } from "./flow";
import type { GovUKPayment } from "./gov-uk-payment";

export type Passport = {
  data: DataObject;
};

export type SessionData = {
  passport: Passport;
  breadcrumbs: Breadcrumbs;
  govUkPayment?: GovUKPayment;
  id: string; // flowId
};

export type Session = {
  id: string;
  data: SessionData;
  flow: {
    id: string;
    slug: string;
    name: string;
  };
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
      settings: {
        referenceCode: string;
      };
    };
  };
};
