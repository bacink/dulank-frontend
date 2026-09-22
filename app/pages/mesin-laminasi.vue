<script setup lang="ts">
useLegacyPage({
  title: "Laminasi",
  styles: ["/css/style.css", "/css/pages/mesin-laminasi-inline.css"],
  scripts: [
    "/js/easy-number-separator.js",
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/pages/mesin-laminasi.js",
    "/js/pages/mesin-laminasi-events.js",
  ],
  sweetAlert: true,
});

const { records } = useMachineCatalog("lamination");
const query = ref("");
const visibleRecords = computed(() =>
  records.value.filter((record) =>
    `${record.name} ${record.source}`
      .toLowerCase()
      .includes(query.value.toLowerCase()),
  ),
);
</script>

<template>
  <div class="dulank-page dulank-page-mesin-laminasi">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

          <div class="col-lg-9">
            <h4 class="fs-5 mb-md-5 mb-3">Mesin Laminasi</h4>
            <PagesMesinLaminasiLaminationActions />
            <PagesMesinLaminasiLaminationFilters />
            <PagesMesinLaminasiLaminationSearchForm @search="query = $event" />
            <PagesMesinLaminasiLaminationTable :records="visibleRecords" />
          </div>
        </div>
      </div>
    </main>

    <PagesMesinLaminasiAddLaminationModal />
  </div>
</template>
