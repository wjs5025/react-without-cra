// webpack.config.js

// import html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

// webpack
module.exports = {
	mode : 'development',
	entry : './src/index.js',
	output : {
		filename : 'bundle.[hash].js'
	},
	module : {
		rules : [
			{
				test : /\.(js|jsx)$/,
				exclude : /node_modules/,
				use : {
					loader : "babel-loader",
				},
			},
			{
				test : /\.html$/,
				use : [
					{
						loader : 'html-loader',
						options : {
							minimize : true,
						}
					},
				],
			}
		],
	},
	plugins : [
		new HtmlWebpackPlugin({
			template : 'public/index.html',
		})
	],
	devServer : {
		host : "localhost",
		port : process.env.PORT || 3000,
		open : true,
	}
};