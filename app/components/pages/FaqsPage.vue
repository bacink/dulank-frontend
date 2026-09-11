<script setup lang="ts">
useLegacyPage({
  "title": "FAQ |Dulank",
  "styles": [
    "/css/style.css",
    "/css/pages/faqs.css"
  ],
  "scripts": [
    "/js/component.js"
  ],
  "sweetAlert": false
})

const { data: faqs } = await useFetch('/api/faqs', {
  key: 'faqs'
})
</script>

<template>
<div class="dulank-page dulank-page-faqs">
<div class="container mt-3">
<p class="text-standard">Home > Faqs</p>
</div>
<main>

<div class="container my-5">
<div class="row">
<div class="col-md-10 mx-auto">
<div class="mb-4">
<h1 class="fs-5">Frequently Asked Questions</h1>
<p>Berikut ini pertanyaan umum yang sering ditanyakan kepada kami, mungkin salah satunya adalah
							pertanyaan
							yang ingin kamu tanyakan.</p>
</div>
<div class="accordion" id="accordionExample">
<div class="accordion-item" v-for="(faq, index) in (faqs as any[])" :key="faq.id">
<h2 class="accordion-header">
<button aria-controls="collapseOne" aria-expanded="true" class="accordion-button text-standard" data-bs-target="#collapseOne" data-bs-toggle="collapse" type="button">
						{{ faq.question }}
					</button>
</h2>
<div class="accordion-collapse collapse show" data-bs-parent="#accordionExample" :id="`collapse-${index}`">
<div class="accordion-body text-standard">
{{ faq.answer }}
</div>
</div>
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
