const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      // в любом файле будет доступ к переменной proccess.env.name со значением test prod
      'process.env.name': JSON.stringify('test prod'),
    }),
    // анализатор размера всех частей проекта
    // new BundleAnalyzerPlugin(),
  ],
}
