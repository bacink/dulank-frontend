import type { CartItem } from "#server/types/cart";

interface CartResponse {
  success: boolean;
  data: CartItem[];
}

export function useCartItems() {
  const { data } = useFetch<CartResponse>("/api/cart", { key: "cart" });
  const cartItems = computed<CartItem[]>(() => data.value?.data ?? []);
  return { cartItems };
}
