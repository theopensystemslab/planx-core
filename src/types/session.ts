import { ComponentType } from "./component";
import type { DataObject } from "./data";
import type { FlowId, NodeId } from "./flow";
import type { GovUKPayment } from "./gov-uk-payment";

export type SessionId = string;

export type SessionData = {
  passport: Passport;
  breadcrumbs: Breadcrumbs;
  govUkPayment?: GovUKPayment;
  id: string;
};

export type Session = {
  id: SessionId;
  flowId: FlowId;
  data: SessionData;
};

export type OrderedSession = {
  id: SessionId;
  flowId: FlowId;
  breadcrumbs: OrderedBreadcrumbs;
  passport: Passport;
  paymentId: string | null;
  lockedAt: string | null;
  submittedAt: string | null;
};

export type Crumb = {
  auto?: boolean;
  answers?: Array<string>;
  data?: DataObject;
  override?: DataObject;
  feedback?: string;
};

export type Breadcrumbs = {
  [id: NodeId]: Crumb;
};

export type NormalizedCrumb = Crumb & {
  id: NodeId;
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
  data?: Record<string, any>;
};
