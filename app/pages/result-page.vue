<script setup lang="ts">
useLegacyPage({
  title: "Result Page",
  styles: ["/css/style.css", "/css/pages/result-page-inline.css"],
  scripts: ["/js/component.js", "/js/profile.js"],
  sweetAlert: false,
});
</script>

<template>
  <div class="dulank-page dulank-page-result-page">
    <main>
      <div class="container my-5">
        <h5 class="fw-semibold mb-3">pencarian “brosur“ untuk product</h5>
        <PagesResultPageProductResults />

        <h5 class="fw-semibold mt-5 mb-3">pencarian “brosur“ untuk blog</h5>
        <PagesResultPagePrintingShopResults />
      </div>
    </main>
  </div>
</template>
