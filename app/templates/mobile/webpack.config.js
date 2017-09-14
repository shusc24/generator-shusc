const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack")
module.exports={
    entry:{app:'./src/js/component/test.js'},
    // externals: {
    //     vue: 'Vue'
    // },
    output:{
        filename:'component.js',
        path:path.resolve('./dev/other/test/')
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
            { test: /iview.src.*?js$/, loader: 'babel-loader' },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract({
                    use: 'css-loader',
                    // fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
                })
            },
            { test: /\.(eot|woff|ttf|svg)$/, loader: "file-loader" },
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.css"),
        new webpack.optimize.ModuleConcatenationPlugin()
        // new webpack.optimize.UglifyJsPlugin({
        //     compress:{
        //         warnings:false
        //     },
        //     mangle:{
        //         except:['$super','$','exports','require','requirejs','i']
        //     }
        // })
        // new webpack.ProvidePlugin({
        //     Vue: 'vue'
        // }),
        // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};
