export interface User {
  firstName: string;
  lastName: string;
  email: string;
  isPlatformAdmin: boolean;
  id: number;
  teams: UserTeams[];
}

export interface UserTeams {
  teamId: number;
  role: TeamRole;
}

export type TeamRole = "admin" | "viewer";

export type Role = TeamRole | "public" | "platformAdmin";
