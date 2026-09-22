import type { SaleBanner } from "#server/types/sale-banner";

interface SaleBannerResponse {
  success: boolean;
  data: SaleBanner[];
}

export function useSaleBanners() {
  const { data } = useFetch<SaleBannerResponse>("/api/sale-banners", {
    key: "sale-banners",
  });
  const saleBanners = computed<SaleBanner[]>(() => data.value?.data ?? []);
  return { saleBanners };
}
