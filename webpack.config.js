const path = require("path"); // path se koristi radi sigurnosti, da bi se pravile putanje citljive sa sve operativne i fajl sisteme
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, "app"), //zajednicka putanja za sve entry-je
  entry:  "./main.js", // relativna putanja na kontekst
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js"
  },
  devtool: 'source-map', //ova opcija sluzi za mapiranje svih fajlova koji su bundlovani, i data se u developer tool moze pronaci trazeni fajl za degagovanje inace ce biti vidljim samo bundle-ovan fajl
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    inline: true,
    stats: "errors-only",
    hot:true,
    open: true
  },
  module: {
    rules: [
        {
          enforce: "pre",
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
        },
        { 
            test: /\.jsx?$/, 
            exclude: /node_modules/, 
            loader: "babel-loader"
        },
        {
            test: /\.css$/,
            use: [        
                { loader: "style-loader" },
                { loader: "css-loader?modules" }, //modules query omogucava pravljenje vise klasa sa istim nazivom a da ne dodje do konflikta
                { loader: "postcss-loader"}
            ]
        }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "app","index.tmpl.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

}