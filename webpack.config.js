const path = require('path');
const modules = require('./webpack.module');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const jar = path.resolve(__dirname, 'node_modules/google-closure-compiler/compiler.jar');

module.exports = (env = {}) => {
    let tool = '';
    let mode = 'production';
    if (env.dev) {
        tool = 'inline-source-map';
        // tool = 'cheap-module-eval-source-map';
        mode = 'development';
    }
    console.log(env);
    return {
        context: path.resolve(__dirname, 'src'),
        mode: mode,
        devtool: tool,
        entry: {
            index:'./index.ts',
            // b:'./b.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: '[name].js',
            library: 'demo',
            libraryTarget: 'umd',
            auxiliaryComment: 'Test Comment',
            devtoolModuleFilenameTemplate: info => {
                return `webpack://${info.namespace}/${info.resourcePath}`;
            },
            devtoolNamespace: ''
        },
        module: modules,
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ]
        },
        plugins: [
            new ClosureCompilerPlugin({
                compiler: {
                  jar: jar, //optional
                  language_in: 'ECMASCRIPT5',
                  language_out: 'ECMASCRIPT5',
                  compilation_level: 'ADVANCED',
                  externs: [
                      'google-closure/custom.js'
                  ]
                },
                concurrency: 3,
            })
        ]
    }
}