const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, `../${dir}`)
}

let entry = {}
let html = []
glob.sync('src/pages/*/*.js').map(path => {
    const name = path.substring(path.lastIndexOf('\/') + 1, path.lastIndexOf('.'))
    entry[name] = resolve(path)
    html.push(
        new HtmlWebpackPlugin({
            template: resolve('public/index.html'),
            filename: name + '.html',
            chunks: [name], // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
            minify: {
                collapseWhitespace: false, // 压缩选项
                removeAttributeQuotes: true,
                collapseWhitespace: false
            }
        })
    )
})

module.exports = { resolve, entry, html }