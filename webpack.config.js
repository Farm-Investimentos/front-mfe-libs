const path = require('path');

const constantsFiles = ['RequestStatusEnum'];
const formattersFiles = [
	'currency/brl',
	'currency/brlPlain',
	'currency/index',
	'percentage/decimals',
	'percentage/index',
];

const helpersFiles = ['axiosWrapper/index', 'errorBuilder/index', 'toClipboard/index'];
const mixinsFiles = ['gtag', 'routeRole'];

let entry = {};
constantsFiles.forEach(file => {
	entry['helpers' + file] = `./src/consts/${file}.js`;
});
formattersFiles.forEach(file => {
	entry['formatters/' + file] = `./src/formatters/${file}.js`;
});
helpersFiles.forEach(file => {
	entry['helpers/' + file] = `./src/helpers/${file}.js`;
});
mixinsFiles.forEach(file => {
	entry['mixins/' + file] = `./src/mixins/${file}.js`;
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
