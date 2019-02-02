const path = require('path');

module.exports = {
  mode:"development",
  context: path.resolve(__dirname),
  entry: './src/client.tsx',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ],
  }
};
