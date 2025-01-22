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
        statements: 66.58,
        branches: 69.79,
        functions: 57.14,
        lines: 65.99,
        autoUpdate: true,
      },
    },
  },
});