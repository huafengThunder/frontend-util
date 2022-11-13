const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
config =  {
  devtool: 'inline-source-map',
  mode: 'production'
}
module.exports = merge(baseConfig, config)