const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpack = require("webpack")
const SanLoaderPlugin = require('san-loader/lib/plugin')

const { resolve, entry, html } = require('./util')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    entry,
    output: {
        filename: 'static/js/[name].[contenthash:8].bundle.js',
        chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
        path: resolve('dist')
    },
    resolve: {
        extensions: ['.js', '.san', '.scss'],
        alias: {
            '@': resolve('src'),
            'san$': isDev ? 'san/dist/san.dev.js' : 'san/dist/san.min.js',
            'jquery$': 'jquery/dist/jquery.min.js'
        }
    },
    module: {
        noParse: /jquery/,
        rules: [
            {
                test: /\.san$/,
                include: [resolve('src')],
                loader: 'san-loader',
            },
            {
                test: /\.js$/,
                include: [resolve('src'), resolve('node_modules/san-loader')],
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/,
                include: [resolve('src')],
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer'),
                                require('cssnano')
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'static/image/[name].[ext]',
                },
            }
        ]
    },
    plugins: [
        ...html,
        new MiniCssExtractPlugin({
            filename: "static/css/[name].[contenthash:8].bundle.css",
            chunkFilename: "static/css/[name].[contenthash:8].chunk.css"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new SanLoaderPlugin()
    ]
}
