const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "main.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js'
  },
  watch: true,
  module: {
      rules: [{
          test: /\.scss$/,
          loader: extractSass.extract({
              use: [{
                  loader: "css-loader"
              }, {
                  loader: "sass-loader"
              }],
              // use style-loader in development
              fallback: "style-loader"
          })
      }]
  },
  plugins: [
    extractSass
  ]
}
