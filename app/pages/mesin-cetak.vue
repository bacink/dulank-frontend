<script setup lang="ts">
useLegacyPage({
  title: "Mesin Cetak",
  styles: ["/css/style.css", "/css/pages/mesin-cetak-inline.css"],
  scripts: [
    "/js/easy-number-separator.js",
    "/js/component.js",
    "/js/kalkulator.js",
    "/js/pages/mesin-cetak.js",
    "/js/pages/mesin-cetak-events.js",
  ],
  sweetAlert: true,
});

const { records } = useMachineCatalog("printing");
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
  <div class="dulank-page dulank-page-mesin-cetak">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

          <div class="col-lg-9">
            <PagesMesinCetakMachineHeader />
            <PagesMesinCetakMachineActions />
            <PagesMesinCetakMachineFilters />
            <PagesMesinCetakMachineSearchForm @search="query = $event" />
            <PagesMesinCetakMachineTable :records="visibleRecords" />
          </div>
        </div>
      </div>
    </main>

    <PagesMesinCetakAddMachineModal />

    <PagesMesinCetakMachineDetailsModal />
  </div>
</template>
