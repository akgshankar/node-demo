
export function handleRoute(routes,routeName) {
    if (typeof routes[routeName] === 'function') {
       return routes[routeName]();
    } else {
        console.log(`No request handlers found for ${routeName}`);
        return "404 Not found;"
    }
}

export function route(path) {
    console.log(`Router ${path} start.`)
    handleRoute(path);
    console.log(`Router ${path} end.`)
}
