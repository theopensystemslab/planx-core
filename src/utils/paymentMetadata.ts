import z from "zod";

import { Passport } from "../models/index.js";
import {
  Passport as IPassport,
  PaymentMetadata,
  PaymentMetadataValue,
  Value,
} from "../types/index.js";

type FormattedMetadata = Record<string, PaymentMetadataValue>;

const ITP_KEY = "paidViaInviteToPay" as const;

const isPassportValue = (
  value: PaymentMetadataValue,
  type: PaymentMetadata["type"],
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
 * Coerce and validate passport values
 * Handles primitives, arrays, and enforces payment provider constraints (max 100 chars)
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

    if (typeof processed === "string") {
      // Stripe does not allow [ or ] in metadata values
      let sanitised = processed.replace(/[[\]]/g, "_");
      // Truncate strings to 100 characters
      if (sanitised.length > 100) {
        sanitised = sanitised.substring(0, 97) + "...";
      }
      processed = sanitised;
    }

    return processed;
  },
  z.union([z.number(), z.boolean(), z.string()]),
);

/**
 * Convert payment metadata set in Editor to format accepted by payment provider APIs
 * Read dynamic data variables from passport and inject into output
 */
const parseMetadata = ({
  metadata,
  passport,
  paidViaInviteToPay,
}: {
  metadata: PaymentMetadata[];
  passport: Passport;
  paidViaInviteToPay: boolean;
}): FormattedMetadata => {
  const entries: [string, PaymentMetadataValue][] = metadata.map(
    ({ key, value, type }) => {
      // ITP data is set at runtime by user journey, and not read from passport directly
      if (key === ITP_KEY) return [ITP_KEY, paidViaInviteToPay];

      const coercedValue = coerceMetadataValue.parse(value);
      if (!isPassportValue(value, type)) return [key, coercedValue];

      const passportValue = passport.any<Value>([value]);
      const coercedPassportValue = coerceMetadataValue.parse(passportValue);
      return [key, coercedPassportValue];
    },
  );

  return Object.fromEntries(entries);
};

/**
 * Format and validate metadata set by Editors in Pay component for consumption by payment providers
 *
 * @description
 * Metadata can take one of two forms -
 *  - Static values (e.g. { vat_code: "abc123", type: "static" })
 *  - Dynamic values (e.g. { property_type: "project.propertyType", type: "data" })
 */
export const formatPaymentMetadata = ({
  metadata,
  userPassport,
  paidViaInviteToPay,
}: {
  metadata: PaymentMetadata[];
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
