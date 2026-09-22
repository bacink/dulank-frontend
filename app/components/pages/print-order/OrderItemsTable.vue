<script setup lang="ts">
import type { Order } from "~/composables/useOrders";

interface Billing {
  total: number;
}

const props = defineProps<{ bill: Billing; order: Order }>();
const money = (value: number) => `Rp${value.toLocaleString("id-ID")}`;
const subtotal = computed(() =>
  props.order.items.reduce((sum, item) => sum + item.total, 0),
);
const shippingCost = computed(() => Math.max(props.order.total - subtotal.value, 0));
const tax = computed(() => Math.round(subtotal.value * 0.11));
</script>

<template>
  <div class="mb-3">
    <div class="fw-semibold text-standard mb-2">Invoice Items</div>
    <div class="table-responsive">
      <table class="table table-bordered align-middle mb-0">
        <thead>
          <tr>
            <th class="text-standard">Products</th>
            <th class="text-end text-standard">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in order.items" :key="item.productId">
            <td class="text-standard">
              <span class="fw-semibold text-standard">{{ item.name }}</span
              ><br /><br />
              <span class="text-standard fst-italic">Description:</span><br />
              <span class="text-standard">Product ID: {{ item.productId }}</span>
              <div class="d-flex justify-content-between">
                <span class="text-standard"
                  >{{ money(item.price) }} x {{ item.quantity }} Pcs</span
                >
              </div>
            </td>
            <td class="text-end text-standard">{{ money(item.total) }}</td>
          </tr>
          <tr>
            <td class="text-end text-standard fw-semibold" colspan="1">
              Total Harga
            </td>
            <td class="text-end text-standard">{{ money(subtotal) }}</td>
          </tr>
          <tr>
            <td class="text-end text-standard fw-semibold" colspan="1">
              Voucher (DUL4NK12)
            </td>
            <td class="text-end text-standard">Rp0</td>
          </tr>
          <tr>
            <td class="text-end text-standard fw-semibold" colspan="1">
              Biaya Pengiriman
            </td>
            <td class="text-end text-standard">{{ money(shippingCost) }}</td>
          </tr>
          <tr>
            <td class="text-end text-standard fw-semibold" colspan="1">
              Sub total sebelum PPN
            </td>
            <td class="text-end text-standard">{{ money(subtotal) }}</td>
          </tr>
          <tr>
            <td class="text-end text-standard fw-semibold" colspan="1">
              PPN (11%)
            </td>
            <td class="text-end text-standard">{{ money(tax) }}</td>
          </tr>
          <tr>
            <td class="text-end text-standard fw-semibold" colspan="1">
              Grand Total
            </td>
            <td class="text-end text-standard fw-semibold">
              {{ money(bill.total || order.total) }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-standard mt-1">* Indicates a taxed item.</div>
    </div>
  </div>
</template>
