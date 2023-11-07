const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');

module.exports = {
    mode: 'development', 
    entry: './src/index.js',
    devServer: {
        static: './dist',
        hot: true,
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement',
        }),
    ],
    devtool: 'inline-source-map',
    // optimization: {
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