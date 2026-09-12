export default defineEventHandler(async (event) => {
  const itemId = getRouterParam(event, 'itemId')
  const body = await readBody(event)

  if (!itemId) throw createError({ status: 400, statusText: 'Item ID required' })

  return createResponse({ id: itemId, updated: true, quantity: body.quantity })
})
