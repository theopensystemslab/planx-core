export default {
  testEnvironment: "node",
  preset: "ts-jest",
  transform: {
    "^.+\\.js$": [
      "esbuild-jest",
      {
        sourcemap: true,
      },
    ],
  },
  testPathIgnorePatterns: ["dist/*"],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      functions: 55,
    },
  },
  coverageReporters: ["lcov", "text-summary"],
  coverageDirectory: "./coverage",
};
