<script setup lang="ts">
const props = defineProps<{
  articles: Array<{
    title: string;
    date: string;
    description: string;
    image: string;
  }>;
  downloads: string[];
}>();
</script>

<template>
  <section
    class="border-t border-border bg-surface py-16"
  >
    <UContainer>
      <div class="grid gap-8 lg:grid-cols-3">
        <div>
          <h5 class="mb-3 text-2xl font-semibold text-secondary">
            Contact Us
          </h5>
          <p class="text-standard text-text">
            Kami siap membantu kebutuhan cetak Anda dengan solusi yang cepat,
            fleksibel, dan sesuai dengan standar kualitas korporat.
          </p>
        </div>

        <div>
          <h5 class="mb-3 text-2xl font-semibold text-secondary">
            Article
          </h5>
          <div class="space-y-4">
            <div
              v-for="item in props.articles"
              :key="item.title"
              class="flex items-start gap-3"
            >
              <img
                :src="item.image"
                :alt="item.title"
                class="h-16 w-16 rounded-lg object-cover"
              />
              <div>
                <div class="text-sm text-text">
                  {{ item.date }}
                </div>
                <a href="#" class="font-semibold text-secondary">
                  {{ item.title }}
                </a>
                <p class="text-standard text-text">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h5 class="mb-3 text-2xl font-semibold text-secondary">
            Download File
          </h5>
          <div class="space-y-2">
            <a
              v-for="file in props.downloads"
              :key="file"
              href="#"
              class="flex items-center gap-2 text-standard text-text hover:text-primary"
            >
              <span class="text-primary">📄</span>
              {{ file }}
            </a>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
