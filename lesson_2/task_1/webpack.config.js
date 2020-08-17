const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].js",
        path: path.join(__dirname, 'review_build')
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};