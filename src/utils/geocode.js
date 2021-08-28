const axios = require('axios');
const chalk = require('chalk');

const geocode = (address, callback) => {
  const geo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWFuYXNrc2hhdHJpeWEiLCJhIjoiY2txc2F5NXJ6MGEweTJxcW1qYnRpdDVjYSJ9.5_HW4ArdeREV140J-TGN5g&limit=1';
  axios.get(geo)
    .then(function (response) {
      // handle success
      callback(undefined, {
        latitude: response.data.features[0].center[0],
        longitude: response.data.features[0].center[1],
        location: response.data.features[0].place_name
      })
    })
    .catch(function (error) {
      // handle error
      callback(chalk.red.bold("ERROR!!! NO INTERNET CONNECTION"));
    })
    .then(function () {
      // always executed
    })
}
module.exports = geocode;