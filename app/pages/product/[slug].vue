<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const slug = route.params.slug as string;

interface SpecOption {
  label: string;
  value: string;
  price?: number;
}

interface SpecGroup {
  name: string;
  options: SpecOption[];
  multiple?: boolean;
}

interface PriceRow {
  qty: number;
  unitPrice: number;
  discount?: number;
  weight: string;
  processing: string;
}

interface DesignTemplate {
  id: string;
  name: string;
  image: string;
  category: string;
}

interface RelatedProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  category?: string;
}

interface ProductConfig {
  title: string;
  breadcrumb: string;
  description: string;
  image: string;
  specs: SpecGroup[];
  priceRows: PriceRow[];
  designTemplates: DesignTemplate[];
  designCategories: string[];
  downloads: string[];
  faqs: { q: string; a: string }[];
  relatedProducts: RelatedProduct[];
}

const productConfig: Record<string, ProductConfig> = {
  "cetak-full-color": {
    title: "Cetak Full Color",
    breadcrumb: "Home > Products > Brosur",
    description:
      "Cetak brosur full color berkualitas tinggi untuk kebutuhan promosi bisnis Anda. Tersedia dalam berbagai ukuran dan bahan kertas.",
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=600&auto=format&fit=crop",
    specs: [
      {
        name: "Ukuran Brosur",
        options: [
          { label: "A4 (210x297mm)", value: "A4", price: 50000 },
          { label: "A5 (148x210mm)", value: "A5", price: 35000 },
          { label: "A3 (297x420mm)", value: "A3", price: 90000 },
          { label: "Custom", value: "custom", price: 0 },
        ],
      },
      {
        name: "Jenis Bahan Kertas",
        options: [
          { label: "Art paper 150gr", value: "art-150", price: 12000 },
          { label: "Art paper 120gr", value: "art-120", price: 8000 },
          { label: "HVS 100gr", value: "hvs-100", price: 5000 },
        ],
      },
      {
        name: "Laminasi",
        options: [
          { label: "Tanpa Laminasi", value: "none", price: 0 },
          { label: "Laminasi Doff", value: "doff", price: 8000 },
          { label: "Laminasi Glossy", value: "glossy", price: 8000 },
          { label: "Laminasi Doff + Spot UV", value: "doff-spot", price: 8000 },
        ],
      },
      {
        name: "Sisi Cetak",
        options: [
          { label: "Cetak 1 Sisi", value: "single", price: 0 },
          { label: "Cetak Bolak Balik", value: "double", price: 0 },
        ],
      },
      {
        name: "Lipatan",
        options: [
          { label: "Tanpa Lipatan", value: "none", price: 0 },
          { label: "1 Lipatan", value: "1-fold", price: 5000 },
          { label: "2 Lipatan", value: "2-fold", price: 5000 },
        ],
      },
    ],
    priceRows: [
      { qty: 10, unitPrice: 65000, weight: "30 Kg", processing: "3 Hari" },
      {
        qty: 13,
        unitPrice: 64000,
        discount: 130000,
        weight: "38 Kg",
        processing: "3 Hari",
      },
      {
        qty: 17,
        unitPrice: 64000,
        discount: 170000,
        weight: "42 Kg",
        processing: "3 Hari",
      },
      {
        qty: 20,
        unitPrice: 62000,
        discount: 600000,
        weight: "49 Kg",
        processing: "3 Hari",
      },
      {
        qty: 25,
        unitPrice: 60000,
        discount: 1250000,
        weight: "55 Kg",
        processing: "4 Hari",
      },
    ],
    designTemplates: [
      {
        id: "1",
        name: "Brosur Korporat",
        image:
          "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg",
        category: "Korporat",
      },
      {
        id: "2",
        name: "Brosur Kuliner",
        image:
          "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg",
        category: "Kuliner",
      },
      {
        id: "3",
        name: "Brosur Event",
        image:
          "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg",
        category: "Event",
      },
      {
        id: "4",
        name: "Brosur Produk",
        image:
          "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg",
        category: "Produk",
      },
      {
        id: "5",
        name: "Brosur Sosial",
        image:
          "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg",
        category: "Sosial",
      },
      {
        id: "6",
        name: "Brosur Edukasi",
        image:
          "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg",
        category: "Edukasi",
      },
    ],
    designCategories: ["Semua", "Kuliner", "Laundry", "Kursus", "Otomotif"],
    downloads: [
      "Brosur Ukuran A4 (210x297mm)",
      "Brosur Ukuran A5 (148x210mm)",
      "Panduan Desain File",
      "Spread Sheet",
    ],
    faqs: [
      {
        q: "Apakah bisa request ukuran khusus?",
        a: "Bisa, silakan konsultasikan dengan tim kami.",
      },
      {
        q: "Berapa lama proses pengerjaan?",
        a: "Estimasi sesuai tabel dan variasi pesanan.",
      },
      {
        q: "Apakah tersedia layanan desain?",
        a: "Ya, kami menyediakan layanan desain dengan biaya tambahan.",
      },
    ],
    relatedProducts: [
      {
        id: "1",
        name: "Kop Surat Letter Head",
        image:
          "https://percetakan-dulank.com/wp-content/uploads/2023/04/140630376_4088b1f6-664b-4ace-92ae-1b90ca464988_1200_968.jpg",
        price: 75000,
        badge: "New",
      },
      {
        id: "2",
        name: "Kalender Plakat Acrilyc",
        image:
          "https://percetakan-dulank.com/wp-content/uploads/2023/04/Kalender-Plakat-Acrilyc-570x570.jpg",
        price: 262500,
        badge: "Sale",
      },
      {
        id: "3",
        name: "Kartu Nama",
        image:
          "https://percetakan-dulank.com/wp-content/uploads/2023/08/kn_48.jpg",
        price: 50000,
        badge: "New",
      },
      {
        id: "4",
        name: "Bendera",
        image:
          "https://percetakan-dulank.com/wp-content/uploads/2023/04/Bendera-1-570x570.jpg",
        price: 50400,
        oldPrice: 80000,
        badge: "-37%",
      },
    ],
  },
  "cetak-buku": {
    title: "Cetak Buku",
    breadcrumb: "Home > Products > Cetak Buku",
    description:
      "Cetak buku untuk kebutuhan buku bacaan, buku paket, modul, company profile tebal, sampai buku tulis custom.",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop",
    specs: [
      {
        name: "Orientasi",
        options: [
          { label: "Portrait (Berdiri)", value: "portrait", price: 0 },
          { label: "Landscape (Tidur)", value: "landscape", price: 0 },
        ],
      },
      {
        name: "Ukuran",
        options: [
          { label: "A4 (210x297mm)", value: "a4", price: 50000 },
          { label: "A5 (148x210mm)", value: "a5", price: 35000 },
          { label: "B4 (250x353mm)", value: "b4", price: 90000 },
          { label: "B5 (250x176mm)", value: "b5", price: 90000 },
        ],
      },
      {
        name: "Binding/Jilid",
        options: [
          { label: "Lem Panas", value: "glue", price: 0 },
          { label: "Spiral", value: "spiral", price: 0 },
          { label: "Steples", value: "staple", price: 0 },
          { label: "Perfect Binding", value: "perfect", price: 0 },
        ],
      },
      {
        name: "Jenis Kertas Isi",
        options: [
          { label: "HVS 70gr", value: "hvs-70", price: 12000 },
          { label: "Bookpaper 70gr", value: "bookpaper", price: 8000 },
          { label: "Art Paper 100gr", value: "art-100", price: 5000 },
        ],
      },
      {
        name: "Laminasi Cover",
        options: [
          { label: "Tanpa Laminasi", value: "none", price: 0 },
          { label: "Glossy", value: "glossy", price: 8000 },
          { label: "Doff", value: "doff", price: 8000 },
          { label: "UV Vernish", value: "uv", price: 8000 },
          { label: "Spot UV", value: "spot-uv", price: 8000 },
        ],
      },
      {
        name: "Tipe Cetak",
        options: [
          { label: "1 Warna", value: "bw", price: 0 },
          { label: "Full Color", value: "color", price: 0 },
          { label: "1 Warna & Full Color", value: "mixed", price: 0 },
        ],
      },
      {
        name: "Jenis Cover",
        options: [
          { label: "Softcover", value: "soft", price: 3000 },
          { label: "HardCover", value: "hard", price: 5000 },
        ],
      },
      {
        name: "Finishing Cover",
        options: [
          { label: "Glossy", value: "glossy", price: 3000 },
          { label: "Doff", value: "doff", price: 5000 },
          { label: "Spot UV", value: "spot-uv", price: 5000 },
        ],
      },
    ],
    priceRows: [
      { qty: 10, unitPrice: 65000, weight: "30 Kg", processing: "3 Hari" },
      {
        qty: 13,
        unitPrice: 64000,
        discount: 130000,
        weight: "38 Kg",
        processing: "3 Hari",
      },
      {
        qty: 17,
        unitPrice: 64000,
        discount: 170000,
        weight: "42 Kg",
        processing: "3 Hari",
      },
      {
        qty: 20,
        unitPrice: 62000,
        discount: 600000,
        weight: "49 Kg",
        processing: "3 Hari",
      },
      {
        qty: 25,
        unitPrice: 60000,
        discount: 1250000,
        weight: "55 Kg",
        processing: "4 Hari",
      },
    ],
    designTemplates: [
      {
        id: "1",
        name: "Buku Paket",
        image:
          "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg",
        category: "Edukasi",
      },
      {
        id: "2",
        name: "Buku Bacaan",
        image:
          "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg",
        category: "Edukasi",
      },
      {
        id: "3",
        name: "Modul Belajar",
        image:
          "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg",
        category: "Edukasi",
      },
      {
        id: "4",
        name: "Buku Tulis",
        image:
          "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg",
        category: "ATK",
      },
      {
        id: "5",
        name: "Notebook Custom",
        image:
          "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg",
        category: "ATK",
      },
      {
        id: "6",
        name: "Agenda",
        image:
          "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg",
        category: "ATK",
      },
    ],
    designCategories: ["Semua", "Kuliner", "Laundry", "Kursus", "Otomotif"],
    downloads: [
      "Buku A4 Portrait",
      "Buku A5 Portrait",
      "Buku B5 Landscape",
      "Buku Tulis Custom",
    ],
    faqs: [
      {
        q: "Apakah bisa request ukuran khusus?",
        a: "Bisa, silakan konsultasikan dengan tim kami.",
      },
      {
        q: "Berapa lama proses pengerjaan?",
        a: "Estimasi sesuai tabel dan variasi pesanan.",
      },
    ],
    relatedProducts: [
      {
        id: "1",
        name: "Kop Surat Letter Head",
        image:
          "https://percetakan-dulank.com/wp-content/uploads/2023/04/140630376_4088b1f6-664b-4ace-92ae-1b90ca464988_1200_968.jpg",
        price: 75000,
        badge: "New",
      },
      {
        id: "2",
        name: "Kalender Plakat Acrilyc",
        image:
          "https://percetakan-dulank.com/wp-content/uploads/2023/04/Kalender-Plakat-Acrilyc-570x570.jpg",
        price: 262500,
        badge: "Sale",
      },
      {
        id: "3",
        name: "Kartu Nama",
        image:
          "https://percetakan-dulank.com/wp-content/uploads/2023/08/kn_48.jpg",
        price: 50000,
        badge: "New",
      },
      {
        id: "4",
        name: "Bendera",
        image:
          "https://percetakan-dulank.com/wp-content/uploads/2023/04/Bendera-1-570x570.jpg",
        price: 50400,
        oldPrice: 80000,
        badge: "-37%",
      },
    ],
  },
  kalender: {
    title: "Kalender 2027",
    breadcrumb: "Home > Products > Kalender 2027",
    description:
      "Cetak kalender dinding, kalender meja, dan kalender bolak balik dengan kualitas terbaik.",
    image:
      "https://images.unsplash.com/photo-1506784365847-bbad939c688d?q=80&w=600&auto=format&fit=crop",
    specs: [
      {
        name: "Jumlah Isi",
        options: [
          { label: "1 Lembar", value: "1", price: 0 },
          { label: "2 Lembar", value: "2", price: 0 },
          { label: "3 Lembar", value: "3", price: 0 },
          { label: "4 Lembar", value: "4", price: 0 },
          { label: "6 Lembar", value: "6", price: 0 },
          { label: "7 Lembar", value: "7", price: 0 },
          { label: "12 Lembar", value: "12", price: 0 },
          { label: "13 Lembar", value: "13", price: 0 },
        ],
      },
      {
        name: "Ukuran Kalender",
        options: [
          { label: "Kecil 31x43", value: "small-31x43", price: 50000 },
          { label: "Kecil 31x48", value: "small-31x48", price: 35000 },
          { label: "Sedang 35x50", value: "medium-35x50", price: 90000 },
          { label: "Sedang 38x54", value: "medium-38x54", price: 90000 },
          { label: "Besar 43x64", value: "large-43x64", price: 90000 },
        ],
      },
      {
        name: "Hanger/Gantungan",
        options: [
          { label: "Spiral", value: "spiral", price: 0 },
          { label: "Jepit Kaleng", value: "clip", price: 0 },
          { label: "Mata Ayam", value: "eyelet", price: 0 },
        ],
      },
      {
        name: "Jenis Bahan",
        options: [
          { label: "Art Paper", value: "art", price: 12000 },
          { label: "Art Carton", value: "carton", price: 8000 },
          { label: "Karton BW", value: "bw", price: 5000 },
          { label: "Karton Duplex", value: "duplex", price: 5000 },
        ],
      },
      {
        name: "Laminasi",
        options: [
          { label: "Tanpa Laminasi", value: "none", price: 0 },
          { label: "Glossy", value: "glossy", price: 8000 },
          { label: "Doff", value: "doff", price: 8000 },
          { label: "UV Vernish", value: "uv", price: 8000 },
          { label: "Spot UV", value: "spot-uv", price: 8000 },
        ],
      },
      {
        name: "Jenis Cetak",
        options: [
          { label: "Cetak Full Color", value: "full", price: 0 },
          { label: "Cetak 2 Warna", value: "2color", price: 0 },
        ],
      },
      {
        name: "Cover Amplop",
        options: [
          { label: "Tanpa Cover Amplop", value: "none", price: 0 },
          { label: "Pakai Amplop Kertas", value: "paper", price: 5000 },
          { label: "Pakai Amplop Plastik", value: "plastic", price: 5000 },
        ],
      },
      {
        name: "Posisi",
        options: [
          { label: "Landscape (Tidur)", value: "landscape", price: 3000 },
          { label: "Portrait (Berdiri)", value: "portrait", price: 5000 },
        ],
      },
    ],
    priceRows: [
      { qty: 10, unitPrice: 65000, weight: "30 Kg", processing: "3 Hari" },
      {
        qty: 13,
        unitPrice: 64000,
        discount: 130000,
        weight: "38 Kg",
        processing: "3 Hari",
      },
      {
        qty: 17,
        unitPrice: 64000,
        discount: 170000,
        weight: "42 Kg",
        processing: "3 Hari",
      },
      {
        qty: 20,
        unitPrice: 62000,
        discount: 600000,
        weight: "49 Kg",
        processing: "3 Hari",
      },
      {
        qty: 25,
        unitPrice: 60000,
        discount: 1250000,
        weight: "55 Kg",
        processing: "4 Hari",
      },
    ],
    designTemplates: [
      {
        id: "1",
        name: "Kalender Dinding",
        image:
          "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg",
        category: "Dinding",
      },
      {
        id: "2",
        name: "Kalender Meja",
        image:
          "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg",
        category: "Meja",
      },
      {
        id: "3",
        name: "Kalender Spiral",
        image:
          "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg",
        category: "Spiral",
      },
      {
        id: "4",
        name: "Corporate",
        image:
          "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg",
        category: "Corporate",
      },
      {
        id: "5",
        name: "Promosi",
        image:
          "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg",
        category: "Promosi",
      },
      {
        id: "6",
        name: "Minimalis",
        image:
          "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg",
        category: "Minimalis",
      },
    ],
    designCategories: ["Semua", "Kuliner", "Laundry", "Kursus", "Otomotif"],
    downloads: [
      "Kalender Dinding 31x43",
      "Kalender Dinding 35x50",
      "Kalender Meja 15x21cm",
      "Kalender Bolak Balik Sprial Tengah",
    ],
    faqs: [
      {
        q: "Apakah bisa request ukuran khusus?",
        a: "Bisa, silakan konsultasikan dengan tim kami.",
      },
      {
        q: "Berapa lama proses pengerjaan?",
        a: "Estimasi sesuai tabel dan variasi pesanan.",
      },
    ],
    relatedProducts: [
      {
        id: "1",
        name: "Kop Surat Letter Head",
        image:
          "https://percetakan-dulank.com/wp-content/uploads/2023/04/140630376_4088b1f6-664b-4ace-92ae-1b90ca464988_1200_968.jpg",
        price: 75000,
        badge: "New",
      },
      {
        id: "2",
        name: "Kalender Plakat Acrilyc",
        image:
          "https://percetakan-dulank.com/wp-content/uploads/2023/04/Kalender-Plakat-Acrilyc-570x570.jpg",
        price: 262500,
        badge: "Sale",
      },
      {
        id: "3",
        name: "Kartu Nama",
        image:
          "https://percetakan-dulank.com/wp-content/uploads/2023/08/kn_48.jpg",
        price: 50000,
        badge: "New",
      },
      {
        id: "4",
        name: "Bendera",
        image:
          "https://percetakan-dulank.com/wp-content/uploads/2023/04/Bendera-1-570x570.jpg",
        price: 50400,
        oldPrice: 80000,
        badge: "-37%",
      },
    ],
  },
};

