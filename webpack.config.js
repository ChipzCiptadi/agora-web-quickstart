const path = require("path");
const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    entry: "./agoraLogic.js",
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
        })
    ],
    output: {
        filename: "bundledAgoraLogic.js",
        path: path.resolve(__dirname, "./dist"),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './'), 
        },
        compress: true,
        port: 9000,
    },
};
