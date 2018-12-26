module.exports = {
  verbose: true,

  clearMocks: true,

  coverageDirectory: "coverage",

  // collectCoverage: true,

  collectCoverageFrom: ["client/**.{js, jsx}", "!client/**/index.{js,jsx}"],

  coveragePathIgnorePatterns: [
    "./client/*.{js, jsx}",
    "./client/resources/*.{js, jsx}"
  ],

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
}
