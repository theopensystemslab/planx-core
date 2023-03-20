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
  coverageReporters: ["html", "lcov", "text-summary"],
  coverageDirectory: "./coverage",
};
