<script setup lang="ts">
useLegacyPage({
  title: "404 - Page Not Found",
  styles: ["/css/style.css"],
  scripts: ["/js/component.js"],
  sweetAlert: false,
});
</script>

<template>
  <div class="dulank-page dulank-page-404">
    <main>
      <div class="container my-5">
        <Pages404NotFoundMessage />
      </div>
    </main>
  </div>
</template>
