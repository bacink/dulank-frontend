<script setup lang="ts">
useHead({
  title: 'Store - Percetakan Dulank',
  meta: [
    { name: 'description', content: 'Toko percetakan online Dulank — kertas, mesin cetak, laminasi, pond, dan poli.' },
  ],
})

interface ProductItem {
  name: string
  size?: string
  gram?: string
  minPrice?: string
  printPrice?: string
  maxDim?: string
  perCm?: string
  standard?: string
  halfCut?: string
  updated?: string
}

const tabs = ['Kertas', 'Mesin Cetak', 'Laminasi', 'Pond', 'Poli'] as const
type Tab = typeof tabs[number]
const activeTab = ref<Tab>('Kertas')

const kertasItems: ProductItem[] = [
  { name: 'Art Carton - Ika', size: '79x109 cm', gram: '250 GSM', updated: '20/12/2025' },
  { name: 'Art Carton - Wako', size: '79x109 cm', gram: '260 GSM', updated: '20/12/2025' },
  { name: 'Art Paper 150gr', size: '57x72 cm', gram: '150 GSM', updated: '19/12/2025' },
  { name: 'Art Paper 120gr', size: '57x72 cm', gram: '120 GSM', updated: '19/12/2025' },
  { name: 'HVS 70gr', size: '70x100 cm', gram: '70 GSM', updated: '18/12/2025' },
  { name: 'HVS 80gr', size: '70x100 cm', gram: '80 GSM', updated: '18/12/2025' },
  { name: 'Bond Paper 70gr', size: '64x84 cm', gram: '70 GSM', updated: '17/12/2025' },
]

const cetakItems: ProductItem[] = [
  { name: 'Heidelberg GTO52 - 4 Warna', minPrice: 'Rp240.000', printPrice: 'Rp60', updated: '20/12/2025' },
  { name: 'Heidelberg SM74 - 6 Warna', minPrice: 'Rp350.000', printPrice: 'Rp85', updated: '20/12/2025' },
  { name: 'Roland 700 - 5 Warna', minPrice: 'Rp300.000', printPrice: 'Rp75', updated: '19/12/2025' },
  { name: 'Komori Lithrone - 4 Warna', minPrice: 'Rp280.000', printPrice: 'Rp70', updated: '19/12/2025' },
]

const laminasiItems: ProductItem[] = [
  { name: 'Laminasi Doff', maxDim: '12x30 cm', perCm: 'Rp20', minPrice: 'Rp200.000', updated: '20/12/2025' },
  { name: 'Laminasi Glossy', maxDim: '12x30 cm', perCm: 'Rp18', minPrice: 'Rp180.000', updated: '20/12/2025' },
  { name: 'UV Vernish', maxDim: '12x30 cm', perCm: 'Rp10', minPrice: 'Rp100.000', updated: '19/12/2025' },
]

const pondItems: ProductItem[] = [
  { name: 'Mesin Pond Kecil', size: '79x109 cm', standard: 'Rp50 / minim Rp50.000', halfCut: 'Rp100 / minim Rp100.000', updated: '20/12/2025' },
  { name: 'Mesin Pond Sedang', size: '79x109 cm', standard: 'Rp50 / minim Rp50.000', halfCut: 'Rp100 / minim Rp100.000', updated: '20/12/2025' },
  { name: 'Mesin Pond Besar', size: '79x109 cm', standard: 'Rp50 / minim Rp50.000', halfCut: 'Rp100 / minim Rp100.000', updated: '19/12/2025' },
]

const poliItems: ProductItem[] = [
  { name: 'Standard', maxDim: '30x15 cm', perCm: 'Rp20', minPrice: 'Rp200.000\nHitungan: Rp50', updated: '20/12/2025' },
  { name: 'Hologram', maxDim: '30x15 cm', perCm: 'Rp18', minPrice: 'Rp180.000\nHitungan: Rp50', updated: '20/12/2025' },
  { name: 'Matte', maxDim: '30x15 cm', perCm: 'Rp15', minPrice: 'Rp150.000\nHitungan: Rp40', updated: '19/12/2025' },
]

const stats = [
  { label: 'Kertas', value: '12' },
  { label: 'Mesin Cetak', value: '4' },
  { label: 'Mesin Laminasi', value: '12' },
  { label: 'Mesin Pond', value: '12' },
  { label: 'Mesin Poli', value: '12' },
]

const tabContent: Record<Tab, ProductItem[]> = {
  'Kertas': kertasItems,
  'Mesin Cetak': cetakItems,
  'Laminasi': laminasiItems,
  'Pond': pondItems,
  'Poli': poliItems,
}
</script>

