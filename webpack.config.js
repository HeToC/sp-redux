var path = require('path');
var webpack = require('webpack');

var merge = require('extendify')({
  "isDeep": true,
  "arrays": "concat"
});

module.exports = merge({
  resolve: {
    extensions: [ '.js', '.jsx', '.ts', '.tsx', '.less', '.css' ],
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.ts(x?)$/, include: /src/, exclude: /node_modules/, loader: 'babel-loader'}, /*, presets: ['es2015', 'react']  */
      { test: /\.ts(x?)$/, include: /src/, exclude: /node_modules/, loader: 'ts-loader?silent=true' },
    ]
  },
  entry: {
    app: [ './src/index.ts' ],
  },
  output: {
    filename: 'sp-redux.js', /*'[name].js',*/
    path: path.join(__dirname,'./dist'),
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  externals: {
    "redux-typed": "redux-typed",
    "lodash": "lodash",
    "sp-pnp-js": "sp-pnp-js"
  }

  /*plugins: [
    new ExtractTextPlugin("[name].css", { allChunks: true }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./lib/vendor-manifest.json')
    }
    )
  ]
*/
});
