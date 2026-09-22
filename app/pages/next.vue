<script setup lang="ts">
useLegacyPage({
  title: "Cart | Dulank",
  styles: [
    "/css/style.css",
    "/css/pages/next.css",
    "/css/pages/next-inline.css",
  ],
  scripts: [
    "/js/component.js",
    "/js/easy-number-separator.js",
    "/js/pages/next.js",
    "/js/pages/next-events.js",
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
  <div class="dulank-page dulank-page-next">
    <div class="container mt-3">
      <p class="text-standard">Home > Cart > Next</p>
    </div>
    <main>
      <div class="container my-5">
        <div class="row save">
          <PagesNextCheckoutSteps />
          <PagesNextCartItems v-if="cartItems.length" :cart-items="cartItems" />

          <PagesNextOrderSummary
            v-if="cartItems.length"
            :subtotal="cartSubtotal"
            :tax="cartTax"
            :total="cartTotal"
          />
        </div>

        <PagesNextEmptyCartState v-if="!cartItems.length" />
      </div>
    </main>
  </div>
</template>
