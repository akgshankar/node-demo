const querystring = require("querystring");
const fs = require("fs");
const formidable = require("formidable");

export function start(response) {
    console.log("Request handler 'start' was called.");
    function sleep(miliseconds) {
        let startTime = new Date().getTime();
        while (new Date().getTime() < startTime + miliseconds) {
        }
    }
    //sleep(10000);
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello Start");
    response.end();
}

export function upload(response, request) {
    console.log("Request handler 'upload' was called.");
    var form = new formidable.IncomingForm();
    console.log("about to parse");

    form.parse(request, function (error, fields, files) {
        console.log("parsing done");
        /* Possible error on Windows systems: tried to rename to an already existing file */
        fs.rename(files.upload.path, __dirname + "/tmp/test.png", function (error) {
            if (error) {
                fs.unlink(__dirname + "/tmp/test.png");
                fs.rename(files.upload.path, __dirname + "/tmp/test.png");
            }
        });

        response.writeHead(200, { "Content-Type": "text/plain" });
        //response.write(`You have send : ${querystring.parse(postData).text}`);
        response.write("received image:<br/>");
        response.write("<img src='/showimage' />");
        response.end();
    })


}

export function about(response) {
    console.log("Request handler 'about' was called.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello About");
    response.end();
}

export function messageForm(response) {
    console.log("Request handler 'message' was called.");
    var body = `<html>
    <head>
    <meta http-equiv="Content-Type" content="text/html" charset=UTF-8" />
    </head>
    <body>
    <form action="/addmessage" method="post">
    <div>
        <textarea name="text" rows="20" cols="60"></textarea>
    </div>
    <input type="submit" value="Submit text" />
    </form>
    </body>
    </html>`;
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(body);
    response.end();
}

export function addMessage(response) {
    console.log("Request handler 'about' was called.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello About");
    response.end();
}

export function uploadForm(response) {
    console.log("Request handler 'upload form' was called.");
    var body = `<html>
    <head>
    <meta http-equiv="Content-Type" content="text/html" charset=UTF-8" />
    </head>
    <body>
    <form action="/upload" enctype="multipart/form-data" method="post">
    <div>
        <input type="text" name="title">
        <input type="file" name="upload" multiple="multiple">
    </div>
    <input type="submit" value="Upload" />
    </form>
    </body>
    </html>`;
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(body);
    response.end();
}

export function showImage(response, postData) {
    console.log("Request handler 'show' was called.");
    fs.readFile(__dirname + "/tmp/test.png", "binary", function (error, file) {
        if (error) {
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, { "Content-Type": "image/png" });
            response.write(file, "binary");
            response.end();
        }
    });
}