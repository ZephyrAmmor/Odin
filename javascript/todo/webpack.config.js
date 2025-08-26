const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { watchFile } = require('fs')

module.exports = {
    mode : 'development',
    entry : './src/index.js',
    output : {
        filename : 'main.js',
        path : path.resolve(__dirname, 'dist'),
        clean : true,
    },
    devtool : 'eval-source-map',
    devServer : {
        watchFiles : ['./src/template.html'],
    },

    plugins : [
        new HtmlWebPackPlugin({
            template: './src/template.html'
        }),
    ],
    module : {
        rules : [
            {
                test : /\.css$/i,
                use : ['style-loader', 'css-loader']
            },
            {
                test : /\.(png|svg|webp|jpg|jpeg|gif)$/i,
                type : 'asset/resource',
            },
        ],
    },
};