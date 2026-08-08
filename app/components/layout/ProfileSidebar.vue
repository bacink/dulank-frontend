<template>
  <div
    class="w-full rounded-2xl border border-border bg-white p-0 shadow-sm"
  >
    <ul class="divide-y divide-border">
      <li>
        <NuxtLink
          to="/profile-kalkulator"
          class="block px-4 py-3 text-sm font-medium text-secondary transition hover:bg-surface hover:text-primary"
        >
          Profile Kalkulator
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/semua-percetakan"
          class="block px-4 py-3 text-sm text-text transition hover:bg-surface hover:text-primary"
        >
          Semua Percetakan
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/semua-toko-kertas"
          class="block px-4 py-3 text-sm text-text transition hover:bg-surface hover:text-primary"
        >
          Semua Toko Kertas
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/pengaturan-keuntungan"
          class="block px-4 py-3 text-sm text-text transition hover:bg-surface hover:text-primary"
        >
          Pengaturan Keuntungan
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/support-ticket-kalkulator"
          class="block px-4 py-3 text-sm text-text transition hover:bg-surface hover:text-primary"
        >
          Support Ticket
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
