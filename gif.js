const request = require('request');

var address = 'https://api.giphy.com/v1/gifs/trending?api_key=AH1lxNGJ7pZeEyEJlTQ6EY3RK0EFfPGZ&limit=1&rating=G';

var results = (callback) => {
  request(address, {json: true}, (err, res, body) => {
      if(!err) {
        callback(undefined, {
          url: body.data[0].images.original.url
        });
      }
      else {
        callback('Unable to receive gifs');
      }
  });
};

module.exports.results = results;