const request = require('request');

var limit = 25;

var trending = `https://api.giphy.com/v1/gifs/trending?api_key=AH1lxNGJ7pZeEyEJlTQ6EY3RK0EFfPGZ&limit=${limit}&rating=G`;
var random = 'https://api.giphy.com/v1/gifs/random?api_key=AH1lxNGJ7pZeEyEJlTQ6EY3RK0EFfPGZ&tag=&rating=R';
var sticker = `https://api.giphy.com/v1/stickers/trending?api_key=AH1lxNGJ7pZeEyEJlTQ6EY3RK0EFfPGZ&limit=${limit}&rating=R`;

var results = (callback) => {
  request(trending, {json: true}, (err, res, body) => {
      if(!err) {
        var gifs = [];
        for(let i=0; i<limit; i++) {
          gifs.push({
            url: body.data[i].images.original.url,
            title: body.data[i].title
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

var randomData = (callback) => {
  var gifs = [];
  for(var i=0; i<limit; i++) {
    request(random, {json: true}, (err, res, body) => {
      if(!err) {
        gifs.push({
          url: body.data.images.original.url,
          title: body.data.title
        });
        callback(undefined, {
          gifs,
          limit
        });
      }
      else {
        callback('Unable to receive random!');
      }
    });
  }
};

var stickerData = (callback) => {
  request(sticker, {json: true}, (err, res, body) => {
    var gifs = [];
    if(!err) {
      for(let i=0; i<limit; i++) {
        gifs.push({
          url: body.data[i].images.original.url,
          title: body.data[i].title
        });
      }
      callback(undefined, {
        gifs,
        limit
      });
    }
    else {
      callback('Unable to receive stickers!');
    }
  });
}

module.exports = {
  results,
  randomData,
  stickerData,
  searchData
}
