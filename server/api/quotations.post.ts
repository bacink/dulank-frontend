import { randomUUID } from 'node:crypto'
import type { Quotation } from '#server/types/quotation'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const quotations = readJSON<Quotation[]>('quotations.json')

  const id = `QT-${String(quotations.length + 1).padStart(3, '0')}`
  const total = body.items?.reduce((sum: number, item: { quantity: number; unitPrice: number }) => sum + item.quantity * item.unitPrice, 0) || 0

  const quotation: Quotation = {
    id,
    userId: body.userId || 1,
    date: new Date().toISOString().split('T')[0],
    status: 'draft',
    items: body.items || [],
    customerInfo: body.customerInfo || {},
    total
  }

  quotations.push(quotation)
  writeJSON('quotations.json', quotations)

  return createResponse(quotation)
})
