var React = require('react');
var WeatherView = require('WeatherView');
var WeatherForm = require('WeatherForm');
var WeatherAPI = require('WeatherAPI');
var ErrorView = require('ErrorView');

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        };
    },

    saveData: function (city) {
        var thisVar = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined,
            city: undefined,
            temp: undefined
        });

        WeatherAPI.getTemp(city).then(function(temp){
            thisVar.setState({
                city: city,
                temp: temp,
                isLoading: false
            });
        }, function(err){
            thisVar.setState({
                isLoading: false,
                errorMessage: 'Sorry! An error has occurred.'
            });
        });
    },

    render: function () {
        var city = this.state.city;
        var temp = this.state.temp;
        var isLoading = this.state.isLoading;
        var errorMessage = this.state.errorMessage;

        function renderMessage(){
            if(isLoading){
                return <h3 className='text-center'>Fetching Weather....</h3>;
            } else if(temp && city){
               return <WeatherView city={city} temp={temp}/>;
            }
        }

        function renderError () {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorView message={errorMessage}/>
                );
            }
        }

        return (
            <div>
                <h3>Weather</h3>
                <WeatherForm updateData={this.saveData}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;