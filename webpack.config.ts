const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules[\/\\])(?!mqtt)/,
        loader: "awesome-typescript-loader",
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          limit: 1024,
          name: "[name].[ext]",
          publicPath: "img/",
          outputPath: "img/",
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
};
