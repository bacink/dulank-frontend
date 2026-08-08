<script setup lang="ts">
useHead({
  title: 'Produk - Percetakan Dulank',
  meta: [
    { name: 'description', content: 'Catalog produk percetakan Dulank — brosur, kalender, buku, dan kebutuhan cetak lainnya.' },
  ],
})

interface Product {
  id: string
  name: string
  category: string
  image: string
  price: number
  badge?: 'new' | 'sale' | string
  oldPrice?: number
}

const products: Product[] = [
  { id: 'cetak-full-color', name: 'Cetak Full Color', category: 'Brosur & Flyer', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=400&auto=format&fit=crop', price: 35000, badge: 'Popular' },
  { id: 'cetak-buku', name: 'Cetak Buku', category: 'Buku & Modul', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400&auto=format&fit=crop', price: 50000, badge: 'New' },
  { id: 'kalender', name: 'Kalender 2027', category: 'Kalender', image: 'https://images.unsplash.com/photo-1506784365847-bbad939c688d?q=80&w=400&auto=format&fit=crop', price: 35000 },
  { id: 'kartu-nama', name: 'Kartu Nama', category: 'Stationery', image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=400&auto=format&fit=crop', price: 50000 },
  { id: 'kop-surat', name: 'Kop Surat', category: 'Stationery', image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=400&auto=format&fit=crop', price: 75000 },
  { id: 'bendera', name: 'Bendera', category: 'Outdoor', image: 'https://percetakan-dulank.com/wp-content/uploads/2023/04/Bendera-1-570x570.jpg', price: 50400, oldPrice: 80000, badge: '-37%' },
  { id: 'stiker', name: 'Stiker Custom', category: 'Stiker', image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=400&auto=format&fit=crop', price: 25000 },
  { id: 'packaging', name: 'Packaging', category: 'Packaging', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=400&auto=format&fit=crop', price: 15000 },
]

const searchQuery = ref('')
const filteredProducts = computed(() => {
  if (!searchQuery.value) return products
  const q = searchQuery.value.toLowerCase()
  return products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
})
</script>

<template>
  <div>
    <!-- Header -->
    <div class="bg-surface border-b border-border py-4">
      <UContainer>
        <h1 class="text-xl font-semibold text-secondary">Products</h1>
        <p class="text-sm text-text mt-1">
          Home <span class="text-text/50">&gt;</span> Products
        </p>
      </UContainer>
    </div>

    <UContainer class="py-8">
      <!-- Search -->
      <div class="mb-8">
        <UInput
          v-model="searchQuery"
          placeholder="Cari produk..."
          icon="i-heroicons-magnifying-glass"
          size="lg"
          class="max-w-md"
          clearable
        />
      </div>

      <!-- Product Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <NuxtLink
          v-for="product in filteredProducts"
          :key="product.id"
          :to="`/product/${product.id}`"
          class="group"
        >
          <ProductCard :product="product" />
        </NuxtLink>
      </div>

      <!-- Empty State -->
      <div v-if="!filteredProducts.length" class="text-center py-16">
        <i class="fas fa-search text-4xl text-border mb-4"></i>
        <p class="text-text/60">Produk tidak ditemukan</p>
      </div>
    </UContainer>
  </div>
</template>
