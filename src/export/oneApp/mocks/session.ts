import { Session } from "../../../types";
import { mockProposedLDCPassportData } from "./passport";

export const mockSession: Session = {
  data: {
    id: "abc123",
    passport: {
      data: mockProposedLDCPassportData
    },
    breadcrumbs: {},
  },
  flowId: "flow123",
  id: "session123"
}