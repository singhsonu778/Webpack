import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import MovieList from 'MovieList';
import Contact from 'Contact';
import About from 'About';
import Main from 'Main';
import 'Styles';
import 'Foundation';

ReactDOM.render(
    <Router history = {hashHistory}>
        <Route path='/' component = {Main}>
            <Route path='/contact' component = {Contact}/>
            <Route path='/about' component = {About}/>
            <IndexRoute component = {MovieList}/>
        </Route>
    </Router>,
    document.getElementById('root')
);