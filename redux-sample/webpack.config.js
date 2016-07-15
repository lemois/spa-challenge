var path = require("path");
module.exports = {
  entry: {
    app: "./src/app.js",
    lib: "./src/lib.js"
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "[name].js",
    libraryTarget: "var",
    library: 'Lib'
  },
  module: {
    loaders: [
      {
        test: /\.js.*$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    alias: {
      vex: 'vex-js'
    }
  },
  devtool: 'inline-source-map'
};
