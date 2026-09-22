import type { CartItem } from "#server/types/cart";

export default defineEventHandler((event) => {
  const itemId = getRouterParam(event, "itemId");
  if (!itemId)
    throw createError({ statusCode: 400, statusMessage: "Item ID required" });

  const cart = readJSON<CartItem[]>("cart.json");
  const nextCart = cart.filter((entry) => entry.id !== itemId);
  if (nextCart.length === cart.length) {
    throw createError({ status: 404, statusText: "Cart item not found" });
  }

  writeJSON("cart.json", nextCart);
  return createResponse({ id: itemId, removed: true });
});
