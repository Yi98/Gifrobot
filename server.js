const express = require('express');
const path = require('path');

const api = require('./server/routes/api');
var port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'dist/gifbot')));
app.use('/api', api);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/dist/gifbot/index.html'));
// })

var section = app.get('/:section', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/gifbot/index.html'));
  // return req.params.section;
});

app.listen((process.env.PORT || port), () => {
  console.log('Server running on ' + port);
});

// module.exports = section;