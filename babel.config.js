module.exports = {
  env: {
    development: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins: ["@babel/plugin-proposal-class-properties", ["babel-plugin-styled-components", { displayName: true }]]
    },
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