<template>
  <div>
    <div class="bg-surface border-b border-border py-4">
      <UContainer>
        <h1 class="text-xl font-semibold text-secondary">Store</h1>
        <p class="text-sm text-text mt-1">
          Home <span class="text-text/50">&gt;</span> Store
        </p>
      </UContainer>
    </div>

    <UContainer class="py-8">
      <!-- Profile Header -->
      <div
        class="mb-8 flex flex-col gap-6 rounded-xl border border-border bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between"
      >
        <div class="flex items-center gap-4">
          <div
            class="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white"
          >
            D
          </div>
          <div>
            <h2 class="text-lg font-semibold text-secondary">
              Percetakan Grafika 1
            </h2>
            <p class="text-sm text-text">Jakarta Pusat, Jakarta</p>
            <p class="text-xs text-text/60">
              Join Date: 19.30 15/12/2025
            </p>
          </div>
        </div>
        <div class="flex flex-wrap gap-6">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="text-center"
          >
            <p class="text-xl font-semibold text-primary">
              {{ stat.value }}
            </p>
            <p class="text-xs text-text">{{ stat.label }}</p>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="mb-6 flex flex-wrap gap-2 border-b border-border">
        <button
          v-for="tab in tabs"
          :key="tab"
          type="button"
          class="px-4 py-3 text-sm font-medium transition-all border-b-2 -mb-px"
          :class="
            activeTab === tab
              ? 'border-primary text-primary'
              : 'border-transparent text-text hover:text-secondary'
          "
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Tab Content -->
      <div class="rounded-xl border border-border bg-white overflow-hidden">
        <!-- Kertas Table -->
        <div v-if="activeTab === 'Kertas'" class="divide-y divide-border">
          <div
            class="hidden md:grid grid-cols-[1.5fr_1fr_1fr_1fr_0.5fr] gap-4 px-5 py-3 text-xs font-semibold text-text/70 uppercase tracking-wide bg-surface"
          >
            <span>Nama</span>
            <span>Ukuran</span>
            <span>Gramatur</span>
            <span>Update</span>
            <span></span>
          </div>
          <div
            v-for="(item, i) in tabContent[activeTab]"
            :key="i"
            class="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr_0.5fr] gap-4 px-5 py-4 items-center hover:bg-surface/30 transition-colors"
          >
            <div class="font-medium text-sm text-secondary">
              <span class="md:hidden text-text/60 text-xs">Nama: </span>
              {{ item.name }}
            </div>
            <div class="text-sm">
              <span class="md:hidden text-text/60 text-xs">Ukuran: </span>
              {{ item.size }}
            </div>
            <div class="text-sm">
              <span class="md:hidden text-text/60 text-xs">Gramatur: </span>
              {{ item.gram }}
            </div>
            <div class="text-sm text-text/70">
              <span class="md:hidden text-text/60 text-xs">Update: </span>
              {{ item.updated }}
            </div>
            <div class="text-right">
              <button
                type="button"
                class="text-xs text-primary hover:text-secondary transition"
              >
                Order
              </button>
            </div>
          </div>
        </div>

        <!-- Mesin Cetak Table -->
        <div v-else-if="activeTab === 'Mesin Cetak'" class="divide-y divide-border">
          <div
            class="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_0.5fr] gap-4 px-5 py-3 text-xs font-semibold text-text/70 uppercase tracking-wide bg-surface"
          >
            <span>Nama</span>
            <span>Harga Minim</span>
            <span>Harga Druck</span>
            <span>Update</span>
            <span></span>
          </div>
          <div
            v-for="(item, i) in tabContent[activeTab]"
            :key="i"
            class="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_0.5fr] gap-4 px-5 py-4 items-center hover:bg-surface/30 transition-colors"
          >
            <div class="font-medium text-sm text-secondary">
              <span class="md:hidden text-text/60 text-xs">Nama: </span>
              {{ item.name }}
            </div>
            <div class="text-sm text-primary">
              <span class="md:hidden text-text/60 text-xs">Harga Minim: </span>
              {{ item.minPrice }}
            </div>
            <div class="text-sm">
              <span class="md:hidden text-text/60 text-xs">Harga Druck: </span>
              {{ item.printPrice }}
            </div>
            <div class="text-sm text-text/70">
              <span class="md:hidden text-text/60 text-xs">Update: </span>
              {{ item.updated }}
            </div>
            <div class="text-right">
              <button
                type="button"
                class="text-xs text-primary hover:text-secondary transition"
              >
                Detail
              </button>
            </div>
          </div>
        </div>

        <!-- Laminasi Table -->
        <div v-else-if="activeTab === 'Laminasi'" class="divide-y divide-border">
          <div
            class="hidden md:grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_0.5fr] gap-4 px-5 py-3 text-xs font-semibold text-text/70 uppercase tracking-wide bg-surface"
          >
            <span>Nama</span>
            <span>Ukuran Max</span>
            <span>Harga/cm</span>
            <span>Harga Minim</span>
            <span>Update</span>
            <span></span>
          </div>
          <div
            v-for="(item, i) in tabContent[activeTab]"
            :key="i"
            class="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_0.5fr] gap-4 px-5 py-4 items-center hover:bg-surface/30 transition-colors"
          >
            <div class="font-medium text-sm text-secondary">
              <span class="md:hidden text-text/60 text-xs">Nama: </span>
              {{ item.name }}
            </div>
            <div class="text-sm">
              <span class="md:hidden text-text/60 text-xs">Ukuran Max: </span>
              {{ item.maxDim }}
            </div>
            <div class="text-sm">
              <span class="md:hidden text-text/60 text-xs">Harga/cm: </span>
              {{ item.perCm }}
            </div>
            <div class="text-sm text-primary whitespace-pre-line">
              <span class="md:hidden text-text/60 text-xs">Harga Minim: </span>
              {{ item.minPrice }}
            </div>
            <div class="text-sm text-text/70">
              <span class="md:hidden text-text/60 text-xs">Update: </span>
              {{ item.updated }}
            </div>
          </div>
        </div>

        <!-- Pond Table -->
        <div v-else-if="activeTab === 'Pond'" class="divide-y divide-border">
          <div
            class="hidden md:grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_0.5fr] gap-4 px-5 py-3 text-xs font-semibold text-text/70 uppercase tracking-wide bg-surface"
          >
            <span>Nama</span>
            <span>Ukuran</span>
            <span>Standard</span>
            <span>Setengah Putus</span>
            <span>Update</span>
            <span></span>
          </div>
          <div
            v-for="(item, i) in tabContent[activeTab]"
            :key="i"
            class="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_0.5fr] gap-4 px-5 py-4 items-center hover:bg-surface/30 transition-colors"
          >
            <div class="font-medium text-sm text-secondary">
              <span class="md:hidden text-text/60 text-xs">Nama: </span>
              {{ item.name }}
            </div>
            <div class="text-sm">
              <span class="md:hidden text-text/60 text-xs">Ukuran: </span>
              {{ item.size }}
            </div>
            <div class="text-sm whitespace-pre-line">
              <span class="md:hidden text-text/60 text-xs">Standard: </span>
              {{ item.standard }}
            </div>
            <div class="text-sm whitespace-pre-line">
              <span class="md:hidden text-text/60 text-xs">Setengah Putus: </span>
              {{ item.halfCut }}
            </div>
            <div class="text-sm text-text/70">
              <span class="md:hidden text-text/60 text-xs">Update: </span>
              {{ item.updated }}
            </div>
          </div>
        </div>

        <!-- Poli Table -->
        <div v-else-if="activeTab === 'Poli'" class="divide-y divide-border">
          <div
            class="hidden md:grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_0.5fr] gap-4 px-5 py-3 text-xs font-semibold text-text/70 uppercase tracking-wide bg-surface"
          >
            <span>Nama</span>
            <span>Ukuran Max</span>
            <span>Harga/cm</span>
            <span>Harga Minim</span>
            <span>Update</span>
            <span></span>
          </div>
          <div
            v-for="(item, i) in tabContent[activeTab]"
            :key="i"
            class="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_0.5fr] gap-4 px-5 py-4 items-center hover:bg-surface/30 transition-colors"
          >
            <div class="font-medium text-sm text-secondary">
              <span class="md:hidden text-text/60 text-xs">Nama: </span>
              {{ item.name }}
            </div>
            <div class="text-sm">
              <span class="md:hidden text-text/60 text-xs">Ukuran Max: </span>
              {{ item.maxDim }}
            </div>
            <div class="text-sm">
              <span class="md:hidden text-text/60 text-xs">Harga/cm: </span>
              {{ item.perCm }}
            </div>
            <div class="text-sm text-primary whitespace-pre-line">
              <span class="md:hidden text-text/60 text-xs">Harga Minim: </span>
              {{ item.minPrice }}
            </div>
            <div class="text-sm text-text/70">
              <span class="md:hidden text-text/60 text-xs">Update: </span>
              {{ item.updated }}
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
