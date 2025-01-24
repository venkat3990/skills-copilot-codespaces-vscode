// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.
// Your server should listen on port 3000 and serve the comments.html file from the previous exercise. Use the fs module to read the file and send the contents to the client.
// Your server should listen on port 3000 and serve the comments.html file from the previous exercise. Use the fs module to read the file and send the contents to the client.
// The comments.html file should be in the same directory as comments.js.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./comments.html', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('404 Not Found');
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html',
            });
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
