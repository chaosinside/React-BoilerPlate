const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
	entry: "./src/index.js",
	plugins: [
		new Dotenv(),
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({ filename: "app.css", chunkFilename: "[name].[ext]" }),
		new htmlWebpackPlugin({ template: "src/index.html", filename: "index.html", hash: true }),
		new htmlWebpackPlugin({ template: "src/favicon.png", filename: "favicon.png", hash: true })
	],
	module: {
		rules: [
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
			{ test: /\.(js|jsx)$/, exclude: /node_modules/, use: [{ loader: "babel-loader" }] },
			{ test: /\.(scss|css)$/, use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader", "sass-loader"] },
			{ test: /\.(png|jpe?g|gif|svg)$/, use: [{ loader: "file-loader", options: { outputPath: "images", name: "[name].[ext]" } }] }
		]
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	output: {
		filename: "app.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/"
	},
	devServer: {
		static: path.resolve(__dirname, "dist"),
		hot: true,
		historyApiFallback: { index: "/" }
	},
  // Enable sourcemaps for debugging webpack's output.
  devtool: "eval-source-map"
};
