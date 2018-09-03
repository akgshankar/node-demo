const http = require("http");
const url = require("url");
const util = require("util");
const formidable = require("formidable");

import { handleRoute } from './handleRoute';

function start(routes) {
    const server = http.createServer(appRequest);

    server.listen(3000, () => {
        console.log('server is listerting on port 3000');
    })

    function appRequest(req, res) {
        var postData = "";
        var pathname = url.parse(req.url).pathname;
        console.log(`Requested path : ${pathname}`)

        if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
            var form = new formidable.IncomingForm();
            form.parse(req, function (err, fields, files) {
                res.writeHead(200, { 'content-type': 'text/plain' });
                res.write('received upload:\n\n');
                res.end(util.inspect({ fields: fields, files: files }));
            });
            return;
        }
        req.setEncoding("utf-8");
        req.addListener("data", function (postDataChunk) {
            postData += postDataChunk;
            console.log(`Received Post Data Chund ${postDataChunk}`);
        })
        req.addListener("end", function () {
            handleRoute(routes, pathname, res, postData);
        })
    };
}

var server = {
    start: start
}

export { server };