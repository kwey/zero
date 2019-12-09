const path = require('path')
const webpack = require('webpack')
const modules = require('./webpack.module')
const TerserPlugin = require('terser-webpack-plugin')
const pkg = require('./package.json')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
// const git = require('git-rev-sync')

// 统计打包时间
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const smp = new SpeedMeasurePlugin();

module.exports = (env = {}) => {
    let mode = 'development'
    if (env.gcc) {
        mode = 'production'
    }
    const config = {
        context: path.resolve(__dirname, 'src'),
        mode: mode,
        devtool: 'cheap-module-source-map',
        stats: {
            modules: false
        },
        entry: { kwe: './index.ts' },
        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: '[name].js',
            library: 'KWE',
            libraryTarget: 'umd',
            umdNamedDefine: true,
            libraryExport: 'default'
        },
        module: modules,
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin({
                tsconfig: path.resolve(__dirname, 'tsconfig.json')
            }),
            new webpack.DefinePlugin({
                _METADATA_: JSON.stringify({
                    name: pkg.name,
                    version: pkg.version,
                    // hash: git.short(),
                    // branch: git.branch(),
                    lastModefied: new Date().toISOString()
                })
            })
        ],
        optimization: {
            minimizer: []
        },
        watchOptions: {
            ignored: /node_modules/
        },
        node: false,
        devServer: {
            compress: true,
            overlay: true,
            openPage: './demo/index.html',
            disableHostCheck: true,
            port: 8080,
            publicPath: '/demo/',
            headers: {
                'X-Custom-Header': 'yes',
                'Access-Control-Allow-Origin': '*'
            }
        }
    }
    if (env.gcc) {
        // config.plugins.push(new BundleAnalyzerPlugin())
        config.optimization.minimizer.push(
            new TerserPlugin({
                sourceMap: true,
                cache: true,
                parallel: true,
                terserOptions: {
                    ecma: 5,
                    compress: {
                        drop_console: true
                    },
                    output: {
                        beautify: false
                    },
                    toplevel: true
                }
            })
        )
    }

    return config
    // 统计打包时间
    // return smp.wrap(config);
}
