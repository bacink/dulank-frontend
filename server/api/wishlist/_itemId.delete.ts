export default defineEventHandler(async (event) => {
  const itemId = getRouterParam(event, 'itemId')
  if (!itemId) throw createError({ status: 400, statusText: 'Item ID required' })

  return createResponse({ id: itemId, removed: true })
})
