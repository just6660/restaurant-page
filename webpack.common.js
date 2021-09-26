const path = require('path');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: './src/index.js',
    output:{
        filename: '[name].[hash].js',
        path: path.resolve(__dirname,'dist'),
        assetModuleFilename:"./imgs/[name].[hash].[ext]"
    },
    plugins:[
       new HtmlWebpackPlugin({
           template:"./src/template.html"
       }),
       new MiniCssExtractPlugin({filename:"[name].[hash].css"}),
       new CleanWebpackPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.(css)$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test:/\.(scss)$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test:/\.(html)$/,
                use:[
                    "html-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)/,
                type:'asset/resource'
            }
        ]
    }
};
