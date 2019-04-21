const path = require("path")
const webpack = require('webpack')

var baseConfig = {
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
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ]),
  ],
  node: {
    fs: "empty"
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
}