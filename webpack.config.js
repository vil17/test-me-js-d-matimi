const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const $ = require('jquery');

//ttt test
// tharf npm install --save-dev mini-css-extract-plugin !!
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')

const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

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
	new HtmlWebpackPlugin({template: 'src/client/TTT.html', inject: 'body', /*hash: true,*/}),
	//new CleanWebpackPlugin(pathsToClean),
	new HtmlWebpackExternalsPlugin({
  externals: [
    {
      module: 'jquery',
      entry: {
        path: 'https://code.jquery.com/jquery-3.2.1.js',
        attributes: {
          integrity: 'sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=',
          crossorigin: 'anonymous',
        },
      },
      global: 'jQuery',
    },
  ],
})
	,
	// þetta þarf að vera til að virka a dev-server amk - virðist vera nog fyrir það
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
//virkar ekki eitt og ser /*
/*	module: {
  	rules: [{
          test: require.resolve('jquery'),
          use: [{
              loader: 'expose-loader',
              options: 'jQuery'
          },{
              loader: 'expose-loader',
              options: '$'
          }]
      }]
	},
*/
	module: { ///css dót
    rules: [
      {
        test: /\.css$/,

        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  	},
}

