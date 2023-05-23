import { sortFlow, normalizeFlow, sortBreadcrumbs } from "./index";

describe("Logic", () => {
  test("sortFlow is available", () => {
    expect(typeof sortFlow).toBe("function");
  });

  test("normalizeFlow is available", () => {
    expect(typeof normalizeFlow).toBe("function");
  });

  test("sortBreadcrumbs is available", () => {
    expect(typeof sortBreadcrumbs).toBe("function");
  });
});
