export function start(response) {
    console.log("Request handler 'start' was called.");
    function sleep(miliseconds) {
        let startTime = new Date().getTime();
        while (new Date().getTime() < startTime + miliseconds) {
        }
    } 
    //sleep(10000);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Start");
    response.end();
}

export function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

export function about(response) {
    console.log("Request handler 'about' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello About");
    response.end();
}
