import { Passport } from ".";
import {
  multipleFileQuestions,
  multipleFilesMultipleQuestions,
  noFiles,
  singleFileQuestion,
} from "./mocks";

describe("getFiles() method", () => {
  it("handles Passport without data", () => {
    const passport = new Passport({ data: undefined });
    expect(passport.getFiles()).toEqual([]);
  });

  it("handles Passport without files", () => {
    const passport = new Passport({ data: noFiles });
    expect(passport.getFiles()).toEqual([]);
  });

  it("handles Passport with a single file question", () => {
    const passport = new Passport({ data: singleFileQuestion });
    const result = passport.getFiles();
    expect(result).toHaveLength(1);
    expect(result).toEqual([
      singleFileQuestion["property.drawing.elevation"][0].url,
    ]);
  });

  it("handles Passport with multiple file questions", () => {
    const passport = new Passport({ data: multipleFileQuestions });
    const result = passport.getFiles();
    expect(result).toHaveLength(2);
    expect(result).toEqual([
      multipleFileQuestions["property.drawing.elevation"][0].url,
      multipleFileQuestions["proposal.drawing.elevation"][0].url,
    ]);
  });

  it("handles Passports with multiple files, across multiple questions", () => {
    const passport = new Passport({ data: multipleFilesMultipleQuestions });
    const result = passport.getFiles();
    expect(result).toHaveLength(7);
    expect(result).toEqual([
      multipleFilesMultipleQuestions["property.drawing.elevation"][0].url,
      multipleFilesMultipleQuestions["property.drawing.elevation"][1].url,
      multipleFilesMultipleQuestions["proposal.drawing.elevation"][0].url,
      multipleFilesMultipleQuestions["property.drawing.sitePlan"][0].url,
      multipleFilesMultipleQuestions["property.drawing.sitePlan"][1].url,
      multipleFilesMultipleQuestions["property.drawing.sitePlan"][2].url,
      multipleFilesMultipleQuestions["proposal.drawing.sitePlan"][0].url,
    ]);
  });
});
