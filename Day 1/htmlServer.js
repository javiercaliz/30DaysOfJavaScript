var http = require('http');
var fs = require('fs');

var host = 'localhost';
var port = 3000;

var server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile('index.html', (err, data)=>{
        if(err){
            throw err;
        }
        console.log("Operation Success");
        response.end(data)
    });
});

server.listen(port, host, (error) => {
    error ? console.log('Error: ' + error) : console.log('Server funcionando en ' + host + ':' + port);
});