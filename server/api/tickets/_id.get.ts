import type { SupportTicket } from '#server/types/ticket'

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ status: 400, statusText: 'Ticket ID required' })

  const ticket = readJSON<SupportTicket[]>('tickets.json').find(t => t.id === id)
  if (!ticket) throw createError({ status: 404, statusText: 'Ticket not found' })

  return createResponse(ticket)
})
