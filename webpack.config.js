var path = require('path');

var webpack = require('webpack');


var IS_PRODUCTION = process.env.NODE_ENV === 'production';


var ENTRY_POINTS = [
  './src/js/app'
];
if (!IS_PRODUCTION) {
  // Hot-reload locally.
  ENTRY_POINTS = [
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
  ].concat(ENTRY_POINTS);
}


var JS_LOADERS = [
  'babel-loader?cacheDirectory&optional[]=runtime&stage=0',
];


module.exports = {
  entry: ENTRY_POINTS,
  output: {
    // Bundle will be served at /bundle.js locally.
    filename: 'bundle.js',
    // Bundle will be built at ./src/media/js.
    path: './src/build',
    publicPath: '/',
  },
  plugins: [
    new webpack.ProvidePlugin({
      'THREE': 'three'
    })
  ],
  module: {
    loaders: [
      {
        // JS.
        exclude: /(node_modules|bower_components)/,
        loaders: JS_LOADERS,
        test: /\.js$/,
      },
      {
        loader: 'style-loader!css-loader!autoprefixer-loader!stylus-loader',
        test: /\.styl/,
      },
      {
        loader: 'shader-loader',
        test: /\.glsl/,
      },
    ],
  },
  resolve: {
    alias: {
      dancer: 'dancer-browserify'
    },
    extensions: ['', '.glsl', '.js', '.json', '.styl'],
    modulesDirectories: [
      'src/css',
      'src/js',
      'src/shaders',
      'node_modules',
    ],
  },
};
