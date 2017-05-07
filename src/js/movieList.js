import React from 'react';
import Movie from 'Movie';

var MovieList = React.createClass({
	
	getInitialState: function() {
		return {
			movies : ['Dangal', 'Hera Pheri']	
		}
	},

	addMovie: function(movieName) {
		var movieArray = this.state.movies;
		movieArray.push(movieName);
		this.setState({movies: movieArray});
	},

	removeMovie: function(i) {
		var movieArray = this.state.movies;
		movieArray.splice(i, 1);
		this.setState({movies: movieArray});
	},

	updateMovie: function(updatedValue, i) {
		var movieArray = this.state.movies;
		movieArray[i] = updatedValue;
		this.setState({movies: movieArray});
	},			

	renderMovie: function(movie, i){
		return (<Movie key={i} index={i} removeMovie={this.removeMovie} updateMovie={this.updateMovie}>{movie}</Movie>);
	},

	render: function() {
		return (
			<div>
				<button onClick={this.addMovie.bind(null, 'Enter movie name here')}>Add New Movie</button>
				<div>
					{this.state.movies.map(this.renderMovie)}
				</div>
			</div>
		);
	}
});

export default MovieList;