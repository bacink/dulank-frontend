import type { Category } from '#server/types/category'

interface CategoryResponse {
  data: Category[]
}

export function useCategories() {
  const { data } = useFetch<CategoryResponse>('/api/categories')
  const categories = computed<Category[]>(() => data.value?.data ?? [])
  return { categories }
}
