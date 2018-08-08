'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	entry: path.resolve(__dirname, '../index.js'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js',
    },
    target: 'web',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						js: 'babel-loader'
					}
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(['css-loader'])
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'less-loader'])
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				loader: 'url-loader',
				options: {
                    limit: 8000,
                    outputPath: 'images/',
                    publicPath: 'images/'
				}
			},
			{
				test: /\.(eot|woff|woff2|svg|ttf)$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new HtmlWebpackPlugin({
			template: `html-loader!${path.resolve(__dirname, './index.html')}`,
			inject: 'head'
        }),
        new VueLoaderPlugin()
	],
	node: false
};