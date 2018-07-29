const path = require('path');

module.exports = {
    entry: {
        index: './index.js'
    },
    output: {
        filename: 'aw-p2f.js',
        libraryTarget: "umd",
        library: 'aw-p2f',
        path: path.resolve(__dirname, 'dist')
    }
};