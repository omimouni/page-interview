const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src", "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "",
  },
  // Plugins ------
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  // Dev Server ---
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    compress: true,
    port: 1337,
  },
  // Modules ------
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              attributes: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [require("tailwindcss"), require("autoprefixer")],
              },
            },
          },
        ],
      },
      {
        test: /\.(mp4|png|jpg|svg|woff(2)?)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
