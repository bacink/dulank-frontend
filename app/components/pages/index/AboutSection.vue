<script setup lang="ts">
import type { Product } from '#server/types/product'

defineProps<{
  brosur: Product | null
  yasin: Product | null
}>()
</script>

<template>
<div class="pe-lg-5">
  <h5 class="mb-3">About Us</h5>
  <p class="text-standard" id="inline-style-index-004">
    Sejak berdiri pada tahun 2019, Dulank hadir sebagai solusi percetakan terlengkap untuk memenuhi kebutuhan
    masyarakat dalam berbagai lini. Berbekal pengalaman lebih dari lima tahun, kami telah dipercaya oleh
    ratusan pelanggan individu maupun perusahaan untuk menangani berbagai jenis kebutuhan cetak, mulai dari sablon
    kaos, cetak gelas custom, hingga produksi spanduk skala besar. Komitmen kami adalah memberikan hasil cetakan
    yang tidak hanya berkualitas, tetapi juga tepat waktu, sesuai harapan, dan bernilai estetika tinggi. Dengan mengusung
    semangat "Cetak Apapun, Dulank Jawabannya", kami terus mengembangkan layanan agar mampu mengikuti tren dan
    kebutuhan pasar yang terus berubah setiap tahunnya. Kepercayaan pelanggan menjadi pendorong utama kami untuk menjaga
    integritas, profesionalisme, serta menjaga hubungan kerja jangka panjang yang saling menguntungkan.
    Dulank tidak hanya mengandalkan peralatan modern dan teknologi cetak terkini, tetapi juga mengedepankan
    sumber daya manusia yang kompeten dan berpengalaman di bidangnya. Kami percaya bahwa kualitas hasil
    cetakan sangat dipengaruhi oleh keahlian tangan-tangan terampil yang memahami karakteristik bahan dan
    teknik produksi. Oleh karena itu, seluruh tim kami terdiri dari operator, desainer grafis, serta
    customer service yang terlatih dan responsif terhadap setiap permintaan maupun konsultasi dari pelanggan.
    Selain itu, kami juga menyediakan sistem pemesanan yang fleksibel—baik secara online maupun offline—agar
    pelanggan dari berbagai daerah tetap dapat menikmati layanan kami dengan mudah dan nyaman. Dalam setiap
    proyek, kami selalu mengutamakan komunikasi dua arah untuk memastikan bahwa hasil akhir sesuai dengan keinginan
    pelanggan, baik dari segi desain, warna, maupun jenis bahan yang digunakan.
  </p>
</div>

<div class="row mb-4 mb-md-0">
  <div class="col-md-6 mb-4 mb-md-0">
    <img alt="" class="object-fit-cover w-100" :src="brosur?.image || '/images/brosur.jpg'" />
  </div>
  <div class="col-md-6 d-flex align-items-center">
    <div class="text-center">
      <h1>Heading 1</h1>
      <h3>Heading 3</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus omnis cumque quas voluptas amet sunt excepturi, iure natus temporibus aut incidunt necessitatibus ullam mollitia ad distinctio ab voluptatum numquam praesentium.</p>
      <button class="btn my-btn-primary" type="button">Lihat Price List</button>
    </div>
  </div>
</div>

<div class="row mb-4 mb-md-0">
  <div class="col-md-6 order-md-2 mb-4 mb-md-0">
    <img alt="" class="object-fit-cover w-100" :src="yasin?.image || '/images/yasin.jpg'" />
  </div>
  <div class="col-md-6 d-flex align-items-center order-md-1">
    <div class="text-center">
      <h1>Heading 1</h1>
      <h3>Heading 3</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus omnis cumque quas voluptas amet sunt excepturi, iure natus temporibus aut incidunt necessitatibus ullam mollitia ad distinctio ab voluptatum numquam praesentium.</p>
      <button class="btn my-btn-primary" type="button">Lihat Price List</button>
    </div>
  </div>
</div>
</template>
