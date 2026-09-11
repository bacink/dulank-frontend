import { randomUUID } from 'node:crypto'
import type { Order } from '#server/types/order'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const orders = readJSON<Order[]>('orders.json')

  const orderNumber = `${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}${randomUUID().slice(0, 8).toUpperCase()}`
  const total = body.items?.reduce((sum: number, item: { quantity: number; price: number }) => sum + item.quantity * item.price, 0) || 0

  const order: Order = {
    id: orderNumber,
    userId: body.userId || 1,
    status: 'pending',
    date: new Date().toISOString().split('T')[0],
    items: body.items || [],
    shippingAddress: body.shippingAddress || {},
    total
  }

  orders.push(order)
  writeJSON('orders.json', orders)

  return createResponse(order)
})
