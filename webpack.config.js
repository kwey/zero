const path = require('path');
const webpack = require('webpack');
const modules = require('./webpack.module');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const pkg = require('./package.json');
const git = require('git-rev-sync');

const jar = path.resolve(__dirname, 'node_modules/google-closure-compiler/compiler.jar');

module.exports = (env = {}) => {
    let tool = '';
    let mode = 'production';
    if (env.dev) {
        tool = 'cheap-module-eval-source-map';
        mode = 'development';
    }
    const config = {
        context: path.resolve(__dirname, 'src'),
        mode: mode,
        devtool: tool,
        stats: {
            modules: false,
        },
        entry: { index:'./index.ts' },
        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: '[name].js',
            library: 'demo',
            libraryTarget: 'umd',
        },
        module: modules,
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ]
        },
        plugins: [
            new webpack.DefinePlugin({
                _METADATA_: JSON.stringify({
                    name: pkg.name,
                    version: pkg.version,
                    hash: git.short(),
                    branch: git.branch(),
                    lastModefied: new Date().toISOString(),
                })
            })
        ],
        optimization: {
            minimizer: []
        },
        watchOptions:{
            ignored: /node_modules/,
        },
        node: false,
        devServer: {
            compress: true,
            overlay: true,
            openPage: './demo/index.html',
            port: 8080,
            publicPath: '/dist/',
            headers: {
                "X-Custom-Header": "yes",
                'Access-Control-Allow-Origin': '*'
            },
        },
    }
    if (!env.dev) {
        if (env.gcc) {
            // config.plugins.push(
            //     new ClosureCompilerPlugin({
            //         compiler: {
            //             // jar: jar,
            //             language_in: 'ECMASCRIPT5',
            //             language_out: 'ECMASCRIPT5',
            //             compilation_level: 'ADVANCED',
            //             externs: [
            //                 'google-closure/custom.js'
            //             ]
            //         },
            //         concurrency: 3,
            //         test: /index\.js$/,
            //     })
            // )
            config.optimization.minimizer.push(
                new UglifyJsPlugin({
                    test: /\.js($|\?)/i,
                    uglifyOptions: {
                        warnings: false,
                        parse: {},
                        compress: {
                            warnings: false,
                            drop_debugger: true,
                            drop_console: true
                        },
                        mangle: true, // Note `mangle.properties` is `false` by default.
                        output: null,
                        toplevel: false,
                        nameCache: null,
                        ie8: false,
                        keep_fnames: false,
                    }
                })
            )

        }
    }

    return config;
};
