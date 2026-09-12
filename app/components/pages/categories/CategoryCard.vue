<script setup lang="ts">
import type { Category } from '#server/types/category'

defineProps<{
  category: Category
}>()
</script>

<template>
<a class="category-card col-md-4 mb-1" :href="`/categories/${category.slug}`">
  <div class="px-2 py-5 bg-light">
    <div class="category-image">
      <img
        :alt="category.name"
        class="object-fit-cover"
        height="300"
        loading="lazy"
        :src="category.image"
      />
    </div>
    <div class="category-name">{{ category.name }}</div>
    <div class="category-count">{{ category.productCount }} products</div>
  </div>
</a>
</template>
