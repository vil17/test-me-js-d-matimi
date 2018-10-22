const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')


//ttt test
// tharf npm install --save-dev mini-css-extract-plugin !!
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");



let pathsToClean = []
module.exports = {
	entry: { main: './src/client/index.js',
	ttt: './src/client/TTT.js'
	},
	output: {
		filename: '[name].js', // á ekki að breyta neinu að það sé name hérna nema þegar ég er með multiple files kemur error ef ég defina bara eitt nafn
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
	new HtmlWebpackPlugin({template: 'src/client/TTT.html'}),
	//new CleanWebpackPlugin(pathsToClean),
	],
	devServer: {
		port: 3000,
		open: true,
		proxy: {
		"/api": "http://localhost:8080"
		}
	},
	module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  	}
}

