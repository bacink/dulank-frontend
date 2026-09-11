import type { FAQ } from '#server/types/faq'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  let faqs = readJSON<FAQ[]>('faqs.json')

  if (query.category) {
    faqs = faqs.filter(f => f.category === String(query.category))
  }

  return createResponse(faqs)
})
