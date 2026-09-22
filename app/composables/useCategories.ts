import type { Category } from "#server/types/category";

interface CategoryResponse {
  success: boolean;
  data: Category[];
}

export function useCategories() {
  const { data, pending, error } = useFetch<CategoryResponse>("/api/categories", {
    key: "categories",
  });
  const categories = computed<Category[]>(() => data.value?.data ?? []);
  return { categories, pending, error };
}
