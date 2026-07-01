import {
  getValidSchemaDictionary,
  getValidSchemaValues,
  getValidSchemaValuesByEnumPath,
} from "./digitalPlanningSchema.js";

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

  it("should handle special-case union definitions like PlanningDesignation", () => {
    const values = getValidSchemaValues("PlanningDesignation");

    // Spot check: it only returns the values, not description
    expect(values).toContain("listed.gradeTwoStar");
    expect(values).not.toContain("Listed building - Grade II*");
    expect(values?.length).toBeGreaterThan(20); // just a rough check!
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

describe("get valid schema values by custom enum path", () => {
  it("should return a list of values for [user.role]", () => {
    const values = getValidSchemaValuesByEnumPath("User", "role");
    expect(values).toEqual(["applicant", "agent", "proxy"]);
  });

  it("should return a list of values for [property.EPCKnown.form]", () => {
    const values = getValidSchemaValuesByEnumPath("LondonProperty", "EPC");
    expect(values).toEqual([
      "Yes",
      "Yes, but only some of the properties have one",
      "The property does not have one",
      "No",
    ]);
  });

  it("should return a list of values for [property.titleNumberKnown.form]", () => {
    const values = getValidSchemaValuesByEnumPath(
      "LondonProperty",
      "titleNumber",
    );
    expect(values).toEqual(["Yes", "No"]);
  });

  it("should return a list of values for [application.declaration.connection.form]", () => {
    const values = getValidSchemaValuesByEnumPath("Declaration", "connection");
    expect(values).toEqual([
      "employee",
      "relation.employee",
      "electedMember",
      "relation.electedMember",
      "none",
    ]);
  });

  it("should return undefined for an invalid path", () => {
    const values = getValidSchemaValuesByEnumPath(
      "LondonProperty",
      "SomethingInvalid",
    );
    expect(values).toBeUndefined();
  });
});

describe("get valid ");
