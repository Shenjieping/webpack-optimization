const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
// const HappyPack = require('happypack');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    entry1: './src/entry1.js',
    entry2: './src/entry2.js',
    entry3: './src/entry3.js',
    entry4: './src/entry4.js',
    entry5: './src/entry5.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: 3, // 开启几个 worker 进程来处理打包，默认是 os.cpus().length - 1
            }
          },
          'babel-loader'
          // 'happypack/loader?id=happyBabel'
        ],
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: './index.html',
    }),
    // new HappyPack({
    //     id: 'happyBabel',
    //     loaders: ['babel-loader'],
    //     verbose: true,
    // })
  ]
}