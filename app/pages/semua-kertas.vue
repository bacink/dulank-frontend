<script setup lang="ts">
useLegacyPage({
  title: "Jenis Kertas",
  styles: ["/css/style.css", "/css/pages/semua-kertas-inline.css"],
  scripts: [
    "/js/easy-number-separator.js",
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/pages/semua-kertas.js",
    "/js/pages/semua-kertas-events.js",
  ],
  sweetAlert: true,
});
</script>

<template>
  <div class="dulank-page dulank-page-semua-kertas">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

          <div class="col-lg-9">
            <h4 class="fs-5 mb-3">Semua Kertas</h4>
            <PagesSemuaKertasPaperManagementTabs />
            <div class="tab-content" id="myTabContent">
              <PagesSemuaKertasPaperPricesPanel />

              <PagesSemuaKertasPaperGroupsPanel />

              <PagesSemuaKertasPaperSizesPanel />

              <PagesSemuaKertasPaperTypesPanel />
            </div>
          </div>
        </div>
      </div>
    </main>

    <PagesSemuaKertasAddPaperGroupModal />

    <PagesSemuaKertasAddPaperSizeModal />

    <PagesSemuaKertasAddPaperItemModal />

    <PagesSemuaKertasAddPaperPriceModal />
  </div>
</template>
