const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'review_build')
    },
    module: {
      rules: [
        {
            test: /.js$/,
            use: ['babel-loader']
        },
        {
          test: /.css$/,
          use: ['style-loader', "css-loader"]
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ]
};