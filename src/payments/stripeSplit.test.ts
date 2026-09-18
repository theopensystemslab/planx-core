import { FeeBreakdown } from "../types/index.js";
import { toFeeBreakdown } from "../utils/feeBreakdown.js";
import { calculateStripeSplit } from "./stripeSplit.js";

/**
 * Build a FeeBreakdown for testing
 * Amounts are in pounds (as they are in the passport)
 */
const makeBreakdown = (
  amount: Partial<FeeBreakdown["amount"]> = {},
): FeeBreakdown => ({
  amount: {
    calculated: 0,
    calculatedVAT: 0,
    payable: 0,
    payableVAT: 0,
    fastTrack: 0,
    fastTrackVAT: 0,
    serviceCharge: 0,
    serviceChargeVAT: 0,
    paymentProcessing: 0,
    paymentProcessingVAT: 0,
    reduction: 0,
    reductionVAT: 0,
    exemption: 0,
    exemptionVAT: 0,
    ...amount,
  },
  reductions: [],
  exemptions: [],
});

describe("calculateStripeSplit()", () => {
  describe("service charge applied", () => {
    it("keeps the service charge + VAT, transfers the statutory fee to the council", () => {
      // Statutory fee (VAT-exempt) £258 + £40 service charge + £8 VAT = £306
      const breakdown = makeBreakdown({
        calculated: 258,
        payable: 306,
        payableVAT: 8,
        serviceCharge: 40,
        serviceChargeVAT: 8,
      });

      const { amount, applicationFeeAmount } = calculateStripeSplit(breakdown);

      expect(amount).toBe(30600);
      expect(applicationFeeAmount).toBe(4800);
      // Council receives 100% of the statutory fee, nothing deducted
      expect(amount - applicationFeeAmount).toBe(25800);
    });

    it("keeps only the service charge + VAT on a discretionary (VAT-able) fee", () => {
      // Pre-app £5000 + £1000 VAT + £40 service charge + £8 VAT = £6048
      const breakdown = makeBreakdown({
        calculated: 5000,
        calculatedVAT: 1000,
        payable: 6048,
        payableVAT: 1008,
        serviceCharge: 40,
        serviceChargeVAT: 8,
      });

      const { amount, applicationFeeAmount } = calculateStripeSplit(breakdown);

      expect(amount).toBe(604800);
      expect(applicationFeeAmount).toBe(4800);
      // Council receives the discretionary fee + its VAT (£6000)
      expect(amount - applicationFeeAmount).toBe(600000);
    });
  });

  describe("service charge exempt / below threshold", () => {
    it("returns applicationFeeAmount = 0 when there is no service charge", () => {
      // Fee under £100 carries no service charge
      const breakdown = makeBreakdown({
        calculated: 80,
        payable: 80,
      });

      const { amount, applicationFeeAmount } = calculateStripeSplit(breakdown);

      expect(amount).toBe(8000);
      expect(applicationFeeAmount).toBe(0);
      expect(amount - applicationFeeAmount).toBe(8000);
    });
  });

  describe("fastTrack", () => {
    it("leaves the fastTrack line with the council, keeping only the service charge", () => {
      // £258 fee + £100 fastTrack + £20 VAT + £40 service charge + £8 VAT = £426
      const breakdown = makeBreakdown({
        calculated: 258,
        fastTrack: 100,
        fastTrackVAT: 20,
        payable: 426,
        payableVAT: 28,
        serviceCharge: 40,
        serviceChargeVAT: 8,
      });

      const { amount, applicationFeeAmount } = calculateStripeSplit(breakdown);

      expect(amount).toBe(42600);
      expect(applicationFeeAmount).toBe(4800);
      // Council keeps fee + fastTrack + fastTrack VAT (£378)
      expect(amount - applicationFeeAmount).toBe(37800);
    });
  });

  describe("reductions and exemptions", () => {
    it("splits against the reduced payable, keeping the full service charge", () => {
      // £462 fee, 50% reduction (−£231), + £40 service charge + £8 VAT = £279
      const breakdown = makeBreakdown({
        calculated: 462,
        payable: 279,
        payableVAT: 8,
        serviceCharge: 40,
        serviceChargeVAT: 8,
        reduction: -231,
      });

      const { amount, applicationFeeAmount } = calculateStripeSplit(breakdown);

      expect(amount).toBe(27900);
      expect(applicationFeeAmount).toBe(4800);
      expect(amount - applicationFeeAmount).toBe(23100);
    });

    it("still keeps the service charge when the fee is 100% exempt", () => {
      // Fee fully exempt (£258 → £0), service charge still applies: £48 payable
      const breakdown = makeBreakdown({
        calculated: 258,
        payable: 48,
        payableVAT: 8,
        serviceCharge: 40,
        serviceChargeVAT: 8,
        exemption: -258,
      });

      const { amount, applicationFeeAmount } = calculateStripeSplit(breakdown);

      expect(amount).toBe(4800);
      expect(applicationFeeAmount).toBe(4800);
      // Council receives nothing when the fee is fully exempt
      expect(amount - applicationFeeAmount).toBe(0);
    });
  });

  describe("payment processing line", () => {
    it("does not fold the payment-processing line into PlanX's cut", () => {
      // A legacy paymentProcessing line stays with the council, not PlanX
      // Should not be used in new Stripe world!
      const breakdown = makeBreakdown({
        calculated: 258,
        payable: 268,
        serviceCharge: 0,
        paymentProcessing: 10,
      });

      const { amount, applicationFeeAmount } = calculateStripeSplit(breakdown);

      expect(amount).toBe(26800);
      expect(applicationFeeAmount).toBe(0);
    });
  });

  describe("higher service charge", () => {
    it("keeps a higher-than-£40 service charge + its VAT", () => {
      // £258 statutory + £75 service charge + £15 VAT = £348
      const breakdown = makeBreakdown({
        calculated: 258,
        payable: 348,
        payableVAT: 15,
        serviceCharge: 75,
        serviceChargeVAT: 15,
      });

      const { amount, applicationFeeAmount } = calculateStripeSplit(breakdown);

      expect(amount).toBe(34800);
      expect(applicationFeeAmount).toBe(9000);
      expect(amount - applicationFeeAmount).toBe(25800);
    });
  });

  describe("invalid splits", () => {
    it("throws when there is nothing to pay (£0 charge)", () => {
      // Fully exempt with no service charge - Stripe would reject a £0 charge
      const breakdown = makeBreakdown({ calculated: 258, payable: 0 });

      expect(() => calculateStripeSplit(breakdown)).toThrow(
        /amount must be a positive integer/,
      );
    });

    it("throws when PlanX's portion exceeds the total payable", () => {
      const breakdown = makeBreakdown({
        payable: 40,
        serviceCharge: 40,
        serviceChargeVAT: 8,
      });

      expect(() => calculateStripeSplit(breakdown)).toThrow(
        /must be between 0 and amount/,
      );
    });
  });

  it("works on a breakdown derived from passport data via toFeeBreakdown", () => {
    // End-to-end with the real transform: £258 statutory + £40 + £8 VAT
    const breakdown = toFeeBreakdown({
      "application.fee.calculated": 258,
      "application.fee.calculated.VAT": 0,
      "application.fee.payable": 306,
      "application.fee.payable.VAT": 8,
      "application.fee.fastTrack": 0,
      "application.fee.fastTrack.VAT": 0,
      "application.fee.serviceCharge": 40,
      "application.fee.serviceCharge.VAT": 8,
      "application.fee.paymentProcessing": 0,
      "application.fee.paymentProcessing.VAT": 0,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.reduction.local": false,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
      "application.fee.exemption.demolition": false,
    });

    const { amount, applicationFeeAmount } = calculateStripeSplit(breakdown);

    expect(amount).toBe(30600);
    expect(applicationFeeAmount).toBe(4800);
  });
});
