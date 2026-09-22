import type { Quotation } from '#server/types/quotation'

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, statusMessage: 'Quotation ID required' })

  const quotation = readJSON<Quotation[]>('quotations.json').find(q => q.id === id)
  if (!quotation) throw createError({ status: 404, statusText: 'Quotation not found' })

  return createResponse(quotation)
})
