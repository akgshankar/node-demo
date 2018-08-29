
export function handleRoute(routes,routeName,response) {
    if (typeof routes[routeName] === 'function') {
       return routes[routeName](response);
    } else {
        console.log(`No request handlers found for ${routeName}`);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

export function route(path) {
    console.log(`Router ${path} start.`)
    handleRoute(path);
    console.log(`Router ${path} end.`)
}
