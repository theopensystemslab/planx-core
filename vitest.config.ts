import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    testTimeout: 10_000,
    globals: true,
    environment: "node",
    coverage: {
      provider: "istanbul",
      reporter: ["lcov", "html", "text-summary"],
      thresholds: {
        statements: 66.77,
        branches: 70.99,
        functions: 57.31,
        lines: 66.25,
        autoUpdate: true,
      },
    },
  },
});