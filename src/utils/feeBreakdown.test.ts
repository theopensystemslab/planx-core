import { PassportFeeFields } from "../types/index.js";
import {
  calculateReduction,
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
});

describe("calculateReduction() helper function", () => {
  it("correctly outputs the reduction when a calculated value is provided", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 100,
      "application.fee.payable": 50,
      "application.fee.payable.includesVAT": false,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
    };
    const reduction = calculateReduction(input);

    expect(reduction).toEqual(50);
  });

  it("defaults to 0 when calculated is 0", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 0,
      "application.fee.payable": 100,
      "application.fee.payable.includesVAT": false,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
    };
    const reduction = calculateReduction(input);

    expect(reduction).toEqual(0);
  });
});

describe("toFeeBreakdown() helper function", () => {
  it("correctly maps fields", () => {
    const input: PassportFeeFields = {
      "application.fee.calculated": 100,
      "application.fee.payable": 50,
      "application.fee.payable.includesVAT": true,
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
      "application.fee.payable.includesVAT": true,
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
      "application.fee.payable.includesVAT": true,
      "application.fee.reduction.alternative": false,
      "application.fee.reduction.parishCouncil": false,
      "application.fee.reduction.sports": false,
      "application.fee.exemption.disability": false,
      "application.fee.exemption.resubmission": false,
    };

    const { amount } = toFeeBreakdown(input);

    expect(amount.vat).toEqual(16.67);
  });
});

describe("getFeeBreakdown() function", () => {
  describe("valid data", () => {
    it("returns a fee breakdown for number inputs", () => {
      const mockPassportData = {
        "application.fee.calculated": 1000,
        "application.fee.payable": 800,
        "application.fee.payable.includesVAT": ["true"],
        "some.other.fields": ["abc", "xyz"],
      };

      const result = getFeeBreakdown(mockPassportData);

      expect(result).toEqual({
        amount: {
          calculated: 1000,
          payable: 800,
          reduction: 200,
          vat: 166.67,
        },
        exemptions: [],
        reductions: [],
      });
    });

    it("returns a fee breakdown for number tuple inputs", () => {
      const mockPassportData = {
        "application.fee.calculated": [1000],
        "application.fee.payable": [800],
        "application.fee.payable.includesVAT": ["true"],
        "some.other.fields": ["abc", "xyz"],
      };

      const result = getFeeBreakdown(mockPassportData);

      expect(result).toEqual({
        amount: {
          calculated: 1000,
          payable: 800,
          reduction: 200,
          vat: 166.67,
        },
        exemptions: [],
        reductions: [],
      });
    });

    it("parses 'true' reduction values to a list of keys", () => {
      const mockPassportData = {
        "application.fee.calculated": 1000,
        "application.fee.payable": 800,
        "application.fee.payable.includesVAT": ["true"],
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
        "application.fee.payable.includesVAT": ["true"],
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
        "application.fee.payable.includesVAT": ["true"],
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
        "application.fee.payable.includesVAT": ["true"],
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
        "application.fee.payable.includesVAT": ["true"],
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
        "application.fee.payable.includesVAT": ["true"],
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
  });

  describe("invalid inputs", () => {
    it("returns undefined for missing data", () => {
      const mockPassportData = {
        "some.other.fields": ["abc", "xyz"],
      };

      expect(() => getFeeBreakdown(mockPassportData)).toThrow();
    });

    it("returns undefined for partial data", () => {
      const mockPassportData = {
        "application.fee.calculated": [1000],
        "application.fee.payable.includesVAT": ["true"],
        "some.other.fields": ["abc", "xyz"],
      };

      expect(() => getFeeBreakdown(mockPassportData)).toThrow();
    });

    it("returns undefined for incorrect data", () => {
      const mockPassportData = {
        "application.fee.calculated": "some string",
        "application.fee.payable": [800, 700],
        "application.fee.payable.includesVAT": false,
        "some.other.fields": ["abc", "xyz"],
      };

      expect(() => getFeeBreakdown(mockPassportData)).toThrow();
    });
  });
});
