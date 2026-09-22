<script setup lang="ts">
useLegacyPage({
  title: "Cetak Full Color | Dulank",
  styles: [
    "/css/style.css",
    "/css/pages/cetak-full-color.css",
    "/css/pages/cetak-full-color-inline.css",
  ],
  scripts: [
    "/js/component.js",
    "/js/easy-number-separator.js",
    "/js/product.js",
    "/js/pages/cetak-full-color-events.js",
  ],
  sweetAlert: false,
});
</script>

<template>
  <div class="dulank-page dulank-page-cetak-full-color">
    <div class="container mt-3">
      <p class="text-standard">Home > Products > Brosur</p>
    </div>
    <main>
      <div class="container mt-3">
        <div class="section-card">
          <div class="row flex-lg-row">
            <PagesCetakFullColorProductOverview />

            <PagesCetakFullColorSpecificationForm />
          </div>

          <PagesCetakFullColorPriceList />
        </div>

        <p class="fs-5 mb-4">Design Brosur Full Color</p>
        <PagesCetakFullColorDesignGallery />

        <PagesCetakFullColorPrintingGuide />

        <p class="text-center my-3 fs-5">Buy Together</p>
        <PagesCetakFullColorRelatedProducts />
      </div>
    </main>

    <PagesCetakFullColorQuantityModal />
  </div>
</template>
