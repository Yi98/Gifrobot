const request = require('request');

var limit = 10;

var trending = `https://api.giphy.com/v1/gifs/trending?api_key=AH1lxNGJ7pZeEyEJlTQ6EY3RK0EFfPGZ&limit=${limit}&rating=G`;

var results = (callback) => {
  request(trending, {json: true}, (err, res, body) => {
      if(!err) {
        var gifs = [];
        for(let i=0; i<limit; i++) {
          gifs.push({
            url: body.data[i].images.original.url,
            title: body.data[i].title,
          });
        }
        callback(undefined, {
          gifs,
          limit
        });
      }
      else {
        callback('Unable to receive gifs');
      }
  });
};

module.exports.results = results;