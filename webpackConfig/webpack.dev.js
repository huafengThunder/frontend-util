const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const pathResolve = _path => path.resolve(__dirname, _path) // 解析成绝对路径
config = {
  devServer: {
    compress: true,
    static: {
      directory: pathResolve('../public'),
    },
    port: 8000,
    hot: true,
    open: true,
    hot: true,
    // 表示当开发服务器无法找到对应的资源时，将所有的请求都指向 index.html
    historyApiFallback: true,
    proxy:{
      '/feutil': {
        target: 'http://huafeng.site:3001',
        changeOrigin: true,
      },
      '/static': {
        target: 'http://huafeng.site:3001',
        changeOrigin: true,
      },
    }
  },
  mode: 'development',
  devtool: 'inline-source-map',
}
module.exports = merge(baseConfig, config)