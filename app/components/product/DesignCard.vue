<script setup lang="ts">
interface DesignTemplate {
  id: string
  name: string
  image: string
  category: string
}

const props = defineProps<{
  templates: DesignTemplate[]
  categories: string[]
}>()

const activeCategory = ref('all')

const filteredTemplates = computed(() => {
  if (activeCategory.value === 'all') return props.templates
  return props.templates.filter((t) => t.category === activeCategory.value)
})
</script>

<template>
  <div>
    <div class="flex flex-wrap gap-2 mb-4">
      <button
        type="button"
        class="px-4 py-1.5 text-sm rounded-full transition"
        :class="
          activeCategory === 'all'
            ? 'bg-primary text-white'
            : 'bg-surface text-text hover:bg-border'
        "
        @click="activeCategory = 'all'"
      >
        Semua
      </button>
      <button
        v-for="cat in props.categories"
        :key="cat"
        type="button"
        class="px-4 py-1.5 text-sm rounded-full transition"
        :class="
          activeCategory === cat
            ? 'bg-primary text-white'
            : 'bg-surface text-text hover:bg-border'
        "
        @click="activeCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
      <div
        v-for="template in filteredTemplates"
        :key="template.id"
        class="group"
      >
        <div class="overflow-hidden rounded-lg border border-border bg-white mb-2">
          <img
            :src="template.image"
            :alt="template.name"
            class="h-24 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <p class="text-center text-xs text-text line-clamp-1">
          {{ template.name }}
        </p>
        <div class="text-center">
          <button
            type="button"
            class="text-xs border border-primary text-primary px-3 py-1 rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Customize
          </button>
        </div>
      </div>
    </div>

    <div class="text-right mt-3">
      <NuxtLink to="#" class="text-xs text-primary hover:text-secondary transition">
        Tampilkan Semua
      </NuxtLink>
    </div>
  </div>
</template>
