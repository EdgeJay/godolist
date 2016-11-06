const webpack = require('webpack');

module.exports = {
  entry: {
    'main': './src/client/main.js'
  },
  output: {
    path: '/',
    filename: '[name].js'
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
    })
  ],
  devtool: 'source-map',
  devServer: {
    inline: true
  }
};
