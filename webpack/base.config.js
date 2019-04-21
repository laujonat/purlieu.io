const path = require("path")
var BUILD_DIR = path.resolve(__dirname, './public')

var baseConfig = {
  entry: ["babel-polyfill", "./client"],
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
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