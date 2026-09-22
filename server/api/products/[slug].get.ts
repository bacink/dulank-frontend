import type { Product } from "#server/types/product";

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, "slug");
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: "Slug required" });
  }

  const product = readJSON<Product[]>("products.json").find(
    (item) => item.slug === slug,
  );
  if (!product) {
    throw createError({ statusCode: 404, statusMessage: "Product not found" });
  }

  return createResponse(product);
});
