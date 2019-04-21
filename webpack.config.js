const merge = require("webpack-merge");
const parts = require("./webpack/parts.config");
const productionConfig = require("./webpack/prod.config");
const developmentConfig = require("./webpack/dev.config");

const commonConfig = merge([]);

const prodConfig = merge([]);

const devConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
]);

module.exports = mode => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, prodConfig, { mode });
  }
  
  return merge(commonConfig, developmentConfig, devConfig, { mode });
};