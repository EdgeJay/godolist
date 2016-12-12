const webpack = require('webpack'),
      StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  entry: {
    'bundle': './client/bundle.js'
  },
  output: {
    path: __dirname + '/public/js',
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      exclude: /(node_modules|vendor)/,
      loader: 'babel',
      query: {
        presets: ['react', 'latest']
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.GO_ENV': '"' + process.env.GO_ENV + '"'
    }),
    new StaticSiteGeneratorPlugin('bundle', ['/main.html'], {
      // Properties here are merged into `locals`
      // passed to the exported render function
      //greet: 'Hello'
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
