/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["./jest.setup.js"],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      functions: 55,
    },
  },
  coverageReporters: ["lcov", "text-summary"],
  coverageDirectory: "./coverage",
};
