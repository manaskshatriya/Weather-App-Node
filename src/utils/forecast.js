const axios = require('axios');
const chalk = require('chalk');



const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=e94e5922edc201f2a26b0c7b521a7905&units=metric';

  axios.get(url)
    .then(function (response) {
      callback(undefined, "THE TEMPERATURE " + response.data.main.temp + " THE CHANCES OF RAIN ARE " + response.data.clouds.all + "%")
      //callback(undefined,response.data.weather[0].description.toUpperCase());
    })
    .catch(function (error) {
      // handle error
      callback(chalk.red.bold("ERROR!!! NO INTERNET CONNECTION"));
      console.log(error)

    })
    .then(function () {
      // always executed
    });
}

module.exports = forecast;