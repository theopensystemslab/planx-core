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
      exemption:
        data["application.fee.payable"] || data["application.fee.calculated"],
      reduction: 0,
    };
  }

  const reduction = data["application.fee.calculated"]
    ? data["application.fee.calculated"] - data["application.fee.payable"]
    : 0;

  return {
    exemption: 0,
    reduction: reduction,
  };
};

const calculateVAT = (data: PassportFeeFields) => {
  if (!data["application.fee.payable.includesVAT"]) return 0;

  const calculated = getCalculatedAmount(data);
  const vat = (calculated * VAT_RATE) / (1 + VAT_RATE);
  const roundedVAT = Number(vat.toFixed(2));

  return roundedVAT;
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
    vat: calculateVAT(data),
    ...calculateReductionOrExemptionAmounts(data),
  },
  ...getReductionOrExemptionLists(data),
});

export const createPassportSchema = () => {
  const questionSchema = z.number().nonnegative();
  const setValueSchema = z.tuple([z.coerce.number().nonnegative()]);
  const feeSchema = z
    .union([questionSchema, setValueSchema])
    .transform(toNumber);

  /** Describes how boolean values are set via PlanX components */
  const booleanSchema = z
    .tuple([z.enum(["true", "false"])])
    .default(["false"])
    .transform(toBoolean);

  const schema = z
    .object({
      "application.fee.calculated": feeSchema.optional().default(0),
      "application.fee.payable": feeSchema,
      "application.fee.payable.includesVAT": booleanSchema,
      "application.fee.reduction.alternative": booleanSchema,
      "application.fee.reduction.parishCouncil": booleanSchema,
      "application.fee.reduction.sports": booleanSchema,
      "application.fee.exemption.disability": booleanSchema,
      "application.fee.exemption.resubmission": booleanSchema,
    })
    .transform(toFeeBreakdown);

  return schema;
};

export const getFeeBreakdown = (passportData: unknown): FeeBreakdown => {
  const schema = createPassportSchema();
  const result = schema.parse(passportData);
  return result;
};
