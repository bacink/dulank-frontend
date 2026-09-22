<script setup lang="ts">
useLegacyPage({
  title: "Berat Kertas",
  styles: ["/css/style.css", "/css/pages/kalkulator-berat-kertas.css"],
  scripts: [
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/easy-number-separator.js",
    "/js/pages/kalkulator-berat-kertas.js",
    "/js/pages/kalkulator-berat-kertas-events.js",
  ],
  sweetAlert: false,
});
</script>

<template>
  <div class="dulank-page dulank-page-kalkulator-berat-kertas">
    <main>
      <div class="container text-standard">
        <div class="calculator-container" id="calculator">
          <div><LayoutCalculatorHeader /></div>
          <PagesKalkulatorBeratKertasCalculatorIntroduction />
          <PagesKalkulatorBeratKertasCalculatorTitle />
          <PagesKalkulatorBeratKertasUnitSelector />
          <PagesKalkulatorBeratKertasPaperSizeFields />
          <PagesKalkulatorBeratKertasPaperWeightField />
          <PagesKalkulatorBeratKertasQuantityFields />
          <PagesKalkulatorBeratKertasCalculationResults />
        </div>
      </div>
    </main>

    <PagesKalkulatorBeratKertasAddPaperModal />
  </div>
</template>
