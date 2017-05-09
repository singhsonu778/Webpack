import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import MovieList from 'MovieList';
import Weather from 'Weather';
import Contact from 'Contact';
import About from 'About';
import Main from 'Main';
import 'Styles';
import 'FoundationCSS';
import 'script-loader!jquery';
import 'FoundationJS';

$(document).foundation();

ReactDOM.render(
    <Router history = {hashHistory}>
        <Route path='/' component = {Main}>
            <Route path='/weather' component = {Weather}/>
            <Route path='/contact' component = {Contact}/>
            <Route path='/about' component = {About}/>
            <IndexRoute component = {MovieList}/>
        </Route>
    </Router>,
    document.getElementById('root')
);