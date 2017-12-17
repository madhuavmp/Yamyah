var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('file.html', function(err, data) {
    res.writeHead(500, {'Content-Type': 'text/html'});
    res.write(data);
     return res.end();
  });
}).listen(8080);