const path = require('path');
const glob = require('glob');

const entry = glob
	.sync('./src/**/*.js')
	.filter((item) => item.indexOf('.spec.js') <= 0)
	.reduce((acc, path) => {
		const entry = path.replace('./src/', '');
		acc[entry] = path;
		return acc;
	}, {});

module.exports = {
	entry,
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name]',
		libraryTarget: 'umd',
	},
	resolve: {
		extensions: ['.js'],
	},
};
