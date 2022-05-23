// especificamos donde esta el proyecto 
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//validar si estamos en produccion o desarrollo
const devMode = process.env.NODE_ENV !== 'production'
// verificamos si estamos en modo desarrollo o produccion, si marca true es porque estamos en desarrollo
console.log(devMode);

// configurando webpack
module.exports = {
    // indicamos el archivo principal para el frontend
    entry: './frontend/app.js',

    //indicamos donde dejaremos el codigo convertido
    output: {
        path: path.join(__dirname, 'backend/public'),
        
        // modulo para cargar el js
        filename: 'js/bundle.js'
    },
    
    // le indicamos a webpack que estamos en desarrollo
    mode: 'development',
    
    // modulo para cargar archivos css
    module: {

        // indica el formato del archivo a cargar
        rules: [{
            test: /\.css/,

            use:[
                devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        }]
    },

    // modulo para ordenar el arreglo del objeto HtmlWebpackPlugin
    plugins: [
        new HtmlWebpackPlugin({
            template:  './frontend/index.html',
            // propiedad para minificar el html
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/bundle.css'
        })
    ],
    // modulo para ver is he cometido error
    devtool: 'source-map'

};