const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const pathResolve = _path => path.resolve(__dirname, _path) // 解析成绝对路径
const ip = 'http://8.222.160.52:3001' // 线上ip
// const ip = 'http://localhost:3001' // 本地ip
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
    proxy: {
      '/feutil': {
        target: ip,
        changeOrigin: true,
      },
      '/static': {
        target: ip,
        changeOrigin: true,
      },
    }
  },
  mode: 'development',
  devtool: 'inline-source-map',
}
module.exports = merge(baseConfig, config)