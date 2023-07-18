import { OrderedSession } from "../../../types";
import { mockProposedLDCPassportData } from "./passport";

export const mockSession: OrderedSession = {
  id: "session123",
  flowId: "flow123",
  breadcrumbs: [],
  passport: { data: mockProposedLDCPassportData },
  paymentId: null,
  lockedAt: null,
  submittedAt: null,
};
