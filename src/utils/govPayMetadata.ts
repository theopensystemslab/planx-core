import z from "zod";

import { Passport } from "../models/index.js";
import {
  GovPayMetadata,
  GovPayMetadataValue,
  GovUKCreatePaymentPayload,
  Passport as IPassport,
  Value,
} from "../types/index.js";

type FormattedMetadata = NonNullable<GovUKCreatePaymentPayload["metadata"]>;

const ITP_KEY = "paidViaInviteToPay" as const;

const isPassportValue = (
  value: GovPayMetadataValue,
  type: GovPayMetadata["type"],
): value is string => typeof value === "string" && type === "data";

/**
 * Coerce a primitive value to either a string, number, or boolean
 * Handles numeric strings and boolean strings (case-insensitive)
 */
const coercePrimitiveValue = z.preprocess(
  (value) => {
    if (typeof value === "string") {
      const lower = value.toLowerCase();
      if (lower === "true") return true;
      if (lower === "false") return false;

      const numericValue = Number(value);
      if (!isNaN(numericValue) && value.trim() !== "") return numericValue;
    }
    return value;
  },
  z.union([z.number(), z.boolean(), z.string()]),
);

/**
 * Coerce and validate pasport values
 * Handles primitives, arrays, and enforces GovPay constraints (max 100 chars)
 */
const coerceMetadataValue = z.preprocess(
  (value) => {
    let processed: unknown;

    // Arrays are not allowed by GovPay, convert to string
    if (Array.isArray(value)) {
      processed = value.join(", ");
    }
    // Handle primitives with coercion
    else if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      processed = coercePrimitiveValue.parse(value);
    }
    // Error handling
    else {
      processed = `Error: Invalid metadata value set in PlanX`;
    }

    // Truncate strings to 100 characters
    if (typeof processed === "string" && processed.length > 100) {
      processed = processed.substring(0, 97) + "...";
    }

    return processed;
  },
  z.union([z.number(), z.boolean(), z.string()]),
);

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

  entries = metadata.map(({ key, value, type }) => {
    // ITP data is set at runtime by user journey, and not read from passport directly
    if (key === ITP_KEY) return [ITP_KEY, paidViaInviteToPay];

    const coercedValue = coerceMetadataValue.parse(value);
    if (!isPassportValue(value, type)) return [key, coercedValue];

    const passportValue = passport.any<Value>([value]);
    const coercedPassportValue = coerceMetadataValue.parse(passportValue);
    return [key, coercedPassportValue];
  });

  const parsedMetadata = Object.fromEntries(entries);

  return parsedMetadata;
};

/**
 * Format and validate metadata set by Editors in Pay component for consumption by GovPay
 *
 * @description
 * Metadata can take one of two forms -
 *  - Static values (e.g. { vat_code: "abc123", type: "static" })
 *  - Dynamic values (e.g. { property_type: "project.propertyType", type: "data" })
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
