const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')


//ttt test
// tharf npm install --save-dev mini-css-extract-plugin !!
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')



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
	new HtmlWebpackPlugin({template: 'src/client/TTT.html', inject: 'body', hash: true,}),
	//new CleanWebpackPlugin(pathsToClean),
	new webpack.ProvidePlugin({
      // the following will include default version instead of slim and umd
      // '$': 'jquery',
      // 'jQuery': 'jquery',
      // 'Popper': 'popper.js'
      
      // for bs4 beta1 
      // '$': 'jquery/dist/jquery.slim.js',
      // 'jQuery': 'jquery/dist/jquery.slim.js',
      // 'Popper': 'popper.js/dist/umd/popper'

      // for bs4 beta3
      '$': 'jquery',
      jQuery: 'jquery',
      // Popper: 'popper.js',      
      Popper: ['popper.js', 'default'],
      'Util': "exports-loader?Util!bootstrap/js/dist/util"
    }),
	],

	devServer: { /// server dót
		port: 3000,
		open: true,
		proxy: {
		"/api": "http://localhost:8080"
		}
	},
	module: { ///css dót
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  	}
}

