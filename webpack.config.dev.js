var path = require("path");
var webpack = require("webpack");
var autoprefixer = require("autoprefixer");

module.exports = {
  devtool: "#inline-source-map",
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./src/index.js"
  ],
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "bundle.js",
    publicPath: "/static"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, include: path.join(__dirname, "src/"), loaders: ["react-hot", "babel-loader"]},
      {test: /\.css$/, include: path.join(__dirname, "css/"), loader: "style!css!postcss"}
    ]
  },
  postcss: [autoprefixer()]
};
