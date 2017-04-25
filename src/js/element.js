import React from 'react';
import {render} from 'react-dom';
import message from './message';

class Element extends React.Component {
	render () {
		return (
			<div>
				<h1>Webpack Page from React</h1>
				<h2>{message('Hello World!!!')}</h2>
			</div>
		);
	}
}

export default Element;