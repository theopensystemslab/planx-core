import { Passport } from ".";
import { Passport as IPassport } from "../../types";
import {
  multipleFileQuestions,
  multipleFilesMultipleQuestions,
  noFiles,
  singleFileQuestion,
} from "./mocks";

describe("Passport", () => {
  describe("constructor", () => {
    it("throws when given no data", () => {
      expect(() => new Passport({})).toThrow();
      expect(() => new Passport({ data: undefined })).toThrow();
    });

    it("can be constructed with a Passport object", () => {
      const passportObject: IPassport = { data: { a: 1 } };
      const passport = new Passport(passportObject);
      expect(passport.number(["a"])).toEqual(1);
    });
  });

  describe("files() method", () => {
    it("handles Passport without files", () => {
      const passport = new Passport(noFiles);
      expect(passport.files()).toEqual([]);
    });

    it("handles Passport with a single file question", () => {
      const passport = new Passport(singleFileQuestion);
      const result = passport.files();
      expect(result).toHaveLength(1);
      expect(result).toEqual([
        singleFileQuestion.data!["property.drawing.elevation"]![0].url,
      ]);
    });

    it("handles Passport with multiple file questions", () => {
      const passport = new Passport(multipleFileQuestions);
      const result = passport.files();
      expect(result).toHaveLength(2);
      expect(result).toEqual([
        multipleFileQuestions.data!["property.drawing.elevation"]![0].url,
        multipleFileQuestions.data!["proposal.drawing.elevation"]![0].url,
      ]);
    });

    it("handles Passports with multiple files, across multiple questions", () => {
      const passport = new Passport(multipleFilesMultipleQuestions);
      const result = passport.files();
      expect(result).toHaveLength(7);
      expect(result).toEqual([
        multipleFilesMultipleQuestions.data!["property.drawing.elevation"]![0]
          .url,
        multipleFilesMultipleQuestions.data!["property.drawing.elevation"]![1]
          .url,
        multipleFilesMultipleQuestions.data!["proposal.drawing.elevation"]![0]
          .url,
        multipleFilesMultipleQuestions.data!["property.drawing.sitePlan"]![0]
          .url,
        multipleFilesMultipleQuestions.data!["property.drawing.sitePlan"]![1]
          .url,
        multipleFilesMultipleQuestions.data!["property.drawing.sitePlan"]![2]
          .url,
        multipleFilesMultipleQuestions.data!["proposal.drawing.sitePlan"]![0]
          .url,
      ]);
    });
  });

  describe("strings() method", () => {
    test("it accesses data from a simple object", () => {
      const passport = new Passport({
        data: {
          a: {
            b: ["it", "works"],
            c: ["Yes"],
          },
        },
      });
      expect(passport.strings(["a", "b"])).toEqual(["it", "works"]);
      expect(passport.strings(["a", "c"])).toEqual(["Yes"]);
    });
    test("it accesses data from nested keys", () => {
      const passport = new Passport({
        data: {
          a: {
            "b.c": {
              d: {
                "e.f.g": ["it", "works"],
              },
            },
          },
        },
      });
      expect(passport.strings(["a", "b.c", "d", "e.f.g"])).toEqual([
        "it",
        "works",
      ]);
    });
    test("it handles empty values", () => {
      const passport = new Passport({
        data: {
          a: {
            "b.c": [],
          },
        },
      });
      expect(passport.strings(["a", "b.c"])).toEqual([]);
    });
    test("it handles missing values", () => {
      const passport = new Passport({ data: { a: {} } });
      expect(passport.strings(["a", "b", "c"])).toEqual([]);
    });
    test("it handles numbers", () => {
      const passport = new Passport({ data: { a: [1, 2, 0] } });
      expect(passport.strings(["a"])).toEqual(["1", "2", "0"]);
    });
  });

  describe("string() method", () => {
    test("it accesses data from a simple object", () => {
      const passport = new Passport({
        data: {
          a: {
            b: "it works",
            c: "yes it does",
          },
        },
      });
      expect(passport.string(["a", "b"])).toEqual("it works");
      expect(passport.string(["a", "c"])).toEqual("yes it does");
    });
    test("it accesses data from nested keys", () => {
      const passport = new Passport({
        data: {
          a: {
            "b.c": {
              d: {
                "e.f.g": "it works",
              },
            },
          },
        },
      });
      expect(passport.string(["a", "b.c", "d", "e.f.g"])).toEqual("it works");
    });
    test("it unwraps and concatenates array values", () => {
      const passport = new Passport({
        data: {
          a: {
            b: ["it", "works"],
            c: ["Yes"],
          },
        },
      });
      expect(passport.string(["a", "b"])).toEqual("it, works");
      expect(passport.string(["a", "c"])).toEqual("Yes");
    });
    test("it returns an empty string when accessing empty values", () => {
      const passport = new Passport({
        data: {
          a: {
            "b.c": "",
            d: [] as string[],
            e: null,
          },
        },
      });
      expect(passport.string(["a", "b.c"])).toEqual("");
      expect(passport.string(["a", "d"])).toEqual("");
      expect(passport.string(["a", "e"])).toEqual("");
      expect(passport.string(["a", "e", "x.y"])).toEqual("");
    });
    test("it returns an empty string when accessing non-existent values", () => {
      const passport = new Passport({
        data: {
          a: {
            b: null,
          },
          x: "y",
        },
      });
      expect(passport.string(["a", "y"])).toEqual("");
      expect(passport.string(["a", "b"])).toEqual("");
      expect(passport.string(["a", "b", "c"])).toEqual("");
      expect(passport.string(["h", "i", "j"])).toEqual("");
      expect(passport.string(["x", "y", "z"])).toEqual("");
    });
    test("it returns an empty string when accessing missing values", () => {
      const passport = new Passport({ data: { a: {} } });
      expect(passport.string(["a", "b.c"])).toEqual("");
    });
    test("it handles numbers including zero", () => {
      const passport = new Passport({ data: { a: 123, b: 0 } });
      expect(passport.string(["a"])).toEqual("123");
      expect(passport.string(["b"])).toEqual("0");
    });
    test("it can lookup array values by their index", () => {
      const passport = new Passport({ data: { a: { b: [0, 1, 2, 3] } } });
      expect(passport.string(["a", "b", "3"])).toEqual("3");
    });
    test("it returns an empty string when the path cannot be parsed", () => {
      const passport = new Passport({ data: { a: { b: 1 } } });
      expect(passport.string(["a", "9", "b"])).toEqual("");
      expect(passport.string(["a", "*"])).toEqual("");
    });
  });

  describe("boolean() method", () => {
    test("it accesses data from nested keys", () => {
      const passport = new Passport({
        data: {
          a: {
            "b.c": {
              d: {
                "e.f.g": "true",
              },
            },
          },
        },
      });
      expect(passport.boolean(["a", "b.c", "d", "e.f.g"])).toEqual(true);
    });
    test("it unwraps array values", () => {
      const passport = new Passport({
        data: {
          a: {
            "b.c": ["true"],
          },
        },
      });
      expect(passport.boolean(["a", "b.c"])).toEqual(true);
    });
    test("it handles empty values", () => {
      const passport = new Passport({
        data: {
          a: {
            "b.c": "",
          },
        },
      });
      expect(passport.boolean(["a", "b.c"])).toEqual(false);
    });
    test("it handles missing values", () => {
      const passport = new Passport({ data: { a: {} } });
      expect(passport.boolean(["a", "b.c"])).toEqual(false);
    });
    test("it uses the first value when encountering multiple values", () => {
      const passport = new Passport({ data: { a: ["true", "false"] } });
      expect(passport.boolean(["a"])).toEqual(true);
    });
  });

  describe("number() method", () => {
    test("it accesses data from nested keys", () => {
      const passport = new Passport({
        data: {
          a: {
            "b.c": {
              d: {
                "e.f.g": "4",
              },
            },
          },
        },
      });
      expect(passport.number(["a", "b.c", "d", "e.f.g"])).toEqual(4);
    });
    test("it unwraps array values", () => {
      const passport = new Passport({
        data: {
          a: {
            "b.c": ["3"],
          },
        },
      });
      expect(passport.number(["a", "b.c"])).toEqual(3);
    });
    test("it handles empty values", () => {
      const passport = new Passport({
        data: {
          a: {
            "b.c": "",
          },
        },
      });
      expect(passport.number(["a", "b.c"])).toEqual(0);
    });
    test("it handles missing values", () => {
      const passport = new Passport({ data: { a: {} } });
      expect(passport.number(["a", "b.c"])).toEqual(0);
    });
    test("it uses the first value when encountering multiple values", () => {
      const passport = new Passport({ data: { a: [4, 7] } });
      expect(passport.number(["a"])).toEqual(4);
    });
  });
});
