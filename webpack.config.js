var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            Movie: path.resolve(__dirname, 'src/js/movie.js'),
            MovieList: path.resolve(__dirname, 'src/js/movieList.js')
        }
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
