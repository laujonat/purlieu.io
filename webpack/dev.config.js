const webpack = require('webpack');
const base = require('./base.config.js');
const merge = require('webpack-merge');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-source-map',
  cache: true,
  performance: {
    hints: false
  },
  output: {
    pathinfo: true
  },
  optimization: {
    namedModules: true,
    namedChunks: true,
    nodeEnv: 'development',
    flagIncludedChunks: false,
    occurrenceOrder: false,
    sideEffects: false,
    usedExports: false,
    concatenateModules: false,
    splitChunks: {
      hidePathInfo: false,
      minSize: 10000,
      maxAsyncRequests: Infinity,
      maxInitialRequests: Infinity,
    },
    noEmitOnErrors: false,
    checkWasmTypes: false,
    minimize: false,
  },
  module: {
    rules: [
      {
        loader: "babel-loader?cacheDirectory",
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
    new webpack.NamedModulesPlugin(),
    new webpack.NamedChunksPlugin(),
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
    new Dotenv({
      path: "./.env.local", // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true
    })
  ],
})