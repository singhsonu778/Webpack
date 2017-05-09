var React = require('react');

var Error = React.createClass({
    
    getDefaultProps: function() {
        return {
            title: 'Error'
        };
    },

    componentDidMount: function() {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },

    render: function() {
        return ( 
            <div id='error-modal' className='reveal tiny text-center'>
                <h4>{this.props.title}</h4>
                <p>{this.props.message}</p>
                <p><button className='button hollow' data-close=''>Close</button></p>
            </div>
        );
    }
});

module.exports = Error;