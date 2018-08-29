
export function handleRoute(routes,routeName) {
    if (typeof routes[routeName] === 'function') {
        routes[routeName]();
    } else {
        console.log(`No request handlers found for ${routeName}`);
    }
}

export function route(path) {
    console.log(`Router ${path} start.`)
    handleRoute(path);
    console.log(`Router ${path} end.`)
}
