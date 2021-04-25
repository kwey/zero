const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = env => {
    const isDev = !env?.gcc
    return {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: isDev,
                            compilerOptions: {
                                module: 'esnext',
                            },
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            attributes: { 'data-injector': 'kwe-zero' },
                            // 添加如下属性 会导致css map 失效
                            // 插件里面添加的样式 写到一个style 标签下
                            // injectType: 'singletonStyleTag',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDev,

                            importLoaders: 2,
                            // 会重命名classname，需要配合
                            // modules: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: isDev,
                            postcssOptions: {
                                plugins: [
                                    [autoprefixer, {}],
                                    [cssnano, {}],
                                ],
                            },
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: { sourceMap: isDev },
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif|ttf|eot|woff)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 819200 },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svgo-inline-loader',
                        options: {
                            plugins: [
                                {
                                    removeDimensions: true,
                                },
                                {
                                    removeViewBox: false,
                                },
                            ],
                        },
                    },
                ],
            },
        ],
    }
}
