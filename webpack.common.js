const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
        app: './src/index.js',
      },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
//   optimization: {
//     minimize: true,
//     minimizer: [new TerserPlugin()],
//   },
  module: {
    rules: [
    { test: /\.css$/,
    use: [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
            esModule: true,
            },
        },
        'css-loader'],
        }
    ]
}
};