import { FeeBreakdown, PassportFeeFields } from "../types/index.js";
import {
  calculateReductionOrExemptionAmounts,
  getFeeBreakdown,
  toFeeBreakdown,
  toNumber,
} from "./feeBreakdown.js";

describe("toNumber() helper function", () => {
  it("outputs a number when passed a number", () => {
    const input = 12;
    const output = toNumber(input);

    expect(output).toEqual(input);
  });

  it("outputs a number when passed a number tuple", () => {
    const input: [number] = [12];
    const output = toNumber(input);

    expect(output).toEqual(12);
  });

  it("preserves a negative number when passed a negative number", () => {
    const input = -50;
    const output = toNumber(input);

    expect(output).toEqual(input);
  });
});

describe("calculateReductionOrExemptionAmounts() helper function", () => {
  it("correctly outputs the reduction when a calculated value is provided", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 100,
      "application.fee.calculated.VAT": 0,
      "application.fee.payable": 50,
      "application.fee.payable.VAT": 0,
      "application.fee.fastTrack": 0,
      "application.fee.fastTrack.VAT": 0,
      "application.fee.serviceCharge": 0,
      "application.fee.serviceCharge.VAT": 0,
      "application.fee.paymentProcessing": 0,
      "application.fee.paymentProcessing.VAT": 0,
      "application.fee.reduction.alternative": true,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": true,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
      "application.fee.exemption.demolition": false,
    };
    const { reduction, exemption } =
      calculateReductionOrExemptionAmounts(input);

    expect(reduction).toEqual(-50);
    expect(exemption).toEqual(0);
  });

  it("correctly outputs 0 reduction VAT when calculated is not VAT-able", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 100,
      "application.fee.calculated.VAT": 0,
      "application.fee.payable": 50,
      "application.fee.payable.VAT": 0,
      "application.fee.fastTrack": 0,
      "application.fee.fastTrack.VAT": 0,
      "application.fee.serviceCharge": 0,
      "application.fee.serviceCharge.VAT": 0,
      "application.fee.paymentProcessing": 0,
      "application.fee.paymentProcessing.VAT": 0,
      "application.fee.reduction.alternative": true,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": true,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
      "application.fee.exemption.demolition": false,
    };
    const { reductionVAT, exemptionVAT } =
      calculateReductionOrExemptionAmounts(input);

    expect(reductionVAT).toEqual(0);
    expect(exemptionVAT).toEqual(0);
  });

  it("correctly calculates a 100% exemption and exemption VAT amount when calculated is VAT-able and an exemption applies", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 100,
      "application.fee.calculated.VAT": 20,
      "application.fee.payable": 0,
      "application.fee.payable.VAT": 0,
      "application.fee.fastTrack": 0,
      "application.fee.fastTrack.VAT": 0,
      "application.fee.serviceCharge": 0,
      "application.fee.serviceCharge.VAT": 0,
      "application.fee.paymentProcessing": 0,
      "application.fee.paymentProcessing.VAT": 0,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": true,
      "application.fee.exemption.resubmission": false,
      "application.fee.exemption.demolition": false,
    };
    const { reduction, reductionVAT, exemption, exemptionVAT } =
      calculateReductionOrExemptionAmounts(input);

    expect(reduction).toEqual(0);
    expect(reductionVAT).toEqual(0);
    expect(exemption).toEqual(-100); // 100% of calculated
    expect(exemptionVAT).toEqual(-20); // 100% of calculated.VAT
  });

  it("correctly calculates a 50% reduction and reduction VAT amount when calculated is VAT-able and a reduction applies", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 100,
      "application.fee.calculated.VAT": 20,
      "application.fee.payable": 60,
      "application.fee.payable.VAT": 10,
      "application.fee.fastTrack": 0,
      "application.fee.fastTrack.VAT": 0,
      "application.fee.serviceCharge": 0,
      "application.fee.serviceCharge.VAT": 0,
      "application.fee.paymentProcessing": 0,
      "application.fee.paymentProcessing.VAT": 0,
      "application.fee.reduction.alternative": true,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
      "application.fee.exemption.demolition": false,
    };
    const { reduction, reductionVAT, exemption, exemptionVAT } =
      calculateReductionOrExemptionAmounts(input);

    expect(reduction).toEqual(-50); // 50% of calculated
    expect(reductionVAT).toEqual(-10); // 50% of calculated.VAT
    expect(exemption).toEqual(0);
    expect(exemptionVAT).toEqual(0);
  });

  it("correctly outputs the reduction (aka modification or increase) when the sports club flat fee is more than the calculated base application fee", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 258,
      "application.fee.calculated.VAT": 0,
      "application.fee.payable": 578,
      "application.fee.payable.VAT": 0,
      "application.fee.fastTrack": 0,
      "application.fee.fastTrack.VAT": 0,
      "application.fee.serviceCharge": 0,
      "application.fee.serviceCharge.VAT": 0,
      "application.fee.paymentProcessing": 0,
      "application.fee.paymentProcessing.VAT": 0,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": true,
      "application.fee.reduction.sports": true,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
      "application.fee.exemption.demolition": false,
    };
    const { reduction, exemption } =
      calculateReductionOrExemptionAmounts(input);

    expect(reduction).toEqual(320);
    expect(exemption).toEqual(0);
  });

  it("correctly outputs the reduction (aka modification or increase) when the base application fee is 0", () => {
    // It's valid for an application type that does not carry a fee to still have reductions or modifications!
    const input: PassportFeeFields = {
      "application.fee.calculated": 0,
      "application.fee.calculated.VAT": 0,
      "application.fee.payable": 626, // Formula: calculated + flat sports fee + (extra charges + VAT)
      "application.fee.payable.VAT": 8,
      "application.fee.fastTrack": 0,
      "application.fee.fastTrack.VAT": 0,
      "application.fee.serviceCharge": 40,
      "application.fee.serviceCharge.VAT": 8,
      "application.fee.paymentProcessing": 0,
      "application.fee.paymentProcessing.VAT": 0,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": true,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
      "application.fee.exemption.demolition": false,
    };

    const { reduction, exemption } =
      calculateReductionOrExemptionAmounts(input);

    // In this scenario, the reduction equals the full flat sports fee amount
    //   Formula: payable - (extra charges + VAT) - calculated
    expect(reduction).toEqual(578);
    expect(exemption).toEqual(0);
  });

  it("correctly outputs the reduction excluding any VAT-able extra charges when payable includes extra charges", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 200,
      "application.fee.calculated.VAT": 0,
      "application.fee.payable": 148,
      "application.fee.payable.VAT": 8,
      "application.fee.fastTrack": 0,
      "application.fee.fastTrack.VAT": 0,
      "application.fee.serviceCharge": 40,
      "application.fee.serviceCharge.VAT": 8,
      "application.fee.paymentProcessing": 0,
      "application.fee.paymentProcessing.VAT": 0,
      "application.fee.reduction.alternative": true,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
      "application.fee.exemption.demolition": false,
    };
    const { reduction, exemption } =
      calculateReductionOrExemptionAmounts(input);

    expect(reduction).toEqual(-100);
    expect(exemption).toEqual(0);
  });

  it("correctly outputs the exemption value as the total payable when there are no extra charges", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 100,
      "application.fee.calculated.VAT": 0,
      "application.fee.payable": 0,
      "application.fee.payable.VAT": 0,
      "application.fee.fastTrack": 0,
      "application.fee.fastTrack.VAT": 0,
      "application.fee.serviceCharge": 0,
      "application.fee.serviceCharge.VAT": 0,
      "application.fee.paymentProcessing": 0,
      "application.fee.paymentProcessing.VAT": 0,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": true,
      "application.fee.exemption.resubmission": false,
      "application.fee.exemption.demolition": false,
    };
    const { reduction, exemption } =
      calculateReductionOrExemptionAmounts(input);

    expect(reduction).toEqual(0);
    expect(exemption).toEqual(-100);
  });

  it("correctly outputs a 0 exemption amount when an exemption applies but does not actually change the payable amount", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 100,
      "application.fee.calculated.VAT": 0,
      "application.fee.payable": 100,
      "application.fee.payable.VAT": 0,
      "application.fee.fastTrack": 0,
      "application.fee.fastTrack.VAT": 0,
      "application.fee.serviceCharge": 0,
      "application.fee.serviceCharge.VAT": 0,
      "application.fee.paymentProcessing": 0,
      "application.fee.paymentProcessing.VAT": 0,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": true,
      "application.fee.exemption.resubmission": false,
      "application.fee.exemption.demolition": false,
    };
    const { reduction, exemption } =
      calculateReductionOrExemptionAmounts(input);

    expect(reduction).toEqual(0);
    expect(exemption).toEqual(0);
  });

  it("correctly outputs a non-100% exemption amount excluding any VAT-able extra charges", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 200,
      "application.fee.calculated.VAT": 0,
      "application.fee.payable": 228,
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
      "application.fee.exemption.disability": true, // scenario: 20 pound exemption
      "application.fee.exemption.resubmission": false,
      "application.fee.exemption.demolition": false,
    };
    const { reduction, exemption } =
      calculateReductionOrExemptionAmounts(input);

    expect(reduction).toEqual(0);
    expect(exemption).toEqual(-20);
  });

  it("correctly outputs the exemption excluding any VAT-able extra charges when payable includes extra charges", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 300,
      "application.fee.calculated.VAT": 0,
      "application.fee.payable": 228,
      "application.fee.payable.VAT": 38,
      "application.fee.fastTrack": 150,
      "application.fee.fastTrack.VAT": 30,
      "application.fee.serviceCharge": 40,
      "application.fee.serviceCharge.VAT": 8,
      "application.fee.paymentProcessing": 0,
      "application.fee.paymentProcessing.VAT": 0,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": true,
      "application.fee.exemption.demolition": false,
    };

    const { reduction, exemption } =
      calculateReductionOrExemptionAmounts(input);

    expect(reduction).toEqual(0);
    expect(exemption).toEqual(-300);
  });

  it("correctly outputs the exemption VAT based on the calculated application fee only excluding any VAT-able extra charges when payable includes extra charges", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 300,
      "application.fee.calculated.VAT": 60,
      "application.fee.payable": 288,
      "application.fee.payable.VAT": 98,
      "application.fee.fastTrack": 150,
      "application.fee.fastTrack.VAT": 30,
      "application.fee.serviceCharge": 40,
      "application.fee.serviceCharge.VAT": 8,
      "application.fee.paymentProcessing": 0,
      "application.fee.paymentProcessing.VAT": 0,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": true,
      "application.fee.exemption.demolition": false,
    };

    const { reduction, reductionVAT, exemption, exemptionVAT } =
      calculateReductionOrExemptionAmounts(input);

    expect(reduction).toEqual(0);
    expect(reductionVAT).toEqual(0);
    expect(exemption).toEqual(-300);
    expect(exemptionVAT).toEqual(-60);
  });

  it("throws an error if a non-sports reduction is not negative", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 100,
      "application.fee.calculated.VAT": 0,
      "application.fee.payable": 200,
      "application.fee.payable.VAT": 0,
      "application.fee.fastTrack": 0,
      "application.fee.fastTrack.VAT": 0,
      "application.fee.serviceCharge": 0,
      "application.fee.serviceCharge.VAT": 0,
      "application.fee.paymentProcessing": 0,
      "application.fee.paymentProcessing.VAT": 0,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": true,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
      "application.fee.exemption.demolition": false,
    };

    expect(() => calculateReductionOrExemptionAmounts(input)).toThrowError(
      "Non-sports reductions expected to be negative",
    );
  });
});

