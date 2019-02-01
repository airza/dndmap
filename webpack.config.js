const path = require('path');

module.exports = {
  entry: './src/client.jsx',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
  rules: [
    { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
    { test: /\.css$/, loader:'style!css!'}
  ]
}
};