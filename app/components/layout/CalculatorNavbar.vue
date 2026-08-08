<template>
  <nav class="border-b border-border bg-white/95 backdrop-blur">
    <UContainer class="py-3">
      <div class="flex flex-wrap items-center justify-center gap-3 md:gap-6">
        <NuxtLink
          to="/"
          class="flex items-center gap-2 text-sm font-medium text-secondary transition hover:text-primary"
        >
          <UIcon name="i-heroicons-home" class="h-4 w-4" />
          Home
        </NuxtLink>
        <NuxtLink
          to="/kalkulator-berat-kertas"
          class="flex items-center gap-2 text-sm font-medium text-secondary transition hover:text-primary"
        >
          <UIcon name="i-heroicons-calculator" class="h-4 w-4" />
          Kalkulator Berat Kertas
        </NuxtLink>
        <NuxtLink
          to="/kalkulator-potong-kertas"
          class="flex items-center gap-2 text-sm font-medium text-secondary transition hover:text-primary"
        >
          <UIcon name="i-heroicons-calculator" class="h-4 w-4" />
          Kalkulator Potong Kertas
        </NuxtLink>
        <NuxtLink
          to="/kalkulator-percetakan"
          class="flex items-center gap-2 text-sm font-medium text-secondary transition hover:text-primary"
        >
          <UIcon name="i-heroicons-calculator" class="h-4 w-4" />
          Kalkulator Percetakan
        </NuxtLink>
        <NuxtLink
          to="/profile-kalkulator"
          class="flex items-center gap-2 text-sm font-medium text-secondary transition hover:text-primary"
        >
          <UIcon name="i-heroicons-cog-6-tooth" class="h-4 w-4" />
          Pengaturan
        </NuxtLink>
      </div>
    </UContainer>
  </nav>
</template>