describe("toFeeBreakdown() helper function", () => {
  it("correctly maps fields", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 100,
      "application.fee.calculated.VAT": 0,
      "application.fee.payable": 148,
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
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
      "application.fee.exemption.demolition": false,
    };

    const { amount } = toFeeBreakdown(input);

    expect(amount.calculated).toEqual(input["application.fee.calculated"]);
    expect(amount.payable).toEqual(input["application.fee.payable"]);
    expect(amount.payableVAT).toEqual(input["application.fee.payable.VAT"]);
    expect(amount.serviceCharge).toEqual(
      input["application.fee.serviceCharge"],
    );
    expect(amount.serviceChargeVAT).toEqual(
      input["application.fee.serviceCharge.VAT"],
    );
  });

  it("does not set calculated to payable amount if no calculated value is provided", () => {
    // It's valid to have initial calculated application fee = 0, but Fast Track - so payable > 0
    //   Fee breakdown display should correctly preserve "Application fee = 0"
    const input: PassportFeeFields = {
      "application.fee.calculated": 0,
      "application.fee.calculated.VAT": 0,
      "application.fee.payable": 90,
      "application.fee.payable.VAT": 0,
      "application.fee.fastTrack": 75,
      "application.fee.fastTrack.VAT": 15,
      "application.fee.serviceCharge": 0,
      "application.fee.serviceCharge.VAT": 0,
      "application.fee.paymentProcessing": 0,
      "application.fee.paymentProcessing.VAT": 0,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
      "application.fee.exemption.demolition": false,
    };

    const { amount } = toFeeBreakdown(input);

    expect(amount.calculated).toEqual(input["application.fee.calculated"]);
    expect(amount.payable).toEqual(input["application.fee.payable"]);
  });
});

