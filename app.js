
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end("<h1>Jenkins Automatic CI/CD Trigger Successful!</h1>");
});

server.listen(3000, '0.0.0.0', () => {
    console.log('Application running on port 3000');
});

module.exports = server;
