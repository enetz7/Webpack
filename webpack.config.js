const path = require('path');
const loader = require('sass-loader');


module.exports = {
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
              {
                loader:'file-loader',
                options: {
                  name: '/[name].css'
                }
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
  entry: ['./src/index.js','./src/input.scss'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
 
};