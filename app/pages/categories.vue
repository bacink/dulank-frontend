<script setup lang="ts">
useHead({
  title: 'Kategori Produk - Percetakan Dulank',
  meta: [
    {
      name: 'description',
      content: 'Jelajahi berbagai kategori produk percetakan Dulank — dari brosur, kalender, hingga kemasan.',
    },
  ],
})

interface Category {
  name: string
  count: number
  image: string
  link: string
  badge: string | null
}

interface SaleBanner {
  title: string
  subtitle: string
  image: string
  link: string
}

const categories: Category[] = [
  {
    name: 'Stationary - ATK',
    count: 18,
    image: 'https://images.unsplash.com/photo-15320173754333-176f0d1d7d9e?q=80&w=600&auto=format&fit=crop',
    link: '/product',
    badge: null,
  },
  {
    name: 'Nota, Buku, Compro, Majalah',
    count: 9,
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=600&auto=format&fit=crop',
    link: '/product',
    badge: null,
  },
  {
    name: 'Packaging',
    count: 22,
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=600&auto=format&fit=crop',
    link: '/product',
    badge: null,
  },
  {
    name: 'Promotion',
    count: 15,
    image: 'https://images.unsplash.com/photo-1696192505937-08400f91e631?q=80&w=600&auto=format&fit=crop',
    link: '/product',
    badge: null,
  },
  {
    name: 'Merchandise',
    count: 12,
    image: 'https://images.unsplash.com/photo-1558452919-08ae4aea8e29?q=80&w=600&auto=format&fit=crop',
    link: '/product',
    badge: null,
  },
  {
    name: 'Banner',
    count: 17,
    image: 'https://images.unsplash.com/photo-1558452919-08ae4aea8e29?q=80&w=600&auto=format&fit=crop',
    link: '/product',
    badge: null,
  },
  {
    name: 'Kalender',
    count: 8,
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939c688d?q=80&w=600&auto=format&fit=crop',
    link: '/product/kalender',
    badge: null,
  },
  {
    name: 'Cetak Buku',
    count: 6,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop',
    link: '/product/cetak-buku',
    badge: null,
  },
  {
    name: 'Full Color',
    count: 20,
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=600&auto=format&fit=crop',
    link: '/product/full-color',
    badge: null,
  },
]

const saleBanners: SaleBanner[] = [
  {
    title: 'Brosur Flyer ukuran A4',
    subtitle: 'Sale 20% off all store',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=600&auto=format&fit=crop',
    link: '/product/full-color',
  },
  {
    title: 'Buku Yasin',
    subtitle: 'Sale 35%',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop',
    link: '/product/cetak-buku',
  },
]
</script>

<template>
  <div>
    <div class="bg-surface border-b border-border py-4">
      <UContainer>
        <h1 class="text-xl font-semibold text-secondary">Categories</h1>
        <p class="text-sm text-text mt-1">
          Home <span class="text-text/50">&gt;</span> Categories
        </p>
      </UContainer>
    </div>

    <UContainer class="py-10">
      <!-- Sale Banners -->
      <div class="grid gap-4 mb-8 md:grid-cols-2">
        <NuxtLink
          v-for="banner in saleBanners"
          :key="banner.title"
          :to="banner.link"
          class="group rounded-xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <div class="grid md:grid-cols-2 gap-0">
            <div class="p-6 flex flex-col justify-center">
              <p class="text-xs font-semibold uppercase tracking-wider text-primary">
                {{ banner.subtitle }}
              </p>
              <h2 class="text-lg font-semibold text-secondary mt-1">
                {{ banner.title }}
              </h2>
              <button
                type="button"
                class="mt-3 inline-flex items-center gap-2 bg-primary text-white text-sm px-4 py-2 rounded-lg w-fit hover:bg-secondary transition-colors"
                @click.stop
              >
                Shop Now
              </button>
            </div>
            <div class="overflow-hidden">
              <img
                :src="banner.image"
                :alt="banner.title"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Category Grid -->
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="cat in categories"
          :key="cat.name"
          :to="cat.link"
          class="group rounded-xl border border-border bg-white p-5 text-center transition-all hover:border-primary/40 hover:shadow-md"
        >
          <div class="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-lg">
            <img
              :src="cat.image"
              :alt="cat.name"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          <h3 class="font-medium text-secondary">
            {{ cat.name }}
          </h3>
          <span
            class="inline-block mt-2 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-white"
          >
            {{ cat.count }} products
          </span>
        </NuxtLink>
      </div>
    </UContainer>
  </div>
</template>
