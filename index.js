const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('<h1>Welcome to GitHubAction pipeline</h1>');
    }
});

const port = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server Running on port ${PORT}`));