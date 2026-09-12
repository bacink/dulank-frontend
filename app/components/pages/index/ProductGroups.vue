<script setup lang="ts">
import type { Product } from '#server/types/product'

interface ProductItem {
  label: string
  image: Product | null
  fallback: string
}

const props = defineProps<{
  brosur: Product | null
  yasin: Product | null
  kaos: Product | null
}>()

const groups = [
  { title: 'Produk Terlaris', items: [
    { label: 'brosur', image: props.brosur, fallback: '/images/brosur.jpg' },
    { label: 'yasin', image: props.yasin, fallback: '/images/yasin.jpg' },
    { label: 'kaos', image: props.kaos, fallback: '/images/kaos.jpg' },
  ]},
  { title: 'Produk Paket', items: [
    { label: 'brosur', image: props.brosur, fallback: '/images/brosur.jpg' },
    { label: 'yasin', image: props.yasin, fallback: '/images/yasin.jpg' },
    { label: 'kaos', image: props.kaos, fallback: '/images/kaos.jpg' },
  ]},
]
</script>

<template>
<div v-for="group in groups" :key="group.title">
  <h5 class="mb-3">{{ group.title }}</h5>
  <div class="row mb-5">
    <div class="col-4" v-for="item in group.items" :key="item.label">
      <img alt="" class="object-fit-cover w-100" :src="item.image?.image || item.fallback" />
    </div>
  </div>
</div>
</template>
