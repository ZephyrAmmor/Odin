const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template : "./src/template.html",
    }),
  ],
  module: {
    rules: [
        {
          test : /\.css/i,
          use : ["style-loader", "css-loader" ],
        },
        {
          test : /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type : "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|otf|etf)$/i,
          type : "asset/resource",
        },
    ],
  },
}