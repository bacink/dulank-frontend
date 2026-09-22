<script setup lang="ts">
useLegacyPage({
  title: "Poli",
  styles: ["/css/style.css", "/css/pages/mesin-poli-inline.css"],
  scripts: [
    "/js/easy-number-separator.js",
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/pages/mesin-poli.js",
    "/js/pages/mesin-poli-events.js",
  ],
  sweetAlert: true,
});

const { records } = useMachineCatalog("foil");
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
  <div class="dulank-page dulank-page-mesin-poli">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

          <div class="col-lg-9">
            <h4 class="fs-5 mb-md-5 mb-3">Mesin Poli</h4>
            <PagesMesinPoliFoilActions />
            <PagesMesinPoliFoilFilters />
            <PagesMesinPoliFoilSearchForm @search="query = $event" />
            <PagesMesinPoliFoilMachineTable :records="visibleRecords" />
          </div>
        </div>
      </div>
    </main>

    <PagesMesinPoliAddFoilMachineModal />
  </div>
</template>
