import React from 'react';
import {Link, IndexLink} from 'react-router';

var Nav = React.createClass({
    render: function(){
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Navigation</li>
                        <li><IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Movies</IndexLink></li>
                        <li><Link to='/weather' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Weather</Link></li>
						<li><Link to='/contact' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Contact Us</Link></li>
						<li><Link to='/about' activeClassName='active' activeStyle={{fontWeight:'bold'}}>About</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Nav;
