<script setup lang="ts">
import type { Category } from '#server/types/category'

defineProps<{
  categories: Category[]
}>()
</script>

<template>
<div class="row" id="categories-grid">
  <PagesCategoriesCategoryCard
    v-for="category in categories"
    :key="category.id"
    :category="category"
  />
</div>
</template>
