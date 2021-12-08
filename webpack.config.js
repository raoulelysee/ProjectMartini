/*
    ./webpack.config.js
*/

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})


module.exports = {
  entry: './src/app.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(jpe?g|jpg|png|gif|svg)$/i, loader: "url-loader?name=app/images/[name].[ext]" },
      { test: /\.(jpe?g|jpg|png|gif|svg)$/i, loader: "file-loader?name=app/images/[name].[ext]" }

    ]
  },

  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]

      },
      {
        test: /\.jpg$/,
        use: 'file-loader'
      }
    ]
  },

  plugins: [HtmlWebpackPluginConfig]
}
