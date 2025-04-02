import { z } from "zod";

import {
  FeeBreakdown,
  PassportFeeFields,
  ReductionOrExemption,
} from "../types/index.js";

export const VAT_RATE = 0.2;

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

const getCalculatedAmount = (data: PassportFeeFields) =>
  data["application.fee.calculated"] || data["application.fee.payable"];

/**
 * A "reduction" is the sum of the difference between calculated and payable
 * An "exemption" is always equal to the full amount (i.e. a 100% reduction, never partial)
 *
 * Reductions and exemptions are mutually exclusive as part of the fee breakdown.
 * Whilst users can collect both as part of a journey through PlanX, exemptions take precedent over reductions
 */
export const calculateReductionOrExemptionAmounts = (
  data: PassportFeeFields,
): ReductionOrExemption => {
  const hasExemption =
    data["application.fee.exemption.disability"] ||
    data["application.fee.exemption.resubmission"];
  if (hasExemption) {
    return {
      exemption: getCalculatedAmount(data),
      reduction: 0,
    };
  }

  const reduction = data["application.fee.calculated"]
    ? data["application.fee.calculated"] - data["application.fee.payable"]
    : 0;

  // A negative reduction indicates a content issues with passport variables
  // "application.fee.calculated" should always be greater than "application.fee.payable"
  if (reduction < 0) throw Error("Reduction should always be negative");

  return {
    exemption: 0,
    reduction: reduction,
  };
};

export const sumVAT = (data: PassportFeeFields): number => {
  const keys = Object.keys(data) as (keyof PassportFeeFields)[];
  const vatKeys = keys.filter(
    (key) => key.endsWith(".VAT") && Boolean(data[key]),
  );

  let vatSum = 0;
  vatKeys.map((key) => (vatSum += data[key] as number));

  return Number(vatSum.toFixed(2));
};

const getReductionOrExemptionLists = (data: PassportFeeFields) => {
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
    calculated: getCalculatedAmount(data),
    payable: data["application.fee.payable"],
    serviceCharge: data["application.fee.serviceCharge"],
    fastTrack: data["application.fee.fastTrack"],
    vat: sumVAT(data),
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

/** Static fee-associated passport fields */
export const staticSchema = z.object({
  "application.fee.calculated": feeSchema.optional().default(0),
  "application.fee.payable": feeSchema,
  "application.fee.serviceCharge": feeSchema.optional().default(0),
  "application.fee.serviceCharge.VAT": feeSchema.optional().default(0),
  "application.fee.fastTrack": feeSchema.optional().default(0),
  "application.fee.fastTrack.VAT": feeSchema.optional().default(0),
  "application.fee.reduction.alternative": booleanSchema,
  "application.fee.reduction.parishCouncil": booleanSchema,
  "application.fee.reduction.sports": booleanSchema,
  "application.fee.exemption.disability": booleanSchema,
  "application.fee.exemption.resubmission": booleanSchema,
});

/**
 * Dynamic fee-associated passport fields
 * Consist of a user-defined variable, plus a ".VAT" suffix
 */
const dynamicSchema = z.record(
  z.string().endsWith(".VAT"),
  feeSchema.optional().default(0),
);

/**
 * Generate schemas, parse passport, then transform to a FeeBreakdown object
 */
export const getFeeBreakdown = (passportData: unknown): FeeBreakdown => {
  // Zod does not allow z.object() (static object) and z.record() (dynamic object) to be merged as a single schema
  // To work around this, we follow a two-step process -
  //   - First strictly parse the static values
  //   - Then safely parse the dynamic values
  const staticResult = staticSchema.parse(passportData);
  const dynamicResult = dynamicSchema.safeParse(passportData);

  const result = toFeeBreakdown({ ...staticResult, ...dynamicResult });

  return result;
};
