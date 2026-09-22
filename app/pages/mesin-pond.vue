<script setup lang="ts">
useLegacyPage({
  title: "Mesin Pond",
  styles: ["/css/style.css", "/css/pages/mesin-pond-inline.css"],
  scripts: [
    "/js/easy-number-separator.js",
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/pages/mesin-pond.js",
  ],
  sweetAlert: true,
});
</script>

<template>
  <div class="dulank-page dulank-page-mesin-pond">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

          <div class="col-lg-9">
            <h4 class="fs-5 mb-3">Mesin Pond</h4>
            <PagesMesinPondDieCuttingTabs />
            <div class="tab-content" id="myTabContent">
              <PagesMesinPondDieCuttingProfiles />

              <PagesMesinPondDieCuttingBladePrices />
            </div>
          </div>
        </div>
      </div>
    </main>

    <PagesMesinPondAddDieCuttingMachineModal />

    <PagesMesinPondUpdateBladeModal />
  </div>
</template>
