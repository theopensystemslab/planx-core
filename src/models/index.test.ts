import { sortBreadcrumbs, sortFlow } from "./index.js";

describe("Logic", () => {
  test("sortFlow is available", () => {
    expect(typeof sortFlow).toBe("function");
  });

  test("sortBreadcrumbs is available", () => {
    expect(typeof sortBreadcrumbs).toBe("function");
  });
});
