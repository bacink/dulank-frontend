import type { Product } from '#server/types/product'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  let products = readJSON<Product[]>('products.json')

  if (query.category) {
    products = products.filter(p => p.categoryId === Number(query.category) || p.slug === String(query.category))
  }
  if (query.search) {
    const term = String(query.search).toLowerCase()
    products = products.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term) ||
      p.tags.some(t => t.toLowerCase().includes(term))
    )
  }

  const limit = Math.min(Number(query.limit) || 20, 100)
  const page = Math.max(Number(query.page) || 1, 1)
  const total = products.length
  const start = (page - 1) * limit
  const paged = products.slice(start, start + limit)

  return createResponse(paged, { page, limit, total })
})
