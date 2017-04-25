import React from 'react';

var Movie = React.createClass({
	
	getInitialState: function() {
		return {editable: false};
	},

	edit: function() {
		this.setState({editable: true});
	},

	remove: function() {
		this.props.removeMovie(this.props.index);
	},

	save: function() {
		this.props.updateMovie(this.refs.movieName.value, this.props.index);
		this.setState({editable: false});
	},

	displayInfo: function() {
		return (
				<div>
                	<h1>{this.props.children}</h1>
					<button onClick={this.edit}>Edit</button>
					<button onClick={this.remove}>Remove</button>
				</div>
		);
	},

	editInfo: function() {
		return (
				<div>
                	<textarea ref='movieName' defaultValue={this.props.children}></textarea><br/>
					<button onClick={this.save}>Save</button>
				</div>
		);
	},

    render: function() {
        if(this.state.editable) {
			return this.editInfo();
		} else {
			return this.displayInfo();
		}
    }
});

export default Movie;