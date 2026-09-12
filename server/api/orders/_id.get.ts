import type { Order } from '#server/types/order'

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ status: 400, statusText: 'Order ID required' })

  const order = readJSON<Order[]>('orders.json').find(o => o.id === id)
  if (!order) throw createError({ status: 404, statusText: 'Order not found' })

  return createResponse(order)
})
