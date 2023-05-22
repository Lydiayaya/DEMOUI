const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//把一个路径或路径片段的序列解析为一个绝对路径

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
        test: /\.s[ac]ss$/,
        use: [
          //将JS字符生成为style节点
          'style-loader',
          //将css转换为CommomJS模块
          {
            loader: 'css-loader',
            options: {
              modules: true,
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          },
          //将sass编译成css
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                // resolve方法第二个参数为scss配置文件地址，如果有多个，就进行依次添加即可
                path.resolve(__dirname, './src/common/style/contants.scss')
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.tsx', '.ts', '.js', '.jsx', '.css', '.scss'],
    alias: {
      //配置指定路径
      /*
      这一步坑死我了，因为解析路径直接使用 src/pages而一直无法引用组件
      导致卡了两天这个问题
      最后终于用下面这句指令解决了可恶
      */
      '@pages': path.resolve('./src/pages')
    }
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
