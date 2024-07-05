import {
  getValidSchemaDictionary,
  getValidSchemaValues,
} from "./digitalPlanningSchema";

describe("get valid schema values", () => {
  it("should return a list of values for a valid enum definition", () => {
    const values = getValidSchemaValues("FileType");

    // Spot check: it only returns the values, not description
    expect(values).toContain("accessRoadsRightsOfWayDetails");
    expect(values).not.toContain(
      "Details of impact on access, roads, and rights of way",
    );
    expect(values?.length).toBeGreaterThan(30); // just a rough check!
  });

  it("should return undefined for an invalid enum definition", () => {
    const values = getValidSchemaValues("ZooAnimals");
    expect(values).toBeUndefined();
  });
});

describe("get valid schema values and descriptions", () => {
  it("should return a dictionary for a valid enum definition", () => {
    const dict = getValidSchemaDictionary("FileType");

    // Spot check a specific key/value
    expect(dict).toHaveProperty("heritageStatement");
    expect(dict?.["heritageStatement"]).toEqual("Heritage Statement");
    expect(dict && Object.keys(dict).length).toBeGreaterThan(30); // another rough check!
  });

  it("should return undefined for an invalid enum definition", () => {
    const dict = getValidSchemaValues("ZooAnimals");
    expect(dict).toBeUndefined();
  });
});
