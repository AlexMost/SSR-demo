const nodeExternals = require('webpack-node-externals');

const path = require('path');
 module.exports = {
  entry: './backend/server.js',
  target: 'node',
  node: false,
  devtool: false,
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: { loader: 'babel-loader' }
      }
    ]
  }
};
