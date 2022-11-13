const HtmlWebpackPlugin = require('html-webpack-plugin') // 打包html
const path = require('path')
const pathResolve = _path => path.resolve(__dirname, _path) // 解析成绝对路径
module.exports = {
  entry: './src/main.js',
  output: {
    path: pathResolve('../dist'),
    filename: '[name].[contenthash:8].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.j(s|sx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.(css|less)$/i,
        use: [
          'style-loader',
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          'less-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: "asset",
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: pathResolve('../src/index.html'),
      title: '前端导航/博客'
    })
  ],
  resolve: {
    extensions:['.js','.jsx'],
    alias: {
      '@': pathResolve('src'),
      '@c': pathResolve('src/components')
    }
  }
}