<script setup lang="ts">
useLegacyPage({
  title: "Semua Percetakan",
  styles: ["/css/style.css", "/css/pages/semua-percetakan-inline.css"],
  scripts: [
    "/js/easy-number-separator.js",
    "/js/component.js",
    "/js/kalkulator.js",
  ],
  sweetAlert: false,
});

interface PrintingShop {
  id: number;
  name: string;
  province: string;
  city: string;
  district: string;
  followers: string;
  following: number;
  paperCount: number;
  printingCount: number;
  laminationCount: number;
  dieCuttingCount: number;
  foilCount: number;
  image: string;
}
const { items: shops } = useCatalog<PrintingShop>("printing-shops");
const search = ref("");
const visibleShops = computed(() =>
  shops.value.filter((shop) =>
    `${shop.name} ${shop.province} ${shop.city} ${shop.district}`
      .toLowerCase()
      .includes(search.value.toLowerCase()),
  ),
);
</script>

<template>
  <div class="dulank-page dulank-page-semua-percetakan">
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-3 mb-4"><CalculatorSidebar /></div>

          <div class="col-lg-9">
            <h4 class="fs-5 mb-3">Semua Percetakan</h4>
            <div class="mb-2">
              <span class="text-standard"
                ><i class="bi bi-geo-alt-fill me-2"></i>Dilokasi anda terdaftar
                beberapa percetakan!</span
              >
            </div>
            <PagesSemuaPercetakanPrintingShopSearchForm
              @search="search = $event"
            />
            <PagesSemuaPercetakanPrintingShopResults :shops="visibleShops" />
          </div>
        </div>
      </div>
    </main>

    <PagesSemuaPercetakanPrintingShopModal />
  </div>
</template>
