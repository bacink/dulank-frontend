<script setup lang="ts">
useLegacyPage({
  title: "Hitung Potong Kertas",
  styles: [
    "/css/style.css",
    "/css/pages/kalkulator-potong-kertas.css",
    "/css/pages/kalkulator-potong-kertas-inline.css",
  ],
  scripts: [
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/easy-number-separator.js",
    "/js/generate-plano.js",
    "/js/pages/kalkulator-potong-kertas.js",
    "/js/pages/kalkulator-potong-kertas-events.js",
  ],
  sweetAlert: false,
});
</script>

<template>
  <div class="dulank-page dulank-page-kalkulator-potong-kertas">
    <main>
      <div class="container">
        <div class="calculator-container text-standard">
          <div><LayoutCalculatorHeader /></div>
          <div class="row mt-5">
            <PagesKalkulatorPotongKertasCuttingSpecificationForm />
            <PagesKalkulatorPotongKertasCuttingResults />
          </div>
        </div>
      </div>
    </main>

    <PagesKalkulatorPotongKertasPatternGeneratorModal />
  </div>
</template>
