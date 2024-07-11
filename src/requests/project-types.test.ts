import {
  formatHumanReadableProjectTypes,
  formatRawProjectTypes,
} from "./project-types";

describe("formatRawProjectTypes()", () => {
  it("correctly displays the schema descriptions for a list of valid raw project types", () => {
    const result = formatRawProjectTypes([
      "alter.boundary.add.gate",
      "alter.equipment.charging",
      "extend.outbuilding.swimmingPool",
    ]);
    expect(result).toEqual(
      "Add a new gate, install a car charging point, and add an outbuilding - swimming pool",
    );
  });

  it("returns 'Unknown' if none of the raw project types are supported by the schema", () => {
    const result = formatRawProjectTypes(["alter.typo", "new.typo"]);
    expect(result).toEqual("Unknown");
  });

  it("skips invalid raw project types and correctly shows descriptions of valid ones", () => {
    const result = formatRawProjectTypes([
      "alter.typo",
      "alter.boundary.add.gate",
      "alter.equipment.charging",
    ]);
    expect(result).toEqual("Add a new gate and install a car charging point");
  });
});

describe("formatHumanReadableProjectTypes()", () => {
  it("returns a correctly formatted string", () => {
    const result = formatHumanReadableProjectTypes([
      "first",
      "second",
      "third",
    ]);
    expect(result).toEqual("First, second, and third");
  });

  it("returns an empty string if no raw project types are provided", () => {
    const result = formatHumanReadableProjectTypes([]);
    expect(result).toEqual("");
  });
});
