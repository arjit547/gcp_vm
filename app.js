const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('MI/CSK!\n');
});

server.listen(3000, () => {
  console.log('Server running at http://0.0.0.0:3000/');
});
