import { toPence } from "./toPence.js";

describe("toPence", () => {
  test.each([
    [300.15, 30015],
    [0.29, 29],
    [4.35, 435],
    [123.45, 12345],
    [100, 10000],
  ])("converts £%s to %s pence", (pounds, pence) => {
    expect(toPence(pounds)).toBe(pence);
  });
});
