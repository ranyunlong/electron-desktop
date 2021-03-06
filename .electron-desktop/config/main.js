const path = require('path')

module.exports = {
    entry:{
        main:path.resolve('src','main','index.js')
    },
    output:{
        filename: '[name].js',
        libraryTarget: 'commonjs2',
        path: path.resolve('dist','electron')
    },
    node: {
        __dirname: process.env.mode !== 'production',
        __filename: process.env.mode !== 'production'
    },
    resolve: {
        extensions: ['.js', '.json', '.node']
    },
    target: 'electron-main',
    mode: process.env.mode
}