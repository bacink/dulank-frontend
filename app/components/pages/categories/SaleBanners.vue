<script setup lang="ts">
const saleItems = [
  { title: 'Brosur Flyer ukuran A4', discount: 'Sale 20% off all store', image: '/images/brosur.jpg' },
  { title: 'Buku Yasin', discount: 'Sale 35%', image: '/images/yasin.jpg' },
]
</script>

<template>
<div class="row mb-4">
  <div class="col-md-7 p-2" v-for="(item, index) in saleItems" :key="index">
    <div class="bg-light rounded-1 h-100 category-sale" role="button">
      <div class="row">
        <div class="col-md-7 my-md-auto my-4 text-md-start text-center">
          <div class="ms-md-4 py-2">
            <p class="fs-6">{{ item.discount }}</p>
            <h4>{{ item.title }}</h4>
            <button class="btn my-btn-primary mt-2" type="button">Shop Now</button>
          </div>
        </div>
        <div class="col-md-5 overflow-hidden">
          <img
            alt=""
            class="category-sale-image w-100 object-fit-cover"
            height="200"
            :src="item.image"
          />
        </div>
      </div>
    </div>
  </div>
</div>
</template>
