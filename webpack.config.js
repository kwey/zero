const path = require('path')
const webpack = require('webpack')
const modules = require('./webpack.module')
const TerserPlugin = require('terser-webpack-plugin')
const pkg = require('./package.json')
// const git = require('git-rev-sync')

// 统计打包时间
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const smp = new SpeedMeasurePlugin();

module.exports = (env = {}) => {
    let mode = 'development'
    let tool = 'cheap-module-source-map'
    if (env.gcc) {
        tool = 'source-map'
        mode = 'production'
    }
    const config = {
        context: path.resolve(__dirname, 'src'),
        mode: mode,
        devtool: tool,
        stats: {
            modules: false
        },
        entry: { index: './index.ts' },
        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: '[name].js',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        module: modules,
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        plugins: [
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
    if (env.gcc || env.debug) {
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
