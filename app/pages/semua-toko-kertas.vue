<script setup lang="ts">
useLegacyPage({
  title: "Semua Toko Kertas",
  styles: ["/css/style.css", "/css/pages/semua-toko-kertas-inline.css"],
  scripts: [
    "/js/easy-number-separator.js",
    "/js/component.js",
    "/js/kalkulator.js",
  ],
  sweetAlert: false,
});

interface PaperStore {
  id: number;
  name: string;
  province: string;
  city: string;
  district: string;
  followers: string;
  following: number;
  groupCount: number;
  typeCount: number;
  image: string;
}
const { items: stores } = useCatalog<PaperStore>("paper-stores");
const search = ref("");
const visibleStores = computed(() =>
  stores.value.filter((store) =>
    `${store.name} ${store.province} ${store.city} ${store.district}`
      .toLowerCase()
      .includes(search.value.toLowerCase()),
  ),
);
</script>

<template>
  <div class="dulank-page dulank-page-semua-toko-kertas">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

          <div class="col-lg-9">
            <h4 class="fs-5 mb-3">Semua Toko Kertas</h4>
            <div class="mb-2">
              <span class="text-standard"
                ><i class="bi bi-geo-alt-fill me-2"></i>Dilokasi anda terdaftar
                beberapa Toko Kertas!</span
              >
            </div>
            <PagesSemuaTokoKertasPaperStoreSearchForm
              @search="search = $event"
            />
            <PagesSemuaTokoKertasPaperStoreResults :stores="visibleStores" />
          </div>
        </div>
      </div>
    </main>

    <PagesSemuaTokoKertasPaperStoreModal />
  </div>
</template>
