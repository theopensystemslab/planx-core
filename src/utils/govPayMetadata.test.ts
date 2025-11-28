import type { GovPayMetadata, Passport } from "../types/index.js";
import { formatGovPayMetadata } from "./govPayMetadata.js";

const mockPassport: Passport = {
  data: {
    string: "agent",
    stringGreaterThan100Chars:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat ex a tempor facilisis. Nullam eget mi velit.",
    stringArray: ["new.building", "new.solarPanel"],
    stringArrayGreaterThan100Chars: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing eli",
      "Phasellus volutpat ex a tempor facilisis",
      "Nullam eget mi velit",
    ],
    number: 123,
    numericString: "456",
    booleanString: "true",
    booleanStringFalse: "false",
    booleanStringMixedCase: "True",
    object: { someGeoJSON: { abc: 123 } },
    boolean: true,
    "some.passport.key": "somePassportValue",
  },
};

describe("formatGovPayMetadata", () => {
  describe("static values", () => {
    it("handles string static values", () => {
      const metadata: GovPayMetadata[] = [
        { key: "staticString", value: "testValue", type: "static" },
      ];

      const result = formatGovPayMetadata({
        metadata,
        userPassport: mockPassport,
        paidViaInviteToPay: false,
      });

      expect(result.staticString).toBe("testValue");
    });

    it("handles number static values", () => {
      const metadata: GovPayMetadata[] = [
        { key: "staticNumber", value: 999, type: "static" },
      ];

      const result = formatGovPayMetadata({
        metadata,
        userPassport: mockPassport,
        paidViaInviteToPay: false,
      });

      expect(result.staticNumber).toBe(999);
    });

    it("handles boolean static values", () => {
      const metadata: GovPayMetadata[] = [
        { key: "staticBoolTrue", value: true, type: "static" },
        { key: "staticBoolFalse", value: false, type: "static" },
      ];

      const result = formatGovPayMetadata({
        metadata,
        userPassport: mockPassport,
        paidViaInviteToPay: false,
      });

      expect(result.staticBoolTrue).toBe(true);
      expect(result.staticBoolFalse).toBe(false);
    });

    it("coerces numeric string static values to numbers", () => {
      const metadata: GovPayMetadata[] = [
        { key: "numericString", value: "789", type: "static" },
      ];

      const result = formatGovPayMetadata({
        metadata,
        userPassport: mockPassport,
        paidViaInviteToPay: false,
      });

      expect(result.numericString).toBe(789);
    });

    it("coerces boolean string static values to booleans", () => {
      const metadata: GovPayMetadata[] = [
        { key: "boolStringTrue", value: "true", type: "static" },
        { key: "boolStringFalse", value: "false", type: "static" },
        { key: "boolStringMixed", value: "True", type: "static" },
      ];

      const result = formatGovPayMetadata({
        metadata,
        userPassport: mockPassport,
        paidViaInviteToPay: false,
      });

      expect(result.boolStringTrue).toBe(true);
      expect(result.boolStringFalse).toBe(false);
      expect(result.boolStringMixed).toBe(true);
    });
  });

  describe("passport data values", () => {
    it("handles string passport values", () => {
      const metadata: GovPayMetadata[] = [
        { key: "key_string", value: "string", type: "data" },
      ];

      const result = formatGovPayMetadata({
        metadata,
        userPassport: mockPassport,
        paidViaInviteToPay: false,
      });

      expect(result.key_string).toBe("agent");
    });

    it("handles number passport values", () => {
      const metadata: GovPayMetadata[] = [
        { key: "key_number", value: "number", type: "data" },
      ];

      const result = formatGovPayMetadata({
        metadata,
        userPassport: mockPassport,
        paidViaInviteToPay: false,
      });

      expect(result.key_number).toBe(123);
    });

    it("handles boolean passport values", () => {
      const metadata: GovPayMetadata[] = [
        { key: "key_boolean", value: "boolean", type: "data" },
      ];

      const result = formatGovPayMetadata({
        metadata,
        userPassport: mockPassport,
        paidViaInviteToPay: false,
      });

      expect(result.key_boolean).toBe(true);
    });

    it("coerces numeric string passport values to numbers", () => {
      const metadata: GovPayMetadata[] = [
        { key: "key_numericString", value: "numericString", type: "data" },
      ];

      const result = formatGovPayMetadata({
        metadata,
        userPassport: mockPassport,
        paidViaInviteToPay: false,
      });

      expect(result.key_numericString).toBe(456);
    });

    it("coerces boolean string passport values to booleans", () => {
      const metadata: GovPayMetadata[] = [
        { key: "key_boolTrue", value: "booleanString", type: "data" },
        { key: "key_boolFalse", value: "booleanStringFalse", type: "data" },
        { key: "key_boolMixed", value: "booleanStringMixedCase", type: "data" },
      ];

      const result = formatGovPayMetadata({
        metadata,
        userPassport: mockPassport,
        paidViaInviteToPay: false,
      });

      expect(result.key_boolTrue).toBe(true);
      expect(result.key_boolFalse).toBe(false);
      expect(result.key_boolMixed).toBe(true);
    });

    it("converts string arrays to joined strings", () => {
      const metadata: GovPayMetadata[] = [
        { key: "key_stringArray", value: "stringArray", type: "data" },
      ];

      const result = formatGovPayMetadata({
        metadata,
        userPassport: mockPassport,
        paidViaInviteToPay: false,
      });

      expect(result.key_stringArray).toBe("new.building, new.solarPanel");
    });

    it("handles dot notation passport keys", () => {
      const metadata: GovPayMetadata[] = [
        { key: "key_nested", value: "some.passport.key", type: "data" },
      ];

      const result = formatGovPayMetadata({
        metadata,
        userPassport: mockPassport,
        paidViaInviteToPay: false,
      });

      expect(result.key_nested).toBe("somePassportValue");
    });
  });

  describe("validation and error handling", () => {
    it("returns error for undefined passport values", () => {
      const metadata: GovPayMetadata[] = [
        { key: "key_missing", value: "doesNotExist", type: "data" },
      ];

      const result = formatGovPayMetadata({
        metadata,
        userPassport: mockPassport,
        paidViaInviteToPay: false,
      });

      expect(result.key_missing).toMatch(
        /Error: Invalid metadata value set in PlanX/,
      );
    });

    it("returns error for object passport values", () => {
      const metadata: GovPayMetadata[] = [
        { key: "key_object", value: "object", type: "data" },
      ];

      const result = formatGovPayMetadata({
        metadata,
        userPassport: mockPassport,
        paidViaInviteToPay: false,
      });

      expect(result.key_object).toMatch(
        /Error: Invalid metadata value set in PlanX/,
      );
    });

    it("truncates strings longer than 100 characters", () => {
      const metadata: GovPayMetadata[] = [
        { key: "key_long", value: "stringGreaterThan100Chars", type: "data" },
      ];

      const result = formatGovPayMetadata({
        metadata,
        userPassport: mockPassport,
        paidViaInviteToPay: false,
      });

      expect(result.key_long).toHaveLength(100);
      expect(result.key_long).toMatch(/\.\.\.$/);
    });

    it("truncates joined arrays longer than 100 characters", () => {
      const metadata: GovPayMetadata[] = [
        {
          key: "key_longArray",
          value: "stringArrayGreaterThan100Chars",
          type: "data",
        },
      ];

      const result = formatGovPayMetadata({
        metadata,
        userPassport: mockPassport,
        paidViaInviteToPay: false,
      });

      expect(result.key_longArray).toHaveLength(100);
      expect(result.key_longArray).toMatch(/\.\.\.$/);
    });
  });

  describe("paidViaInviteToPay handling", () => {
    it("sets value to true when paidViaInviteToPay is true", () => {
      const metadata: GovPayMetadata[] = [
        {
          key: "paidViaInviteToPay",
          value: "paidViaInviteToPay",
          type: "data",
        },
      ];

      const result = formatGovPayMetadata({
        metadata,
        userPassport: mockPassport,
        paidViaInviteToPay: true,
      });

      expect(result.paidViaInviteToPay).toBe(true);
    });

    it("sets value to false when paidViaInviteToPay is false", () => {
      const metadata: GovPayMetadata[] = [
        {
          key: "paidViaInviteToPay",
          value: "paidViaInviteToPay",
          type: "data",
        },
      ];

      const result = formatGovPayMetadata({
        metadata,
        userPassport: mockPassport,
        paidViaInviteToPay: false,
      });

      expect(result.paidViaInviteToPay).toBe(false);
    });
  });
});
