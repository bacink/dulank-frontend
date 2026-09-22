<script setup lang="ts">
useLegacyPage({
  title: "Bootstrap 5 Modals",
  styles: ["/css/pages/modal-percetakan.css"],
  scripts: [],
  sweetAlert: false,
});
</script>

<template>
  <div class="dulank-page dulank-page-modal-percetakan">
    <div class="container">
      <h1 class="mb-4">Bootstrap 5 Modal Examples</h1>
      <PagesModalPercetakanModalLauncher />

      <PagesModalPercetakanGuestPaperSizeModal />

      <PagesModalPercetakanUserPaperSizeModal />

      <PagesModalPercetakanGuestPaperPriceModal />

      <PagesModalPercetakanRegisteredUserPaperPriceModal />
    </div>
  </div>
</template>
