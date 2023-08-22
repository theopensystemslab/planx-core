export interface User {
  firstName: string;
  lastName: string;
  email: string;
  roles: {
    value: Role;
    teamId: number;
  }[]
  id: number;
  teams: {
    teamId: number;
  }[]
}

export type Role = 
  | "admin" 
  | "platformManager"