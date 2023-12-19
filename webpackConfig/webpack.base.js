const HtmlWebpackPlugin = require('html-webpack-plugin') // 打包html
const { EsbuildPlugin } = require('esbuild-loader')
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
      // babel-loader含有transform，能做ast分析，但是esbuild-loader不行。
      // {
      //   test: /\.j(s|sx)$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env', '@babel/preset-react'],
      //       plugins: ['@babel/plugin-transform-runtime']
      //     }
      //   }
      // },
      // esbuild-loader最低版本需要es6
      {
        test: /\.j(s|sx)$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',  
          target: 'es2015'
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
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|webp)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: "asset",
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "markdown-loader",
            options: {},
          },
        ],
      },
      {
        test: /\.pdf$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: pathResolve('../src/index.html'),
      title: '前端',
      favicon: pathResolve('../public/imgs/logo.awebp') // 在此处设置
    })
  ],
  optimization: {
    minimizer: [
      new EsbuildPlugin({
        target: 'es2015',
        // 开启css压缩，当这里开启的时候，就不需要css-minimizer-webpack-plugin这样的css压缩插件
        css: true, 
      })
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': pathResolve('../src'),
      '@public': pathResolve('../public'),
      '@pc': pathResolve('../src/platform/pc'),
      '@mobile': pathResolve('../src/platform/mobile'),
      '@pc-components': pathResolve('../src/platform/pc/components'),
      '@mobile-components': pathResolve('../src/platform/mobile/components')
    }
  }
}