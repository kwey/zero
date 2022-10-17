const path = require('path')
const webpack = require('webpack')
const git = require('git-rev-sync')
const pkg = require('./package.json')
const modules = require('./webpack.module')
const TerserPlugin = require('terser-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

// 统计打包时间
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()

// env 文档
// https://webpack.docschina.org/api/cli/#environment-options
// webpack-cli  3 和 4  env的传参形式不同
// 3： --env.gcc
// 4/5： --env gcc

// argv 文档
// https://webpack.docschina.org/api/cli/#flags

module.exports = (env, argv) => {
	const pro = env?.gcc
	const dev = env?.dev
	const mode = pro ? 'production' : 'development'

	const publicPath = pro ? 'http://localhost:9000/zero/dist/' : dev ? '/demo/' : '/zero/dist/'
	const config = {
		mode,
		node: false,
		devtool: 'cheap-module-source-map',
		stats: {
			modules: false,
		},
		entry: { kwe: './src/index.ts' },
		output: {
			// https://webpack.docschina.org/configuration/output/#outputpublicpath
			publicPath,
			path: path.resolve(__dirname, 'dist/'),
			filename: '[name].js',
			library: 'KWE',
			libraryTarget: 'umd',
			umdNamedDefine: true,
			libraryExport: 'default',
			chunkFilename: pro ? 'plugins-[name].[contenthash:6].js' : 'plugins-[name].js',
			clean: true,
		},
		module: modules(env),
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		plugins: [
			new ForkTsCheckerWebpackPlugin(),
			new webpack.DefinePlugin({
				_METADATA_: JSON.stringify({
					name: pkg.name,
					version: pkg.version,
					// hash: git.short(),
					// branch: git.branch(),
					lastModefied: new Date().toISOString(),
				}),
			}),
		],
		optimization: {
			minimizer: [],
		},
		watchOptions: {
			ignored: /node_modules/,
		},

		devServer: {
			static: 'demo',
			port: 8072,
			headers: {
				'X-Custom-Header': 'yes',
				'Access-Control-Allow-Origin': '*',
			},
		},
	}
	if (pro) {
		config.optimization.minimize = true
		// config.plugins.push(new BundleAnalyzerPlugin())
		config.optimization.minimizer.push(
			// https://webpack.docschina.org/plugins/terser-webpack-plugin/
			// new TerserPlugin()
			new TerserPlugin({
				terserOptions: {
					// https://github.com/terser/terser#minify-options
					sourceMap: true,
					ecma: 5,
					compress: {
						drop_console: true,
					},
					output: {
						beautify: false,
					},
					// 删除未使用的变量和函数。
					toplevel: true,
				},
			})
		)
	}
	if (env?.es) {
        // 打包成es module 形式
		config.output = {
			publicPath,
			path: path.resolve(__dirname, 'dist/'),
			filename: '[name].js',
			libraryTarget: 'module',
			chunkFilename: pro ? 'plugins-[name].[contenthash:6].js' : 'plugins-[name].js',
		}
		config.experiments = {
			outputModule: true,
		}
	}
	// return config
	// 统计打包时间
	return smp.wrap(config)
}
