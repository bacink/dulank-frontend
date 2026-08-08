<template>
  <section
    class="relative overflow-hidden bg-[linear-gradient(135deg,rgba(145,39,72,0.08),rgba(28,44,71,0.06))]"
  >
    <UContainer
      class="grid items-center gap-10 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28"
    >
      <div class="space-y-6">
        <UBadge color="primary" variant="soft"
          >Promo 2026 • Cetak cepat & kualitas premium</UBadge
        >
        <div class="space-y-4">
          <h1
            class="text-4xl font-semibold tracking-tight text-(--color-secondary) sm:text-5xl"
          >
            Cetak apapun, Dulank jawabannya.
          </h1>
          <p class="max-w-2xl text-lg leading-8 text-(--color-text)">
            Dari brosur, poster, kemasan, hingga kebutuhan cetak korporat, kami
            membantu bisnis Anda tampil lebih percaya diri.
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <UButton
            size="lg"
            class="bg-(--color-primary) text-white hover:bg-(--color-secondary)"
          >
            Lihat produk
          </UButton>
          <UButton size="lg" color="neutral" variant="soft">
            Ajukan quotation
          </UButton>
        </div>

        <div class="grid gap-3 sm:grid-cols-3">
          <div
            class="rounded-2xl border border-(--color-border) bg-white/80 p-4 shadow-sm"
          >
            <p class="text-2xl font-semibold text-(--color-primary)">500+</p>
            <p class="text-sm text-(--color-text)">Paket selesai</p>
          </div>
          <div
            class="rounded-2xl border border-(--color-border) bg-white/80 p-4 shadow-sm"
          >
            <p class="text-2xl font-semibold text-(--color-primary)">24 jam</p>
            <p class="text-sm text-(--color-text)">Estimasi cepat</p>
          </div>
          <div
            class="rounded-2xl border border-(--color-border) bg-white/80 p-4 shadow-sm"
          >
            <p class="text-2xl font-semibold text-(--color-primary)">100%</p>
            <p class="text-sm text-(--color-text)">Konsultasi gratis</p>
          </div>
        </div>
      </div>

      <div class="relative">
        <div
          class="absolute inset-0 -translate-x-4 translate-y-4 rounded-4xl bg-primary/10"
        />
        <img
          src="/brosur.jpg"
          alt="Contoh hasil cetak percetakan"
          class="relative h-105 w-full rounded-4xl object-cover shadow-2xl"
        />
      </div>
    </UContainer>
  </section>
</template>
