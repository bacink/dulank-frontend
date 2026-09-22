import type { Product } from '#server/types/product'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  if (!slug) throw createError({ statusCode: 400, statusMessage: 'Slug required' })

  const product = readJSON<Product[]>('products.json').find(p => p.slug === slug)
  if (!product) throw createError({ status: 404, statusText: 'Product not found' })

  return createResponse(product)
})
