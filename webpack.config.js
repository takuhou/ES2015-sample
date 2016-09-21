const webpack = require('webpack');

module.exports = {
  entry: {
    'dist': ['./src/es6/index.js', './src/es6/adunit.js', './src/es6/settings.js', './src/es6/utils.js'],
  },
  output: {
    path: __dirname,
    filename: '[name]/es6.min.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: false }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
};
