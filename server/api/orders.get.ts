import type { Order } from "#server/types/order";

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const userId = Number(query.userId) || 1;

  const orders = readJSON<Order[]>("orders.json").filter(
    (order) => order.userId === userId,
  );

  return createResponse(orders);
});
