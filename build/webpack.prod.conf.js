const os = require('os')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const baseConfig = require('./webpack.base.conf.js')

module.exports = merge(baseConfig, {
    mode: 'production',
    // devtool: 'cheap-module-source-map',
    plugins: [
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true, // 是否压缩打包文件 默认为 true
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                sourceMap: false,
                parallel: os.cpus().length - 1,
                exclude: /\/san|\/jquery/, // 不压缩 san、san-router 和 jquery
                terserOptions: {
                    output: {
                        comments: false,
                    },
                    compress: {
                        warnings: false,
                        drop_console: true,
                        drop_debugger: true,
                        pure_funcs: ['console.log']
                    }
                }
            })
        ],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                san: {
                    name: 'san',
                    test: /[\\/]node_modules[\\/]san/,
                    priority: 20,
                },
                jquery: {
                    name: 'jquery',
                    test: /[\\/]node_modules[\\/]jquery/,
                    priority: 10,
                },
                vendor: {
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                common: {
                    test: /[\\/]src[\\/]/,
                    priority: -20,
                    name: 'common',
                    minChunks: 2
                }
            }
        }
    }
})