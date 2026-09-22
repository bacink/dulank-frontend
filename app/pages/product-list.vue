<script setup lang="ts">
useLegacyPage({
  title: "Produk",
  styles: ["/css/style-product-list.css"],
  scripts: [
    "/js/pages/product-list-01.js",
    "/js/component.js",
    "/js/profile.js",
  ],
  sweetAlert: false,
});

const { products } = useProductList();
</script>

<template>
  <div class="dulank-page dulank-page-product-list">
    <PagesProductListProductHeader />
    <main>
      <PagesProductListProductCarousel :products="products" />

      <PagesProductListProductGrid :products="products" />
    </main>
  </div>
</template>
