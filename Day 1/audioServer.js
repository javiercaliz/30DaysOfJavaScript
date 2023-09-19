var http = require('http');
var fs = require('fs');

//var host = 'localhost';
var host = '10.10.3.118';
var port = 3000;

var server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'audio/mp3'});
    fs.exists('audio.mp3', function(exists){
        if (exists) {
            var rstream = fs.createReadStream('audio.mp3');
            rstream.pipe(response);
            console.log('Solicitud desde IP: ' + request.socket.remoteAddress);
        } else {
            response.end("404: Archivo no encontrado");
        }
    })
    
  });


server.listen(port, host, (error) => {
    error ? console.log('Error: ' + error) : console.log('Server funcionando en ' + host + ':' + port);
});