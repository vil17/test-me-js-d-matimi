const path = require('path');
//const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

console.log('asd');

let pathsToClean = []
module.exports = {
	entry: './src/client/index.js',

	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
	new HtmlWebpackPlugin({title: 'Greeting page', inject: true}),
	new CleanWebpackPlugin(pathsToClean),
	],
	devServer: {
		port: 3000,
		open: true,
		proxy: {
		"/api": "http://localhost:8080"
		}
	},
}

