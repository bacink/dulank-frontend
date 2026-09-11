<script setup lang="ts">
useLegacyPage({
  "title": "Wishlist | Dulank",
  "styles": [
    "/css/style.css",
    "/css/save.css"
  ],
  "scripts": [
    "/js/component.js",
    "/js/save.js"
  ],
  "sweetAlert": true
})

const { data: wishlistItems } = await useFetch('/api/wishlist', {
  key: 'wishlist'
})
</script>

<template>
<div class="dulank-page dulank-page-wishlist">
<div class="container mt-3">
<p class="text-standard">Home > Wishlist</p>
</div>
<main>

<div class="container my-5">
<div class="row save justify-content-md-center">
<div class="col-md-8">
<h1 class="fs-5">Your Wishlist</h1>

<div v-if="(wishlistItems as any[])?.length" v-for="item in (wishlistItems as any[])" :key="item.id" class="card-product-list">

<div class="justify-content-between">
<div class="align-items-start">
<div class="align-items-center my-3">
<div class="d-flex">
<div class="me-2">
<img :alt="item.name" class="object-fit-cover rounded-2" height="64" :src="item.image" width="64"/>
</div>
<div class="d-md-flex align-items-center">
<div class="me-md-5">
<div class="fw-light text-standard float-end">Expire until {{ item.expireDate }}</div>
<div class="fw-semibold text-color small">{{ item.name }}</div>
<div class="text-secondary text-standard">{{ item.spec }}</div>
</div>
<div class="me-md-5 mt-2 mt-md-0 text-md-center d-flex d-md-inline-block justify-content-between">
<span class="fw-semibold text-dark total-item">Rp{{ formatRupiah(item.price) }}</span>
</div>
</div>
</div>
<div class="d-flex justify-content-between mt-2 mt-md-4">
<h5 class="mx-2 align-items-center add-cart-btn" role="button"><i class="bi bi-cart3 me-2 my-text-primary"></i><span class="text-standard my-text-primary">Add to cart</span></h5>
<h5 class="mx-2 align-items-center btn-remove-save" role="button"><i class="bi bi-trash me-2 my-text-primary"></i><span class="text-standard my-text-primary">Remove</span></h5>
</div>
</div>
</div>
</div>
</div>

<div v-else class="empty-save-container d-none text-center py-5">
<i class="far fa-heart empty-save-icon fa-4x text-muted mb-4"></i>
<h4>Your Wishlist is Empty</h4>
<p class="text-muted mb-4">You don't have any products added to save yet.</p>
<a class="btn btn-danger my-bg-primary px-4 py-2 rounded-0" href="#">Continue Shopping</a>
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
