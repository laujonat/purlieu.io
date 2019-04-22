const path = require("path")
const merge = require("webpack-merge")
const parts = require("./webpack/parts.config")
const productionConfig = require("./webpack/prod.config")
const developmentConfig = require("./webpack/dev.config")
APP_ENTRY = path.join(__dirname, "client")
APP_OUTPUT = path.join(__dirname, "public")

const baseConfig = {
  entry: ["babel-polyfill", APP_ENTRY],
  output: {
    path: APP_OUTPUT,
    publicPath: '/public/',
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
const prodConfig = merge([productionConfig])

const devConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  developmentConfig
])

module.exports = mode => {
  console.log(mode)
  if (mode === "production") {
    return merge(baseConfig, prodConfig, { mode })
  }

  return merge(baseConfig, devConfig, { mode })
}
