var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function(request, response){
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === "GET" && request.url === '/hello'){
        fs.readFile('./hello.html', 'utf-8', function(err,data){
            if(err) throw err;
            console.log("zapytanie");
            response.write(data);
            response.end();
        })   
    } else {
        fs.readFile('./cat.jpg', function(err,data){
            response.setHeader("Content-Type", "image/gif");
            response.statusCode = 404;
            response.write(data);
            response.end();
        })
    }
})

server.listen(9000);