// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  app: {
    head: {
      title: "Emanuele Colonna",
      meta: [{ name: "description", content: "Personal Web Site" }],
    },
  },

  build: {
    transpile: ["vuetify"]
  },

  buildModules: ['@nuxtjs/vuetify'],

  imports: {
    autoImport: true,
    dirs: ["*"],
  },

  modules: ["vuetify-nuxt-module"],
});