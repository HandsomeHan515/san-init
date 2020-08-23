const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: '../dist',
        publicPath: '/',
        host: "0.0.0.0",
        port: "3000",
        compress: true,
        noInfo: true,
        disableHostCheck: true,
        open: false,
        inline: true,
        proxy: {
            '/api': {
                target: 'http://192.168.26.77:6081',
                pathRewrite: { '^/api': '' },
                secure: false
            }
        }
    }
})