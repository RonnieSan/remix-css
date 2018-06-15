// ----------------------------------------------------------------------
// WEBPACK CONFIG FOR DOCS
// ----------------------------------------------------------------------

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const dev = (process.env.NODE_ENV !== 'production');

module.exports = {
	mode : process.env.NODE_ENV || 'development',
	entry : './src/docs/main.js',
	output : {
		filename : 'main.min.js',
		path : path.resolve(__dirname, '../../docs'),
		publicPath : '/'
	},
	devServer : {
		contentBase : './src/docs',
		watchContentBase : true,
		hot : true,
		port : 3001
	},
	module : {
		rules : [
			{
				test : /\.js$/,
				loader : 'babel-loader',
				exclude : /node_modules/,
				include : [
					path.resolve(__dirname, 'src')
				]
			},
			{
				test : /\.css$/,
				loader : [
					(dev ? 'style-loader' : MiniCSSExtractPlugin.loader),
					'css-loader',
					'postcss-loader'
				]
			},
			{
				test : /\.less$/,
				loader : [
					(dev ? 'style-loader' : MiniCSSExtractPlugin.loader),
					{
						loader : 'css-loader',
						options : {
							sourceMap : true
						}
					},
					{
						loader : 'postcss-loader',
						options : {
							sourceMap : true
						}
					},
					{
						loader : 'less-loader',
						options : {
							sourceMap : true
						}
					}
				]
			}
		]
	},
	plugins : [
		new CleanWebpackPlugin(['dist']),
		new HTMLWebpackPlugin({
			template : './src/docs/index.html'
		}),
		new MiniCSSExtractPlugin({
			filename : (dev ? '[name][contenthash].css' : '[name].css')
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
};