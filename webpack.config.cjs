const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: {
          loader: 'css-loader'
        }
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html' //* 配置index映射路径
    })
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 30012
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  } //*这个好像可要可不要
}
