<script setup lang="ts">
import type { Quotation } from "~/composables/useQuotations";

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

useLegacyPage({
  title: "Quotation | Dulank",
  styles: [
    "/css/style.css",
    "/css/save.css",
    "/css/pages/quotation.css",
    "/css/pages/quotation-inline.css",
  ],
  scripts: ["/js/component.js", "/js/save.js", "/js/pages/quotation.js"],
  sweetAlert: false,
});

const quotationResponse = await $fetch<ApiResponse<Quotation[]>>(
  "/api/quotations?userId=1",
);

const quotation = computed(
  () =>
    quotationResponse.data.find((item) => item.status === "draft") ??
    quotationResponse.data[0] ??
    null,
);
</script>

<template>
  <div class="dulank-page dulank-page-quotation">
    <div class="container mt-3">
      <p class="text-standard">Home > Quotation</p>
    </div>
    <main>
      <div class="container my-5">
        <template v-if="quotation">
          <PagesQuotationDetails :quotation="quotation" />
          <PagesQuotationItems :quotation="quotation" />
          <PagesQuotationNotice />
          <PagesQuotationSummary :quotation="quotation" />
        </template>

        <PagesQuotationEmptyQuotationState v-else />
      </div>
    </main>

    <PagesQuotationJobNameModal />
  </div>
</template>
