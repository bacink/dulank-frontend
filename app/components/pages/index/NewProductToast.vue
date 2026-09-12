<script setup lang="ts">
import { formatRupiah } from '~/utils/currency'
import type { Product } from '#server/types/product'

defineProps<{
  product: Product | null
}>()
</script>

<template>
<div class="position-fixed bottom-0 start-0 p-3" id="inline-style-index-008">
  <div aria-atomic="true" aria-live="assertive" class="toast product-toast hide" id="newProductToast" role="alert">
    <div class="toast-header">
      <strong class="me-auto">New Product Alert!</strong>
      <small>Just now</small>
      <button aria-label="Close" class="btn-close" data-bs-dismiss="toast" type="button" />
    </div>
    <div class="toast-body p-0">
      <div class="d-flex">
        <div class="product-toast-img">
          <img alt="New Product" class="img-fluid" :src="product?.image || '/images/sticker.jpg'" />
        </div>
        <div class="product-toast-content p-3">
          <h6 class="product-toast-title mb-1">{{ product?.name || 'Sticker A3+' }}</h6>
          <p class="product-toast-price mb-1">Rp{{ formatRupiah(product?.priceFrom || 10000) }} - Rp{{ formatRupiah(product?.priceTo || 30000) }}</p>
          <a class="btn btn-sm btn-danger" href="#">View Product</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
