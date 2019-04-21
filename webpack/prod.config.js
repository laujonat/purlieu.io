const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const base = require('./prod.config');
const merge = require('webpack-merge');


module.exports = merge(base, {
  mode: 'production',
  performance: {
    hints: 'warning'
  },
  output: {
    pathinfo: false
  },
  optimization: {
    namedModules: false,
    namedChunks: false,
    nodeEnv: 'production',
    flagIncludedChunks: true,
    occurrenceOrder: true,
    sideEffects: true,
    usedExports: true,
    concatenateModules: true,
    splitChunks: {
      hidePathInfo: true,
      minSize: 30000,
      maxInitialRequests: 3,
    },
    noEmitOnErrors: true,
    checkWasmTypes: true,
    minimize: true,
    minimizer: new UglifyJsPlugin({
      uglifyOptions: {
        compress: true,
        parallel: true,
        output: null,
        toplevel: false,
        nameCache: null,
        ie8: false,
      }
    }),
  },
  plugins: [
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ]
})