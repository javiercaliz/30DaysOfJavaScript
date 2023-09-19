var http = require('http');

var host = 'localhost';
var port = 3000;

var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type' : 'application/json'});
    let jsonResponse = {
        status: 200,
        message: 'succesful',
        result: ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'],
        code: 2000
    }
    console.log('json sended');
    response.end(JSON.stringify(jsonResponse));
});


server.listen(port, host, (error) => {
    error ? console.log('Error: ' + error) : console.log('Server funcionando en ' + host + ':' + port);
});