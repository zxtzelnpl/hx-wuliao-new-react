const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: `${__dirname}/build`,
    filename: '[name].[chunkhash:8].js',
    // filename: '[name].js',
    publicPath: `/build`
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      src: path.resolve(__dirname, 'src'),
      component: 'src/components',
      routes: 'src/routes',
      common: 'src/common',
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
            {loader: 'css-loader'},
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

  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //     minSize: 30,
  //     // minChunks: 1,
  //     // maxAsyncRequests: 5,
  //     // maxInitialRequests: 3,
  //     // automaticNameDelimiter: '~',
  //     // name: true,
  //     // cacheGroups:{
  //     //   vendors:{
  //     //     test: /node_modules/,
  //     //     name: 'vendor',
  //     //     priority: 10
  //     //   },
  //     //   commons: {
  //     //     test: /common\/|components\//,
  //     //     name: 'page/commons',
  //     //     priority: 10,
  //     //     enforce: true
  //     //   }
  //     // }
  //   }
  // },

  plugins: [
    //移除之前生成的
    new CleanWebpackPlugin([`build`]),

    // webpack 内置的banner-plugin
    new webpack.BannerPlugin('Copyright by zxt_zel_npl@github.com'),

    // html 模版插件
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: `src/index.tmpl.html`,
      chunks: ['index']
    }),

    // 压缩JS代码
    new UglifyJsPlugin(),

    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurrenceOrderPlugin(),

    // 分离CSS和JS文件
    new ExtractTextPlugin('[name].[chunkhash:8].css'),
    // new ExtractTextPlugin('[name].css'),
  ],

  mode: 'production'
};
