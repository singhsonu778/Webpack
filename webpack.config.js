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
            MovieList: path.resolve(__dirname, 'src/js/movieList.js'),
            Styles: path.resolve(__dirname, 'src/scss/movies.scss'),
            Foundation: path.resolve(__dirname, 'node_modules/foundation-sites/dist/css/foundation.min.css')
        }
    },
    module: {
        rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}            
		]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/template/template.html'})
    ]
};
