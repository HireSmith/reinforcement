const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'hiresmith.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    sideEffects: true,
  },
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, './dist'),
    host: 'localhost',
    port: 8080,
    hot: true,
    headers: { "Access-Control-Allow-Origin": "*" },

    //front end proxy. lets back end listen to whichever port you're on
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        secure: false,
      },
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/assets/index.html',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css'],
  },
};