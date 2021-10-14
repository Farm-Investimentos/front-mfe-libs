const path = require('path');

const constantsFiles = ['consts/RequestStatusEnum', 'errorBuilder', 'axiosWrapper', 'mixins/routeRole', 'mixins/gtag'];

let entry = {};
constantsFiles.forEach(file => {
	entry[file] = `./src/${file}.js`;
});

module.exports = {
	entry,
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		libraryTarget: 'umd',
	},
	/*
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				use: 'babel-loader',
			},
		],
	},
    */
	resolve: {
		extensions: ['.js'],
	},
};