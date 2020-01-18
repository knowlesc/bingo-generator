import path from 'path';

var config = {
  entry: ['./app.tsx'],
  mode: 'development',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  devServer: {
    historyApiFallback: true,
    publicPath: '/dist/'
  }
};

export default config;