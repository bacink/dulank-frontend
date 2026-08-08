<script setup lang="ts">
useHead({
  title: "Percetakan Dulank",
  meta: [
    {
      name: "description",
      content:
        "Nuxt 4 storefront untuk Percetakan Dulank dengan tema brand legacy.",
    },
  ],
});
</script>

<template>
  <div>
    <HomeHeroSection />
    <UContainer class="py-16">
      <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="order-2 space-y-8 lg:order-1">
          <HomeProductShowcaseSection
            title="Produk Terlaris"
            :items="[
              { image: '/brosur.jpg' },
              { image: '/kaos.jpg' },
              { image: '/sticker.jpg' },
            ]"
          />
          <HomeProductShowcaseSection
            title="Produk Paket"
            :items="[
              { image: '/brosur.jpg' },
              { image: '/kaos.jpg' },
              { image: '/sticker.jpg' },
            ]"
          />
        </div>
        <div class="order-1 lg:order-2">
          <HomeAboutSection />
        </div>
      </div>
    </UContainer>

    <HomeFeatureCardsSection
      :cards="[
        {
          title: 'Cetak Full Color',
          eyebrow: 'Kualitas premium untuk kebutuhan promosi',
          description:
            'Cetak brosur, poster, kemasan, dan kebutuhan promosi bisnis Anda dengan kualitas warna terbaik. Dari ribuan hingga jutaan unit.',
          image: '/brosur.jpg',
          cta: 'Lihat Price List',
        },
        {
          title: 'Kebutuhan Branding',
          eyebrow: 'Solusi visual konsisten untuk bisnis Anda',
          description:
            'Lengkap dari kartu nama, kop surat, packaging, hingga spanduk. Satu supplier untuk semua kebutuhan branding perusahaan Anda.',
          image: '/kaos.jpg',
          cta: 'Lihat Price List',
        },
      ]"
    />
    <HomeBottomInfoSection
      :articles="[
        {
          date: 'Mei 9, 2025',
          title: 'Brosur Full Color',
          description: 'Panduan lengkap desain brosur profesional',
          image: '/brosur.jpg',
        },
        {
          date: 'Mei 8, 2025',
          title: 'Stiker Custom',
          description: 'Tipe dan bahan stiker untuk kebutuhan promosi',
          image: '/sticker.jpg',
        },
      ]"
      :downloads="[
        'Brosur Ukuran A4 (210x297mm)',
        'Brosur Ukuran A5 (148x210mm)',
        'Brosur Ukuran A3 (297x420mm)',
        'Panduan Desain File',
      ]"
    />
  </div>
</template>
