import { start, upload, about } from './routeHandlers';
var routes = {};
routes["/"] = start;
routes["/start"] = start;
routes["/upload"] = upload;
routes["/about"] = about;

export { routes };
