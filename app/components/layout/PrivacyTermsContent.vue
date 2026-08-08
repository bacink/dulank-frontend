<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: "privacy" | "terms";
  }>(),
  {
    type: "privacy",
  },
);
</script>

<template>
  <div class="space-y-8">
    <div v-if="props.type === 'privacy'" class="space-y-6">
      <div class="space-y-3">
        <p
          class="text-sm font-semibold uppercase tracking-[0.2em] text-primary"
        >
          Kebijakan Privasi
        </p>
        <h1 class="text-3xl font-semibold text-secondary">
          Perlindungan data pribadi Anda adalah prioritas kami
        </h1>
        <p class="max-w-3xl text-text">
          Kami berkomitmen menjaga privasi Anda saat menggunakan layanan
          percetakan Dulank. Informasi yang Anda berikan hanya digunakan untuk
          keperluan pemrosesan pesanan, komunikasi, dan peningkatan layanan.
        </p>
      </div>

      <div
        class="rounded-2xl border border-border bg-white p-6 shadow-sm"
      >
        <h2 class="mb-3 text-xl font-semibold text-secondary">
          Penggunaan Informasi
        </h2>
        <p class="text-text">
          Informasi yang kami kumpulkan digunakan untuk mengonfirmasi pesanan,
          mengirimkan produk, menjawab pertanyaan, serta memastikan keamanan
          transaksi dan kepatuhan terhadap ketentuan hukum yang berlaku.
        </p>
      </div>

      <div
        class="rounded-2xl border border-border bg-white p-6 shadow-sm"
      >
        <h2 class="mb-3 text-xl font-semibold text-secondary">
          Informasi yang Kami Kumpulkan
        </h2>
        <ul class="list-disc space-y-2 pl-6 text-text">
          <li>Nama lengkap</li>
          <li>Alamat email</li>
          <li>Nomor telepon</li>
          <li>Alamat lengkap dan alamat pengiriman</li>
          <li>
            Informasi pendukung yang diperlukan untuk transaksi dan keamanan
            data
          </li>
        </ul>
      </div>

      <div
        class="rounded-2xl border border-border bg-white p-6 shadow-sm"
      >
        <h2 class="mb-3 text-xl font-semibold text-secondary">
          Cookies &amp; Teknologi Pelacakan
        </h2>
        <p class="text-text">
          Kami dapat menggunakan cookies untuk mengenali preferensi Anda,
          memantau penggunaan layanan, dan meningkatkan kualitas pengalaman
          berbelanja. Anda dapat menolak cookies melalui pengaturan browser
          Anda.
        </p>
      </div>

      <div
        class="rounded-2xl border border-border bg-white p-6 shadow-sm"
      >
        <h2 class="mb-3 text-xl font-semibold text-secondary">
          Keamanan Data
        </h2>
        <p class="text-text">
          Kami mengambil langkah keamanan fisik, elektronik, dan administratif
          untuk melindungi data Anda. Namun, Anda juga bertanggung jawab menjaga
          kerahasiaan akun dan kata sandi Anda.
        </p>
      </div>
    </div>

    <div v-else class="space-y-6">
      <div class="space-y-3">
        <p
          class="text-sm font-semibold uppercase tracking-[0.2em] text-primary"
        >
          Syarat &amp; Ketentuan
        </p>
        <h1 class="text-3xl font-semibold text-secondary">
          Ketentuan penggunaan layanan Dulank
        </h1>
        <p class="max-w-3xl text-text">
          Dengan menggunakan situs dan layanan Dulank, Anda setuju untuk
          mematuhi syarat dan ketentuan berikut, termasuk batasan terkait
          transaksi, pembayaran, pengiriman, serta penggunaan konten dan ulasan.
        </p>
      </div>

      <div
        class="rounded-2xl border border-border bg-white p-6 shadow-sm"
      >
        <h2 class="mb-3 text-xl font-semibold text-secondary">
          Bab 1 - Ketentuan Umum
        </h2>
        <p class="text-text">
          Kebijakan ini mengatur hubungan antara pelanggan dan perusahaan dalam
          penggunaan layanan belanja dan transaksi melalui situs Dulank. Semua
          pengguna wajib membaca dan mematuhi ketentuan yang berlaku.
        </p>
      </div>

      <div
        class="rounded-2xl border border-border bg-white p-6 shadow-sm"
      >
        <h2 class="mb-3 text-xl font-semibold text-secondary">
          Bab 2 - Pelanggan
        </h2>
        <p class="text-text">
          Pelanggan wajib memberikan informasi yang akurat saat mendaftar,
          menjaga keamanan akun, serta bertanggung jawab atas setiap aktivitas
          yang dilakukan di bawah akun mereka.
        </p>
      </div>

      <div
        class="rounded-2xl border border-border bg-white p-6 shadow-sm"
      >
        <h2 class="mb-3 text-xl font-semibold text-secondary">
          Bab 3 - Pembelian &amp; Pembayaran
        </h2>
        <p class="text-text">
          Harga yang tercantum dapat berubah sesuai kebijakan perusahaan.
          Pelanggan wajib melakukan pembayaran sesuai metode yang disepakati
          sebelum pesanan diproses.
        </p>
      </div>

      <div
        class="rounded-2xl border border-border bg-white p-6 shadow-sm"
      >
        <h2 class="mb-3 text-xl font-semibold text-secondary">
          Bab 4 - Pengiriman &amp; Pengembalian
        </h2>
        <p class="text-text">
          Pengiriman dilakukan sesuai area layanan dan ketentuan operasional
          yang berlaku. Jika terdapat ketidaksesuaian pesanan, pelanggan dapat
          mengajukan komplain sesuai prosedur yang ditetapkan.
        </p>
      </div>
    </div>
  </div>
</template>
