module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  env: {
    test: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/transform-modules-commonjs",
        "babel-plugin-dynamic-import-node"
      ]
    }
  }
}
