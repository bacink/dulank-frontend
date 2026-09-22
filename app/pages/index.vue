<script setup lang="ts">
useLegacyPage({
  title: "Percetakan Dulank - Online Printing Shop",
  styles: ["/css/style.css", "/css/pages/index-inline.css"],
  scripts: ["/js/component.js", "/js/pages/index.js"],
  sweetAlert: false,
});
</script>

<template>
  <div class="dulank-page dulank-page-index">
    <main>
      <div class="mb-5">
        <PagesIndexHeroCarousel />
        <section class="container my-5">
          <div class="row">
            <PagesIndexProductHighlights />
            <PagesIndexAboutSection />
          </div>
          <PagesIndexFeaturedServices />
          <PagesIndexInformationColumns />
        </section>
      </div>
    </main>

    <PagesIndexOfferModal />
    <PagesIndexProductToast />
  </div>
</template>
