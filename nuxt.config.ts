// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/icon"],
  ui: {
    icons: ["heroicons"],
  },
  icon: {
    serverBundle: {
      collections: ["heroicons"],
    },
  },
  css: ["~/assets/css/main.css"],
});
