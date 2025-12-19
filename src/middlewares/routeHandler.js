import { routes } from "../routes/index.js";

export function routerHandler(request, response) {
  const route = routes.find((route) => {
    return request.method === route.method && request.url === route.path
  })

  if (route) {
    return route.controller(request, response)
  }

  return response.writeHead(404).end()
}
