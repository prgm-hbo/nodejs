var express = require('express');
var app = express();
var edge = require('edge');

app.get('/2', function(req, res) {
  var result = myFunction(41);
  
  setTimeout(function() {
    res.send('toto 2');
  }, 10000);
})

app.listen(8080);

var myFunction = edge.func(function() {/*
  async (input) => {
    // return (int)input + 7;
    return "myFunction";
    }
*/});