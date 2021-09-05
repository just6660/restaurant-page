const path = require('path');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
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
       new CleanWebpackPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.(scss)$/,
                use:[
                    "style-loader",
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
        ]
    }
};
