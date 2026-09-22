export interface CatalogResponse<T> {
  success: boolean;
  data: T[];
}

export function useCatalog<T>(kind: string) {
  const { data, pending, error } = useFetch<CatalogResponse<T>>(
    `/api/catalog/${kind}`,
    {
      key: `catalog-${kind}`,
    },
  );
  const items = computed<T[]>(() => data.value?.data ?? []);
  return { items, pending, error };
}
