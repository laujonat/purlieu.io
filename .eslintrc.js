module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: ["eslint:recommended", "prettier", "plugin:react/recommended"],
  settings: {
    react: {
      pragma: "React",
      version: "16.5.2"
    },
    globals: {
      artifacts: false,
      assert: false,
      contract: false
    }
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      modules: true,
      spread: true,
      restParams: true
    }
  },
  rules: {
    camelcase: [
      "error",
      {
        properties: "always"
      }
    ],
    "no-console": "off"
  }
}
