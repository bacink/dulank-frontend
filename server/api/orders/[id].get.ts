import type { Order } from "#server/types/order";

export default defineEventHandler((event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "Order ID required" });
  }

  const order = readJSON<Order[]>("orders.json").find((item) => item.id === id);
  if (!order) {
    throw createError({ statusCode: 404, statusMessage: "Order not found" });
  }

  return createResponse(order);
});
