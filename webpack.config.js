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
// 4： --env gcc

// argv 文档
// https://webpack.docschina.org/api/cli/#flags

module.exports = (env, argv) => {
    const pro = env?.gcc
    let mode = pro ? 'production' : 'development'
    let publicPath = pro ? 'http://localhost:9000/zero/dist/' : '/zero/dist/'

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
        },
        module: modules(env),
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin({
                tsconfig: path.resolve(__dirname, 'tsconfig.json')
            }),
            new webpack.DefinePlugin({
                _METADATA_: JSON.stringify({
                    name: pkg.name,
                    version: pkg.version,
                    hash: git.short(),
                    branch: git.branch(),
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
            publicPath,
            compress: true,
            overlay: true,
            disableHostCheck: true,
            port: 8072,
            headers: {
                'X-Custom-Header': 'yes',
                'Access-Control-Allow-Origin': '*',
            },
            // open: 'Google Chrome',
            // openPage: '/demo/index.html'
            // writeToDisk: true,
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

    // return config
    // 统计打包时间
    return smp.wrap(config)
}
