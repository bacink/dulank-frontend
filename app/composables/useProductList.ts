import type { Product } from "#server/types/product";

interface ProductResponse {
  success: boolean;
  data: Product[];
}

export function useProductList() {
  const route = useRoute();
  const category = computed(() => String(route.query.category ?? ""));
  const endpoint = computed(
    () =>
      `/api/products?page=1&limit=20${category.value ? `&category=${encodeURIComponent(category.value)}` : ""}`,
  );
  const { data } = useFetch<ProductResponse>(endpoint, { key: "product-list" });
  const products = computed<Product[]>(() => data.value?.data ?? []);
  return { products };
}
