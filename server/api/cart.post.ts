export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const cart: Array<{ id: string; productId: number; name: string; image: string; quantity: number; price: number; spec: string }> = []

  if (body.productId) {
    const products = readJSON<Array<{ id: number; name: string; image: string }>>('products.json')
    const product = products.find(p => p.id === body.productId)
    if (product) {
      cart.push({
        id: `cart-${Date.now()}`,
        productId: product.id,
        name: product.name,
        image: product.image,
        quantity: body.quantity || 1,
        price: body.price || 0,
        spec: body.spec || ''
      })
    }
  }

  return createResponse(cart)
})
