<script setup lang="ts">
interface PriceRow {
  qty: number
  unitPrice: number
  discount?: number
  weight: string
  processing: string
}

defineProps<{
  rows: PriceRow[]
}>()

function formatRupiah(value: number): string {
  return value.toLocaleString('id-ID')
}
</script>

<template>
  <div class="overflow-x-auto border border-border rounded-xl">
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-surface text-secondary">
          <th class="px-4 py-3 text-left font-medium">Qty</th>
          <th class="px-4 py-3 text-left font-medium">Harga Satuan</th>
          <th class="px-4 py-3 text-left font-medium">Sub Total</th>
          <th class="px-4 py-3 text-left font-medium">Berat</th>
          <th class="px-4 py-3 text-left font-medium">Pengerjaan</th>
          <th class="px-4 py-3 text-left font-medium">Aksi</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border">
        <tr
          v-for="(row, i) in $props.rows"
          :key="i"
          class="hover:bg-surface/50 transition-colors"
        >
          <td class="px-4 py-3 font-medium">{{ row.qty }} Rim</td>
          <td class="px-4 py-3 text-primary font-semibold">
            Rp{{ formatRupiah(row.unitPrice) }}
          </td>
          <td class="px-4 py-3">
            <div>Rp{{ formatRupiah(row.unitPrice * row.qty) }}</div>
            <div v-if="row.discount" class="text-xs text-green-600">
              Hemat Rp{{ formatRupiah(row.discount) }}
            </div>
          </td>
          <td class="px-4 py-3">{{ row.weight }}</td>
          <td class="px-4 py-3">{{ row.processing }}</td>
          <td class="px-4 py-3">
            <div class="flex flex-wrap gap-2">
              <button type="button" class="text-xs text-primary hover:text-secondary transition">
                Wishlist
              </button>
              <NuxtLink
                to="/checkout"
                class="inline-block bg-primary text-white text-xs px-4 py-1.5 rounded-lg hover:bg-secondary transition"
              >
                Beli
              </NuxtLink>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
