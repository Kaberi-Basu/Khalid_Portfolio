const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/public/index.html'), // to import index.html file inside index.js
      favicon: path.join(__dirname, '/public/favicon.ico'),
    }),
  ],
  devServer: {
    port: 3000, // you can change the port
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
        _public: path.join(__dirname, '/public/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
      {
                        // To import SVG as a react component
        test: /\.svg$/,
        use: [{
                            loader: require.resolve('babel-loader')
                        },
                        {
                            loader: 'svg-react-loader'
                        }
                        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.svg$/],
      }
    ],
  },
};