<script setup lang="ts">
useLegacyPage({
  title: "FAQ |Dulank",
  styles: ["/css/style.css", "/css/pages/faqs.css"],
  scripts: ["/js/component.js"],
  sweetAlert: false,
});

const { faqs } = useFaqs();
</script>

<template>
  <div class="dulank-page dulank-page-faqs">
    <div class="container mt-3">
      <p class="text-standard">Home &gt; Faqs</p>
    </div>
    <main>
      <div class="container my-5">
        <div class="row">
          <div class="col-md-10 mx-auto">
            <PagesFaqsFaqIntroduction />
            <PagesFaqsFaqAccordion :faqs="faqs" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
