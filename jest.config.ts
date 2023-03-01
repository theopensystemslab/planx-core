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
  coverageReporters: ["lcov", "text-summary"],
  coverageDirectory: "./coverage",
};
