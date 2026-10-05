/**
 * The two amounts needed to create a Stripe Connect destination charge, both in
 * pence (integers), as required by the Stripe API
 *
 * @docs https://docs.stripe.com/connect/destination-charges
 */
export interface StripeSplit {
  /** Total payable - what the customer is charged (inclusive of VAT) */
  amount: number;
  /** Amount retained by PlanX */
  applicationFeeAmount: number;
}
