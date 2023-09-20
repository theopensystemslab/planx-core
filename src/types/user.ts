import { TeamRole } from "./roles";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  isPlatformAdmin: boolean;
  id: number;
  teams: UserTeams[];
}

export interface UserTeams {
  role: TeamRole;
  team: {
    name: string;
    slug: string;
    id: number;
  };
}
