<script setup lang="ts">
useLegacyPage({
  title: "Cart | Dulank",
  styles: [
    "/css/style.css",
    "/css/pages/cart.css",
    "/css/pages/cart-inline.css",
  ],
  scripts: [
    "/js/component.js",
    "/js/save.js",
    "/js/easy-number-separator.js",
    "/js/pages/cart.js",
  ],
  sweetAlert: true,
});

const { cartItems } = useCartItems();
const cartSubtotal = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0),
);
const cartTax = computed(() => Math.round(cartSubtotal.value * 0.11));
const cartTotal = computed(() => cartSubtotal.value + cartTax.value);
</script>

<template>
  <div class="dulank-page dulank-page-cart">
    <div class="container mt-3">
      <p class="text-standard">Home &gt; Cart</p>
    </div>
    <main>
      <div class="container my-5">
        <div class="row save">
          <PagesCartCheckoutSteps />
          <PagesCartItems v-if="cartItems.length" :cart-items="cartItems" />
          <PagesCartEmptyCartState v-else />
          <PagesCartOrderSummary
            :subtotal="cartSubtotal"
            :tax="cartTax"
            :total="cartTotal"
          />
        </div>
      </div>
    </main>
  </div>
</template>
