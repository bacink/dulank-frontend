<script setup lang="ts">
useLegacyPage({
  title: "Kalender 2027 | Dulank",
  styles: [
    "/css/style.css",
    "/css/pages/kalender.css",
    "/css/pages/kalender-inline.css",
  ],
  scripts: [
    "/js/component.js",
    "/js/easy-number-separator.js",
    "/js/pages/kalender.js",
    "/js/product.js",
    "/js/pages/kalender-events.js",
  ],
  sweetAlert: false,
});
</script>

<template>
  <div class="dulank-page dulank-page-kalender">
    <div class="container mt-3">
      <p class="text-standard">Home > Products > Kalender 2027</p>
    </div>
    <main>
      <div class="container mt-3">
        <div class="section-card">
          <div class="row flex-lg-row">
            <PagesKalenderProductOverview />

            <PagesKalenderSpecificationForm />
          </div>

          <PagesKalenderPriceList />
        </div>

        <p class="fs-5 mb-4">Design Kalender 2027</p>
        <PagesKalenderDesignGallery />

        <PagesKalenderPrintingGuide />

        <p class="text-center my-3 fs-5">Buy Together</p>
        <PagesKalenderRelatedProducts />
      </div>
    </main>

    <PagesKalenderQuantityModal />
  </div>
</template>
