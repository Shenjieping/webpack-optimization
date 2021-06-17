const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: []
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: './index.html',
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'vue',
          entry: 'https://unpkg.com/vue/dist/vue.js',
          global: 'Vue',
        }, {
          module: 'vue-router',
          entry: 'https://unpkg.com/vue-router/dist/vue-router.js',
          global: 'VueRouter'
        }
      ]
    })
  ]
}