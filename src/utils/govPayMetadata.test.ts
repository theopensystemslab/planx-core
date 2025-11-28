import type { GovPayMetadata, Passport } from "../types/index.js";
import { formatGovPayMetadata } from "./govPayMetadata.js";

const mockMetadata: GovPayMetadata[] = [
  { key: "firstKey", value: "firstValue", type: "static" },
  { key: "secondKey", value: "secondValue", type: "static" },
  { key: "key_string", value: "string", type: "data" },
  {
    key: "key_stringGreaterThan100Chars",
    value: "stringGreaterThan100Chars",
    type: "data",
  },
  { key: "key_stringArray", value: "stringArray", type: "data" },
  {
    key: "key_stringArrayGreaterThan100Chars",
    value: "stringArrayGreaterThan100Chars",
    type: "data",
  },
  { key: "key_number", value: "number", type: "data" },
  { key: "key_object", value: "object", type: "data" },
  { key: "key_boolean", value: "boolean", type: "data" },
  { key: "key_numericString", value: "numericString", type: "data" },
  {
    key: "key_someValueNotSetInPassport",
    value: "someValueNotSetInPassportolean",
    type: "data",
  },
  {
    key: "paidViaInviteToPay",
    value: "paidViaInviteToPay",
    type: "data",
  },
  {
    key: "key_newFormatDataVal",
    value: "some.passport.key",
    type: "data",
  },
];

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
    object: { someGeoJSON: { abc: 123 } },
    boolean: true,
    "some.passport.key": "somePassportValue",
  },
};

const mockParams: Parameters<typeof formatGovPayMetadata>[0] = {
  metadata: mockMetadata,
  userPassport: mockPassport,
  paidViaInviteToPay: false,
};

describe("transforming the payload to the correct format for GovPay", () => {
  it("handles variables set in the Editor", () => {
    const result = formatGovPayMetadata(mockParams);
    expect(result).toMatchObject({
      firstKey: "firstValue",
      secondKey: "secondValue",
    });
  });

  it("handles variables set in the Passport", () => {
    const result = formatGovPayMetadata(mockParams);
    expect(result).toMatchObject({
      key_string: "agent",
      key_boolean: true,
    });
  });
});

describe("validating data", () => {
  const formatted = formatGovPayMetadata(mockParams);

  const get = (testKey: string) => [
    mockPassport.data[testKey], // Expected
    formatted[`key_${testKey}`], // Result
  ];

  it("accepts strings", () => {
    const [expected, result] = get("string");
    // Value parsed as-is, no changes made
    expect(result).toBe(expected);
  });

  it("accepts numbers", () => {
    const [expected, result] = get("number");
    // Value parsed as-is, no changes made
    expect(result).toBe(expected);
  });

  it("coerces numeric string to numbers", () => {
    const [_, result] = get("numericString");
    expect(result).toBe(456);
  });

  it("parses data values by type", () => {
    const [_, result] = get("newFormatDataVal");
    expect(result).toBe("somePassportValue");
  });

  it("accepts booleans", () => {
    const [expected, result] = get("boolean");
    // Value parsed as-is, no changes made
    expect(result).toBe(expected);
  });

  it("converts string arrays to string", () => {
    const [_, result] = get("stringArray");
    const expected = "new.building, new.solarPanel";
    // Array of strings joined to single string
    expect(result).toBe(expected);
  });

  it("returns an error for undefined values", () => {
    const [_, result] = get("someValueNotSetInPassport");
    // Error passed to GovPay API as string, payment allows to proceed
    expect(result).toMatch(/Error: Invalid metadata value set in PlanX/);
  });

  it("returns an error for objects", () => {
    const [_, result] = get("object");
    // Error passed to GovPay API as string, payment allows to proceed
    expect(result).toMatch(/Error: Invalid metadata value set in PlanX/);
  });

  it("truncates long strings", () => {
    const [_, result] = get("stringGreaterThan100Chars");
    // Truncated to 100 characters to meet GovPay API requirements
    expect(result).toHaveLength(100);
    // String ends in ellipsis (...)
    expect(result).toMatch(/.*\.\.\.$/);
  });

  it("truncates long strings from arrays", () => {
    const [_, result] = get("stringArrayGreaterThan100Chars");
    // Truncated to 100 characters to meet GovPay API requirements
    expect(result).toHaveLength(100);
    // String ends in ellipsis (...)
    expect(result).toMatch(/.*\.\.\.$/);
  });

  describe("handling of `paidViaInviteToPay` key", () => {
    it("sets value to true based on input", () => {
      const formatted = formatGovPayMetadata({
        ...mockParams,
        paidViaInviteToPay: true,
      });

      expect(formatted).toMatchObject({
        paidViaInviteToPay: true,
      });
    });

    it("sets value to false based on input", () => {
      const formatted = formatGovPayMetadata({
        ...mockParams,
        paidViaInviteToPay: false,
      });

      expect(formatted).toMatchObject({
        paidViaInviteToPay: false,
      });
    });
  });
});
