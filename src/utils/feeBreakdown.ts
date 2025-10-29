import { z } from "zod";

import {
  FeeBreakdown,
  PassportFeeFields,
  ReductionOrExemption,
} from "../types/index.js";

export const toNumber = (input: number | [number]) =>
  Array.isArray(input) ? input[0] : input;

/**
 * Convert a Passport value to an actual boolean
 */
const toBoolean = (val: ["true" | "false"]) => val[0] === "true";

/**
 * Iterate over exemptions or reductions to find matches, returning the granular keys
 */
const getGranularKeys = (
  data: PassportFeeFields,
  prefix: "application.fee.reduction" | "application.fee.exemption",
) => {
  const keys = Object.keys(data) as (keyof PassportFeeFields)[];
  const intersectingKeys = keys.filter(
    (key) => key.startsWith(prefix) && Boolean(data[key]),
  );
  const granularKeys = intersectingKeys.map((key) =>
    key.replace(prefix + ".", ""),
  );

  return granularKeys;
};

/**
 * A "reduction" or "exemption" is the difference between payable (minus any extra charges or VAT) and calculated
 *
 * Reductions and exemptions are mutually exclusive as part of the fee breakdown.
 * Whilst users can collect both as part of a journey through PlanX, exemptions take precedent over reductions
 */
export const calculateReductionOrExemptionAmounts = (
  data: PassportFeeFields,
): ReductionOrExemption => {
  const { reductions, exemptions } = getReductionOrExemptionLists(data);

  // Reductions and exemptions should exclude and be calculated prior to extra VAT-able charges & fees being applied
  const extraCharges =
    data["application.fee.serviceCharge"] +
    data["application.fee.fastTrack"] +
    data["application.fee.paymentProcessing"] +
    data["application.fee.payable.VAT"]; // sum of all VAT

  const reductionOrExemptionAmount =
    data["application.fee.calculated"] >= 0
      ? data["application.fee.payable"] -
        extraCharges -
        data["application.fee.calculated"]
      : 0;

  const reductionOrExemptionAmountVAT =
    data["application.fee.calculated.VAT"] !== 0
      ? -data["application.fee.calculated.VAT"]
      : 0;

  const hasExemption = exemptions.length > 0;
  if (hasExemption && reductionOrExemptionAmount > 0)
    throw Error("Exemption expected to be negative");
  if (hasExemption) {
    return {
      exemption: reductionOrExemptionAmount,
      exemptionVAT: reductionOrExemptionAmountVAT,
      reduction: 0,
      reductionVAT: 0,
    };
  }

  const hasReductions = reductions.length > 0;
  if (!hasReductions) {
    return {
      exemption: 0,
      exemptionVAT: 0,
      reduction: 0,
      reductionVAT: 0,
    };
  }

  // A negative reduction indicates a possible content issue with passport variables
  // "application.fee.calculated" should be greater than "application.fee.payable"
  //   except in possible edge cases of sports club flat fee reduction/modification which may be higher than certain application fees
  const hasSportsReduction = reductions.includes("sports");
  if (!hasSportsReduction && reductionOrExemptionAmount > 0)
    throw Error("Non-sports reductions expected to be negative");

  return {
    exemption: 0,
    exemptionVAT: 0,
    reduction: reductionOrExemptionAmount,
    reductionVAT: reductionOrExemptionAmountVAT,
  };
};

/**
 * Parse Passport data for applicable reductions or exemptions
 */
export const getReductionOrExemptionLists = (data: PassportFeeFields) => {
  let reductions = getGranularKeys(data, "application.fee.reduction");
  const exemptions = getGranularKeys(data, "application.fee.exemption");

  // These are mutually exclusive - any exemptions invalidate reductions
  if (exemptions.length) reductions = [];

  return { reductions, exemptions };
};

/**
 * Transform Passport data to a FeeBreakdown
 */
export const toFeeBreakdown = (data: PassportFeeFields): FeeBreakdown => ({
  amount: {
    calculated: data["application.fee.calculated"],
    calculatedVAT: data["application.fee.calculated.VAT"],
    payable: data["application.fee.payable"],
    payableVAT: data["application.fee.payable.VAT"],
    serviceCharge: data["application.fee.serviceCharge"],
    serviceChargeVAT: data["application.fee.serviceCharge.VAT"],
    fastTrack: data["application.fee.fastTrack"],
    fastTrackVAT: data["application.fee.fastTrack.VAT"],
    paymentProcessing: data["application.fee.paymentProcessing"],
    paymentProcessingVAT: data["application.fee.paymentProcessing.VAT"],
    ...calculateReductionOrExemptionAmounts(data),
  },
  ...getReductionOrExemptionLists(data),
});

const questionSchema = z.number().nonnegative();
const setValueSchema = z.tuple([z.coerce.number().nonnegative()]);
const feeSchema = z.union([questionSchema, setValueSchema]).transform(toNumber);

/** Describes how boolean values are set via PlanX components */
const booleanSchema = z
  .tuple([z.enum(["true", "false"])])
  .default(["false"])
  .transform(toBoolean);

/** Fee-associated passport fields */
export const schema = z.object({
  "application.fee.calculated": feeSchema.optional().default(0),
  "application.fee.calculated.VAT": feeSchema.optional().default(0),
  "application.fee.payable": feeSchema, // only number inclusive of VAT, required because Pay depends on it
  "application.fee.payable.VAT": feeSchema.optional().default(0), // sum of all VAT
  "application.fee.fastTrack": feeSchema.optional().default(0),
  "application.fee.fastTrack.VAT": feeSchema.optional().default(0),
  "application.fee.serviceCharge": feeSchema.optional().default(0),
  "application.fee.serviceCharge.VAT": feeSchema.optional().default(0),
  "application.fee.paymentProcessing": feeSchema.optional().default(0),
  "application.fee.paymentProcessing.VAT": feeSchema.optional().default(0),
  "application.fee.reduction.alternative": booleanSchema,
  "application.fee.reduction.parishCouncil": booleanSchema,
  "application.fee.reduction.sports": booleanSchema,
  "application.fee.exemption.disability": booleanSchema,
  "application.fee.exemption.resubmission": booleanSchema,
  "application.fee.exemption.demolition": booleanSchema,
});

/**
 * Parse passport against schema then transform to a FeeBreakdown object
 */
export const getFeeBreakdown = (passportData: unknown): FeeBreakdown => {
  const parsedPassport = schema.safeParse(passportData);

  if (!parsedPassport.success) {
    throw Error("Failed to parse fee breakdown data", {
      cause: parsedPassport.error.flatten(),
    });
  }

  return toFeeBreakdown(parsedPassport.data);
};
