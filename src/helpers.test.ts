import {
  typeEnumToString,
  stringToTypeEnum,
  clearUndefinedKeys,
} from "./helpers";
import { ComponentType } from "./types";

describe("clearUndefinedKeys", () => {
  test("undefined keys are removed from an object", () => {
    const obj = {
      one: {
        1: {
          i: undefined,
          ii: null,
          iii: "3",
        },
      },
      two: undefined,
      three: {
        A: undefined,
        B: "b",
        C: undefined,
      },
    };
    clearUndefinedKeys(obj);
    expect(obj).toStrictEqual({
      one: {
        1: {
          ii: null,
          iii: "3",
        },
      },
      three: {
        B: "b",
      },
    });
  });
  test("it does nothing when passed a non-object", () => {
    expect(() => {
      clearUndefinedKeys("not an object");
    }).not.toThrow();
  });
});

describe("typeEnumToString", () => {
  test("ComponentType values are mapped to a component type string", () => {
    const expectationMap: [number, string][] = [
      [100, "Question"],
      [200, "Answer"],
      [3, "Result"],
      [725, "Confirmation"],
    ];
    for (const [input, expected] of expectationMap) {
      expect(typeEnumToString(input)).toEqual(expected);
    }
  });

  test("ComponentTypes are converted to a string", () => {
    const expectationMap: [ComponentType, string][] = [
      [ComponentType.Question, "Question"],
      [ComponentType.Answer, "Answer"],
      [ComponentType.Result, "Result"],
      [ComponentType.Confirmation, "Confirmation"],
    ];
    for (const [input, expected] of expectationMap) {
      expect(typeEnumToString(input)).toEqual(expected);
    }
  });

  test("an unsupported ComponentType throws an error", () => {
    expect(() => {
      typeEnumToString(999);
    }).toThrow();
  });
});

describe("stringToTypeEnum", () => {
  test("strings are mapped to a ComponentType", () => {
    const expectationMap: [string, ComponentType][] = [
      ["Question", ComponentType.Question],
      ["Answer", ComponentType.Answer],
      ["Result", ComponentType.Result],
      ["Confirmation", ComponentType.Confirmation],
    ];
    for (const [input, expected] of expectationMap) {
      expect(stringToTypeEnum(input)).toEqual(expected);
    }
  });

  test("an unsupported string throws an error", () => {
    expect(() => {
      stringToTypeEnum("unknownComponentType");
    }).toThrow();
  });
});
