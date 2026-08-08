<template>
  <footer
    class="border-t border-border bg-surface"
  >
    <UContainer class="py-12">
      <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <span
              class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white"
            >
              D
            </span>
            <div>
              <p class="text-lg font-semibold text-secondary">
                Percetakan Dulank
              </p>
              <p class="text-sm text-text">
                Digital printing & promotional products
              </p>
            </div>
          </div>
          <p class="max-w-md text-sm leading-7 text-text">
            PT. Dulank Semesta Cida adalah perusahaan percetakan yang berlokasi
            di Karawang dengan pengalaman menjadi supplier produk percetakan
            bagi perusahaan besar di kawasan industri.
          </p>
        </div>

        <div>
          <p class="mb-4 font-semibold text-secondary">
            Info Kami
          </p>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink
                to="/privacy"
                class="transition hover:text-primary"
              >
                Kebijakan Privasi
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/terms"
                class="transition hover:text-primary"
              >
                Syarat & Ketentuan
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/our-client"
                class="transition hover:text-primary"
              >
                Our Client
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/blog"
                class="transition hover:text-primary"
              >
                Blog
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <p class="mb-4 font-semibold text-secondary">
            Panduan Pelanggan Baru
          </p>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink
                to="/product"
                class="transition hover:text-primary"
              >
                Panduan Belanja
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/quotation"
                class="transition hover:text-primary"
              >
                Online Quotation
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/product"
                class="transition hover:text-primary"
              >
                Request Quotation
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/product"
                class="transition hover:text-primary"
              >
                Pembayaran & Pengiriman
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <p class="mb-4 font-semibold text-secondary">
            Contact
          </p>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                href="tel:+6287788131400"
                class="transition hover:text-primary"
              >
                +62 877 8813 1400
              </a>
            </li>
            <li>
              <a
                href="mailto:setting.percetakan.dulank@gmail.com"
                class="transition hover:text-primary"
              >
                setting.percetakan.dulank@gmail.com
              </a>
            </li>
            <li>Jl. Arif Rahman Hakim / Niaga, Karawang, Jawa Barat</li>
          </ul>
        </div>
      </div>
    </UContainer>

    <div class="border-t border-border">
      <UContainer
        class="flex flex-col items-center justify-between gap-2 py-4 text-sm text-text md:flex-row"
      >
        <p>© 2026 Percetakan Dulank. All rights reserved.</p>
        <p>Built with Nuxt 4, Nuxt UI, and Tailwind CSS.</p>
      </UContainer>
    </div>
  </footer>
</template>
