<script setup lang="ts">
useLegacyPage({
  title: "Percetakan Dulank - Online Printing Shop",
  styles: ["/css/style.css", "/css/category.css"],
  scripts: ["/js/component.js", "/js/profile.js", "/js/pages/categories.js"],
  sweetAlert: false,
});

const { categories } = useCategories();
const { saleBanners } = useSaleBanners();
</script>

<template>
  <div class="dulank-page dulank-page-categories">
    <div class="category-navbar py-3 bg-light">
      <div class="container mt-3">
        <h4>Categories</h4>
        <p>Home &gt; Categories</p>
      </div>
    </div>
    <main>
      <div class="container my-5">
        <section class="categories-section">
          <div class="container">
            <PagesCategoriesSaleBanners :sale-banners="saleBanners" />
            <PagesCategoriesCategoryGrid :categories="categories" />
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
