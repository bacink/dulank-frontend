<script setup lang="ts">
useLegacyPage({
  title: "Hitung Plano",
  styles: [
    "/css/style.css",
    "/css/pages/hitung-plano.css",
    "/css/pages/hitung-plano-inline.css",
  ],
  scripts: [
    "/js/pages/hitung-plano.js",
    "/js/easy-number-separator.js",
    "/js/component.js",
    "/js/pages/hitung-plano-events.js",
  ],
  sweetAlert: false,
});
</script>

<template>
  <div class="dulank-page dulank-page-hitung-plano">
    <div class="container py-5">
      <h2 id="inline-style-hitung-plano-001">Plano</h2>
      <PagesHitungPlanoSheetDimensionsForm />
      <div class="row p-2 mt-3">
        <p>Layout Potong Kertas</p>
        <PagesHitungPlanoSheetLayoutPreview />
        <PagesHitungPlanoPrintLayoutForm />
      </div>
    </div>
  </div>
</template>
