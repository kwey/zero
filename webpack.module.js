const autoprefixer = require('autoprefixer');

module.exports = {
    // 从 webpack 3.0.0 开始
    // noParse: function(content) {
    //     return /jquery|lodash/.test(content);
    // },
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: [/node_modules/]
        },
        {
            test: /\.less$/,
            exclude: [/node_modules/],
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
    ]
}