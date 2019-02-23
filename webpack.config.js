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

  // resolve: {
  //   alias: {
  //     'node_modules': path.join(__dirname, 'node_modules')
  //   },
  //   modules: [ path.resolve(__dirname, "src/"), 'node_modules' ]
  // },

  module: {
    // loaders: [{
    // loaders: ['style','css','sass']
    rules: [{
      test: /\.scss$/, 
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader'   },
        { loader: 'postcss-loader',
           options: {
             plugins: function () {
               return [
                 require('precss'),
                 require('autoprefixer')
               ];
             }
           }
        },
        { loader: 'sass-loader' }
      ]
    },{
      test: /\.css$/,
      loaders: ['style','css']
    }]
  },

  watch: true,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    // hot: true,
    // publicPath: '/assets/',
    // watch: true, not this property
    // watchContentBase: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.htm',
      filename: 'index.htm',
      //// https://medium.com/commencis/how-to-import-bootstrap-using-webpack-7245eba98056
      //extraFiles: {
      //  css: config.homeUrl + 'static/css/bootstrap.min.css'
      //}
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
