import Webpack from 'webpack';

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:3000/',
		'webpack/hot/only-dev-server',
		'./client/Privilege.js'
	],
	output: {
		path: '/',
		filename: "packed.js"
	},
	plugins: [
		new Webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.(js|jsx)?$/,
				loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015,presets[]=react,plugins[]=transform-class-properties'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.scss$/,
				loader: "style-loader!css-loader!sass-loader"
			},
			{
				test: /\.png$/,
				loader: "file-loader"
			},
			{
				test: /(README\.md|CHANGELOG|package\.json)$/,
				loader: "ignore-loader"
			}
		]
	},
	devtool: "eval-source-map"
};