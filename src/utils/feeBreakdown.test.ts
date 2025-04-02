import { FeeBreakdown, PassportFeeFields } from "../types/index.js";
import {
  calculateReductionOrExemptionAmounts,
  getFeeBreakdown,
  sumVAT,
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
});

describe("calculateReductionOrExemption() helper function", () => {
  it("correctly outputs the reduction when a calculated value is provided", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 100,
      "application.fee.payable": 50,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
    };
    const { reduction, exemption } =
      calculateReductionOrExemptionAmounts(input);

    expect(reduction).toEqual(50);
    expect(exemption).toEqual(0);
  });

  it("defaults the reduction to 0 when calculated is 0", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 0,
      "application.fee.payable": 100,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
    };
    const { reduction, exemption } =
      calculateReductionOrExemptionAmounts(input);

    expect(reduction).toEqual(0);
    expect(exemption).toEqual(0);
  });

  it("correctly outputs the exemption value as the total payable", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 0,
      "application.fee.payable": 100,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": true,
      "application.fee.exemption.resubmission": false,
    };
    const { reduction, exemption } =
      calculateReductionOrExemptionAmounts(input);

    expect(reduction).toEqual(0);
    expect(exemption).toEqual(100);
  });
});

describe("sumVAT() helper function", () => {
  it("outputs 0 when VAT does not apply", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 100,
      "application.fee.payable": 50,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
    };

    const sum = sumVAT(input);
    expect(sum).toEqual(0);
  });

  it("outputs the sum of Service Charge VAT and Fast Track VAT if both apply", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 100,
      "application.fee.payable": 376,
      "application.fee.serviceCharge": 30,
      "application.fee.serviceCharge.VAT": 6,
      "application.fee.fastTrack": 200,
      "application.fee.fastTrack.VAT": 40,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
    };

    const sum = sumVAT(input);
    expect(sum).toEqual(46);
  });

  it.skip("outputs the sum of known and dynamic passport VAT keys", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 100,
      "application.fee.calculated.VAT": 20, // TODO !!
      "application.fee.payable": 376,
      "application.fee.serviceCharge": 30,
      "application.fee.serviceCharge.VAT": 6,
      "application.fee.fastTrack": 200,
      "application.fee.fastTrack.VAT": 40,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
    };

    const sum = sumVAT(input);
    expect(sum).toEqual(66);
  });
});

describe("toFeeBreakdown() helper function", () => {
  it("correctly maps fields", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 100,
      "application.fee.payable": 50,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
    };

    const { amount } = toFeeBreakdown(input);

    expect(amount.calculated).toEqual(input["application.fee.calculated"]);
    expect(amount.payable).toEqual(input["application.fee.payable"]);
    expect(amount.reduction).toEqual(50);
  });

  it("sets calculated to payable amount if no calculated value is provided", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 0,
      "application.fee.payable": 50,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
    };

    const { amount } = toFeeBreakdown(input);

    expect(amount.calculated).toEqual(input["application.fee.payable"]);
  });

  it("correctly calculates the VAT", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 100,
      "application.fee.payable": 50,
      "application.fee.serviceCharge": 30,
      "application.fee.serviceCharge.VAT": 6,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
    };

    const { amount } = toFeeBreakdown(input);

    expect(amount.vat).toEqual(6);
  });

  it("correctly calculates the payable fee if there are exemptions and a service charge", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 100,
      "application.fee.payable": 36,
      "application.fee.serviceCharge": 30,
      "application.fee.serviceCharge.VAT": 6,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": true,
      "application.fee.exemption.resubmission": false,
    };

    const { amount } = toFeeBreakdown(input);

    expect(amount.payable).toEqual(input["application.fee.payable"]);
    expect(amount.vat).toEqual(input["application.fee.serviceCharge.VAT"]);
    expect(amount.exemption).toEqual(input["application.fee.calculated"]);
  });
});

describe("getFeeBreakdown() function", () => {
  describe("valid data", () => {
    it("returns a fee breakdown for number inputs", () => {
      const mockPassportData = {
        "application.fee.calculated": 1000,
        "application.fee.payable": 800,
        "some.other.fields": ["abc", "xyz"],
      };

      const result = getFeeBreakdown(mockPassportData);

      expect(result).toEqual<FeeBreakdown>({
        amount: {
          calculated: 1000,
          payable: 800,
          reduction: 200,
          exemption: 0,
          vat: 0,
          fastTrack: 0,
          serviceCharge: 0,
        },
        exemptions: [],
        reductions: [],
      });
    });

    it("returns a fee breakdown for number tuple inputs", () => {
      const mockPassportData = {
        "application.fee.calculated": [1000],
        "application.fee.payable": [800],
        "some.other.fields": ["abc", "xyz"],
      };

      const result = getFeeBreakdown(mockPassportData);

      expect(result).toEqual<FeeBreakdown>({
        amount: {
          calculated: 1000,
          payable: 800,
          reduction: 200,
          exemption: 0,
          vat: 0,
          fastTrack: 0,
          serviceCharge: 0,
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
        expect(result.amount.exemption).toEqual(129);
        expect(result.amount.calculated).toEqual(129);

        // Reductions are not returned despite being in the original passport
        expect(result.reductions).toHaveLength(0);

        // Reductions are not calculated - always 0
        expect(result.amount.reduction).toEqual(0);
      });
    });
  });

  describe("invalid inputs", () => {
    it("throws an error for missing data", () => {
      const mockPassportData = {
        "some.other.fields": ["abc", "xyz"],
      };

      expect(() => getFeeBreakdown(mockPassportData)).toThrow();
    });

    it("throws an error for partial data", () => {
      const mockPassportData = {
        "application.fee.calculated": [1000],
        "some.other.fields": ["abc", "xyz"],
      };

      expect(() => getFeeBreakdown(mockPassportData)).toThrow();
    });

    it("throws an error for incorrect data", () => {
      const mockPassportData = {
        "application.fee.calculated": "some string",
        "application.fee.payable": [800, 700],
        "some.other.fields": ["abc", "xyz"],
      };

      expect(() => getFeeBreakdown(mockPassportData)).toThrow();
    });

    it("throws an error for a negative reduction", () => {
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
        "application.fee.reduction.alternative": ["true"],
        "application.fee.payable": 578,
      };

      expect(() => getFeeBreakdown(mockPassportData)).toThrow(
        "Reduction should always be negative",
      );
    });
  });
});
