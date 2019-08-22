const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: ["./src/index.js"],
	module: {
		rules: [
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
			{ test: /\.(js|jsx)$/, exclude: /node_modules/, use: [{ loader: "babel-loader" }] },
			{ test: /\.(scss|css)$/, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] },
			{ test: /\.(png|jpe?g|gif|svg)$/, use: [{ loader: "file-loader", options: { name: "images/[name].[ext]" } }] }
		]
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	output: {
		filename: "app.js"
	},
	plugins: [
		new Dotenv(),
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({ filename: "app.css", chunkFilename: "[name].[ext]", allChunks: false }),
    new htmlWebpackPlugin({ template: "./src/index.html", filename: "index.html", hash: true })
	],
	devServer: {
		hot: true
	},
  // Enable sourcemaps for debugging webpack's output.
  devtool: "eval-source-map"
};
