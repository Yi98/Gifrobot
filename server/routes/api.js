const express = require('express');
const router = express.Router();
const gif = require('../../gif');

gif.results((err, data) => {
  if(err) {
    console.log(err);
  }
  else {
    console.log(data);
    router.get('/data', (req, res) => {
      res.send(JSON.stringify(data, undefined, 2));
    });
  }
});

module.exports = router;