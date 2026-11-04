
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`
        <h1>Hello from Jenkins CI/CD!</h1>
        <p>Docker deployment successful.</p>
    `);
});

server.listen(3000, '0.0.0.0', () => {
    console.log('Application running on port 3000');
});

module.exports = server;
