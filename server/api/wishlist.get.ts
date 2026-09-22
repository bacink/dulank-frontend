import type { WishlistEntry } from "#server/types/wishlist";

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const userId = Number(query.userId) || 1;

  const items = readJSON<WishlistEntry[]>("wishlists.json").filter(
    (item) => item.userId === userId,
  );

  return createResponse(items);
});
