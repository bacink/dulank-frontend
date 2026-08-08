<script setup lang="ts">
const props = defineProps<{
  cards: Array<{
    title: string;
    eyebrow: string;
    description: string;
    image: string;
    cta: string;
  }>;
}>();
</script>

<template>
  <UContainer class="pb-16">
    <div class="mb-4 grid gap-6 lg:grid-cols-2">
      <div
        v-for="card in props.cards"
        :key="card.title"
        class="grid gap-4 rounded-[1.5rem] border border-border bg-white p-6 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
      >
        <img
          :src="card.image"
          :alt="card.title"
          class="h-44 w-full rounded-xl object-cover"
        />
        <div class="space-y-3">
          <h1 class="text-3xl font-semibold text-secondary">
            {{ card.title }}
          </h1>
          <h3 class="text-xl font-medium text-primary">
            {{ card.eyebrow }}
          </h3>
          <p class="text-standard text-text">
            {{ card.description }}
          </p>
          <UButton
            class="bg-primary text-white hover:bg-secondary"
          >
            {{ card.cta }}
          </UButton>
        </div>
      </div>
    </div>
  </UContainer>
</template>
