<script setup lang="ts">
interface Product {
  id: string
  name: string
  category: string
  image: string
  price: number
  description?: string
  badge?: 'new' | 'sale' | string
  oldPrice?: number
}

const props = defineProps<{
  product: Product
}>()

type BadgeType = NonNullable<Product['badge']>

function getBadgeClasses(badge: BadgeType): { [key: string]: boolean } {
  if (badge === 'sale') return { 'bg-accent text-white': true }
  if (badge === 'new' || (typeof badge === 'string' && badge.includes('%'))) return { 'bg-primary text-white': true }
  return { 'bg-primary text-white': true }
}

function formatPrice(value: number): string {
  return value.toLocaleString('id-ID')
}
</script>

<template>
  <div class="group relative rounded-xl bg-white overflow-hidden transition-all hover:shadow-lg">
    <div v-if="product.badge" class="absolute top-3 left-3 z-10">
      <span
        class="inline-block px-2 py-0.5 text-xs font-semibold rounded-full"
        :class="getBadgeClasses(product.badge)"
      >
        {{ product.badge }}
      </span>
    </div>

    <div class="aspect-square overflow-hidden bg-surface">
      <img
        :src="product.image"
        :alt="product.name"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <div class="p-4 border border-border">
      <p class="text-xs uppercase tracking-wide mb-1 text-text/60">
        {{ product.category }}
      </p>
      <h3 class="font-semibold text-sm leading-tight mb-2 line-clamp-2 text-secondary">
        {{ product.name }}
      </h3>

      <div class="flex items-baseline gap-2 mb-3">
        <span class="font-semibold text-sm text-primary">
          Rp{{ formatPrice(product.price) }}
        </span>
        <span class="text-xs text-text/60">/rim</span>
        <span
          v-if="product.oldPrice"
          class="text-xs line-through text-text/80"
        >
          Rp{{ formatPrice(product.oldPrice) }}
        </span>
      </div>

      <button
        type="button"
        class="w-full text-xs font-medium py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
      >
        Select Options
      </button>
    </div>
  </div>
</template>
