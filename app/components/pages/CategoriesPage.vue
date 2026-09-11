<script setup lang="ts">
useLegacyPage({
  "title": "Percetakan Dulank - Online Printing Shop",
  "styles": [
    "/css/style.css",
    "/css/category.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/profile.js",
    "/js/pages/categories.js"
  ],
  "sweetAlert": false
})

const { data: categories } = await useFetch('/api/categories', {
  key: 'categories'
})
</script>

<template>
<div class="dulank-page dulank-page-categories">
<div class="category-navbar py-3 bg-light">
<div class="container mt-3">
<h4>Categories</h4>
<p>Home > Categories</p>
</div>
</div>
<main>

<div class="container my-5">

<section class="categories-section">
<div class="container">
<div class="row mb-4">
<div class="col-md-7 p-2">
<div class="bg-light rounded-1 h-100 category-sale" role="button">
<div class="row">
<div class="col-md-7 my-md-auto my-4 text-md-start text-center">
<div class="ms-md-4 py-2">
<p class="fs-6">Sale 20% off all store</p>
<h4>Brosur Flyer ukuran A4</h4>
<button class="btn my-btn-primary mt-2" type="button">Shop Now</button>
</div>
</div>
<div class="col-md-5 overflow-hidden">
<img alt="" class="category-sale-image w-100 object-fit-cover" height="200" src="/images/brosur.jpg"/>
</div>
</div>
</div>
</div>
<div class="col-md-5 p-2">
<div class="bg-info-subtle rounded-1 h-100 category-sale" role="button">
<div class="row">
<div class="col-md-7 my-md-auto my-4 text-md-start text-center">
<div class="ms-md-4 py-2">
<p class="fs-6">Sale 35%</p>
<h4>Buku Yasin</h4>
<button class="btn my-btn-primary mt-2" type="button">Shop Now</button>
</div>
</div>
<div class="col-md-5 overflow-hidden">
<img alt="" class="category-sale-image w-100 object-fit-cover" height="200" src="/images/yasin.jpg"/>
</div>
</div>
</div>
</div>
</div>
<div class="row" id="categories-grid">
<a v-for="cat in (categories as any[])" :key="cat.id" class="category-card col-md-4 mb-1" :href="`/product-list?category=${cat.slug}`">
<div class="px-2 py-5 bg-light">
<div class="category-image">
<img :alt="cat.name" class="object-fit-cover" height="300" loading="lazy" :src="cat.image"/>
</div>
<div class="category-name">{{ cat.name }}</div>
<div class="category-count">{{ cat.productCount }} products</div>
</div>
</a>
</div>
</div>
</section>

</div>
</main>
<footer>
<div><LayoutAppFooter /></div>
</footer>



</div>
</template>
