<script setup lang="ts">
useLegacyPage({
  "title": "Produk",
  "styles": [
    "/css/style-product-list.css"
  ],
  "scripts": [
    "/js/pages/product-list-01.js",
    "/js/component.js",
    "/js/profile.js"
  ],
  "sweetAlert": false
})

const route = useRoute()
const { data: products } = await useFetch(`/api/products?page=1&limit=20${route.query.category ? `&category=${route.query.category}` : ''}`, {
  key: 'product-list'
})
</script>

<template>
<div class="dulank-page dulank-page-product-list">
<div class="category-navbar-pl py-3 bg-light" id="navigasi">
<div class="container mt-5">
<h1>Products</h1>
<p>Home > Products </p>
</div>
</div>
<main>

<div class="slider mt-5 mb-5">
<div class="container">
<div class="carousel-wrapper">

<button class="nav-button" id="prev" type="button">&#10094;</button>
<div class="carousel-container">
<div class="carousel" id="carousel">
<div v-for="product in (products as any[])" :key="product.id" class="itemz"><img :alt="product.name" :src="product.image"/></div>
</div>
</div>
<button class="nav-button" id="next" type="button">&#10095;</button>
</div>
</div>
</div>

<div class="container my-5" v-if="(products as any[])?.length">
<div class="row g-4">
<div v-for="product in (products as any[])" :key="product.id" class="col-md-4 col-lg-3">
<div class="card product-card h-100">
<img :alt="product.name" class="card-img-top object-fit-cover" :src="product.image" style="height: 200px"/>
<div class="card-body">
<h6 class="card-title fw-semibold">{{ product.name }}</h6>
<div class="text-primary fw-bold">Rp{{ formatRupiah(product.priceFrom) }} - Rp{{ formatRupiah(product.priceTo) }}</div>
<a class="btn btn-sm btn-outline-primary mt-2 w-100" :href="`/product-list?slug=${product.slug}`">Lihat Detail</a>
</div>
</div>
</div>
</div>
</div>
</main>
<footer>
<div><LayoutAppFooter /></div>
</footer>




</div>
</template>
