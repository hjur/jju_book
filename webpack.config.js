var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/main.js',
    vendors: ['vue', 'vue-router']
    // vendors: ['vue', 'vuex', 'vue-router', 'axios', 'jquery', 'swiper']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: 'chunk.[name].js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'Config': path.resolve(__dirname, './src/config'),
      'View': path.resolve(__dirname, './src/view'),
      'MarkDown': path.resolve(__dirname, './src/markdown'),
      'Common': path.resolve(__dirname, './src/common'),
      'Images': path.resolve(__dirname, './src/assets/images'),
      //modules
      'Modules': path.resolve(__dirname, '.node_modules'),
    },
    extensions: ['*', '.js', '.vue', '.json', '.md']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    // }),
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true
    })
  ])
}
