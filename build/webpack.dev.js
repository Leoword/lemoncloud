'use strict';

const path = require('path');
const webpack = require('webpack');
const application = require('./webpack.base');

application.mode = 'development';
application.devtool = 'inline-source-map';
application.devServer = {
	port: 8000,
	host: '0.0.0.0',
    hot: true,
	proxy: {
        '/eureka': 'http://localhost:8761'
	}
};

application.plugins.push(
	new webpack.HotModuleReplacementPlugin()
);
module.exports = application;