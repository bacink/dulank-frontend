import type { Product } from "#server/types/product";

export default defineEventHandler((event) => {
  const query = getQuery(event);
  let products = readJSON<Product[]>("products.json");

  if (query.category) {
    products = products.filter(
      (product) =>
        product.categoryId === Number(query.category) ||
        product.slug === String(query.category),
    );
  }

  if (query.search) {
    const term = String(query.search).toLowerCase();
    products = products.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.tags.some((tag) => tag.toLowerCase().includes(term)),
    );
  }

  const limit = Math.min(Number(query.limit) || 20, 100);
  const page = Math.max(Number(query.page) || 1, 1);
  const total = products.length;
  const start = (page - 1) * limit;

  return createResponse(products.slice(start, start + limit), {
    page,
    limit,
    total,
  });
});
