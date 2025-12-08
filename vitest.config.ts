import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    testTimeout: 10_000,
    globals: true,
    environment: "node",
    pool: "threads",
    coverage: {
      provider: "istanbul",
      reporter: ["lcov", "html", "text-summary"],
      thresholds: {
        statements: 66.97,
        branches: 71.26,
        functions: 57.42,
        lines: 66.44,
        autoUpdate: true,
      },
    },
    benchmark: {
      outputJson: "./benchmarks/results.json"
    }
  },
});