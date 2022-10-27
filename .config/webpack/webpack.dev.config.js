

const { merge } = require("webpack-merge");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const commonConfig = require("./webpack.common.config");

module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    hot: true, // enable HMR on the server
    historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
  },
  devtool: "cheap-module-source-map",
  plugins: [new ReactRefreshPlugin()],
});