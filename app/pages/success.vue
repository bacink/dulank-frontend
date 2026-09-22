<script setup lang="ts">
useLegacyPage({
  title: "Order Success",
  styles: ["/css/style.css", "/css/pages/success-inline.css"],
  scripts: ["/js/component.js", "/js/pages/success-events.js"],
  sweetAlert: false,
});
</script>

<template>
  <div class="dulank-page dulank-page-success">
    <main>
      <section class="py-3 py-md-5 py-xl-8">
        <div class="container">
          <div class="row justify-content-center">
            <PagesSuccessOrderSuccessMessage />
          </div>
        </div>
      </section>
    </main>
    <PagesSuccessNotificationToast />
  </div>
</template>