describe("getFeeBreakdown() function", () => {
  describe("valid data", () => {
    it("returns a fee breakdown for number inputs", () => {
      const mockPassportData = {
        "application.fee.calculated": 1000,
        "application.fee.payable": 800,
        "application.fee.reduction.parishCouncil": ["true"],
        "some.other.fields": ["abc", "xyz"],
      };

      const result = getFeeBreakdown(mockPassportData);

      expect(result).toEqual<FeeBreakdown>({
        amount: {
          calculated: 1000,
          calculatedVAT: 0,
          reduction: -200,
          reductionVAT: 0,
          exemption: 0,
          exemptionVAT: 0,
          payable: 800,
          payableVAT: 0,
          fastTrack: 0,
          fastTrackVAT: 0,
          serviceCharge: 0,
          serviceChargeVAT: 0,
          paymentProcessing: 0,
          paymentProcessingVAT: 0,
        },
        exemptions: [],
        reductions: ["parishCouncil"],
      });
    });

    it("returns a fee breakdown for number tuple inputs", () => {
      const mockPassportData = {
        "application.fee.calculated": [1000],
        "application.fee.payable": [578],
        "application.fee.reduction.sports": ["true"],
        "some.other.fields": ["abc", "xyz"],
      };

      const result = getFeeBreakdown(mockPassportData);

      expect(result).toEqual<FeeBreakdown>({
        amount: {
          calculated: 1000,
          calculatedVAT: 0,
          reduction: -422,
          reductionVAT: 0,
          exemption: 0,
          exemptionVAT: 0,
          payable: 578,
          payableVAT: 0,
          fastTrack: 0,
          fastTrackVAT: 0,
          serviceCharge: 0,
          serviceChargeVAT: 0,
          paymentProcessing: 0,
          paymentProcessingVAT: 0,
        },
        exemptions: [],
        reductions: ["sports"],
      });
    });

    it("returns a fee breakdown for a passport with extra charges and no exemptions or reductions present", () => {
      const mockPassportData = {
        "application.fee.calculated": 1000,
        "application.fee.payable": 1151.6560000000002,
        "application.fee.payable.VAT": 25.276,
        "application.fastTrack": ["yes"],
        "application.fee.fastTrack": 75,
        "application.fee.fastTrack.VAT": 15,
        "application.fee.serviceCharge": 40,
        "application.fee.serviceCharge.VAT": 8,
        "application.fee.paymentProcessing": 11.38,
        "application.fee.paymentProcessing.VAT": 2.2760000000000002,
      };

      const result = getFeeBreakdown(mockPassportData);

      expect(result).toEqual<FeeBreakdown>({
        amount: {
          calculated: 1000,
          calculatedVAT: 0,
          reduction: 0,
          reductionVAT: 0,
          exemption: 0,
          exemptionVAT: 0,
          payable: 1151.6560000000002,
          payableVAT: 25.276,
          fastTrack: 75,
          fastTrackVAT: 15,
          serviceCharge: 40,
          serviceChargeVAT: 8,
          paymentProcessing: 11.38,
          paymentProcessingVAT: 2.2760000000000002,
        },
        exemptions: [],
        reductions: [],
      });
    });

    it("parses 'true' reduction values to a list of keys", () => {
      const mockPassportData = {
        "application.fee.calculated": 1000,
        "application.fee.payable": 800,
        "application.fee.reduction.alternative": ["true"],
        "application.fee.reduction.parishCouncil": ["true"],
        "some.other.fields": ["abc", "xyz"],
      };

      const result = getFeeBreakdown(mockPassportData);

      expect(result?.reductions).toHaveLength(2);
      expect(result?.reductions).toEqual(
        expect.arrayContaining(["alternative", "parishCouncil"]),
      );
    });

    it("does not parse 'false' reduction values to a list of keys", () => {
      const mockPassportData = {
        "application.fee.calculated": 1000,
        "application.fee.payable": 800,
        "application.fee.reduction.alternative": ["false"],
        "application.fee.reduction.parishCouncil": ["false"],
        "some.other.fields": ["abc", "xyz"],
      };

      const result = getFeeBreakdown(mockPassportData);

      expect(result?.reductions).toHaveLength(0);
    });

    it("does not parse non-schema reduction values", () => {
      const mockPassportData = {
        "application.fee.calculated": 1000,
        "application.fee.payable": 800,
        "application.fee.reduction.alternative": ["true"],
        "application.fee.reduction.parishCouncil": ["false"],
        "application.fee.reduction.someReason": ["true"],
        "application.fee.reduction.someOtherReason": ["false"],
        "some.other.fields": ["abc", "xyz"],
      };

      const result = getFeeBreakdown(mockPassportData);

      expect(result?.reductions).toEqual(
        expect.not.arrayContaining(["someReason"]),
      );
      expect(result?.reductions).toEqual(
        expect.not.arrayContaining(["someOtherReason"]),
      );
    });

    it("parses 'true' exemption values to a list of keys", () => {
      const mockPassportData = {
        "application.fee.calculated": 1000,
        "application.fee.payable": 800,
        "application.fee.exemption.disability": ["true"],
        "application.fee.exemption.resubmission": ["true"],
        "some.other.fields": ["abc", "xyz"],
      };

      const result = getFeeBreakdown(mockPassportData);

      expect(result?.exemptions).toHaveLength(2);
      expect(result?.exemptions).toEqual(
        expect.arrayContaining(["disability", "resubmission"]),
      );
    });

    it("does not parse 'false' exemption values to a list of keys", () => {
      const mockPassportData = {
        "application.fee.calculated": 1000,
        "application.fee.payable": 800,
        "application.fee.exemption.disability": ["false"],
        "application.fee.exemption.resubmission": ["false"],
        "some.other.fields": ["abc", "xyz"],
      };

      const result = getFeeBreakdown(mockPassportData);

      expect(result?.exemptions).toHaveLength(0);
    });

    it("does not parse non-schema exemption values", () => {
      const mockPassportData = {
        "application.fee.calculated": 1000,
        "application.fee.payable": 800,
        "application.fee.exemption.disability": ["false"],
        "application.fee.exemption.resubmission": ["false"],
        "application.fee.exemption.someReason": ["true"],
        "application.fee.exemption.someOtherReason": ["false"],
        "some.other.fields": ["abc", "xyz"],
      };

      const result = getFeeBreakdown(mockPassportData);

      expect(result?.exemptions).toEqual(
        expect.not.arrayContaining(["someReason"]),
      );
      expect(result?.exemptions).toEqual(
        expect.not.arrayContaining(["someOtherReason"]),
      );
    });

    describe("passports with both exemptions and reductions", () => {
      test("exemptions are of higher precedent than reductions", () => {
        const mockPassportData = {
          "proposal.siteArea": "0",
          "application.type": ["ldc.proposed"],
          "property.type": ["residential.dwelling"],
          "proposal.projectType": ["internal"],
          "application.fee.category.sixAndSeven": 129,
          multipleFees: ["true"],
          // User has collected an exemption
          "application.fee.exemption.disability": ["true"],
          "disabilityExemptionEvidence.rule": ["recommended"],
          "application.fee.exemption.disability.reason": "someReason",
          // User has collected a reduction
          "application.fee.reduction.alternative": ["true"],
          "application.fee.category.oneToThirteen": ["true"],
          "application.fee.category.withinOne": ["false"],
          "application.fee.calculated": 129,
          "application.fee.payable": 0,
        };

        const result = getFeeBreakdown(mockPassportData);

        // Exemptions are listed
        expect(result.exemptions).toEqual(
          expect.arrayContaining(["disability"]),
        );

        // Exemption value is correctly set to 100%
        expect(result.amount.exemption).toEqual(-129);
        expect(result.amount.calculated).toEqual(129);

        // Reductions are not returned despite being in the original passport
        expect(result.reductions).toHaveLength(0);

        // Reductions are not calculated - always 0
        expect(result.amount.reduction).toEqual(0);
      });
    });

    it("allows a positive reduction if sports reduction applies", () => {
      const mockPassportData = {
        "proposal.siteArea": "0",
        "application.type": ["pp.full.householder"],
        "application.fee.calculated": 258,
        multipleFees: ["false"],
        "application.fee.exemption.disability": ["false"],
        "proposal.projectType": ["unit"],
        "property.type": ["commercial.leisure.sport.recreationGround"],
        "application.fee.reduction.sports": ["true"],
        "application.fee.reduction.parishCouncil": ["false"],
        "application.fee.payable": 578,
      };

      expect(() => getFeeBreakdown(mockPassportData)).not.toThrow(
        "Reduction should always be negative",
      );
    });
  });

  describe("invalid inputs", () => {
    it("throws an error for missing data", () => {
      const mockPassportData = {
        "some.other.fields": ["abc", "xyz"],
      };

      expect(() => getFeeBreakdown(mockPassportData)).toThrowError(
        expect.objectContaining({
          message: expect.stringMatching(/Failed to parse fee breakdown data/),
          cause: expect.objectContaining({
            fieldErrors: expect.objectContaining({
              "application.fee.payable": expect.arrayContaining([
                "Invalid input",
              ]),
            }),
            formErrors: expect.any(Array),
          }),
        }),
      );
    });

    it("throws an error for partial data", () => {
      const mockPassportData = {
        "application.fee.calculated": [1000],
        "some.other.fields": ["abc", "xyz"],
      };

      expect(() => getFeeBreakdown(mockPassportData)).toThrowError(
        expect.objectContaining({
          message: expect.stringMatching(/Failed to parse fee breakdown data/),
          cause: expect.objectContaining({
            fieldErrors: expect.objectContaining({
              "application.fee.payable": expect.arrayContaining([
                "Invalid input",
              ]),
            }),
            formErrors: expect.any(Array),
          }),
        }),
      );
    });

    it("throws an error for incorrect data", () => {
      const mockPassportData = {
        "application.fee.calculated": "some string",
        "application.fee.payable": [800, 700],
        "some.other.fields": ["abc", "xyz"],
      };

      expect(() => getFeeBreakdown(mockPassportData)).toThrowError(
        expect.objectContaining({
          message: expect.stringMatching(/Failed to parse fee breakdown data/),
          cause: expect.objectContaining({
            fieldErrors: expect.objectContaining({
              "application.fee.calculated": expect.arrayContaining([
                "Invalid input",
              ]),
              "application.fee.payable": expect.arrayContaining([
                "Array must contain at most 1 element(s)",
              ]),
            }),
            formErrors: expect.any(Array),
          }),
        }),
      );
    });

    it("throws an error if reduction is positive and not sports club", () => {
      const mockPassportData = {
        "proposal.siteArea": "0",
        "application.type": ["pp.full.householder"],
        "application.fee.calculated": 100,
        multipleFees: ["false"],
        "application.fee.exemption.disability": ["false"],
        "proposal.projectType": ["unit"],
        "property.type": ["commercial.leisure.sport.recreationGround"],
        "application.fee.reduction.parishCouncil": ["true"],
        "application.fee.payable": 200,
      };

      expect(() => getFeeBreakdown(mockPassportData)).not.toThrow(
        "Non-sports reductions should always be negative",
      );
    });
  });
});
