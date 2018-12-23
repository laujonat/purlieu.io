module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: ["eslint:recommended", "prettier", "plugin:react/recommended"],
  globals: {
    artifacts: false,
    assert: false,
    contract: false
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  plugins: ["react"],
  rules: {
    camelcase: [
      "error",
      {
        properties: "always"
      }
    ],
    'no-console': 'off',
  }
}
