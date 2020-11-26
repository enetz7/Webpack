const path = require('path');
const loader = require('sass-loader');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              {
                loader:'sass-loader',
                options: {
                  sourceMap: true,
                  sassOptions: {
                    outputStyle: "compressed",
                  },
                },
              }
            ], 
            include: [path.resolve(__dirname, 'src/')] 
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
        ],
      },
    plugins: [
      new HtmlWebpackPlugin({  
        filename: 'index.html',
        template: 'src/index.html',
        hash: false
      }),
      new MiniCSSExtractPlugin({
        filename: "/dist/input.css",
      })
    ],
    externals: {
        lodash: '_',
        leaflet: 'L',
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      filename: 'index.html',
      compress: true,
      port: 8080
    },
  entry: ['./src/index.js','./src/index.html'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
 
};