// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,

  coverageDirectory: "coverage",

  moduleDirectories: ["node_modules", "client"],

  moduleFileExtensions: ["js", "json", "jsx", "node"],

  testEnvironment: "node",

  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],

  testPathIgnorePatterns: ["\\\\node_modules\\\\"],

  testURL: "http://localhost",

  transform: {
    "^.+\\.js?$": "babel-jest"
  },

  transformIgnorePatterns: ["<rootDir>/node_modules/"],

  verbose: false
}
