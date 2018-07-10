const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      src: path.resolve(__dirname, 'src'),
      components: 'src/components',
      routes: 'src/routes',
      common: 'src/common',
      assets: 'src/assets',
      utils: 'src/utils',
    }
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {loader: 'css-loader'},
          'postcss-loader',
          {
            loader: 'less-loader', options: {
              paths: [
                path.resolve(__dirname, 'src')
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader', options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|gif|jpg|jpeg|bmp)$/i,
        use: ['url-loader?limit=5000']
      },
      {
        test: /\.(woff|woff2|svg|ttf|eot)($|\?)/i,
        use: ['url-loader?limit=5000']
      }
    ]
  },

  plugins: [
    // html 模版插件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${__dirname}/src/index.tmpl.html`
    }),

    // 热加载插件
    new webpack.HotModuleReplacementPlugin(),

    // 打开浏览器
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ],
  devtool: 'eval-source-map',
  devServer: {
    proxy: [
      {
        context: ['/api/**','/ueditor/**'],
        target: 'http://testpxzbs.jyzqsz.com',
        changeOrigin: true
      },
      {
        context: ['/chat/**','/assets/**'],
        target: 'http://pxzbs.jyzqsz.com',
        changeOrigin: true
      }
    ],
    contentBase: './build', // 本地服务器所加载的页面所在的目录
    historyApiFallback: true, // 不跳转
    inline: true, // 实时刷新
    hot: true// 使用热加载插件 HotModuleReplacementPlugin
  },
  mode: 'development'
}
