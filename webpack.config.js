const path = require("path")
const merge = require("webpack-merge")
const parts = require("./webpack/parts.config")
const productionConfig = require("./webpack/prod.config")
const developmentConfig = require("./webpack/dev.config")

const baseConfig = {
  entry: ["babel-polyfill", "./client"],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        exclude: /node_modules/,
        test: /.jsx?$/,
        query: {
          presets: ["@babel/env", "@babel/react"],
          plugins: ["@babel/proposal-class-properties"]
        }
      },
      {
        loader: "style-loader!css-loader",
        test: /\.css$/
      }
    ]
  },
  node: {
    fs: "empty"
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
}
const prodConfig = merge([])

const devConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORTs
  }),
  developmentConfig
])

module.exports = mode => {
  if (mode === "production") {
    return merge(baseConfig, productionConfig, { mode })
  }

  return merge(baseConfig, devConfig, { mode })
}
