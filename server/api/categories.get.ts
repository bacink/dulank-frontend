import type { Category } from '#server/types/category'

export default defineEventHandler(() => {
  const categories = readJSON<Category[]>('categories.json')
  return createResponse(categories)
})
