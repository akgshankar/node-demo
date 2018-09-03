const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')

module.exports = {
    watch: true,
    devtool: 'sourcemap',
    target: 'node',
    mode: "development",
    node: {
        __filename: true,
        __dirname: true
    },
    module: {
        rules: [
            { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ }
        ]
    },
    externals: [
        {
            formidable: 'commonjs formidable',
        },
    ],
}