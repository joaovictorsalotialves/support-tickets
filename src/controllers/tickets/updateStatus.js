export function updateStatus({ request, response, database }) {
  const { id } = request.params

  database.update('tickets', id, {
    status: 'closed',
    updated_at: new Date(),
  })

  return response.writeHead(204).end()
}