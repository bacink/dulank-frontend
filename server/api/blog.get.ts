import type { BlogPost } from '#server/types/blog'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  let posts = readJSON<BlogPost[]>('blog.json')

  const limit = Math.min(Number(query.limit) || 10, 100)
  const page = Math.max(Number(query.page) || 1, 1)
  const total = posts.length
  const start = (page - 1) * limit
  const paged = posts.slice(start, start + limit)

  return createResponse(paged, { page, limit, total })
})
