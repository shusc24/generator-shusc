const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
module.exports={
    entry:{app:'./src/js/component/lib.js'},
    output:{
        filename:'vendor.js',
        path:path.resolve('./dev/other/vendor')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader!postcss-loader',
                            fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
                        }),
                        less:ExtractTextPlugin.extract({
                            use: 'css-loader!postcss-loader!less-loader',
                            fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            { test: /iview.src.*?js$/, loader: 'babel-loader'},
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract({
                    use: 'css-loader',
                    // fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
                })
            },
            { test: /\.(eot|woff|ttf|svg)$/, loader: "file-loader" },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.css"),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};

