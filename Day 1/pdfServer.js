var http = require('http');
var fs = require('fs');

//var host = 'localhost';
var host = '10.10.3.118';
var port = 3000;

var server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "application/pdf"});
  fs.readFile('index.pdf', (error, data)=>{
    if (error) {
        response.end({'status':'error',msg:error})
    } else {
        response.write(data);
        response.end();
    };
  })
  
});

server.listen(port, host, (error) => {
    error ? console.log('Error: ' + error) : console.log('Server funcionando en ' + host + ':' + port);
});