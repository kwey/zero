const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
    // 从 webpack 3.0.0 开始
    // noParse: function(content) {
    //     return /jquery|lodash/.test(content);
    // },
    rules: [
        {
            test: /\.tsx?$/,
            include: [
                path.resolve(__dirname, "src")
            ],
            enforce: 'pre',
            use: [
                {
                    loader: 'ts-loader',
                },
                {
                    loader: 'tslint-loader',
                }
            ]
        },
        {
            test: /\.less$/,
            include: [
                path.resolve(__dirname, "src")
            ],
            use:[
                {
                    loader: 'style-loader',
                    options: {
                        attrs: {'data-injector': 'test'},
                    },
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false, // `sourceMap: true` option will cause some problems.
                        minimize: {
                            discardComments: {removeAll: true},
                        },
                    },
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false,
                        plugins: [autoprefixer],
                    },
                },
                {
                    loader: 'less-loader',
                    options: {sourceMap: false},
                },
            ]
        },
        {
            test: /\.(png|jpg|gif|ttf|eot|woff)$/,
            include: [
                path.resolve(__dirname, "src")
            ],
            use: [
                {
                    loader: 'url-loader',
                    options: {limit: 819200},
                },
            ],
        },
    ]
}