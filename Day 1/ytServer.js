var http = require('http');
var fs = require('fs');

var host = 'localhost';
var port = 3000;

var server = http.createServer((request, response) => {
    // Obtén la URL del servidor
    var serverUrl = [`https://www.youtube.com/embed/qT12aa_xEUs?si=fuUzF_vUHmOv0Svo&amp;start=9`,
        `https://www.youtube.com/embed/EoFXks7BK84?si=t6j1sMQAFMw5jVOx&amp;start=9`];

    response.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile('index.html', (err, data) => {
        if (err) {
            throw err;
        }
        // Reemplaza la cadena '{{SERVER_URL}}' en el HTML con la URL del servidor
        data = data.toString().replace('{{SERVER_URL}}', serverUrl[Math.round(Math.random( ) * serverUrl.length)]);

        console.log("Operation Success");
        response.end(data);
    });
});

server.listen(port, host, (error) => {
    error ? console.log('Error: ' + error) : console.log('Server funcionando en ' + host + ':' + port);
});
