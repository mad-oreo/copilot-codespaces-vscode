// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise. When you navigate to http://localhost:3000 in your browser, you should see the comments.html file displayed.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('comments.html', function(err, data) {
    res.write(data);
    res.end();
  });
});

server.listen(3000);