/**
 * Roles which grant users a set of permissions for a particular team
 * Stored in the user_roles table, these confer Hasura roles of the same names to a users's JWT
 *
 * teamAdmin: Full service, team, and subscription management permissions for a particular team, read access to all others
 *
 * teamEditor: Full service management permissions for a particular team, read access to all others
 *
 * teamViewer: Read-only access to a team
 *
 * demoUser: Can only see their own flows in Demo team, and read-only access to Templates, ODP, and OSL teams
 */
export type TeamRole = "teamAdmin" | "teamEditor" | "teamViewer" | "demoUser";

/**
 * General roles used by Hasura
 *
 * public: Used my PlanX applicants - read only access
 *   --  Can be used in conjunction with request headers (e.g. x-hasura-lowcal-session-id or x-hasura-payment-request-id) to grant additional read/write access
 *
 * admin: Reserved role used by Hasura console
 *   -- Should not be granted to users in their JWT. Not exposed as a type to avoid misuse.
 */
export type HasuraRole = "public";

/**
 * Roles granted by an authorised user's status, as opposed to their relationship to a team
 *
 * platformAdmin: The highest level of permission in PlanX, and can operate across all teams
 *
 * analyst: Grants read-only access to the PlanX admin panel
 */
export type UserRole = "platformAdmin" | "analyst";

export type Role = TeamRole | HasuraRole | UserRole;
