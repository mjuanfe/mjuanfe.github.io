const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: 'css-loader'
  }],
}
}
