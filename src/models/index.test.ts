import { sortFlow, expandFlow, sortBreadcrumbs } from "./index";

describe("Logic", () => {
  test("sortFlow is available", () => {
    expect(typeof sortFlow).toBe("function");
  });

  test("expandFlow is available", () => {
    expect(typeof expandFlow).toBe("function");
  });

  test("sortBreadcrumbs is available", () => {
    expect(typeof sortBreadcrumbs).toBe("function");
  });
});
