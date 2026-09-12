<script setup lang="ts">
import type { Product } from '#server/types/product'

defineProps<{
  brosur: Product | null
  newProduct: Product | null
}>()
</script>

<template>
<div class="row mt-5">
  <div class="col-md-4">
    <h5 class="text-center">Contact Us</h5>
    <p class="text-standard" id="inline-style-index-005">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ipsa totam esse neque, asperiores aspernatur animi sed enim, provident exercitationem sit minima. Nulla eius laboriosam qui est veniam quaerat dolorem!</p>
  </div>

  <div class="col-md-4">
    <h5 class="text-center">Article</h5>
    <div>
      <div class="d-flex align-items-center my-3">
        <img alt="thumb" class="me-3 object-fit-cover" id="inline-style-index-006" :src="brosur?.image || '/images/brosur.jpg'" />
        <div>
          <div class="text-muted text-standard">Mei 9, 2025</div>
          <a class="fw-semibold text-standard" href="/post">Brosur Full Color</a>
          <p class="text-standard">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div class="d-flex align-items-center my-3">
        <img alt="thumb" class="me-3 object-fit-cover" id="inline-style-index-007" :src="newProduct?.image || '/images/sticker.jpg'" />
        <div>
          <div class="text-muted text-standard">Mei 8, 2025</div>
          <a class="fw-semibold text-standard" href="/post">Stiker</a>
          <p class="text-standard">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-4">
    <h5 class="text-center">Download File</h5>
    <div>
      <a class="text-standard" href=""><i class="fa-solid fa-file-pdf download-icon"></i>Brosur Ukuran A4 (210x297mm)</a><br />
      <a class="text-standard" href=""><i class="fa-solid fa-file-pdf download-icon"></i>Brosur Ukuran A4 (210x297mm)</a><br />
      <a class="text-standard" href=""><i class="fa-solid fa-file-pdf download-icon"></i>Brosur Ukuran A4 (210x297mm)</a><br />
      <a class="text-standard" href=""><i class="fa-solid fa-file-pdf download-icon"></i>Brosur Ukuran A4 (210x297mm)</a><br />
    </div>
  </div>
</div>
</template>
