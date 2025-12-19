import http from "node:http"

import { jsonHandler } from "./middlewares/jsonHandler.js"  
import { routerHandler } from "./middlewares/routeHandler.js"

async function listener(request, response) {
  await jsonHandler(request, response)
  routerHandler(request, response)
}

http.createServer(listener).listen(3333)
