var React = require('react');

var WeatherView = React.createClass({
    
    render: function(){
        return (
            <div>
                <h2 className='text-center'>City : {this.props.city}</h2>
                <h2 className='text-center'>Temperature : {this.props.temp}</h2>
            </div>
        );
    }
});

module.exports = WeatherView;
