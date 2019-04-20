module.exports = {
  extends: ["eslint:recommended", "prettier", "plugin:react/recommended"],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
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
  settings: {
    react: {
      pragma: "React",
      version: "16.5.2"
    },
    globals: {
      artifacts: false,
      assert: false,
      contract: false,
      shallow: true,
      render: true,
      mount: true
    }
  },
  rules: {
    "no-unused-vars": [
      1,
      {
        argsIgnorePattern: "res|next|^err"
      }
    ],
    "arrow-body-style": [2, "as-needed"],
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "max-len": 0,
    "import/extensions": 0,
    "no-underscore-dangle": 0,
    "no-console": 1,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    radix: 0,
    camelcase: [
      "error",
      {
        properties: "never"
      }
    ],
    quotes: [
      2,
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        printWidth: 120
      }
    ]
  },
  plugins: ["eslint-plugin-html", "prettier"]
}
