const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const webpack = require('webpack')



let pathsToClean = [
  'dist'
]


module.exports = {
	//mode: 'development',
	entry: { main: './src/client/index.js', 
	//ttt: './src/client/TTT.js' //tharf ekki thegar eg er buinn ada importa TTT i index skrana
	},
	output: {
		filename: '[name].js', // á ekki að breyta neinu að það sé name hérna nema þegar ég er með multiple files kemur error ef ég defina bara eitt nafn
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
	new HtmlWebpackPlugin({template: 'src/client/TTT.html', inject: 'body', /*hash: true,*/}),
	new CleanWebpackPlugin(pathsToClean),
	new webpack.ProvidePlugin({ 
      $: 'jquery',
      jQuery: 'jquery',    
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
  	},
}

