import { start, upload, about } from './routeHandlers';
var routes = {};
routes["/"] = start;
routes["/upload"] = upload;
routes["/about"] = about;

export { routes };