const config = productConfig[slug];
if (!config) {
  throw createError({ statusCode: 404, statusMessage: "Product not found" });
}

useHead({
  title: `${config.title} - Percetakan Dulank`,
  meta: [{ name: "description", content: config.description }],
});

const selectedSpecs = ref<Record<string, string>>({});
const showPriceTable = ref(false);

function updateSpec(key: string, value: string) {
  selectedSpecs.value[key] = value;
}
</script>

<template>
  <div>
    <!-- Breadcrumb -->
    <div class="bg-surface border-b border-border py-3">
      <UContainer>
        <p class="text-xs text-text/70">
          <NuxtLink to="/" class="transition hover:text-primary">Home</NuxtLink>
          <span class="mx-1 text-text/40">&gt;</span>
          <NuxtLink to="/categories" class="transition hover:text-primary"
            >Products</NuxtLink
          >
          <span class="mx-1 text-text/40">&gt;</span>
          <span class="font-medium text-secondary">{{ config.title }}</span>
        </p>
      </UContainer>
    </div>

    <UContainer class="py-8">
      <!-- Product Hero: Image + Specs -->
      <div
        class="mb-8 overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
      >
        <div class="grid gap-0 lg:grid-cols-5">
          <!-- Image Section -->
          <div class="bg-surface p-6 lg:col-span-2">
            <h1
              class="mb-3 inline-block rounded-lg bg-white px-4 py-2 text-xl font-semibold text-secondary"
            >
              {{ config.title }}
            </h1>
            <p class="mb-5 px-4 text-sm leading-relaxed text-text/80">
              {{ config.description }}
            </p>
            <div class="flex gap-3 px-4">
              <div
                class="flex-1 aspect-square overflow-hidden rounded-xl border border-border"
              >
                <img
                  :src="config.image"
                  :alt="config.title"
                  class="h-full w-full object-cover"
                />
              </div>
              <div class="hidden flex-col gap-2 sm:flex">
                <img
                  v-for="(img, i) in [config.image, config.image, config.image]"
                  :key="i"
                  :src="img"
                  :alt="`${config.title} variant ${i + 1}`"
                  class="h-16 w-16 cursor-pointer rounded-lg border-2 object-cover transition-all hover:border-primary"
                  :class="{
                    'border-primary': i === 0,
                    'border-border': i !== 0,
                  }"
                />
              </div>
            </div>
          </div>

          <!-- Specification Form -->
          <div class="p-6 lg:col-span-3 lg:p-8">
            <h2
              class="mb-6 inline-block rounded-lg bg-surface px-4 py-2 text-lg font-semibold text-secondary"
            >
              Tentukan Spesifikasi
            </h2>

            <div class="mt-6 space-y-5">
              <div v-for="spec in config.specs" :key="spec.name">
                <label class="mb-2 block text-sm font-medium text-secondary">
                  {{ spec.name }}
                </label>
                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="opt in spec.options"
                    :key="opt.value"
                    type="button"
                    class="rounded-lg border px-4 py-2 text-sm transition-all hover:border-primary"
                    :class="
                      selectedSpecs[spec.name] === opt.value
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-border bg-white text-text'
                    "
                    @click="updateSpec(spec.name, opt.value)"
                  >
                    {{ opt.label }}
                    <span v-if="opt.price" class="ml-1 text-xs text-text/50">
                      +Rp{{ opt.price.toLocaleString("id-ID") }}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              class="mt-6 w-full rounded-lg bg-primary py-3 font-medium text-white transition-colors hover:bg-secondary"
              @click="showPriceTable = !showPriceTable"
            >
              {{ showPriceTable ? "Sembunyikan Harga" : "Hitung Harga" }}
            </button>
          </div>
        </div>

        <!-- Price Table -->
        <div
          v-if="showPriceTable"
          class="border-t border-border bg-surface/30 p-6"
        >
          <div class="mb-4 flex items-center justify-between">
            <h2
              class="inline-block rounded-lg bg-white px-4 py-2 text-lg font-semibold text-secondary"
            >
              List Harga {{ config.title }}
            </h2>
            <div class="flex items-center gap-3">
              <span class="text-sm text-text">Share:</span>
              <button
                type="button"
                class="text-text/60 transition hover:text-primary"
              >
                <i class="fab fa-facebook-f"></i>
              </button>
              <button
                type="button"
                class="text-text/60 transition hover:text-primary"
              >
                <i class="fab fa-whatsapp"></i>
              </button>
              <button
                type="button"
                class="text-text/60 transition hover:text-primary"
              >
                <i class="fas fa-link"></i>
              </button>
            </div>
          </div>

          <ProductPriceTable :rows="config.priceRows" />
        </div>
      </div>

      <!-- Design Templates -->
      <div class="mb-8">
        <h2 class="mb-4 text-lg font-semibold text-secondary">
          Design {{ config.title }}
        </h2>
        <ProductDesignCard
          :templates="config.designTemplates"
          :categories="config.designCategories"
        />
      </div>

      <!-- FAQ & Guidelines -->
      <div
        class="mb-8 overflow-hidden rounded-xl border border-border bg-white"
      >
        <div class="border-b border-border">
          <div class="flex">
            <button
              class="border-b-2 border-primary px-6 py-3 text-sm font-medium text-primary"
            >
              Panduan Design
            </button>
            <button
              class="border-b-2 border-transparent px-6 py-3 text-sm font-medium text-text transition hover:text-secondary"
            >
              FAQ
            </button>
          </div>
        </div>
        <div class="p-6">
          <div class="space-y-2">
            <div
              v-for="(download, i) in config.downloads"
              :key="i"
              class="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-surface"
            >
              <i class="fas fa-file-pdf text-lg text-red-500"></i>
              <span class="text-sm text-text">{{ download }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <div class="mb-8">
        <h2 class="mb-4 text-center text-lg font-semibold text-secondary">
          Buy Together
        </h2>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
          <ProductCard
            v-for="product in config.relatedProducts"
            :key="product.id"
            :product="{ ...product, category: product.category ?? 'Produk' }"
          />
        </div>
      </div>
    </UContainer>
  </div>
</template>
