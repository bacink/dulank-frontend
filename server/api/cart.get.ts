import type { CartItem } from "#server/types/cart";

export default defineEventHandler(() => {
  return createResponse(readJSON<CartItem[]>("cart.json"));
});
