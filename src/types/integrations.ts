export const SEND_INTEGRATIONS = [
  "email",
  "bops",
  "uniform",
  "s3",
  "fme",
  "idox",
] as const;

export type SendIntegration = (typeof SEND_INTEGRATIONS)[number];
