const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, "app"),
  entry:  "./main.js",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "[name]-[hash].js"
  },

  module: {
    rules: [
        { 
            test: /\.jsx?$/, 
            exclude: /node_modules/, 
            loader: "babel-loader"
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({ //Sa extract text plugin-om stilovi kreirani nece biti u head tagu unutar style taga, nego ce biti pozvani preko link taga kao zasebni fajlovi
                fallback: "style-loader",
                use: [ 
                    { loader: "style-loader" },
                    { loader: "css-loader?modules" },
                    { loader: "postcss-loader"}
                ],
                publicPath: path.join(__dirname, "/public")
            })
        }   
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "app","index.tmpl.html")
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("[name]-[hash].css")
  ]

}
   