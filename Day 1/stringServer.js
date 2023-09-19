var http = require('http');

var host = 'localhost';
var port = 3000;

var server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World!");
  response.end();
});

server.listen(port, host, (error) => {
    error ? console.log('Error: ' + error) : console.log('Server funcionando en ' + host + ':' + port);
});