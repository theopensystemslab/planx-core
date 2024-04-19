import { Passport } from "../models";
import {
  GovPayMetadata,
  GovPayMetadataValue,
  GovUKCreatePaymentPayload,
  Passport as IPassport,
  Value,
} from "../types";

type FormattedMetadata = NonNullable<GovUKCreatePaymentPayload["metadata"]>;

const ITP_KEY = "paidViaInviteToPay" as const;

const isPassportValue = (value: GovPayMetadataValue) =>
  typeof value === "string" && value.startsWith("@");

/**
 * Convert GovPayMetadata set in Editor to format accepted by GovPay API
 * Read dynamic data variables from passport and inject into output
 */
const parseMetadata = ({
  metadata,
  passport,
  paidViaInviteToPay,
}: {
  metadata: GovPayMetadata[];
  passport: Passport;
  paidViaInviteToPay: boolean;
}): FormattedMetadata => {
  let entries: [string, GovPayMetadataValue][] = [];

  entries = metadata.map(({ key, value }) => {
    // ITP data is set at runtime by user journey, and not read from passport directly
    if (key === ITP_KEY) return [ITP_KEY, paidViaInviteToPay];

    if (!isPassportValue(value)) return [key, value];

    // Remove "@" prefix
    const passportKey = (value as string).substring(1);
    const passportValue = passport.any<Value>([passportKey]);

    // Validate and format
    const validatedValue = validateMetadata(key, passportValue);
    return [key, validatedValue];
  });

  const parsedMetadata = Object.fromEntries(entries);

  return parsedMetadata;
};

/**
 * Validate that GovPayMetadata formatting rules are adhered to
 * Initial validation is done in-Editor, this is intended to catch issues
 * with dynamic passport variables
 */
const validateMetadata = (
  key: string,
  value: Value | undefined,
): GovPayMetadataValue => {
  let validated: GovPayMetadataValue | null = null;

  switch (typeof value) {
    case "string":
    case "number":
    case "boolean":
      validated = value;
      break;
    case "object":
      validated = Array.isArray(value)
        ? value.join(", ")
        : `Error: Invalid metadata value for "${key}" set in PlanX`;
      break;
    default:
      validated = `Error: Invalid metadata value for "${key}" set in PlanX`;
      break;
  }

  // Truncate to max 100 characters
  if (typeof validated === "string" && validated.length >= 97) {
    validated = validated.substring(0, 97) + "...";
  }

  return validated;
};

/**
 * Format and validate metadata set by Editors in Pay component for consumption by GovPay
 *
 * @description
 * Metadata can take one of two forms -
 *  - Static values (e.g. { vat_code: "abc123" })
 *  - Dynamic values (e.g. { property_type: "@project.propertyType" })
 */
export const formatGovPayMetadata = ({
  metadata,
  userPassport,
  paidViaInviteToPay,
}: {
  metadata: GovPayMetadata[];
  userPassport: IPassport;
  paidViaInviteToPay: boolean;
}): FormattedMetadata => {
  const passport = new Passport(userPassport);
  const parsedAndValidated = parseMetadata({
    metadata,
    passport,
    paidViaInviteToPay,
  });

  return parsedAndValidated;
};
