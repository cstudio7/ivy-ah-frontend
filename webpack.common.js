const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
        test: /\.js$/
      },
      {
        test: /\.(scss|css)$/,

        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  output: {
    chunkFilename: '[name].[chunkhash].js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: 'bundle.map',
    publicPath: '/'
  },
  devtool: '#source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true
    },
    minimizer: [new UglifyJsPlugin()]
  },
};
