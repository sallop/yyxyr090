const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    // loaders: [{
    rules: [{
      test: /\.scss$/,
      loaders: ['style','css','sass']
    },{
      test: /\.css$/,
      loaders: ['style','css']
    }]
  },

  watch: true,
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: './dist',
    contentBase: path.resolve(__dirname, "dist"),
    // contentBase: path.resolve(__dirname, "src"),
    // hot: true,
    // publicPath: '/assets/',
    // watch: true, not this property
    // watchContentBase: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.htm',
      filename: 'index.htm'
    }),
    new HtmlWebpackPlugin({
      template: './src/Link.html',
      filename: 'Link.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/kingaku.html',
      filename: 'kingaku.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/kituke2.html',
      filename: 'kituke2.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/nihonbuyou.html',
      filename: 'nihonbuyou.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/puraibasi-porisi-.html',
      filename: 'puraibasi-porisi-.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/puraibasi-porisi-.html',
      filename: 'puraibasi-porisi-.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/syamisen.html',
      filename: 'syamisen.html'
    }),
  ]
};
