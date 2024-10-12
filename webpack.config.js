import { resolve, join } from 'path';
import { readDir } from './gulp/config/read-dir.js';

export const webpackConfig = async (isMode) => {
	const paths = {
		src: resolve('src'),
		build: resolve('dist'),
	};

	const context = join(paths.src, 'js');

	return {
		context,
		entry: await readDir(context),
		mode: isMode ? 'development' : 'production',
		output: {
			path: join(paths.build, 'js'),
			filename: '[name].min.js',
			publicPath: '/',
		},
		module: {
			rules: [
				{
					test: /\.m?js$/,
					exclude: {
						and: [/node_modules/], // Exclude libraries in node_modules ...
						not: [
							// Except for a few of them that needs to be transpiled because they use modern syntax
							/air-datepicker/,
						]
					},
					// use: {
					// 	loader: 'esbuild-loader',
					// 	options: { target: 'ES6' },
					// },
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					},
					resolve: {
						fullySpecified: false,
					},
				},
			],
		},
	};
};
