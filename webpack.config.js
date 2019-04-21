const merge = require("webpack-merge");
const parts = require("./webpack/parts.config");

const commonConfig = merge([]);

const productionConfig = merge([]);

const developmentConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
]);

module.exports = mode => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};