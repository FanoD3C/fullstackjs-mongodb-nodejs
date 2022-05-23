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
        // indica el style formato del archivo a cargar
        rules: [{
            // indicamos que leemos los css
            test: /\.css/,

            // verificamos el uso del modo de desarrollo en donde nos encontramos
            use:[
                // si, estoy en devMode usa style loader, sino, utiliza MiniCssExtractPlugin.loader para produccion
                devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        }]
    },

    // modulo para ordenar el arreglo del objeto HtmlWebpackPlugin
    //esto sirve para que el navegador lo pueda leer minificado = mayor rendimiento
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
        // indicar el archivo que se debe generar para los archivos CSS
        new MiniCssExtractPlugin({
            filename: 'css/bundle.css'
        })
    ],
    // propeidad para ver is he cometido error
    devtool: 'source-map'

};