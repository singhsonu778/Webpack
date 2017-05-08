import axios from 'axios';

const OPEN_WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=4cf26e584b68e4c7f02be07c45064238&units=imperial';

module.exports = {
    getTemp: function(city) {
        var encodedCity = encodeURIComponent(city);
        var url = `${OPEN_WEATHER_API_URL}&q=${encodedCity}`;

        return axios.get(url).then(function(response) {
            if (response.data.main.temp) {
                return response.data.main.temp;
            } 
        });
    }
};
