import { formatHumanReadableProjectTypes } from "./project-types";

describe("formatHumanReadableProjectTypes()", () => {
  it("returns a correctly formatted string", () => {
    const result = formatHumanReadableProjectTypes(["first", "second", "third"]);
    expect(result).toEqual("First, second, and third");
  });

  it("returns an empty string if no raw project types are provided", () => {
    const result = formatHumanReadableProjectTypes([]);
    expect(result).toEqual("");
  });
});