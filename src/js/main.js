import React from 'react';
import NavigationBar from 'NavigationBar';

var Main = React.createClass({

	render: function() {
		return (
			<div>
				<h1 className='top-bar'>React App Using Webpack Live Reloading</h1>
                <NavigationBar/>
				<div className='row'>
					<div className='columns medium-6 large-4 small-centered'>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
});

export default Main;