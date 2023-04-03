import type { Value } from "./data";

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
  parentId: string | null; // null if it is the first node
  autoAnswered: boolean;
  sectionId?: string;
  rootNodeId: string;
}
export type OrderedBreadcrumbs = Array<NormalizedCrumb>;
