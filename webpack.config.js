const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        loader: 'file-loader?name=[filename].[ext]'
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js', '.json', '.css', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      title: 'React Slack Feedback'
    })
  ]
};
