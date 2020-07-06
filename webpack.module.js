const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = env => {
    return {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: !env.gcc,
                            compilerOptions: {
                                module: 'esnext'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            attributes: { 'data-injector': 'kwe-zero' },
                            injectType: 'singletonStyleTag'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: false,
                            plugins: [autoprefixer, cssnano]
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: { sourceMap: false }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|ttf|eot|woff)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 819200 }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svgo-inline-loader',
                        options: {
                            plugins: [
                                {
                                    removeDimensions: true
                                },
                                {
                                    removeViewBox: false
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    }
}
