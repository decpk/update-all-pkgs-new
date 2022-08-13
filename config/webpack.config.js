const paths = require("./paths");

module.exports = {
  entry: [paths.src + "/index.ts"],
  mode:"production",
  output: {
    path: paths.build,
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: paths.src,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
};
