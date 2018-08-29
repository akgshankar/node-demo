const http = require("http");

function start() {
    const server = http.createServer(appRequest);

    server.listen(3000, () => {
        console.log('server is listerting on port 3000');
    })

    function appRequest(req, res) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("Hello from Node App");
        res.end();
    };
}

var server = {
    start: start
}

export { server };