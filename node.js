var http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    console.log(req.url);
    res.write(req.url);
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
  
