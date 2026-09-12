<script setup lang="ts">
import type { Product } from '#server/types/product'

interface Slide {
  key: string
  image: Product | null
  fallback: string
  imgId: string
}

const props = defineProps<{
  brosur: Product | null
  yasin: Product | null
  kaos: Product | null
}>()

const slides: Slide[] = [
  { key: 'brosur', image: props.brosur, fallback: '/images/brosur.jpg', imgId: 'inline-style-index-001' },
  { key: 'yasin', image: props.yasin, fallback: '/images/yasin.jpg', imgId: 'inline-style-index-002' },
  { key: 'kaos', image: props.kaos, fallback: '/images/kaos.jpg', imgId: 'inline-style-index-003' },
]
</script>

<template>
<div class="mb-5">
  <div class="carousel slide bg-light" id="myCarousel">
    <div class="carousel-indicators">
      <button
        v-for="(slide, index) in slides"
        :key="slide.key"
        :aria-label="`Slide ${index + 1}`"
        :aria-current="index === 0 ? 'true' : undefined"
        :class="{ active: index === 0 }"
        :data-bs-slide-to="index"
        data-bs-target="#myCarousel"
        type="button"
      />
    </div>
    <div class="carousel-inner">
      <div
        v-for="(slide, index) in slides"
        :key="slide.key"
        :class="['carousel-item', { active: index === 0 }]"
      >
        <div class="row">
          <div class="col-md-6 align-items-center d-flex">
            <div class="text-center text-md-start w-100 mb-3 mb-md-0 ms-md-5 mt-md-0 mt-3">
              <h4>Best Sale 2025</h4>
              <h1>Full Color Collection</h1>
              <p>Limited time offer -15%</p>
              <button class="btn my-btn-outline-primary" type="button">Shop Collection</button>
            </div>
          </div>
          <div class="col-md-6 text-end">
            <img
              alt=""
              class="object-fit-cover w-100"
              :id="slide.imgId"
              :src="slide.image?.image || slide.fallback"
            />
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#myCarousel" type="button">
      <span aria-hidden="true" class="carousel-control-prev-icon"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#myCarousel" type="button">
      <span aria-hidden="true" class="carousel-control-next-icon"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>
</template>
