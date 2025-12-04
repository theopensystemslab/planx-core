import { TeamRole } from "./roles.js";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  isPlatformAdmin: boolean;
  isAnalyst: boolean;
  id: number;
  defaultTeamId: number;
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
