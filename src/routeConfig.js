import { start, upload, about, messageForm, uploadForm ,showImage, addMessage } from './routeHandlers';
var routes = {};
routes["/"] = start;
routes["/start"] = start;
routes["/upload"] = upload;
routes["/uploadForm"] = uploadForm;
routes["/showimage"] = showImage;
routes["/about"] = about;
routes["/message"] = messageForm;
routes["/addmessage"] = addMessage;

export { routes };
