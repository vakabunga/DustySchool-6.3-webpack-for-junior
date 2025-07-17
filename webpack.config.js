const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(?:js|mjs|cjs)$/,
				use: {
					loader: 'babel-loader',
					options: {
						targets: 'defaults',
						presets: [['@babel/preset-env', { targets: 'ie 9' }]],
					},
				},
			},
			{
				test: /\.(png|jpe?g|webp|gif|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: '[name].[hash][ext]',
				},
				use: [
					{
						loader: 'image-webpack-loader',
						options: {
							pngquant: { quality: [0.5, 0.7], speed: 1 },
						},
					},
				],
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	target: ['web', 'es5'],
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin(),
	],
};
