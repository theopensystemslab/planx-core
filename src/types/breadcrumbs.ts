import type { Value } from "./data";
import { ComponentType } from "./component";

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
