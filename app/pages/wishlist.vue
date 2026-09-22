<script setup lang="ts">
useLegacyPage({
  title: "Wishlist | Dulank",
  styles: ["/css/style.css", "/css/save.css"],
  scripts: ["/js/component.js", "/js/save.js"],
  sweetAlert: true,
});

const { wishlistItems } = useWishlistItems();
</script>

<template>
  <div class="dulank-page dulank-page-wishlist">
    <div class="container mt-3">
      <p class="text-standard">Home > Wishlist</p>
    </div>
    <main>
      <div class="container my-5">
        <div class="row save justify-content-md-center">
          <div class="col-md-8">
            <h1 class="fs-5">Your Wishlist</h1>

            <PagesWishlistItems
              v-if="wishlistItems.length"
              :wishlist-items="wishlistItems"
            />

            <PagesWishlistEmptyWishlistState v-else />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
