const http = require('http');
const fs = require('fs');

const host = '10.10.3.118';
const port = 3000;

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'video/mp4'});
    fs.exists('video.mp4', (exists) => {
        if (exists) {
            const rstream = fs.createReadStream('video.mp4');
            rstream.pipe(response);
            console.log('Solicitud: IP ' + request.socket.remoteAddress);
        } else {
            response.statusCode = 404;
            response.end('404: Archivo no encontrado');
        }
    });
});

server.listen(port, host, (error) => {
    if (error) {
        console.error('Error: ' + error);
    } else {
        console.log('Servidor funcionando en ' + host + ':' + port);
    }
});
