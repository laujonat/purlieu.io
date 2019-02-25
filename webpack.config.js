const path = require("path")
const Dotenv = require("dotenv-webpack")

const env = process.env.NODE_ENV
const config = {
  mode: env || "development"
}

module.exports = {
  mode: "development",
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
  target: "web",
  plugins: [
    new Dotenv({
      path: "./.env",
      systemvars: true
    })
  ],
  node: {
    fs: "empty"
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
}
