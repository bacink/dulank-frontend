import { randomUUID } from 'node:crypto'
import type { SupportTicket } from '#server/types/ticket'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const tickets = readJSON<SupportTicket[]>('tickets.json')

  const id = `TK-${String(tickets.length + 1).padStart(3, '0')}`
  const ticket: SupportTicket = {
    id,
    userId: body.userId || 1,
    subject: body.subject || '',
    message: body.message || '',
    priority: body.priority || 'medium',
    status: 'open',
    date: new Date().toISOString().split('T')[0],
    replies: []
  }

  tickets.push(ticket)
  writeJSON('tickets.json', tickets)

  return createResponse(ticket)
})
