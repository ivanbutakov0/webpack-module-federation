import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/types'

export function buildWebpack(options: BuildOptions): webpack.Configuration {
	const isDev = options.mode === 'development'

	return {
		mode: options.mode || 'development',
		entry: options.paths.entry,
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		output: {
			path: options.paths.output,
			filename: '[name].[contenthash].bundle.js',
			clean: true,
		},
		plugins: buildPlugins(options),
		devtool: isDev && 'inline-source-map',
		devServer: isDev ? buildDevServer(options) : undefined,
	}
}
