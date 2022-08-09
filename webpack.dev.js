const { merge } = require("webpack-merge");
const webpackConfig = require("./webpack.common.js");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = merge(webpackConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["ts"],
    }),
  ],
  optimization: {
    runtimeChunk: "single",
  },
  stats: {
    errorDetails: true,
  },
});
