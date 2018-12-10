const path = require("path")
const Dotenv = require("dotenv-webpack")

const env = process.env.NODE_ENV
const config = {
   mode: env || 'development'
}

module.exports = {
  mode: config.mode, 
  entry: ["babel-polyfill", "./client/index.js"],
  output: {
    path: path.resolve(__dirname, "client"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["@babel/env", "@babel/react"],
          plugins: ["@babel/proposal-class-properties"]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
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

