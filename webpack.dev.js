const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
mode: 'development',
plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
    new MiniCssExtractPlugin(),
  ],
devtool: 'inline-source-map',
devServer: {
    static: './dist',
    hot: true,
},
});