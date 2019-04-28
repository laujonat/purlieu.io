const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const webpack = require("webpack")
const Dotenv = require("dotenv-webpack")

module.exports = {
  mode: "production",
  performance: {
    hints: "warning"
  },
  output: {
    pathinfo: false
  },
  optimization: {
    namedModules: false,
    namedChunks: false,
    nodeEnv: "production",
    flagIncludedChunks: true,
    occurrenceOrder: true,
    sideEffects: true,
    usedExports: true,
    concatenateModules: true,
    splitChunks: {
      hidePathInfo: true,
      minSize: 30000,
      maxInitialRequests: 3
    },
    noEmitOnErrors: true,
    checkWasmTypes: true,
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          extractComments: true,
          compress: true,
          parallel: true
        }
      })
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new Dotenv({
      path: "./.env",
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true
    })
  ]
}
