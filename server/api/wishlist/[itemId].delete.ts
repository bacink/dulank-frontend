export default defineEventHandler(async (event) => {
  const itemId = getRouterParam(event, 'itemId')
  if (!itemId) throw createError({ statusCode: 400, statusMessage: 'Item ID required' })

  return createResponse({ id: itemId, removed: true })
})
