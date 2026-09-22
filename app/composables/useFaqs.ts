import type { FAQ } from "#server/types/faq";

interface FaqResponse {
  success: boolean;
  data: FAQ[];
}

export function useFaqs() {
  const { data } = useFetch<FaqResponse>("/api/faqs", { key: "faqs" });
  const faqs = computed<FAQ[]>(() => data.value?.data ?? []);
  return { faqs };
}
