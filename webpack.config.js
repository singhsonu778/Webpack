var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			}
		]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/template/template.html'})
    ]
};
