const paths = require("./paths");

module.exports = {
  entry: [paths.src + '/index.js'],
  mode: 'production',
  output: {
    path: paths.build,
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  module: {},
};
