import { FeeBreakdown, StripeSplit } from "../types/index.js";

const toPence = (pounds: number): number => Math.round(pounds * 100);

/**
 * Turn a session's {@link FeeBreakdown} into the amounts needed for a Stripe
 * Connect destination charge
 *
 *  - PlanX retains only its service charge plus VAT
 *  - The council receives the full statutory or discretionary fee with nothing deducted
 *  - The Stripe processing fee comes out of PlanX's service charge, not the council's transfer
 */
export const calculateStripeSplit = (
  feeBreakdown: FeeBreakdown,
): StripeSplit => {
  const { payable, serviceCharge, serviceChargeVAT } = feeBreakdown.amount;
  const amount = toPence(payable);
  const applicationFeeAmount =
    toPence(serviceCharge) + toPence(serviceChargeVAT);

  // Stripe rejects a £0 charge
  if (amount <= 0) {
    throw new Error(
      `Stripe split amount must be a positive integer (pence) but was ${amount}`,
    );
  }

  // PlanX's portion can never exceed the total or go negative
  if (applicationFeeAmount < 0 || applicationFeeAmount > amount) {
    throw new Error(
      `Stripe split applicationFeeAmount (${applicationFeeAmount}) must be between 0 and amount (${amount})`,
    );
  }

  return { amount, applicationFeeAmount };
};
