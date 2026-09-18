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

  return { amount, applicationFeeAmount };
};
