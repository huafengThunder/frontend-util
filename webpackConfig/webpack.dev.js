const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const pathResolve = _path => path.resolve(__dirname, _path) // 解析成绝对路径
config = {
  devServer: {
    compress: true,
    static: pathResolve ('../public'),
    port: 8000,
    hot: true,
    open: true,
    hot: true
  },
  mode: 'development',
  devtool: 'inline-source-map',
}
module.exports = merge(baseConfig, config)