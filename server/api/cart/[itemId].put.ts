import type { CartItem } from "#server/types/cart";

export default defineEventHandler(async (event) => {
  const itemId = getRouterParam(event, "itemId");
  const body = await readBody(event);

  if (!itemId)
    throw createError({ statusCode: 400, statusMessage: "Item ID required" });

  const cart = readJSON<CartItem[]>("cart.json");
  const item = cart.find((entry) => entry.id === itemId);
  if (!item)
    throw createError({ status: 404, statusText: "Cart item not found" });

  item.quantity = Math.max(Number(body.quantity) || 1, 1);
  writeJSON("cart.json", cart);
  return createResponse(item);
});
