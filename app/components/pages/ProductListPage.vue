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

<button class="nav-button" id="prev" type="button">❮</button>
<div class="carousel-container">
<div class="carousel" id="carousel">
<div class="itemz"><img alt="Brosur" src="/images/brosur.jpg"/></div>
<div class="itemz"><img alt="Kaos" src="/images/kaos.jpg"/></div>
<div class="itemz"><img alt="Sticker" src="/images/sticker.jpg"/></div>
<div class="itemz"><img alt="Buku Yasin" src="/images/yasin.jpg"/></div>
<div class="itemz"><img alt="Brosur" src="/images/brosur.jpg"/></div>
<div class="itemz"><img alt="Kaos" src="/images/kaos.jpg"/></div>
<div class="itemz"><img alt="Sticker" src="/images/sticker.jpg"/></div>
<div class="itemz"><img alt="Buku Yasin" src="/images/yasin.jpg"/></div>
<div class="itemz"><img alt="Brosur" src="/images/brosur.jpg"/></div>
<div class="itemz"><img alt="Kaos" src="/images/kaos.jpg"/></div>

</div>
</div>
<button class="nav-button" id="next" type="button">❯</button>
</div>
</div>
</div>
</main>
<footer>
<div><LayoutAppFooter /></div>
</footer>









</div>
</template>
