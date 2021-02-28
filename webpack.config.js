// webpack.config.js
module.exports = {
  mode: 'development',
  devtool: "source-map", // any "source-map"-like devtool is possible
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.ts$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test   : /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
      },
      {
        test   : /\.css$/,
        loaders: ['style-loader', 'css-loader', 'resolve-url-loader']
      },
      // {
      //   test: /\.pug$/,
      //   loader: "pug-loader" // pug loader
      // }
    ]
  },
  resolveUrlLoader: {
  includeRoot : true
}
}
