// https://www.w3schools.com/nodejs/nodejs_get_started.asp
var http = require('http');
var DateTime = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + DateTime.myDateTime());
    res.end();
}).listen(8080);
