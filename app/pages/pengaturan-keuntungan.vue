<script setup lang="ts">
useLegacyPage({
  title: "Pengaturan Keuntungan",
  styles: ["/css/style.css", "/css/pages/pengaturan-keuntungan.css"],
  scripts: [
    "/js/easy-number-separator.js",
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/pengaturan-keuntungan.js",
  ],
  sweetAlert: false,
});
</script>

<template>
  <div class="dulank-page dulank-page-pengaturan-keuntungan">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

          <div class="col-lg-9">
            <PagesPengaturanKeuntunganProfitSettingsHeader />
            <hr />
            <p class="fs-6">Pilihan Penambahan Harga Keuntungan :</p>

            <PagesPengaturanKeuntunganPercentageProfitOption />

            <PagesPengaturanKeuntunganProductionProfitOption />

            <PagesPengaturanKeuntunganRangeProfitOption />
            <hr />

            <PagesPengaturanKeuntunganAdditionalCostsForm />

            <hr />
            <PagesPengaturanKeuntunganTaxSettingsForm />
            <small
              class="d-none text-standard text-danger"
              id="info-selected-all"
              ><i class="fa-solid fa-circle-info"></i> please input your
              specification<br
            /></small>
            <PagesPengaturanKeuntunganSaveSettingsAction />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
