export interface QuotationItem {
  productId: number;
  name: string;
  category?: string;
  quantity: number;
  spec: string;
  artwork?: string;
  printResult?: string;
  note?: string;
  unitPrice: number;
  total: number;
}

export interface Quotation {
  id: string;
  userId: number;
  date: string;
  validUntil?: string;
  status: string;
  items: QuotationItem[];
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
  subtotal?: number;
  tax?: number;
  shippingCost?: number;
  total: number;
}

interface QuotationResponse<T> {
  success: boolean;
  data: T;
}

export function useQuotations(userId = 1) {
  const { data, pending, error } = useFetch<QuotationResponse<Quotation[]>>(
    `/api/quotations?userId=${userId}`,
    { key: `quotations-${userId}` },
  );

  const quotations = computed(() => data.value?.data ?? []);

  return { quotations, pending, error };
}

export function getQuotationTotals(quotation?: Quotation | null) {
  const subtotal =
    quotation?.subtotal ??
    quotation?.items.reduce((sum, item) => sum + item.total, 0) ??
    0;
  const tax = quotation?.tax ?? Math.round(subtotal * 0.11);
  const shippingCost = quotation?.shippingCost ?? 0;
  const total = quotation?.total ?? subtotal + tax + shippingCost;

  return { subtotal, tax, shippingCost, total };
}
