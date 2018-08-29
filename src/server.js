const http = require("http");
const url = require("url");
import { handleRoute } from './handleRoute';

function start(routes) {
    const server = http.createServer(appRequest);

    server.listen(3000, () => {
        console.log('server is listerting on port 3000');
    })

    function appRequest(req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log(`Requested path : ${pathname}`)
        handleRoute(routes, pathname);
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("Hello from Node App");
        res.end();
    };
}

var server = {
    start: start
}

export { server };