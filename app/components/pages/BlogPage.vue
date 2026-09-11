<script setup lang="ts">
useLegacyPage({
  "title": "Blog List",
  "styles": [
    "/css/style.css",
    "/css/blog.css"
  ],
  "scripts": [
    "/js/component.js"
  ],
  "sweetAlert": false
})

const { data: posts } = await useFetch('/api/blog?page=1&limit=10', {
  key: 'blog-posts'
})
</script>

<template>
<div class="dulank-page dulank-page-blog">
<main class="container my-md-5 my-2">
<div class="row">
<div class="my-4 d-block d-md-none">
<form action="" class="d-flex">
<input class="form-control" placeholder="Search Article Title" type="text"/>
<button class="ms-2 btn my-btn-primary" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
</form>
</div>
<h5 class="fw-bold mb-3">Artikel Terbaru</h5>

<div class="col-lg-8">

<div class="row g-4 mb-4">
<a v-for="post in (posts as any[])" :key="post.id" class="col-md-6 blog-card" :href="`/post?slug=${post.slug}`">
<div class="border-0">
<img class="blog-img object-fit-cover w-100" :src="post.image"/>
<div class="pb-2">
<span class="my-3 d-inline-block border blog-badge rounded-pill py-1 px-2">{{ post.tags[0]?.toUpperCase() || 'UMUM' }}</span>
<h6 class="fw-semibold mb-2">{{ post.title }}</h6>
<div class="d-flex align-items-center text-muted">
<span class="fw-semibold text-standard">{{ post.author }}</span>
<span class="mx-1">-</span>
<span class="text-standard">{{ new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) }}</span>
</div>
</div>
</div>
</a>
</div>

<div class="d-flex align-items-center justify-content-center gap-2">
<button class="btn btn-outline-secondary btn-sm" disabled type="button"><i class="bi bi-chevron-left"></i></button>
<button class="btn btn-secondary btn-sm" type="button">1</button>
<button class="btn btn-outline-secondary btn-sm" type="button">2</button>
<button class="btn btn-outline-secondary btn-sm" type="button">3</button>
<button class="btn btn-outline-secondary btn-sm" type="button">...</button>
<button class="btn btn-outline-secondary btn-sm" type="button"><i class="bi bi-chevron-right"></i></button>
</div>
</div>

<div class="col-lg-4">
<div class="mb-4 d-none d-md-block">
<form action="" class="d-flex">
<input class="form-control" placeholder="Search Article Title" type="text"/>
<button class="ms-2 btn my-btn-primary" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
</form>
</div>
<div class="mb-4">
<h6 class="fw-bold mb-3">Artikel Populer</h6>
<ul class="list-unstyled sidebar-list">
<li v-for="post in (posts as any[])" :key="post.id" class="mb-4">
<a class="d-flex align-items-center" :href="`/post?slug=${post.slug}`">
<img :alt="post.slug" class="me-3" height="64" :src="post.image" width="64"/>
<div>
<span class="fw-semibold small mb-1 text-decoration-none d-block">{{ post.title }}</span>
<div class="text-muted text-standard">{{ new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) }}</div>
</div>
</a>
</li>
</ul>
</div>
</div>
</div>
</main>
<footer>
<div><LayoutAppFooter /></div>
</footer>



</div>
</template>
