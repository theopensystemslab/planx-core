import { Session } from "../../../types/index.js";
import { mockProposedLDCPassportData } from "./passport.js";

export const mockSession: Session = {
  id: "session123",
  createdAt: "01-01-2025",
  updatedAt: "02-01-2025",
  data: {
    id: "flow123",
    passport: {
      data: mockProposedLDCPassportData,
    },
    breadcrumbs: {},
  },
  flow: {
    id: "flow123",
    slug: "apply-for-something",
    name: "Apply for Something",
    team: {
      slug: "lambeth",
      name: "Lambeth",
      settings: {
        referenceCode: "LBH",
      },
    },
  },
};
