var express = require('express'),
  app = express();

app.get('/1', function(req, res) {
  res.send('app 1');
})

app.get('/2', function(req, res) {
  res.send('app 2');
})

app.listen(8080);
