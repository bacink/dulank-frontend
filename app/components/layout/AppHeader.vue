<template>
  <header
    class="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur"
  >
    <UContainer class="py-3">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <NuxtLink to="/" class="flex items-center gap-3">
          <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white"
          >
            D
          </span>
          <div>
            <p
              class="text-lg font-semibold tracking-tight text-secondary"
            >
              Dulank
            </p>
            <p class="text-xs text-text">
              Percetakan & digital printing
            </p>
          </div>
        </NuxtLink>

        <nav class="hidden items-center gap-6 md:flex">
          <NuxtLink
            v-for="item in navItems"
            :key="item.label"
            :to="item.to"
            class="text-sm font-medium text-secondary transition hover:text-primary"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-2">
          <UInput
            size="sm"
            placeholder="Cari produk..."
            class="hidden w-56 md:block"
          />
          <UButton icon="i-heroicons-heart" color="neutral" variant="ghost" />
          <UButton
            icon="i-heroicons-shopping-bag"
            color="neutral"
            variant="ghost"
          />
          <UButton
            icon="i-heroicons-user-circle"
            color="neutral"
            variant="ghost"
          />
        </div>
      </div>

      <div
        class="mt-3 flex flex-wrap items-center justify-between border-t border-border pt-3 text-sm"
      >
        <div class="flex flex-wrap items-center gap-4 text-text">
          <NuxtLink
            to="/product"
            class="transition hover:text-primary"
          >
            All Product
          </NuxtLink>
          <NuxtLink
            to="/categories"
            class="transition hover:text-primary"
          >
            Categories
          </NuxtLink>
          <NuxtLink
            to="/product/full-color"
            class="transition hover:text-primary"
          >
            Cetak Full Color
          </NuxtLink>
          <NuxtLink
            to="/product/kalender"
            class="transition hover:text-primary"
          >
            Kalender
          </NuxtLink>
          <NuxtLink
            to="/product/buku"
            class="transition hover:text-primary"
          >
            Cetak Buku
          </NuxtLink>
          <NuxtLink
            to="/kontak"
            class="transition hover:text-primary"
          >
            Contact
          </NuxtLink>
        </div>

        <NuxtLink
          to="/quotation"
          class="font-medium text-primary transition hover:text-secondary"
        >
          Ajukan Quotation
        </NuxtLink>
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  { label: "Produk", to: "/product" },
  { label: "Quotation", to: "/quotation" },
  { label: "Cara Kerja", to: "/product" },
  { label: "Kontak", to: "/kontak" },
];
</script>
