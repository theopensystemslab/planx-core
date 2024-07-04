import { getValidSchemaValues } from "./digitalPlanningSchema";

describe("get valid schema values", () => {
  it("should return a list of values for a valid enum definition", () => {
    const values = getValidSchemaValues("FileType");

    // it only returns the values, not description
    expect(values).toContain("accessRoadsRightsOfWayDetails");
    expect(values?.length).toBeGreaterThan(30); // just a rough check!
    expect(values).not.toContain(
      "Details of impact on access, roads, and rights of way",
    );
  });

  it("should return undefined for an invalid enum definition", () => {
    const values = getValidSchemaValues("ZooAnimals");
    expect(values).toBeUndefined();
  });
});
