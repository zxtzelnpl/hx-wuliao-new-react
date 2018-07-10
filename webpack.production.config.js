const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index:path.resolve(__dirname, 'src/index.js'),
    video:path.resolve(__dirname, 'src/video.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: `/build/`,
    filename: '[name].[chunkhash:8].js'
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader'},
            {loader: 'postcss-loader'},
            {
              loader: 'less-loader', options: {
                paths: [
                  path.resolve(__dirname, 'src')
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader',options: {
                importLoaders: 1
              }},
            {loader: 'postcss-loader'}
          ]
        })
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
    // 移除之前生成的
    new CleanWebpackPlugin([`build`]),

    // webpack 内置的banner-plugin
    new webpack.BannerPlugin('Copyright by zxt_zel_npl@github.com'),

    // html 模版插件
    new HtmlWebpackPlugin({
      filename:'index.html',
      template: `${__dirname}/src/index.tmpl.html`,
      chunks:['index']
    }),

    new HtmlWebpackPlugin({
      filename:'video.html',
      template: `${__dirname}/src/video.tmpl.html`,
      chunks:['video']
    }),

    // 压缩JS代码
    new UglifyJsPlugin(),

    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    // new webpack.optimize.OccurrenceOrderPlugin(),

    // 分离CSS和JS文件
    new ExtractTextPlugin('[name].[chunkhash:8].css'),
  ],

  mode: 'production'
};
