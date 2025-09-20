const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('image5.jpg', (err, data) => { 
    if (err) {
      res.writeHead(404);
      res.end("File not found");
    } else {
      res.writeHead(200, { "Content-Type": "image/jpg" }); 
      res.end(data);
    }
  });
}).listen(80, () => {
  console.log("Server running on port 80");
});

