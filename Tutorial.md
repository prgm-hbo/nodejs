# Tutorials

- http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/
- http://coenraets.org/blog/2012/10/creating-a-rest-api-using-node-js-express-and-mongodb/

## Serveur TCP

``` javascript
var net = require('net');

var server = net.createServer(function (socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});

server.listen(1337, '127.0.0.1');
```

## Serveur HTTP

``` javascript
var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
```
