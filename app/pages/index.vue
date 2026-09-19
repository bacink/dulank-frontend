<script setup lang="ts">
useLegacyPage({
  title: "Percetakan Dulank - Online Printing Shop",
  styles: ["/css/style.css", "/css/pages/index-inline.css"],
  scripts: ["/js/component.js", "/js/pages/index.js"],
  sweetAlert: false,
});

const { featuredProducts, newProduct } = useHomeProducts();
</script>

<template>
  <div class="dulank-page dulank-page-index">
    <main>
      <PagesIndexHeroCarousel
        :brosur="featuredProducts.brosur"
        :yasin="featuredProducts.yasin"
        :kaos="featuredProducts.kaos"
      />
      <section class="container my-5">
        <div class="row">
          <div class="col-md-6 order-md-2">
            <PagesIndexProductGroups
              :brosur="featuredProducts.brosur"
              :yasin="featuredProducts.yasin"
              :kaos="featuredProducts.kaos"
            />
          </div>
          <div class="col-md-6 order-md-1">
            <PagesIndexAboutSection
              :brosur="featuredProducts.brosur"
              :yasin="featuredProducts.yasin"
            />
          </div>
          <PagesIndexInfoColumns
            :brosur="featuredProducts.brosur"
            :new-product="newProduct"
          />
        </div>
      </section>
    </main>
    <PagesIndexOfferModal :product="featuredProducts.brosur" />
    <PagesIndexNewProductToast :product="newProduct" />
  </div>
</template>
