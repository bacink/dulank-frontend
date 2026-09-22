import type { CartItem } from "#server/types/cart";
import type { Product } from "#server/types/product";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cart = readJSON<CartItem[]>("cart.json");

  if (body.productId) {
    const products = readJSON<Product[]>("products.json");
    const product = products.find(
      (entry) => entry.id === Number(body.productId),
    );
    if (product) {
      cart.push({
        id: `cart-${Date.now()}`,
        productId: product.id,
        name: product.name,
        image: product.image,
        quantity: Math.max(Number(body.quantity) || 1, 1),
        price: Number(body.price) || product.priceFrom,
        spec: String(body.spec || ""),
      });
      writeJSON("cart.json", cart);
    }
  }

  return createResponse(cart);
});
