<script setup lang="ts">
const props = defineProps<{
  title: string;
  items: Array<{ image: string; alt?: string }>;
}>();
</script>

<template>
  <div>
    <h5 class="mb-3 text-2xl font-semibold text-(--color-secondary)">
      {{ props.title }}
    </h5>
    <div class="grid gap-3 sm:grid-cols-3">
      <div
        v-for="(item, index) in props.items"
        :key="`${props.title}-${index}`"
        class="overflow-hidden rounded-xl border border-(--color-border) bg-white shadow-sm"
      >
        <img
          :src="item.image"
          :alt="item.alt || props.title"
          class="h-28 w-full object-cover"
        />
      </div>
    </div>
  </div>
</template>
