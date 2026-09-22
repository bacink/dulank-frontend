import type { BlogPost } from '#server/types/blog'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  if (!slug) throw createError({ statusCode: 400, statusMessage: 'Slug required' })

  const post = readJSON<BlogPost[]>('blog.json').find(p => p.slug === slug)
  if (!post) throw createError({ status: 404, statusText: 'Blog post not found' })

  return createResponse(post)
})
