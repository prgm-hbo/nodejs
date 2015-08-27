var express = require('express'),
  app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
})

app.get('/test', function(req, res) {
  res.send('Hello test');
})

var server = app.listen(8080);
console.log('Express app listening at http://%s:%s', server.address().address, server.address().port);
