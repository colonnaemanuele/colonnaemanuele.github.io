// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    baseURL: "/",
    buildAssetsDir: '/_nuxt/',
    head: {
      title: "My Nuxt App",
      meta: [{ name: "description", content: "My Nuxt App Description" }],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: ["@nuxt/content", "@nuxt/icon", "@nuxt/image", "@nuxt/ui"],
});
